import { BrowserRouter, Routes, Route } from "react-router-dom"

import Hero from "./components/Hero"
import Features from "./components/Features"
import Screenshots from "./components/Screenshots"
import Footer from "./components/Footer"
import Ball from "./components/ball"

import ListingPage from "./components/ListingPage"
import RedirectPage from "./components/RedirectPage"

import "./App.css"

// ✅ Wrap your existing layout as Home
function Home() {
  return (
    <div className="app">
      <Ball style={{ top: "10%", left: "8%" }} />
      <Ball style={{ top: "20%", right: "10%" }} />
      <Ball style={{ bottom: "5%", left: "20%" }} />

      <Hero />
      <Features />
      <Screenshots />
      <Footer />
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* 🔥 HOME */}
        <Route path="/" element={<Home />} />

        {/* 🔥 WEB LISTING PAGE */}
        <Route path="/listing/:id" element={<ListingPage />} />

        {/* 🔥 DEEP LINK REDIRECT PAGE */}
        <Route path="/l/:id" element={<RedirectPage />} />
      </Routes>
    </BrowserRouter>
  )
}