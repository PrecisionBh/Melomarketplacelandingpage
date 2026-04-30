import { createClient } from "@supabase/supabase-js"

export default async function handler(req, res) {
  try {
    const { id } = req.query

    console.log("OG HIT:", id)

    const SUPABASE_URL =
      process.env.SUPABASE_URL ||
      process.env.VITE_SUPABASE_URL

    const SUPABASE_KEY =
      process.env.SUPABASE_ANON_KEY ||
      process.env.VITE_SUPABASE_ANON_KEY

    if (!SUPABASE_URL || !SUPABASE_KEY) {
      console.error("❌ Missing env vars")
      return sendFallback(res)
    }

    const supabase = createClient(
      SUPABASE_URL,
      SUPABASE_KEY
    )

    const { data: listing, error } = await supabase
      .from("listings")
      .select("*")
      .eq("id", id)
      .maybeSingle()

    if (error) {
      console.error("❌ Supabase error:", error)
      return sendFallback(res)
    }

    if (!listing) {
      console.log("⚠️ No listing found")
      return sendFallback(res)
    }

    // SAFE TITLE
    const title = listing.title
      ? `${listing.title} - $${listing.price}`
      : "Melo Listing"

    const price = listing.price
      ? `$${listing.price}`
      : "View on Melo"

    // SAFE DESCRIPTION
    const description = listing.subcategory
      ? `${listing.subcategory.replace(/_/g, " ")} • ${price}`
      : `${price} • Buy on Melo`

    // SAFE IMAGE
    let image = ""

    if (
      Array.isArray(listing.image_urls) &&
      listing.image_urls.length > 0
    ) {
      image = listing.image_urls[0]
    }

    if (image && !image.startsWith("http")) {
      image = `https://melomarketplace.app${image}`
    }

    if (!image) {
      image = "https://melomarketplace.app/default.png"
    }

    res.setHeader("Content-Type", "text/html")

    return res.status(200).send(`
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

          <script>
            setTimeout(() => {
              window.location.href = "melomp://listing/${id}"
            }, 500)
          </script>

          <a href="melomp://listing/${id}" style="color:#4ade80;">
            Open in Melo
          </a>
        </body>
      </html>
    `)
  } catch (err) {
    console.error("🔥 SERVER CRASH:", err)
    return sendFallback(res)
  }
}

// 🔥 FALLBACK (NEVER FAIL)
function sendFallback(res) {
  res.setHeader("Content-Type", "text/html")

  return res.status(200).send(`
    <!DOCTYPE html>
    <html>
      <head>
        <meta property="og:title" content="Melo Marketplace" />
        <meta property="og:description" content="Buy and sell anything on Melo" />
        <meta property="og:image" content="https://melomarketplace.app/default.png" />
        <meta property="og:type" content="website" />
      </head>
      <body>
        Melo Marketplace
      </body>
    </html>
  `)
}