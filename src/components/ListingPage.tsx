import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"

export default function ListingPage() {
  const { id } = useParams()

  const [listing, setListing] = useState<any>(null)

  useEffect(() => {
    // 🔥 fetch listing data
    const fetchListing = async () => {
      try {
        const res = await fetch(
          `https://flfnwwrvwimnfcnuhwlr.supabase.co/rest/v1/listings?id=eq.${id}`,
          {
            headers: {
              apikey: import.meta.env.VITE_SUPABASE_ANON_KEY,
              Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
            },
          }
        )

        const data = await res.json()
        if (data && data[0]) setListing(data[0])
      } catch (err) {
        console.log("fetch error", err)
      }
    }

    fetchListing()

    // 🔥 deep link attempt
    const ua = navigator.userAgent || navigator.vendor

    const openTimer = setTimeout(() => {
      window.location.href = `melomp://listing/${id}`
    }, 300)

    const fallbackTimer = setTimeout(() => {
      if (/android/i.test(ua)) {
        window.location.href =
          "https://play.google.com/store/apps/details?id=com.bhoffman4.MeloMP"
      } else {
        window.location.href =
          "https://apps.apple.com/us/app/melo-marketplace/id6760438637"
      }
    }, 1500)

    return () => {
      clearTimeout(openTimer)
      clearTimeout(fallbackTimer)
    }
  }, [id])

  const openApp = () => {
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
        background: "#0F1E17",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
      }}
    >
      {/* 🔥 CARD */}
      <div
        style={{
          width: "100%",
          maxWidth: 420,
          background: "#111",
          borderRadius: 20,
          padding: 20,
          boxShadow: "0 10px 30px rgba(0,0,0,0.4)",
        }}
      >
        {/* IMAGE */}
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

        {/* TITLE */}
        <h1
          style={{
            fontSize: 20,
            fontWeight: 700,
            color: "#fff",
            marginBottom: 6,
          }}
        >
          {title}
        </h1>

        {/* PRICE */}
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

        {/* CTA */}
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

        {/* SUBTEXT */}
        <p
          style={{
            fontSize: 13,
            color: "#888",
            textAlign: "center",
            marginBottom: 10,
          }}
        >
          Don’t have the app?
        </p>

        {/* DOWNLOAD LINKS */}
        <div style={{ textAlign: "center" }}>
          <a
            href="https://apps.apple.com/us/app/melo-marketplace/id6760438637"
            style={{ color: "#fff", display: "block", marginBottom: 6 }}
          >
            Download on App Store
          </a>

          <a
            href="https://play.google.com/store/apps/details?id=com.bhoffman4.MeloMP"
            style={{ color: "#fff" }}
          >
            Get it on Google Play
          </a>
        </div>
      </div>
    </div>
  )
}