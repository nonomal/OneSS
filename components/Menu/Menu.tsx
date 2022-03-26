import Link from "next/link";

import {VscGithub, VscHome} from "react-icons/vsc";

import UserList from "@/components/Menu/UserList";
import ThemeSwitch from "@/components/ThemeSwitch";


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

                <ThemeSwitch/>

                <Link href={"https://github.com/Tualin14/OneSS"}><a target={'_blank'}>
                    <button className={"btn btn-ghost"}>
                        <VscGithub className={"w-6 h-6"}/>
                    </button>
                </a></Link>
            </div>
        </div>
    )
}