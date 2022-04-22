import {GetServerSidePropsContext} from 'next'
import {getCsrfToken} from "next-auth/react"
import {useRouter} from "next/router";

import Menu from "@/components/Menu/Menu";
import customSetting from "@/setting/customSetting";


export default function Login({csrfToken}: { csrfToken: string }) {
    const {error} = useRouter().query
    return (
        <>
            <Menu userName={"Login"}/>

            <div className="w-full flex flex-col items-center">
                <div className={'w-40 h-36'}>
                    <svg viewBox="0 0 624 624" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="500" cy="388" r="124" fill="#1F7EFE" fillOpacity="0.8"/>
                        <path
                            d="M200 357.5C200 277.143 265.143 212 345.5 212H354.5C434.857 212 500 277.143 500 357.5V512H345.5C265.143 512 200 446.857 200 366.5V357.5Z"
                            fill="#1F7EFE"
                            fillOpacity="0.8"/>
                        <path d="M0 312C0 201.543 89.5431 112 200 112C310.457 112 400 201.543 400 312V512H200C89.5431 512 0 422.457 0 312Z" fill="#0360E4"
                              fillOpacity="0.8"/>
                    </svg>
                </div>
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
