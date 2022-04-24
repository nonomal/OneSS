import {useEffect} from 'react'
// @ts-ignore
import {themeChange} from 'theme-change'

import {VscSymbolColor} from "react-icons/vsc";


export default function ThemeSwitch() {
    useEffect(() => {
        themeChange(false)
    }, [])

    return (
        <div className="dropdown dropdown-end">

            <label tabIndex={0} className="btn btn-ghost gap-2 normal-case">
                <VscSymbolColor className={'w-6 h-6'}/>
            </label>

            <div className={'dropdown-content bg-base-200 text-base-content rounded-t-box rounded-b-box h-fit w-36 overflow-y-auto shadow-2xl'}>
                <div tabIndex={0} className="grid grid-cols-1 gap-3 p-3">

                    <div className="outline-base-content overflow-hidden rounded-lg outline-2 outline-offset-2" data-set-theme="light" data-act-class="outline">
                        <div data-theme="light" className="bg-base-100 text-base-content w-full cursor-pointer font-sans">
                            <div className="col-span-5 row-span-3 row-start-1 flex gap-1 py-3 px-4">
                                <div className="flex-grow text-sm font-bold">light</div>
                            </div>
                        </div>
                    </div>

                    <div className="outline-base-content overflow-hidden rounded-lg outline-2 outline-offset-2" data-set-theme="dark" data-act-class="outline">
                        <div data-theme="dark" className="bg-base-100 text-base-content w-full cursor-pointer font-sans">
                            <div className="col-span-5 row-span-3 row-start-1 flex gap-1 py-3 px-4">
                                <div className="flex-grow text-sm font-bold">dark</div>
                            </div>
                        </div>
                    </div>

                    <div className="outline-base-content overflow-hidden rounded-lg outline-2 outline-offset-2" data-set-theme="night" data-act-class="outline">
                        <div data-theme="night" className="bg-base-100 text-base-content w-full cursor-pointer font-sans">
                            <div className="col-span-5 row-span-3 row-start-1 flex gap-1 py-3 px-4">
                                <div className="flex-grow text-sm font-bold">night</div>
                            </div>
                        </div>
                    </div>

                    <div className="outline-base-content overflow-hidden rounded-lg outline-2 outline-offset-2" data-set-theme="valentine" data-act-class="outline">
                        <div data-theme="valentine" className="bg-base-100 text-base-content w-full cursor-pointer font-sans">
                            <div className="col-span-5 row-span-3 row-start-1 flex gap-1 py-3 px-4">
                                <div className="flex-grow text-sm font-bold">pink</div>
                            </div>
                        </div>
                    </div>

                    <div className="outline-base-content overflow-hidden rounded-lg outline-2 outline-offset-2" data-set-theme="aqua" data-act-class="outline">
                        <div data-theme="aqua" className="bg-base-100 text-base-content w-full cursor-pointer font-sans">
                            <div className="col-span-5 row-span-3 row-start-1 flex gap-1 py-3 px-4">
                                <div className="flex-grow text-sm font-bold">blue</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

