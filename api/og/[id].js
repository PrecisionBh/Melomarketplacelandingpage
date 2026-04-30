import { createClient } from "@supabase/supabase-js"

export default async function handler(req, res) {
  try {
    const { id } = req.query

    const supabase = createClient(
      process.env.SUPABASE_URL,
      process.env.SUPABASE_ANON_KEY
    )

    const { data: listing } = await supabase
      .from("listings")
      .select("*")
      .eq("id", id)
      .maybeSingle()

    const title = listing?.title
      ? `${listing.title} - $${listing.price}`
      : "Melo Marketplace"

    const description = listing?.price
      ? `🔥 Only $${listing.price} — Tap to view`
      : "Buy and sell anything on Melo"

    let image =
      listing?.image_urls?.[0] ||
      "https://melomarketplace.app/default.png"

    // 🔥 fix webp issues
    if (image && image.endsWith(".webp")) {
      image = image.replace(".webp", ".jpg")
    }

    const redirectUrl = `https://melomarketplace.app/l/${id}`

    res.setHeader("Content-Type", "text/html")

    return res.status(200).send(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>${title}</title>

          <!-- 🔥 OPEN GRAPH -->
          <meta property="og:title" content="${title}" />
          <meta property="og:description" content="${description}" />
          <meta property="og:image" content="${image}" />
          <meta property="og:image:secure_url" content="${image}" />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />

          <meta property="og:url" content="${redirectUrl}" />
          <meta property="og:type" content="website" />
          <meta property="og:site_name" content="Melo Marketplace" />

          <!-- 🔥 TWITTER -->
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="${title}" />
          <meta name="twitter:description" content="${description}" />
          <meta name="twitter:image" content="${image}" />

          <!-- 🔥 META REDIRECT (important) -->
          <meta http-equiv="refresh" content="0; url=${redirectUrl}" />

        </head>

        <body>
          Redirecting...
          <script>
            window.location.href = "${redirectUrl}"
          </script>
        </body>
      </html>
    `)
  } catch (err) {
    console.error(err)

    return res.status(200).send(`
      <html>
        <head>
          <meta property="og:title" content="Melo Marketplace" />
          <meta property="og:description" content="Buy and sell anything on Melo" />
          <meta property="og:image" content="https://melomarketplace.app/default.png" />
        </head>
        <body>Melo</body>
      </html>
    `)
  }
}