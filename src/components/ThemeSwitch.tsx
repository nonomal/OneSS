import {useEffect} from 'react'
// @ts-ignore
import {themeChange} from 'theme-change'

import {VscChevronDown, VscSymbolColor} from "react-icons/vsc";


export default function ThemeSwitch() {
    useEffect(() => {
        themeChange(false)
    }, [])

    return (
        <div className="dropdown dropdown-end">

            <label tabIndex={0} className="btn btn-ghost gap-2 normal-case">
                <VscSymbolColor className={'w-6 h-6'}/>
                <span className="hidden md:inline">Change Theme</span>
                <VscChevronDown className={'w-6 h-6'}/>
            </label>

            <div className={'dropdown-content bg-base-200 text-base-content rounded-t-box rounded-b-box top-px h-fit w-52 overflow-y-auto shadow-2xl mt-16'}>
                <div tabIndex={0} className="grid grid-cols-1 gap-3 p-3">

                    <div className="outline-base-content overflow-hidden rounded-lg outline-2 outline-offset-2" data-set-theme="light" data-act-class="outline">
                        <div data-theme="light" className="bg-base-100 text-base-content w-full cursor-pointer font-sans">
                            <div className="grid grid-cols-5 grid-rows-3">
                                <div className="col-span-5 row-span-3 row-start-1 flex gap-1 py-3 px-4">
                                    <div className="flex-grow text-sm font-bold">light</div>
                                    <div className="flex flex-shrink-0 flex-wrap gap-1">
                                        <div className="bg-primary w-2 rounded"/>
                                        <div className="bg-secondary w-2 rounded"/>
                                        <div className="bg-accent w-2 rounded"/>
                                        <div className="bg-neutral w-2 rounded"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="outline-base-content overflow-hidden rounded-lg outline-2 outline-offset-2" data-set-theme="dark" data-act-class="outline">
                        <div data-theme="dark" className="bg-base-100 text-base-content w-full cursor-pointer font-sans">
                            <div className="grid grid-cols-5 grid-rows-3">
                                <div className="col-span-5 row-span-3 row-start-1 flex gap-1 py-3 px-4">
                                    <div className="flex-grow text-sm font-bold">dark</div>
                                    <div className="flex flex-shrink-0 flex-wrap gap-1">
                                        <div className="bg-primary w-2 rounded"></div>
                                        <div className="bg-secondary w-2 rounded"></div>
                                        <div className="bg-accent w-2 rounded"></div>
                                        <div className="bg-neutral w-2 rounded"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="outline-base-content overflow-hidden rounded-lg outline-2 outline-offset-2" data-set-theme="night" data-act-class="outline">
                        <div data-theme="night" className="bg-base-100 text-base-content w-full cursor-pointer font-sans">
                            <div className="grid grid-cols-5 grid-rows-3">
                                <div className="col-span-5 row-span-3 row-start-1 flex gap-1 py-3 px-4">
                                    <div className="flex-grow text-sm font-bold">night</div>
                                    <div className="flex flex-shrink-0 flex-wrap gap-1">
                                        <div className="bg-primary w-2 rounded"></div>
                                        <div className="bg-secondary w-2 rounded"></div>
                                        <div className="bg-accent w-2 rounded"></div>
                                        <div className="bg-neutral w-2 rounded"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="outline-base-content overflow-hidden rounded-lg outline-2 outline-offset-2" data-set-theme="valentine" data-act-class="outline">
                        <div data-theme="valentine" className="bg-base-100 text-base-content w-full cursor-pointer font-sans">
                            <div className="grid grid-cols-5 grid-rows-3">
                                <div className="col-span-5 row-span-3 row-start-1 flex gap-1 py-3 px-4">
                                    <div className="flex-grow text-sm font-bold">pink</div>
                                    <div className="flex flex-shrink-0 flex-wrap gap-1">
                                        <div className="bg-primary w-2 rounded"></div>
                                        <div className="bg-secondary w-2 rounded"></div>
                                        <div className="bg-accent w-2 rounded"></div>
                                        <div className="bg-neutral w-2 rounded"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="outline-base-content overflow-hidden rounded-lg outline-2 outline-offset-2" data-set-theme="aqua" data-act-class="outline">
                        <div data-theme="aqua" className="bg-base-100 text-base-content w-full cursor-pointer font-sans">
                            <div className="grid grid-cols-5 grid-rows-3">
                                <div className="col-span-5 row-span-3 row-start-1 flex gap-1 py-3 px-4">
                                    <div className="flex-grow text-sm font-bold">blue</div>
                                    <div className="flex flex-shrink-0 flex-wrap gap-1">
                                        <div className="bg-primary w-2 rounded"></div>
                                        <div className="bg-secondary w-2 rounded"></div>
                                        <div className="bg-accent w-2 rounded"></div>
                                        <div className="bg-neutral w-2 rounded"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

