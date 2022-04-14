import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";
import privateSecret from "@/setting/privateSecret";

export default NextAuth({
    providers: [
        CredentialsProvider({
            name: " Account",
            credentials: {
                password: {label: "Password", type: "password"},
            },
            async authorize(credentials, {body}) {
                const user = {name: 'admin'}

                if (body && body.password === privateSecret.token) {
                    return user
                } else {
                    return null
                }
            },
        }),
    ]
})