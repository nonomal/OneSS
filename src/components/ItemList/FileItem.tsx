import Image from "next/image";
import Link from "next/link";
import {getIconForFile} from "vscode-icons-js";

import {VscCloudDownload, VscCopy, VscLiveShare, VscOpenPreview} from "react-icons/vsc";

import convertB from "@/script/convert_bit";
import CopyButton from "@/components/CopyModal/CopyButton";


export default function FileItem({user, name, size, id, index}: { user: string, name: string, size: number, id: string, index: number }) {
    return (
        <tr key={index}>

            {/*CheckBox*/}
            <th><label className={'flex items-center justify-end gap-2'}>{index + 1}
                {/*<input type="checkbox" className="checkbox"/>*/}
            </label></th>

            {/*Name*/}
            <td>
                <div className="flex items-center gap-2">
                    <Image className={'bg-oBlack dark:bg-oWhite bg-opacity-20 dark:bg-opacity-20 rounded'} src={'https://mystatic.dza.vin/VscIcons/' + getIconForFile(name)}
                           width={32} height={32}
                           layout={"fixed"} alt={name}/>
                    <Link href={`/item/${user}/${id}`}>
                        <a target="_blank" className={'font-bold'}>{name}</a>
                    </Link>
                </div>
            </td>

            {/*Size*/}
            <td className={'text-center'}>{convertB(size)}</td>

            {/*Action*/}
            <td>
                <div className="inline space-x-2">
                    <button className={'btn btn-ghost btn-square btn-sm'}>
                        <a href={`/api/preview?user=${user}&id=${id}`} target="_blank" rel="noreferrer"><VscOpenPreview className={"w-6 h-6"}/></a>
                    </button>

                    <CopyButton className={'btn btn-ghost btn-square btn-sm'} name={name} text={`https://${window.location.host}/item/${user}/${id}`}>
                        <VscLiveShare className={'w-6 h-6'}/>
                    </CopyButton>

                    <CopyButton className={'btn btn-ghost btn-square btn-sm'} name={name} text={`https://${window.location.host}/api/item/content?user=${user}&id=${id}`}>
                        <VscCopy className={"w-6 h-6"}/>
                    </CopyButton>


                    <button className={'btn btn-ghost btn-square btn-sm'}>
                        <a target={'_blank'} href={`/api/item/content?user=${user}&id=${id}`} rel="noreferrer"><VscCloudDownload className={"w-6 h-6"}/></a>
                    </button>
                </div>
            </td>
        </tr>
    )
}