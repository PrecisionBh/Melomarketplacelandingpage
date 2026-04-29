import { Link } from "react-router-dom";
import { Star, Shield, Zap, TrendingUp, Package, DollarSign, Users, Check, ArrowRight, Smartphone } from "lucide-react";
import { Button } from "../components/ui/button";

const FEATURES = [
  {
    icon: <DollarSign className="w-6 h-6 text-primary" />,
    title: "Absolutely Free to Use",
    desc: "No subscription required to buy or sell. List up to 50 items for free and only pay a small 5% seller fee when your item sells — nothing upfront.",
  },
  {
    icon: <Shield className="w-6 h-6 text-primary" />,
    title: "Buyer Protection Included",
    desc: "Every purchase is covered by our built-in buyer protection, so you can shop with confidence knowing your money is safe.",
  },
  {
    icon: <Package className="w-6 h-6 text-primary" />,
    title: "Easy Shipping",
    desc: "Offer free shipping or let the buyer pay — shipping costs are calculated automatically at checkout based on package weight and destination.",
  },
  {
    icon: <Users className="w-6 h-6 text-primary" />,
    title: "Real Peer-to-Peer Marketplace",
    desc: "Buy and sell directly with real people in your community. Follow your favorite sellers, make offers, and message sellers instantly.",
  },
  {
    icon: <TrendingUp className="w-6 h-6 text-primary" />,
    title: "Sell Faster with Boosts",
    desc: "Boost your listings to the top of the feed or go Mega and take over the entire home screen. If your boosted item doesn't sell, your credits are automatically returned — your money never goes to waste.",
  },
  {
    icon: <Zap className="w-6 h-6 text-primary" />,
    title: "Melo Pro — More Power, Lower Fees",
    desc: "Upgrade to Melo Pro for just 1% seller fees, unlimited listings, priority support, and exclusive seller analytics.",
  },
];

const BOOST_FEATURES = [
  {
    emoji: "⚡",
    title: "Boosted Listing",
    desc: "Pin your listing to the top of the feed so buyers always see it first. Stay ahead of the competition and get more eyes on what you're selling.",
    color: "from-orange-50 to-amber-50 border-orange-200",
    badge: "bg-orange-100 text-orange-700",
    badgeText: "Top of Feed",
  },
  {
    emoji: "🚀",
    title: "Mega Boost",
    desc: "Take over the entire home screen with a full-width featured placement. Your listing becomes impossible to miss — the biggest spotlight on Melo.",
    color: "from-purple-50 to-pink-50 border-purple-200",
    badge: "bg-purple-100 text-purple-700",
    badgeText: "Maximum Visibility",
  },
];

const FREE_TIER = [
  "List up to 50 items",
  "Only 5% fee when you sell",
  "Full buyer & seller protection",
  "Messaging & offers",
  "Real-time notifications",
  "Follow favorite sellers",
];

const PRO_TIER = [
  "Unlimited listings",
  "Multiple quantity per listing",
  "Only 1% seller fee",
  "Priority customer support",
  "Everything in Free",
  "Pro badge on your profile",
];

