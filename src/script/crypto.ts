// @ts-ignore
import HmacSHA512 from "crypto-js/hmac-sha512";
// @ts-ignore
import TripleDES from "crypto-js/tripledes";
// @ts-ignore
import EncUtf8 from "crypto-js/enc-utf8";

import customSetting from "@/setting/customSetting";


export const nameHmacSHA512 = HmacSHA512(`${customSetting.siteName}.${customSetting.link.email}`, process.env.PRIVATE_TOKEN).toString()

export function encrypt(message: string, secret: string) {
    return TripleDES.encrypt(message, secret).toString()
}

export function decrypt(encrypted: string, secret: string) {
    return TripleDES.decrypt(encrypted, secret).toString(EncUtf8)
}