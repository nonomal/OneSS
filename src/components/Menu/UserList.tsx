import Link from "next/link"

import {VscAccount} from "react-icons/vsc";

import userList from "@/setting/userList";


export default function UserList({userName}: { userName: string }) {
    return (
        <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost normal-case">
                <VscAccount className={'w-8 h-8'}/>
                {userList.nickname[userName] ?
                    <div className={'hidden md:block text-2xl ml-2'}>{userList.nickname[userName]}</div>
                    :
                    <div className={'hidden md:block text-2xl ml-2'}>{userName}</div>}
            </label>
            <ul tabIndex={0} className="dropdown-content bg-base-200 text-base-content rounded-box shadow-2xl menu menu-compact p-4">
                {userList.users.map((userName, index) => {
                    return (
                        <li key={index} className={'hover-bordered'}>
                            <Link href={`/${userName}`}><a className={'truncate'}>{userList.nickname[userName] || userName}</a></Link>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}