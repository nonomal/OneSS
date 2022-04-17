# API

<details markdown="1">
<summary>itemType</summary>
<pre><code>export type itemType = {
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
</code></pre>
</details>

# GET: you.domain.com/api/

- [children?user={user}&route={rout}](children.md)

- [item/content?user={user}&id={id}](content.md)

- [item?user={user}&id={id}](item.md)

- [preview?user={user}&id={id}](preview.md)

- [users](users.md)

- [quota](quota.md)

- [bingPic](bingPic.md)
