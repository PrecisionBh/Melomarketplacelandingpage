import { useParams } from "react-router-dom"
import { useEffect } from "react"

export default function ListingPage() {
  const { id } = useParams()

  useEffect(() => {
    const ua = navigator.userAgent || navigator.vendor

    // 🔥 try open app
    setTimeout(() => {
      window.location.href = `melomp://listing/${id}`
    }, 200)

    // 🔥 fallback
    setTimeout(() => {
      if (/android/i.test(ua)) {
        window.location.href =
          "https://play.google.com/store/apps/details?id=com.bhoffman4.MeloMP"
      } else {
        window.location.href =
          "https://apps.apple.com/us/app/melo-marketplace/id6760438637"
      }
    }, 1500)
  }, [id])

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#0F1E17",
        color: "#fff",
      }}
    >
      Opening Melo...
    </div>
  )
}