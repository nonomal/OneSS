import NextAuth from "next-auth"
import GitHubProvider from "next-auth/providers/github";
import baseSetting from "@/setting/baseSetting";

export default NextAuth({
    providers: [
        GitHubProvider({
            clientId: baseSetting.github.clientId,
            clientSecret: baseSetting.github.clientSecret
        })
    ]
})