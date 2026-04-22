import { useParams } from "react-router-dom"

export default function ListingPage() {
  const { id } = useParams()

  return (
    <div style={{ padding: 40, textAlign: "center" }}>
      <h1>Listing #{id}</h1>

      <p>This is the web version of this listing.</p>

      <a
        href={`melomp://listing/${id}`}
        style={{
          display: "inline-block",
          marginTop: 20,
          padding: "12px 20px",
          background: "#D97732",
          color: "#fff",
          borderRadius: 8,
          textDecoration: "none",
          fontWeight: "bold",
        }}
      >
        Open in Melo App
      </a>
    </div>
  )
}