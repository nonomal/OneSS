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
                <div className={'mockup-code w-full max-w-xl'}>
                    <div className="text-xl">
                        <pre data-prefix="$"><code>{customSetting.siteName} -login</code></pre>
                        <pre data-prefix=">"><code>User?</code></pre>
                        <pre data-prefix="$" className="text-success"><code>{customSetting.link.email}</code></pre>
                        <form className={"form-control"} method="post" action={"/api/auth/callback/credentials"}>
                            <input name="csrfToken" type="hidden" defaultValue={csrfToken}/>
                            <pre data-prefix=">"><code>Password?</code></pre>
                            <pre data-prefix={error ? '!' : '$'} className={error && "text-warning"}><input name="password" type="password" className={'bg-neutral-focus'}/></pre>
                            <pre data-prefix=""><button className={'hover:bg-warning'} type="submit">Login...</button></pre>
                        </form>
                    </div>
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
