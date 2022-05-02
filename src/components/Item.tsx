import useSWR from "swr";
import Link from "next/link";

import {VscCloudDownload, VscCopy, VscLiveShare, VscOpenPreview, VscSync} from "react-icons/vsc";

import {fetcher} from "@/script/swr_get";
import {itemType} from "@/script/data_type";
import convertB from "@/script/convert_bit";
import CopyButton from "@/components/CopyModal/CopyButton";
import NotFoundError from "@/components/NotFoundError";
import LimitKey from "@/components/LimitKey";


export default function Item({user, id}: { user: string, id: string }) {

    const {data, error} = useSWR(`/api/item?user=${user}&id=${id}`, fetcher)

    if (!data) return (
        <div className="hero min-h-screen bg-base-200 overflow-x-auto">
            <div className="animate-pulse hero-content flex-col lg:flex-row">
                <VscSync className={"animate-spin w-20 h-20"}/>
                <div className="text-4xl h-16 font-bold">Loading...</div>
            </div>
        </div>
    )

    if (error || data.status == 233) return <NotFoundError/>

    const {name, size, file, createdDateTime, lastModifiedDateTime, thumbnails}: itemType = data

    return (
        <div className={"w-full lg:max-w-7xl px-2 flex flex-col"}>
            {thumbnails["0"] &&
                <>
                    <label htmlFor="item-modal">
                        <div className={'w-full h-40 bg-cover bg-center rounded-xl'} style={{backgroundImage: `url(${thumbnails["0"].large.url})`}}/>
                    </label>

                    <input type="checkbox" id="item-modal" className="modal-toggle"/>
                    <div className="modal">
                        <label htmlFor="item-modal">
                            <img className={'rounded-lg shadow-2xl'} src={thumbnails["0"].large.url}/>
                        </label>
                    </div>
                </>
            }
            <div className=" flex-col lg:flex-row">
                <div className="overflow-x-auto">
                    <table className="table table-zebra w-full">
                        <tbody>
                        <tr>
                            <td>Name</td>
                            <td className={'text-2xl font-bold w-full'}>{name}</td>
                        </tr>
                        <tr>
                            <td>Size</td>
                            <td>{convertB(size)}</td>
                        </tr>
                        <tr>
                            <td>Created Date Time</td>
                            <td>{createdDateTime}</td>
                        </tr>
                        <tr>
                            <td>Last Modified Date Time</td>
                            <td>{lastModifiedDateTime}</td>
                        </tr>
                        {file.hashes && <tr>
                            <td>Quick Xor Hash</td>
                            <td>{file.hashes.quickXorHash}</td>
                        </tr>}
                        <tr>
                            <td>Actions</td>
                            <td>
                                <div className={"btn-group inline"}>
                                    <button className={'btn'}>
                                        <Link href={`/api/preview?user=${user}&id=${id}`}><a target="_blank"><VscOpenPreview className={"w-6 h-6"}/></a></Link>
                                    </button>

                                    <CopyButton className={'btn'} name={name} text={`https://${window.location.host}/item/${user}/${id}`}>
                                        <VscLiveShare className={'w-6 h-6'}/>
                                    </CopyButton>

                                    <CopyButton className={'btn'} name={name} text={`https://${window.location.host}/api/item/content?user=${user}&id=${id}`}>
                                        <VscCopy className={"w-6 h-6"}/>
                                    </CopyButton>

                                    <button className={'btn'}>
                                        <a target={'_blank'} href={`/api/item/content?user=${user}&id=${id}`} rel="noreferrer"><VscCloudDownload className={"w-6 h-6"}/></a>
                                    </button>
                                </div>
                            </td>
                        </tr>
                        <LimitKey user={user} id={id}/>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
