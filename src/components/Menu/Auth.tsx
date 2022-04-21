import {useSession, signIn, signOut} from "next-auth/react"

import {VscLock, VscUnlock} from "react-icons/vsc";

import customSetting from "@/setting/customSetting";


export default function Auth() {
    const {data: session} = useSession()
    if (session?.user?.email === customSetting.link.email) {
        return (
            <button className={'btn btn-ghost'} onClick={() => signOut()}>
                <VscUnlock className={"w-6 h-6"}/>
            </button>
        )
    }
    return (
        <button className={'btn btn-ghost'} onClick={() => signIn()}>
            <VscLock className={"w-6 h-6"}/>
        </button>
    )
}