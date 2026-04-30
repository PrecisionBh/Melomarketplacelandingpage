import { createClient } from "@supabase/supabase-js"

export default async function handler(req, res) {
  try {
    const { id } = req.query

    const supabase = createClient(
      process.env.SUPABASE_URL,
      process.env.SUPABASE_ANON_KEY
    )
    console.log("ENV CHECK:", {
  url: process.env.SUPABASE_URL,
  key: process.env.SUPABASE_ANON_KEY ? "exists" : "missing",
})

    const { data: listing, error } = await supabase
      .from("listings")
      .select("*")
      .eq("id", id)
      .single()

    if (error || !listing) {
      console.error("❌ Supabase error:", error)
      return res.status(404).send("Listing not found")
    }

    // 🔥 TITLE + PRICE
    const title = listing.title
      ? `${listing.title} - $${listing.price}`
      : "Melo Listing"

    const price = listing.price
      ? `$${listing.price}`
      : "View on Melo"

    // 🔥 DESCRIPTION
    const description = listing.subcategory
      ? `${listing.subcategory.replace(/_/g, " ")} • ${price}`
      : `${price} • Buy on Melo`

    // 🔥 IMAGE HANDLING (FORCE FULL URL)
    let image = ""

    if (Array.isArray(listing.image_urls)) {
      image = listing.image_urls[0]
    } else if (typeof listing.image_urls === "string") {
      image = listing.image_urls
    }

    if (image && !image.startsWith("http")) {
      image = `https://melomarketplace.app${image}`
    }

    if (!image) {
      image = "https://melomarketplace.app/default.png"
    }

    res.setHeader("Content-Type", "text/html")

    res.send(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>${title}</title>

          <meta property="og:title" content="${title}" />
          <meta property="og:description" content="${description}" />
          <meta property="og:image" content="${image}" />
          <meta property="og:url" content="https://melomarketplace.app/l/${id}" />
          <meta property="og:type" content="product" />

          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="${title}" />
          <meta name="twitter:description" content="${description}" />
          <meta name="twitter:image" content="${image}" />
        </head>

        <body style="background:#0F1E17;color:#fff;text-align:center;padding:40px;">
          <h1>${title}</h1>
          <p>${price}</p>

          ${
            image
              ? `<img src="${image}" style="max-width:300px;border-radius:12px;margin-top:20px;" />`
              : ""
          }

          <p style="margin-top:20px;">Opening Melo...</p>

          <!-- 🔥 SAFE DEEP LINK (DELAYED) -->
          <script>
            setTimeout(() => {
              window.location.href = "melomp://listing/${id}"
            }, 500)
          </script>

          <!-- 🔥 FALLBACK BUTTON -->
          <div style="margin-top:20px;">
            <a href="melomp://listing/${id}" style="color:#4ade80;">
              Open in Melo
            </a>
          </div>

          <!-- APP DOWNLOAD -->
          <div style="margin-top:20px;">
            <a href="https://apps.apple.com/us/app/melo-marketplace/id6760438637">
              Download on App Store
            </a>
            <br/>
            <a href="https://play.google.com/store/apps/details?id=com.bhoffman4.MeloMP">
              Get it on Google Play
            </a>
          </div>
        </body>
      </html>
    `)
  } catch (err) {
    console.error("🔥 SERVER ERROR:", err)
    res.status(500).send("Server error")
  }
}