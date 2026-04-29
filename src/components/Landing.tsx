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

/* ✅ DROP-IN BUTTON (replaces shadcn, same usage) */
function Button({ children, className = "", variant, size }: any) {
  let styles =
    "inline-flex items-center justify-center font-semibold rounded-xl transition";

  if (variant === "outline") {
    styles += " border border-gray-300 bg-white text-black hover:bg-gray-100";
  } else if (variant === "ghost") {
    styles += " bg-transparent hover:bg-gray-100";
  } else {
    styles += " bg-orange-500 text-white hover:opacity-90";
  }

  if (size === "lg") styles += " h-14 px-8 text-base";
  if (size === "sm") styles += " px-4 py-2 text-sm";

  return <button className={`${styles} ${className}`}>{children}</button>;
}

const FEATURES = [
  {
    icon: <DollarSign className="w-6 h-6 text-orange-500" />,
    title: "Absolutely Free to Use",
    desc: "No subscription required to buy or sell.",
  },
  {
    icon: <Shield className="w-6 h-6 text-orange-500" />,
    title: "Buyer Protection Included",
    desc: "Every purchase is protected.",
  },
  {
    icon: <Package className="w-6 h-6 text-orange-500" />,
    title: "Easy Shipping",
    desc: "Shipping calculated automatically.",
  },
  {
    icon: <Users className="w-6 h-6 text-orange-500" />,
    title: "Peer-to-Peer Marketplace",
    desc: "Buy and sell with real people.",
  },
  {
    icon: <TrendingUp className="w-6 h-6 text-orange-500" />,
    title: "Boost Listings",
    desc: "Get more visibility instantly.",
  },
  {
    icon: <Zap className="w-6 h-6 text-orange-500" />,
    title: "Melo Pro",
    desc: "Lower fees and more power.",
  },
];

export default function Landing() {
  return (
    <div className="min-h-screen bg-white text-black">

      {/* NAV */}
      <nav className="sticky top-0 z-50 bg-white border-b">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <span className="text-2xl font-bold text-orange-500">Melo</span>

          <div className="flex items-center gap-3">
            <Link to="/signin">
              <Button variant="ghost" size="sm">Sign In</Button>
            </Link>

            <Link to="/create-account">
              <Button size="sm">Get Started Free</Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="pt-20 pb-24 px-4 text-center">
        <div className="max-w-4xl mx-auto">

          <span className="inline-block px-4 py-1.5 rounded-full bg-orange-100 text-orange-600 text-sm mb-6">
            🎉 Absolutely Free to Join
          </span>

          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            The Smarter Way to <span className="text-orange-500">Buy & Sell</span> Anything
          </h1>

          <p className="text-gray-500 text-lg max-w-2xl mx-auto mb-10">
            Melo is a free peer-to-peer marketplace.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/create-account">
              <Button size="lg">
                Start Selling
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>

            <Link to="/">
              <Button variant="outline" size="lg">
                Browse Listings
              </Button>
            </Link>
          </div>

        </div>
      </section>

      {/* FEATURES */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">

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
          <Button size="lg">
            Create Free Account
          </Button>
        </Link>
      </section>

    </div>
  );
}