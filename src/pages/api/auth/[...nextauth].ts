import NextAuth from "next-auth"
// @ts-ignore
import SHA512 from "crypto-js/sha512";
import CredentialsProvider from "next-auth/providers/credentials";

import customSetting from "@/setting/customSetting";


export default NextAuth({
    providers: [
        CredentialsProvider({
            name: "Account",
            credentials: {
                password: {label: "Password", type: "password"},
            },
            async authorize(credentials, {body}) {
                if (body && body.password === process.env.PRIVATE_TOKEN) {
                    return {
                        name: SHA512(`${customSetting.siteName}.${process.env.PRIVATE_TOKEN}.${customSetting.link.email}`).toString(),
                        email: customSetting.link.email
                    }
                } else {
                    return null
                }
            },
        }),
    ],
    pages: {
        signIn: '/auth/login',
    }
})