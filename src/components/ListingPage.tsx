import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"

export default function ListingPage() {
  const { id } = useParams()
  const [listing, setListing] = useState<any>(null)

  const SUPABASE_URL = "https://flfnwwrvwimnfcnuhwlr.supabase.co"
  const SUPABASE_KEY =
    import.meta.env.VITE_SUPABASE_ANON_KEY?.trim()

  useEffect(() => {
    console.log("🔥 PAGE LOADED")
    console.log("Listing ID:", id)
    console.log(
      "Supabase Key:",
      SUPABASE_KEY ? "✅ exists" : "❌ missing"
    )

    const fetchListing = async () => {
      try {
        if (!SUPABASE_KEY) {
          console.error("❌ Missing Supabase key")
          return
        }

        if (!id) {
          console.error("❌ Missing ID")
          return
        }

        const url = `${SUPABASE_URL}/rest/v1/listings?id=eq.${id}`

        console.log("📡 Fetching:", url)

        const res = await fetch(url, {
          headers: {
            apikey: SUPABASE_KEY, // ✅ ONLY THIS
          },
        })

        const data = await res.json()

        console.log("📦 Response:", data)

        if (data && data[0]) {
          setListing(data[0])
        } else {
          console.warn("⚠️ No listing found")
        }
      } catch (err) {
        console.error("🔥 FETCH ERROR:", err)
      }
    }

    fetchListing()

    const ua = navigator.userAgent || navigator.vendor
    const isMobile = /android|iphone|ipad|ipod/i.test(ua)

    console.log(
      "📱 Device:",
      isMobile ? "Mobile" : "Desktop"
    )

    if (!isMobile) return

    setTimeout(() => {
      console.log("🚀 Attempting deep link...")
      window.location.href = `melomp://listing/${id}`
    }, 300)
  }, [id])

  const openApp = () => {
    console.log("👉 Manual open app click")
    window.location.href = `melomp://listing/${id}`
  }

  const image =
    listing?.image_urls?.[0] ||
    "https://melomarketplace.app/default.png"

  const title = listing?.title || "Melo Listing"

  const price = listing?.price
    ? `$${listing.price}`
    : ""

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f9fafb",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: 420,
          background: "#fff",
          borderRadius: 20,
          padding: 20,
          boxShadow: "0 8px 30px rgba(0,0,0,0.08)",
          border: "1px solid #eee",
        }}
      >
        <img
          src={image}
          alt={title}
          style={{
            width: "100%",
            height: 260,
            objectFit: "cover",
            borderRadius: 16,
            marginBottom: 16,
          }}
        />

        <h1
          style={{
            fontSize: 20,
            fontWeight: 700,
            color: "#111",
            marginBottom: 6,
          }}
        >
          {title}
        </h1>

        <p
          style={{
            fontSize: 18,
            fontWeight: 600,
            color: "#D97732",
            marginBottom: 16,
          }}
        >
          {price}
        </p>

        <button
          onClick={openApp}
          style={{
            width: "100%",
            padding: "14px",
            background: "#D97732",
            color: "#fff",
            borderRadius: 12,
            border: "none",
            fontWeight: 700,
            cursor: "pointer",
            fontSize: 16,
            marginBottom: 12,
          }}
        >
          Open in Melo
        </button>

        <p
          style={{
            fontSize: 13,
            color: "#666",
            textAlign: "center",
            marginBottom: 10,
          }}
        >
          Don’t have the app?
        </p>

        <div style={{ textAlign: "center" }}>
          <a
            href="https://apps.apple.com/us/app/melo-marketplace/id6760438637"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#111", display: "block", marginBottom: 6 }}
          >
            Download on App Store
          </a>

          <a
            href="https://play.google.com/store/apps/details?id=com.bhoffman4.MeloMP"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#111" }}
          >
            Get it on Google Play
          </a>
        </div>
      </div>
    </div>
  )
}