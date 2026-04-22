import { useEffect } from "react"
import { useParams } from "react-router-dom"

export default function RedirectPage() {
  const { id } = useParams()

  useEffect(() => {
    if (!id) return

    const appUrl = `melomp://listing/${id}`
    const fallbackUrl = `/listing/${id}`

    // 🔥 Try opening the app
    window.location.href = appUrl

    // 🔥 Fallback to web page after delay
    const timer = setTimeout(() => {
      window.location.href = fallbackUrl
    }, 1500)

    return () => clearTimeout(timer)
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

      <a
        href={`/listing/${id}`}
        style={{
          padding: "12px 20px",
          background: "#D97732",
          borderRadius: 10,
          color: "#fff",
          textDecoration: "none",
          fontWeight: "bold",
        }}
      >
        View Listing
      </a>
    </div>
  )
}