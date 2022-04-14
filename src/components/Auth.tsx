import {useSession, signIn, signOut} from "next-auth/react"
import {VscSignIn, VscSignOut} from "react-icons/vsc";

export default function Auth() {
    const {data: session} = useSession()
    if (session) {
        return (
            <button className={'btn btn-ghost'} onClick={() => signOut()}>
                <VscSignOut className={"w-6 h-6"}/>
            </button>
        )
    }
    return (
        <button className={'btn btn-ghost'} onClick={() => signIn()}>
            <VscSignIn className={"w-6 h-6"}/>
        </button>
    )
}