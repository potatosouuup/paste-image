export default function getYoutubeThumbnail(url: string | null | undefined): string {
  const newUrl = url?.replace('watch?v=', '')
  const id = newUrl?.split('/').reverse()[0]
  const thumbnailImage = `https://img.youtube.com/vi/${id}/mqdefault.jpg`

  return thumbnailImage
}
