import { useParams } from "react-router-dom"

export default function ListingPage() {
  const { id } = useParams()

  const openApp = () => {
    window.location.href = `melomp://listing/${id}`
  }

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
      <h1 style={{ fontSize: 24, marginBottom: 10 }}>
        Listing #{id}
      </h1>

      <p style={{ opacity: 0.7, marginBottom: 20 }}>
        This is the web version of this listing.
      </p>

      {/* 🔥 PRIMARY: OPEN APP */}
      <button
        onClick={openApp}
        style={{
          padding: "14px 22px",
          background: "#D97732",
          color: "#fff",
          borderRadius: 10,
          border: "none",
          fontWeight: "bold",
          cursor: "pointer",
          marginBottom: 16,
        }}
      >
        Open in Melo App
      </button>

      {/* 🔥 SECONDARY: DOWNLOAD */}
      <div style={{ marginTop: 10 }}>
        <p style={{ fontSize: 14, opacity: 0.6 }}>
          Don’t have Melo?
        </p>

        <div style={{ marginTop: 10 }}>
          <a
            href="https://apps.apple.com/us/app/melo-marketplace/id6760438637"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "block",
              marginBottom: 6,
              color: "#fff",
            }}
          >
            Download on App Store
          </a>

          <a
            href="https://play.google.com/store/apps/details?id=com.bhoffman4.MeloMP"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "#fff",
            }}
          >
            Get it on Google Play
          </a>
        </div>
      </div>
    </div>
  )
}