import {GetServerSidePropsContext} from 'next'
import {getCsrfToken} from "next-auth/react"
import Menu from "@/components/Menu/Menu";


export default function Login({csrfToken}: { csrfToken: string }) {
    return (
        <>
            <Menu userName={"Login"}/>

            <div className="w-full flex justify-center">
                <div className="card-body w-full max-w-xl">
                    <form className={"form-control"} method="post" action={"/api/auth/callback/credentials"}>
                        <input name="csrfToken" type="hidden" defaultValue={csrfToken}/>
                        <div className={"input-group"}>
                            <input name="password" type="password" placeholder="Password" className="input input-bordered w-full"/>
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
