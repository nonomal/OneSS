export type itemType = {
    id: string
    name: string
    size: number
    folder: { childCount: number }
    file: { mimeType: string, hashes: { quickXorHash: string } }
    image: { height: number, width: number }
    video: { bitrate: number, height: number, width: number }
    createdDateTime: string
    lastModifiedDateTime: string
    thumbnails: {
        0: {
            large: { width: number, height: number, url: string },
            medium: { width: number, height: number, url: string }
        }
    }
    content: string
}

export type childrenType = {
    '@odata.nextLink': string,
    value: itemType[]
}