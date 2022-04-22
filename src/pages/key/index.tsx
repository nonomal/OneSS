import {useState} from "react";

import Menu from "@/components/Menu/Menu";
import {VscSearch} from "react-icons/vsc";

export default function KeyIndex() {
    const [encryptKey, setEncryptKey] = useState('');
    return (
        <>
            <Menu userName={"Limit Key"}/>

            <div className="w-full flex flex-col items-center">
                <div className="card-body w-full max-w-xl">
                    <div className={"input-group"}>
                        <input type="text" placeholder="Limit Key" className={'input input-bordered w-full'} onChange={(e) => setEncryptKey(e.target.value)}/>
                        <button className={"btn btn-square"}>
                            <a href={`/key/${encryptKey}`} target={'_blank'} rel="noreferrer">
                                <VscSearch className={'w-6 h-6'}/>
                            </a>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}