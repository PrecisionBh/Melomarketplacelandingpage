import { Link } from "react-router-dom";
import {
  Star,
  Shield,
  Zap,
  TrendingUp,
  Package,
  DollarSign,
  Users,
  Check,
  ArrowRight,
  Smartphone,
} from "lucide-react";

/* ✅ LOCAL BUTTON (replaces shadcn, SAME usage) */
function Button({ children, className = "", variant, ...props }: any) {
  const base =
    "inline-flex items-center justify-center font-semibold transition rounded-xl";

  const styles =
    variant === "outline"
      ? "border border-gray-300 bg-white text-black hover:bg-gray-100"
      : variant === "ghost"
      ? "bg-transparent hover:bg-gray-100"
      : "bg-orange-500 text-white hover:opacity-90";

  return (
    <button className={`${base} ${styles} ${className}`} {...props}>
      {children}
    </button>
  );
}

/* ✅ SAME DATA */
const FEATURES = [
  {
    icon: <DollarSign className="w-6 h-6 text-orange-500" />,
    title: "Absolutely Free to Use",
    desc: "No subscription required to buy or sell. List up to 50 items for free and only pay a small 5% seller fee when your item sells — nothing upfront.",
  },
  {
    icon: <Shield className="w-6 h-6 text-orange-500" />,
    title: "Buyer Protection Included",
    desc: "Every purchase is covered by our built-in buyer protection.",
  },
  {
    icon: <Package className="w-6 h-6 text-orange-500" />,
    title: "Easy Shipping",
    desc: "Shipping costs are calculated automatically at checkout.",
  },
  {
    icon: <Users className="w-6 h-6 text-orange-500" />,
    title: "Real Peer-to-Peer Marketplace",
    desc: "Buy and sell directly with real people.",
  },
  {
    icon: <TrendingUp className="w-6 h-6 text-orange-500" />,
    title: "Sell Faster with Boosts",
    desc: "Boost your listings to the top of the feed or go Mega.",
  },
  {
    icon: <Zap className="w-6 h-6 text-orange-500" />,
    title: "Melo Pro — More Power",
    desc: "Upgrade to Melo Pro for just 1% seller fees.",
  },
];

const BOOST_FEATURES = [
  {
    emoji: "⚡",
    title: "Boosted Listing",
    desc: "Pin your listing to the top of the feed.",
  },
  {
    emoji: "🚀",
    title: "Mega Boost",
    desc: "Take over the entire home screen.",
  },
];

const FREE_TIER = [
  "List up to 50 items",
  "Only 5% fee when you sell",
  "Full buyer protection",
];

const PRO_TIER = [
  "Unlimited listings",
  "Only 1% seller fee",
  "Priority support",
];

export default function Landing() {
  return (
    <div className="min-h-screen bg-white text-black">

      {/* NAV */}
      <nav className="sticky top-0 z-50 bg-white border-b">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <span className="text-2xl font-bold text-orange-500">Melo</span>

          <div className="flex gap-3">
            <Link to="/signin">
              <Button variant="ghost" className="px-4 py-2">
                Sign In
              </Button>
            </Link>

            <Link to="/create-account">
              <Button className="px-4 py-2">
                Get Started Free
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="pt-20 pb-24 px-4 text-center">
        <div className="max-w-4xl mx-auto">

          <span className="inline-block px-4 py-1.5 rounded-full bg-orange-100 text-orange-600 text-sm mb-6">
            🎉 Absolutely Free to Join — No Credit Card Needed
          </span>

          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            The Smarter Way to{" "}
            <span className="text-orange-500">Buy & Sell</span> Anything
          </h1>

          <p className="text-gray-500 text-lg max-w-2xl mx-auto mb-10">
            Melo is a free peer-to-peer marketplace where you can sell your stuff and keep more of your money.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/create-account">
              <Button className="h-14 px-8">
                Start Selling
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>

            <Link to="/">
              <Button variant="outline" className="h-14 px-8">
                Browse Listings
              </Button>
            </Link>
          </div>

        </div>
      </section>

      {/* FEATURES */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((f) => (
            <div key={f.title} className="p-6 border rounded-xl">
              <div className="mb-4">{f.icon}</div>
              <h3 className="font-semibold mb-2">{f.title}</h3>
              <p className="text-gray-500 text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center">
        <h2 className="text-4xl font-bold mb-6">
          Ready to Start Selling?
        </h2>

        <Link to="/create-account">
          <Button className="px-8 py-4">
            Create Free Account
          </Button>
        </Link>
      </section>

    </div>
  );
}