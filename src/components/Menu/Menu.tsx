import Link from "next/link";

import {VscGithub, VscHome} from "react-icons/vsc";

import UserList from "@/components/Menu/UserList";
import ThemeSwitch from "@/components/ThemeSwitch";
import customSetting from "@/setting/customSetting";
import Auth from "@/components/Auth";


export default function Menu({userName}: { userName: string }) {
    return (
        <div className="navbar bg-base-100">
            <div className={'flex-1'}>
                <UserList userName={userName}/>
            </div>
            <div className="flex-none">
                <Link href={"/"}><a>
                    <button className={'btn btn-ghost'}>
                        <VscHome className={"w-6 h-6"}/>
                    </button>
                </a></Link>

                <Auth/>

                <ThemeSwitch/>

                <a href={customSetting.link.github} target={'_blank'} rel="noreferrer">
                    <button className={"btn btn-ghost"}>
                        <VscGithub className={"w-6 h-6"}/>
                    </button>
                </a>
            </div>
        </div>
    )
}