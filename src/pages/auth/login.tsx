import {GetServerSidePropsContext} from 'next'
import {getCsrfToken} from "next-auth/react"
import {useRouter} from "next/router";

import Menu from "@/components/Menu/Menu";


export default function Login({csrfToken}: { csrfToken: string }) {
    const {error} = useRouter().query
    return (
        <>
            <Menu userName={"Login"}/>

            <div className="w-full flex flex-col items-center">
                <div className={'w-8 h-24'}/>
                <div className="card-body w-full max-w-xl">
                    <form className={"form-control"} method="post" action={"/api/auth/callback/credentials"}>
                        <input name="csrfToken" type="hidden" defaultValue={csrfToken}/>
                        <div className={"input-group"}>
                            <input name="password" type="password" placeholder="Password" className={`input input-bordered w-full ${error && 'input-error'}`}/>
                            <button className="btn" type="submit">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
    return {
        props: {
            csrfToken: await getCsrfToken(context),
        },
    }
}