export default function Landing() {
  return (
    <div className="min-h-screen bg-background">
      {/* SEO Meta via document title */}

      {/* NAV */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <span className="font-heading text-2xl font-bold text-primary">Melo</span>
         <div className="flex items-center gap-3">

  <a
    href="https://apps.apple.com/us/app/melo-marketplace/id6760438637"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Button size="sm" className="rounded-xl">
      Download App
    </Button>
  </a>

</div>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/20 pt-20 pb-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6">
            🎉 Absolutely Free to Join — No Credit Card Needed
          </span>
          <h1 className="font-heading text-5xl md:text-6xl font-bold leading-tight mb-6">
            The Smarter Way to{" "}
            <span className="text-primary">Buy & Sell</span>{" "}
            Anything
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Melo is a free peer-to-peer marketplace where you can sell your stuff, discover unique finds, and keep more of your money. Low fees, powerful tools, and a community you can trust.
          </p>
          <div className="flex justify-center mb-12">
  <a
    href="https://apps.apple.com/us/app/melo-marketplace/id6760438637"
    target="_blank"
    rel="noopener noreferrer"
    className="w-full sm:w-auto"
  >
    <Button size="lg" className="h-14 px-10 rounded-2xl text-base font-semibold w-full sm:w-auto">
      Get Started Today
      <ArrowRight className="w-4 h-4 ml-2" />
    </Button>
  </a>
</div>
<p className="text-xs text-muted-foreground text-center -mt-6 mb-8">
  Download the app to create your account
</p>

          {/* App Download Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
            <p className="text-sm text-muted-foreground w-full sm:w-auto">Download the app:</p>
            <a
              href="#"
              className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-foreground text-background hover:bg-foreground/90 transition-colors w-full sm:w-auto justify-center"
            >
              <Smartphone className="w-5 h-5 shrink-0" />
              <div className="text-left">
                <p className="text-[10px] leading-none opacity-70">Download on the</p>
                <p className="text-sm font-semibold leading-tight">App Store</p>
              </div>
            </a>
            <a
              href="#"
              className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-foreground text-background hover:bg-foreground/90 transition-colors w-full sm:w-auto justify-center"
            >
              <Smartphone className="w-5 h-5 shrink-0" />
              <div className="text-left">
                <p className="text-[10px] leading-none opacity-70">Get it on</p>
                <p className="text-sm font-semibold leading-tight">Google Play</p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="border-y border-border bg-secondary/30 py-8 px-4">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { stat: "100% Free", label: "to join & browse" },
            { stat: "5% Fee", label: "only when you sell" },
            { stat: "50 Listings", label: "free tier included" },
            { stat: "1% Fee", label: "with Melo Pro" },
          ].map((item) => (
            <div key={item.stat}>
              <p className="font-heading text-2xl font-bold text-primary">{item.stat}</p>
              <p className="text-sm text-muted-foreground mt-1">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-20 px-4" id="features">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="font-heading text-4xl font-bold mb-4">Everything You Need to Buy & Sell</h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Melo gives you professional-grade marketplace tools for free — no hidden costs, no surprises.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {FEATURES.map((f) => (
              <div key={f.title} className="p-6 rounded-2xl border border-border bg-card hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  {f.icon}
                </div>
                <h3 className="font-semibold text-lg mb-2">{f.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BOOST SECTION */}
      <section className="py-20 px-4 bg-gradient-to-b from-secondary/20 to-background" id="boosts">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="font-heading text-4xl font-bold mb-4">Sell Faster with Boosts</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Give your listings the spotlight they deserve. Choose from two powerful promotion types — and if your item doesn't sell while boosted, your credits are <span className="font-semibold text-foreground">automatically refunded</span>. Your money never goes to waste.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-10">
            {BOOST_FEATURES.map((b) => (
              <div key={b.title} className={`p-6 rounded-2xl border bg-gradient-to-br ${b.color}`}>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">{b.emoji}</span>
                  <div>
                    <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${b.badge}`}>{b.badgeText}</span>
                    <h3 className="font-semibold text-lg mt-1">{b.title}</h3>
                  </div>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>

          <div className="p-5 rounded-2xl bg-primary/5 border border-primary/20 text-center">
            <p className="text-sm font-medium text-foreground">
              🔄 <strong>Zero-risk guarantee:</strong> If your boosted listing doesn't sell during the boost period, your credits are automatically returned to your account — no questions asked.
            </p>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="py-20 px-4" id="pricing">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="font-heading text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
            <p className="text-muted-foreground text-lg">No monthly fees. No listing fees. Just a small percentage when you sell.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Free */}
            <div className="p-8 rounded-2xl border-2 border-border bg-card">
              <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-2">Free</p>
              <p className="font-heading text-5xl font-bold mb-1">$0</p>
              <p className="text-muted-foreground text-sm mb-2">forever free</p>
              <p className="text-sm font-medium text-primary mb-6">Only 5% seller fee when you sell</p>
              <ul className="space-y-3 mb-8">
                {FREE_TIER.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm">
                    <Check className="w-4 h-4 text-green-500 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <a
  href="https://apps.apple.com/us/app/melo-marketplace/id6760438637"
  target="_blank"
  rel="noopener noreferrer"
>
  <Button variant="outline" className="w-full h-11 rounded-xl font-semibold">
    Download App
  </Button>
</a>
            </div>

            {/* Pro */}
            <div className="p-8 rounded-2xl border-2 border-primary bg-gradient-to-br from-primary/5 to-accent/20 relative overflow-hidden">
              <div className="absolute top-4 right-4 px-3 py-1 bg-primary text-primary-foreground text-xs font-bold rounded-full">BEST VALUE</div>
              <p className="text-sm font-semibold text-primary uppercase tracking-wide mb-2">Melo Pro</p>
              <p className="font-heading text-5xl font-bold mb-1">$24.99</p>
              <p className="text-muted-foreground text-sm mb-2">per month</p>
              <p className="text-sm font-medium text-primary mb-6">Only 1% seller fee — save 4x vs Free</p>
              <ul className="space-y-3 mb-8">
                {PRO_TIER.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm">
                    <Check className="w-4 h-4 text-primary shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <a
  href="https://apps.apple.com/us/app/melo-marketplace/id6760438637"
  target="_blank"
  rel="noopener noreferrer"
>
  <Button className="w-full h-11 rounded-xl font-semibold">
    Download App
  </Button>
</a>
            </div>
          </div>
        </div>

        
      </section>

      {/* HOW IT WORKS */}
      <section className="py-20 px-4 bg-secondary/20" id="how-it-works">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="font-heading text-4xl font-bold mb-4">Start Selling in Minutes</h2>
            <p className="text-muted-foreground text-lg">No experience needed. Melo makes it easy to turn your unwanted items into cash.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: "1", title: "Create a Free Account", desc: "Sign up in seconds — no credit card required. Completely free to join." },
              { step: "2", title: "List Your Item", desc: "Add photos, set your price, and publish. Free tier lets you list up to 50 items at once." },
              { step: "3", title: "Get Paid", desc: "Buyer purchases, you ship, and funds are deposited to your wallet. Just 5% fee." },
            ].map((s) => (
              <div key={s.step} className="text-center">
                <div className="w-14 h-14 rounded-full bg-primary text-primary-foreground font-heading text-2xl font-bold flex items-center justify-center mx-auto mb-4">
                  {s.step}
                </div>
                <h3 className="font-semibold text-lg mb-2">{s.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS / SOCIAL PROOF */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="font-heading text-4xl font-bold mb-4">Loved by Buyers & Sellers</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "Sarah M.", quote: "Listed my old camera and sold it within 2 days. The fees are so much lower than other platforms!", rating: 5 },
              { name: "James T.", quote: "I love the Boost feature — my listing sold in hours. And when I boosted a slower item, the credits came right back.", rating: 5 },
              { name: "Priya K.", quote: "Finally a marketplace that's actually free to use. Melo Pro is worth it for serious sellers.", rating: 5 },
            ].map((r) => (
              <div key={r.name} className="p-6 rounded-2xl border border-border bg-card">
                <div className="flex gap-1 mb-3">
                  {Array.from({ length: r.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">"{r.quote}"</p>
                <p className="text-sm font-semibold">{r.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4 bg-gradient-to-br from-primary/10 via-accent/10 to-background">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
            Ready to Start Selling?
          </h2>
          <p className="text-muted-foreground text-lg mb-10">
            Join thousands of buyers and sellers on Melo. It's completely free — no catches, no hidden fees.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <a
  href="https://apps.apple.com/us/app/melo-marketplace/id6760438637"
  target="_blank"
  rel="noopener noreferrer"
  className="w-full sm:w-auto"
>
  <Button size="lg" className="h-14 px-10 rounded-2xl text-base font-semibold w-full">
    Get Started Today
    <ArrowRight className="w-4 h-4 ml-2" />
  </Button>
</a>
          </div>

          {/* App Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
            <a
              href="#"
              className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-foreground text-background hover:bg-foreground/90 transition-colors w-full sm:w-auto justify-center"
            >
              <Smartphone className="w-5 h-5 shrink-0" />
              <div className="text-left">
                <p className="text-[10px] leading-none opacity-70">Download on the</p>
                <p className="text-sm font-semibold leading-tight">App Store</p>
              </div>
            </a>
            <a
              href="#"
              className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-foreground text-background hover:bg-foreground/90 transition-colors w-full sm:w-auto justify-center"
            >
              <Smartphone className="w-5 h-5 shrink-0" />
              <div className="text-left">
                <p className="text-[10px] leading-none opacity-70">Get it on</p>
                <p className="text-sm font-semibold leading-tight">Google Play</p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border py-10 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="font-heading text-xl font-bold text-primary">Melo</span>
          <p className="text-sm text-muted-foreground text-center">
            The free peer-to-peer marketplace. Buy, sell, and thrive.
          </p>
          <div className="flex gap-4 text-sm text-muted-foreground">
            <Link to="/legal" className="hover:text-foreground transition-colors">Terms</Link>
            <Link to="/legal" className="hover:text-foreground transition-colors">Privacy</Link>
            <Link to="/" className="hover:text-foreground transition-colors">Marketplace</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}