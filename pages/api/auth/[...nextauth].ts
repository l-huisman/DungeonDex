import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { API_URL } from "@/constants";
import axios from "axios";

export default NextAuth({
    providers: [
        CredentialsProvider({
            // The name to display on the sign in form (e.g. "Sign in with...")
            name: "Credentials",
            // `credentials` is used to generate a form on the sign in page.
            // You can specify which fields should be submitted, by adding keys to the `credentials` object.
            // e.g. domain, username, password, 2FA token, etc.
            // You can pass any HTML attribute to the <input> tag through the object.
            credentials: {
                email: { label: "Email", type: "email", placeholder: "johndoe@example.com" },
                password: { label: "Password", type: "password", placeholder: "password" },
            },
            async authorize(credentials, req) {
                try {
                    const response = await axios.post(`${API_URL}/auth/login`, {
                        email: credentials?.email,
                        password: credentials?.password,
                    });

                    const user = response.data;
                    if (response.status === 200 && user?.data) {
                        // Any object returned will be saved in `user` property of the JWT
                        return user.data;
                    } else {
                        // If you return null or false then the credentials will be rejected
                        return null;
                    }
                } catch (error) {
                    console.error(error);
                    return null;
                }
            },
        }),
    ],
    callbacks: {
        async jwt({ token, user }) {
            return { ...token, ...user };
        },
        async session({ session, token, user }) {
            session.user = token as any;
            return session;
        },
    },
});