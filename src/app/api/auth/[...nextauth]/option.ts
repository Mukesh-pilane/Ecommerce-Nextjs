import { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import {prisma} from "@/lib/db";
import bcrypt from "bcrypt";

export const authOptions: AuthOptions = {
	providers: [
		CredentialsProvider({
			name: "credentials",

			credentials: {
				email: { type: "email" },
				password: { type: "password" },
			},

			async authorize(credentials) {
				if (!credentials?.email || !credentials?.password) {
					throw new Error("Sign in failed. Check the details you provided are correct");
				}

				const user = await prisma.users.findUnique({
					where: {
						email: credentials.email,
					},
				});

				if (!user) {
					throw new Error("User not found");
				}

				const isCorrectPassword = await bcrypt.compare(
					credentials.password,
					user.password
				);

				if (!isCorrectPassword) {
					throw new Error(
						"Sign in failed. Check the details you provided are correct"
					);
				}

				return user;
			},
		}),
	],

	pages: {
		signIn: "/login",
	},

	secret: "8d7d81f72ef721c74844ff70b10ff182",
	debug: process.env.NODE_ENV === "development",
};
