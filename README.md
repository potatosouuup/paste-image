# pttsp-paste-image

Add the image that you copied/paste into the Admin Content Editor to ItemMedias to suit ch-MediaModel.

## Params

| **Param** | **Type**                          | **Desctiption**      |
| --------- | --------------------------------- | -------------------- |
| content   | any                               | Enter editor content |
| medias    | MediaModel[], null, undefined     | Enter Items medias   |
| setMedias | React.SetStateAction<MediaMode[]> | Enter setItemMedias  |

## Example

```tsx
useEffect(() => {
  if (...) {
    PasteImage({
      content: editorRef.current?.getContent(), // current editor content
      medias: article?.medias,                  // existed before
      setMedias: setArticleMedias
    })
  }
}, [...])
```

## Based on ch-admin-api-client-typescript

[ch-admin-api-client-typescript](https://www.npmjs.com/package/ch-admin-api-client-typescript)
- MediaModel
- MediaType
