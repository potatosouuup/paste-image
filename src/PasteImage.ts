interface Params {
  content: any
  setMedias: (medias: string[]) => void
}

export function PasteImage({ content, setMedias }: Params) {
  const regexp = /<img[^>]*src=["\']?([^>"\']+)["\']?[^>]*>/g
  const regexpYoutube = /<iframe[^>]*src=["\']?([^>"\']+)["\']?[^>]*>/g

  const contentImages = [...content.matchAll(regexp)].map((item) => {
    return item[1].trim()
    
  })

  const contentYoutubes = [...content.matchAll(regexpYoutube)].map((item) => {
    return item[1].trim()
  })

  const found = contentImages
    .concat(contentYoutubes)
    .reduce((items: string[], current) => {
      if (items.findIndex((item) => item === current) === -1) {
        items.push(current)
      }
      return items
    }, [])

  return setMedias([ ...((found as string[]) ?? [])])
}
