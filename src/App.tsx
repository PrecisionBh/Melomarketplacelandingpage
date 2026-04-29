import { BrowserRouter, Routes, Route } from "react-router-dom"

// ✅ NEW LANDING PAGE
import Landing from "./components/Landing"

// ✅ KEEP THESE
import ListingPage from "./components/ListingPage"
import RedirectPage from "./components/RedirectPage"

import "./App.css"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* 🔥 NEW HOME (BASE44 LANDING) */}
        <Route path="/" element={<Landing />} />

        {/* 🔥 WEB LISTING PAGE */}
        <Route path="/listing/:id" element={<ListingPage />} />

        {/* 🔥 DEEP LINK REDIRECT PAGE */}
        <Route path="/l/:id" element={<RedirectPage />} />

      </Routes>
    </BrowserRouter>
  )
}