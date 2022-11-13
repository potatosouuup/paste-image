import getYoutubeThumbnail from './getYoutubeThumbnail'
import { MediaModel, MediaType } from 'ch-admin-api-client-typescript/lib'

const containerUrl = `blob.core.windows.net`
const cdnUrl = `icloudhospital.com`

interface Params {
  content: any
  medias: MediaModel[] | null | undefined
  setMedias: (medias: MediaModel[]) => void
}

export function PasteImage({ content, medias, setMedias }: Params) {
  const regexp = /<img[^>]*src=["\']?([^>"\']+)["\']?[^>]*>/g
  const regexpYoutube = /<iframe[^>]*src=["\']?([^>"\']+)["\']?[^>]*>/g

  const contentImages = [...content.matchAll(regexp)].map((item) => {
    return {
      mediaType: MediaType.Photo,
      url: item[1].trim().replaceAll(containerUrl, cdnUrl),
      thumbnailUrl: item[1].trim().replaceAll(containerUrl, cdnUrl).replaceAll('imagecontainer', 'thumbnailcontainer')
    }
  })

  const contentYoutubes = [...content.matchAll(regexpYoutube)].map((item) => {
    return {
      mediaType: MediaType.Youtube,
      url: item[1].trim(),
      thumbnailUrl: getYoutubeThumbnail(item[1].trim())
    }
  })

  const mediasImagesUrl = medias && [...medias.map((item) => item.url)]

  const found = contentImages
    .concat(contentYoutubes)
    .filter((item) => !item.url.includes('/assets/Hospital_logo_default.png'))
    .filter((e) => !mediasImagesUrl?.includes(e.url))
    .reduce((items: MediaModel[], current) => {
      if (items.findIndex(({ url }) => url === current.url) === -1) {
        items.push(current)
      }
      return items
    }, [])

  return setMedias([...(medias ?? []), ...((found as MediaModel[]) ?? [])])
}
