import { useEffect } from "react"
import { useParams } from "react-router-dom"

export default function RedirectPage() {
  const { id } = useParams()

  useEffect(() => {
    if (!id) return

    const appUrl = `melomp://listing/${id}`
    const fallbackUrl = `/listing/${id}`

    // 🔥 Slight delay so UI renders first
    const openAppTimer = setTimeout(() => {
      window.location.href = appUrl
    }, 300)

    // 🔥 Try again (helps Android Chrome)
    const retryTimer = setTimeout(() => {
      window.location.href = appUrl
    }, 800)

    // 🔥 Final fallback to web
    const fallbackTimer = setTimeout(() => {
      window.location.href = fallbackUrl
    }, 2000)

    return () => {
      clearTimeout(openAppTimer)
      clearTimeout(retryTimer)
      clearTimeout(fallbackTimer)
    }
  }, [id])

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: "#0F1E17",
        color: "#fff",
        textAlign: "center",
        padding: 20,
      }}
    >
      <h2 style={{ fontSize: 22, marginBottom: 10 }}>
        Opening Melo...
      </h2>

      <p style={{ opacity: 0.7, marginBottom: 20 }}>
        If nothing happens, tap below
      </p>

      {/* 🔥 OPEN APP BUTTON (VERY IMPORTANT) */}
      <button
        onClick={() => {
          window.location.href = `melomp://listing/${id}`
        }}
        style={{
          padding: "12px 20px",
          background: "#D97732",
          borderRadius: 10,
          color: "#fff",
          border: "none",
          fontWeight: "bold",
          cursor: "pointer",
          marginBottom: 12,
        }}
      >
        Open Melo App
      </button>

      {/* 🔥 FALLBACK LINK */}
      <a
        href={`/listing/${id}`}
        style={{
          padding: "10px 16px",
          borderRadius: 8,
          color: "#9CA3AF",
          textDecoration: "none",
        }}
      >
        View Listing on Web
      </a>
    </div>
  )
}