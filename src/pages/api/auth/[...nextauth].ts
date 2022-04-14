import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";

export default NextAuth({
    providers: [
        CredentialsProvider({
            name: "Account",
            credentials: {
                password: {label: "Password", type: "password"},
            },
            async authorize(credentials, {body}) {
                if (body && body.password === process.env.PRIVATE_TOKEN) {
                    return {name: "admin"}
                } else {
                    return null
                }
            },
        }),
    ]
})