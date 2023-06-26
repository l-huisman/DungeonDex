import { ICreature } from "@/interfaces/ICreature";
import NextAuth from "next-auth/next";

declare module "next-auth" {
    interface Session {
        user: {
            id: string;
            email: string;
            username: string;
            token: string;
        };
    }
}