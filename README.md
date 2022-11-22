# pttsp-paste-image

Extracts images that copy/paste HTML content.

## Params

| **Param** | **Type**                       | **Desctiption**      |
| --------- | ------------------------------ | -------------------- |
| content   | any                            | Enter editor content |
| setMedias | React.SetStateAction<string[]> | Enter setItemMedias  |

## Example

```tsx
useEffect(() => {
  if (...) {
    PasteImage({
      content: editorRef.current?.getContent(), // current editor content
      setMedias: setArticleMedias
    })
  }
}, [...])
```
