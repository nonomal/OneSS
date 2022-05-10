// @ts-ignore
import HmacSHA512 from "crypto-js/hmac-sha512";
// @ts-ignore
import Rabbit from "crypto-js/rabbit";
// @ts-ignore
import EncUtf8 from "crypto-js/enc-utf8";

import customSetting from "@/setting/customSetting";


export const nameHmacSHA512 = HmacSHA512(`${customSetting.siteName}.${customSetting.email}`, process.env.PRIVATE_TOKEN).toString()

export function encrypt(message: string, secret: string) {
    return Rabbit.encrypt(message, secret).toString()
}

export function decrypt(encrypted: string, secret: string) {
    return Rabbit.decrypt(encrypted, secret).toString(EncUtf8)
}