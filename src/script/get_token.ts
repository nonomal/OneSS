import axios from "axios";

import baseSetting from "@/setting/baseSetting";


let accessToken: string
let lastTimestamp: number

export default async function getToken() {
    let nowTimestamp: number = Date.parse(new Date().toString())
    if (nowTimestamp - lastTimestamp > 3000000 || !accessToken) {
        const res = await axios.post(baseSetting.endpoints.token_endpoint, new URLSearchParams(baseSetting.authorization), {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
        })
        accessToken = res.data.access_token
        lastTimestamp = nowTimestamp
    }
    return accessToken
}