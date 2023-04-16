import { useRouter } from 'next/router'

// Because of Lingui, NextJS static serving from public doesn't work so here is a workaround to make it work
export default function FilePage() {
  const router = useRouter()
  const { file } = router.query

  return (
    <a href={`/files/${file}`} download>{file}</a>
  )
}
