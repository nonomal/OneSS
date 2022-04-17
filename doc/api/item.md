# item?user={user}&id={id}

- Response:

  `name,size,id,file,createdDateTime,lastModifiedDateTime,thumbnails`

- Example:

```json
{
  "@odata.context": "https://graph.microsoft.com/v1.0/$metadata#users('share%40dzaaaaaa.com')/drive/items/$entity",
  "@odata.etag": "\"{B7836415-CCC1-4BAE-B125-E849504ABE37},14\"",
  "createdDateTime": "2021-12-19T08:17:14Z",
  "id": "013EY5Y6AVMSB3PQOMVZF3CJPIJFIEVPRX",
  "lastModifiedDateTime": "2021-11-23T15:08:41Z",
  "name": "dzaaaaaa.png",
  "size": 57876,
  "file": {
    "mimeType": "image/png",
    "hashes": {
      "quickXorHash": "dfpV9hW93Bjg0dhq15SzXCTITYE="
    }
  },
  "thumbnails@odata.context": "https://graph.microsoft.com/v1.0/$metadata#users('share%40dzaaaaaa.com')/drive/items('013EY5Y6AVMSB3PQOMVZF3CJPIJFIEVPRX')/thumbnails",
  "thumbnails": [
    {
      "id": "0",
      "large": {
        "height": 512,
        "url": "https://southeastasia1-mediap.svc.ms/transform/thumbnail?provider=spo&inputFormat=png&cs=ODYyNDEwYjYtNTZkOC00ODczLWE2ZjYtZWRiMmNmMGIwYWI5fFNQTw&docid=https%3A%2F%2Fdzaaaaaa%2Dmy%2Esharepoint%2Ecom%2F%5Fapi%2Fv2%2E0%2Fdrives%2Fb%21aVRWngNXLEy8Vgt3qSqsihbuGbzcdq9Fh2vBVEFXBv87lLEhJ3BEQok4Xm6nc9aa%2Fitems%2F013EY5Y6AVMSB3PQOMVZF3CJPIJFIEVPRX%3Ftempauth%3DeyJ0eXAiOiJKV1QiLCJhbGciOiJub25lIn0%2EeyJhdWQiOiIwMDAwMDAwMy0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDAvZHphYWFhYWEtbXkuc2hhcmVwb2ludC5jb21AYmRiNzA1NDgtZmY0NC00MDM0LWE1OWQtYjQ4MGUyNzhhOThiIiwiaXNzIjoiMDAwMDAwMDMtMDAwMC0wZmYxLWNlMDAtMDAwMDAwMDAwMDAwIiwibmJmIjoiMTY1MDE2NDQwMCIsImV4cCI6IjE2NTAxODYwMDAiLCJlbmRwb2ludHVybCI6IjZPb3lBek9JTDV5cDV0Q2RYd1J2V1I0M1hnM3RMb0ZzNVJIRHdMbmUyQkk9IiwiZW5kcG9pbnR1cmxMZW5ndGgiOiIxNTkiLCJpc2xvb3BiYWNrIjoiVHJ1ZSIsInZlciI6Imhhc2hlZHByb29mdG9rZW4iLCJzaXRlaWQiOiJPV1UxTmpVME5qa3ROVGN3TXkwMFl6SmpMV0pqTlRZdE1HSTNOMkU1TW1GaFl6aGgiLCJhcHBfZGlzcGxheW5hbWUiOiJPbmVTUyIsIm5hbWVpZCI6Ijg2MjQxMGI2LTU2ZDgtNDg3My1hNmY2LWVkYjJjZjBiMGFiOUBiZGI3MDU0OC1mZjQ0LTQwMzQtYTU5ZC1iNDgwZTI3OGE5OGIiLCJyb2xlcyI6ImFsbGZpbGVzLnJlYWQgYWxscHJvZmlsZXMucmVhZCIsInR0IjoiMSIsInVzZVBlcnNpc3RlbnRDb29raWUiOm51bGwsImlwYWRkciI6IjIwLjE5MC4xNDQuMTY5In0%2ERCtBZStCQ2dxZVR6MUZGK2lUV1FwQVFPWnByL0xhV1VlcUpzV3ZmK3dEOD0%26version%3DPublished&width=800&height=800&cb=63773276921",
        "width": 512
      },
      "medium": {
        "height": 176,
        "url": "https://southeastasia1-mediap.svc.ms/transform/thumbnail?provider=spo&inputFormat=png&cs=ODYyNDEwYjYtNTZkOC00ODczLWE2ZjYtZWRiMmNmMGIwYWI5fFNQTw&docid=https%3A%2F%2Fdzaaaaaa%2Dmy%2Esharepoint%2Ecom%2F%5Fapi%2Fv2%2E0%2Fdrives%2Fb%21aVRWngNXLEy8Vgt3qSqsihbuGbzcdq9Fh2vBVEFXBv87lLEhJ3BEQok4Xm6nc9aa%2Fitems%2F013EY5Y6AVMSB3PQOMVZF3CJPIJFIEVPRX%3Ftempauth%3DeyJ0eXAiOiJKV1QiLCJhbGciOiJub25lIn0%2EeyJhdWQiOiIwMDAwMDAwMy0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDAvZHphYWFhYWEtbXkuc2hhcmVwb2ludC5jb21AYmRiNzA1NDgtZmY0NC00MDM0LWE1OWQtYjQ4MGUyNzhhOThiIiwiaXNzIjoiMDAwMDAwMDMtMDAwMC0wZmYxLWNlMDAtMDAwMDAwMDAwMDAwIiwibmJmIjoiMTY1MDE2NDQwMCIsImV4cCI6IjE2NTAxODYwMDAiLCJlbmRwb2ludHVybCI6IjZPb3lBek9JTDV5cDV0Q2RYd1J2V1I0M1hnM3RMb0ZzNVJIRHdMbmUyQkk9IiwiZW5kcG9pbnR1cmxMZW5ndGgiOiIxNTkiLCJpc2xvb3BiYWNrIjoiVHJ1ZSIsInZlciI6Imhhc2hlZHByb29mdG9rZW4iLCJzaXRlaWQiOiJPV1UxTmpVME5qa3ROVGN3TXkwMFl6SmpMV0pqTlRZdE1HSTNOMkU1TW1GaFl6aGgiLCJhcHBfZGlzcGxheW5hbWUiOiJPbmVTUyIsIm5hbWVpZCI6Ijg2MjQxMGI2LTU2ZDgtNDg3My1hNmY2LWVkYjJjZjBiMGFiOUBiZGI3MDU0OC1mZjQ0LTQwMzQtYTU5ZC1iNDgwZTI3OGE5OGIiLCJyb2xlcyI6ImFsbGZpbGVzLnJlYWQgYWxscHJvZmlsZXMucmVhZCIsInR0IjoiMSIsInVzZVBlcnNpc3RlbnRDb29raWUiOm51bGwsImlwYWRkciI6IjIwLjE5MC4xNDQuMTY5In0%2ERCtBZStCQ2dxZVR6MUZGK2lUV1FwQVFPWnByL0xhV1VlcUpzV3ZmK3dEOD0%26version%3DPublished&width=176&height=176&cb=63773276921",
        "width": 176
      },
      "small": {
        "height": 96,
        "url": "https://southeastasia1-mediap.svc.ms/transform/thumbnail?provider=spo&inputFormat=png&cs=ODYyNDEwYjYtNTZkOC00ODczLWE2ZjYtZWRiMmNmMGIwYWI5fFNQTw&docid=https%3A%2F%2Fdzaaaaaa%2Dmy%2Esharepoint%2Ecom%2F%5Fapi%2Fv2%2E0%2Fdrives%2Fb%21aVRWngNXLEy8Vgt3qSqsihbuGbzcdq9Fh2vBVEFXBv87lLEhJ3BEQok4Xm6nc9aa%2Fitems%2F013EY5Y6AVMSB3PQOMVZF3CJPIJFIEVPRX%3Ftempauth%3DeyJ0eXAiOiJKV1QiLCJhbGciOiJub25lIn0%2EeyJhdWQiOiIwMDAwMDAwMy0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDAvZHphYWFhYWEtbXkuc2hhcmVwb2ludC5jb21AYmRiNzA1NDgtZmY0NC00MDM0LWE1OWQtYjQ4MGUyNzhhOThiIiwiaXNzIjoiMDAwMDAwMDMtMDAwMC0wZmYxLWNlMDAtMDAwMDAwMDAwMDAwIiwibmJmIjoiMTY1MDE2NDQwMCIsImV4cCI6IjE2NTAxODYwMDAiLCJlbmRwb2ludHVybCI6IjZPb3lBek9JTDV5cDV0Q2RYd1J2V1I0M1hnM3RMb0ZzNVJIRHdMbmUyQkk9IiwiZW5kcG9pbnR1cmxMZW5ndGgiOiIxNTkiLCJpc2xvb3BiYWNrIjoiVHJ1ZSIsInZlciI6Imhhc2hlZHByb29mdG9rZW4iLCJzaXRlaWQiOiJPV1UxTmpVME5qa3ROVGN3TXkwMFl6SmpMV0pqTlRZdE1HSTNOMkU1TW1GaFl6aGgiLCJhcHBfZGlzcGxheW5hbWUiOiJPbmVTUyIsIm5hbWVpZCI6Ijg2MjQxMGI2LTU2ZDgtNDg3My1hNmY2LWVkYjJjZjBiMGFiOUBiZGI3MDU0OC1mZjQ0LTQwMzQtYTU5ZC1iNDgwZTI3OGE5OGIiLCJyb2xlcyI6ImFsbGZpbGVzLnJlYWQgYWxscHJvZmlsZXMucmVhZCIsInR0IjoiMSIsInVzZVBlcnNpc3RlbnRDb29raWUiOm51bGwsImlwYWRkciI6IjIwLjE5MC4xNDQuMTY5In0%2ERCtBZStCQ2dxZVR6MUZGK2lUV1FwQVFPWnByL0xhV1VlcUpzV3ZmK3dEOD0%26version%3DPublished&width=96&height=96&cb=63773276921",
        "width": 96
      }
    }
  ]
}
```


