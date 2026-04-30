import { createClient } from "@supabase/supabase-js"

export default async function handler(req, res) {
  console.log("🔥 OG FUNCTION HIT")
  console.log("👉 URL:", req.url)
  console.log("👉 Query:", req.query)

  try {
    const { id } = req.query

    console.log("👉 ID:", id)

    console.log("👉 ENV CHECK:", {
      SUPABASE_URL: !!process.env.SUPABASE_URL,
      SUPABASE_ANON_KEY: !!process.env.SUPABASE_ANON_KEY,
    })

    const supabase = createClient(
      process.env.SUPABASE_URL,
      process.env.SUPABASE_ANON_KEY
    )

    const { data: listing, error } = await supabase
      .from("listings")
      .select("*")
      .eq("id", id)
      .maybeSingle()

    console.log("👉 SUPABASE RESULT:", listing)
    console.log("👉 SUPABASE ERROR:", error)

    const title = listing?.title
      ? `${listing.title} - $${listing.price}`
      : "Melo Marketplace"

    const description = listing?.price
      ? `🔥 Only $${listing.price} — Tap to view`
      : "Buy and sell anything on Melo"

    let image =
      listing?.image_urls?.[0] ||
      "https://melomarketplace.app/default.png"

    console.log("👉 IMAGE:", image)

    const redirectUrl = `https://melomarketplace.app/l/${id}`

    res.setHeader("Content-Type", "text/html")

    return res.status(200).send(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>${title}</title>

          <meta property="og:title" content="${title}" />
          <meta property="og:description" content="${description}" />
          <meta property="og:image" content="${image}" />

          <meta property="og:url" content="${redirectUrl}" />
          <meta property="og:type" content="website" />

          <meta name="twitter:card" content="summary_large_image" />

          <meta http-equiv="refresh" content="0; url=${redirectUrl}" />
        </head>

        <body>
          OG Debug Active
          <script>
            window.location.href = "${redirectUrl}"
          </script>
        </body>
      </html>
    `)
  } catch (err) {
    console.error("❌ OG FUNCTION ERROR:", err)

    return res.status(500).send(`
      <html>
        <body>OG ERROR</body>
      </html>
    `)
  }
}