const baseSetting = {
    folder: "/OneSS",
    private_folder: "/OneSSP",
    authorization: {
        client_id: process.env.CLIENT_ID!,
        scope: "https://graph.microsoft.com/.default",
        client_secret: process.env.CLIENT_SECRET!,
        grant_type: "client_credentials"
    },
    endpoints: {
        token_endpoint: `https://login.microsoftonline.com/${process.env.TENANT_ID}/oauth2/v2.0/token`,
        graph_endpoint: "https://graph.microsoft.com/v1.0"
    },
}

export default baseSetting