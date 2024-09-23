import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from 'next-auth/providers/github';
import { use } from "react";
import { db } from "@/lib/Firebase";
import { collection, query, where, getDocs, addDoc } from "firebase/firestore"; // Make sure getDocs is imported
export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),

    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),

  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async signIn(user, account, profile) {
      try {
        const userEmail = user.user.email;
        const usersCollection = collection(db, "users");
        const q = query(usersCollection,where("email","==",userEmail))

        const userDocSnapshot = await getDocs(q);

        if (userDocSnapshot.empty)   {
          await addDoc(usersCollection, {
            email: userEmail,
            name: user.user.name,
            image: user.user.image,
            createdAt: new Date(),
          });
          console.log("created a new user",userDocSnapshot.empty)
        } else {
          console.log("User already exists:");
        }
        return true;
      } catch (error) {
        console.error("Error saving user to Firestore:", error);
        return false;
      }
    },
  },
};

export const GET = (req, res) => NextAuth(req, res, authOptions);
export const POST = (req, res) => NextAuth(req, res, authOptions);
