import { createClient } from "@supabase/supabase-js"

export default async function handler(req, res) {
  const { id } = req.query

  const supabase = createClient(
    process.env.VITE_SUPABASE_URL,
    process.env.VITE_SUPABASE_ANON_KEY
  )

  const { data: listing } = await supabase
    .from("listings")
    .select("*")
    .eq("id", id)
    .single()

  if (!listing) {
    return res.status(404).send("Listing not found")
  }

  const title = listing.title
  const price = `$${listing.price}`
  const image = listing.image_urls?.[0] || ""

  res.setHeader("Content-Type", "text/html")

  res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>${title}</title>

        <meta property="og:title" content="${title}" />
        <meta property="og:description" content="${price} • Buy on Melo" />
        <meta property="og:image" content="${image}" />
        <meta property="og:type" content="product" />

        <script>
          window.location.href = "melomp://listing/${id}"
        </script>
      </head>
      <body>
        <h1>${title}</h1>
        <p>${price}</p>
      </body>
    </html>
  `)
}