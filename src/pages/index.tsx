import Head from 'next/head'
import Link from "next/link";

import {VscGithub} from "react-icons/vsc";

import customSetting from "@/setting/customSetting";
import userList from "@/setting/userList";
import ThemeSwitch from "@/components/ThemeSwitch";
import IndexLink from "@/components/IndexLink";
import Auth from "@/components/Auth";


export default function Home() {
    return (
        <>
            <Head>
                <title>{customSetting.siteName} | Home</title>
            </Head>

            <div className={'static flex flex-col md:flex-row items-center md:items-start'}>
                <div className="absolute navbar bg-base-100 bg-opacity-20">
                    <div className="flex-1">
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost normal-case">
                                <div className={'w-8 h-8'}>
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
                                <div className={'hidden md:block text-2xl ml-2'}>{customSetting.siteName}</div>
                            </label>
                            <ul tabIndex={0} className="dropdown-content bg-base-200 text-base-content rounded-box shadow-2xl menu menu-compact p-4">
                                {userList.users.map((userName, index) => {
                                    return (
                                        <li key={index} className={'hover-bordered hover-bordered'}>
                                            <Link href={`/${userName}`}><a className={'truncate'}>{userList.nickname[userName] || userName}</a></Link>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                    </div>
                    <div className="flex-none">
                        <Auth/>
                        <ThemeSwitch/>
                    </div>
                </div>

                <div className="hero min-h-screen" style={{backgroundImage: `url(${customSetting.index.backgroundImage})`}}>
                    <div className="hero-overlay bg-opacity-20"/>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-7xl font-bold">{customSetting.index.title}</h1>
                            <p className="mb-5 text-2xl">{customSetting.index.introduction}</p>
                            <IndexLink/>
                        </div>
                    </div>
                </div>

                {userList.users.map((userName, index) => {
                    return (
                        <div key={index}>
                            <link rel="preload" href={`/api/children?user=${userName}&route=`} as="fetch" crossOrigin="anonymous"/>
                            <link rel="preload" href={`/api/quota?user=${userName}`} as="fetch" crossOrigin="anonymous"/>
                        </div>
                    )
                })}
            </div>
        </>
    )
}
