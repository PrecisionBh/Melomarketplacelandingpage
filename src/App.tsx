import { BrowserRouter, Routes, Route } from "react-router-dom"
import Landing from "./pages/Landing"
import ListingPage from "./components/ListingPage" // 

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/l/:id" element={<ListingPage />} /> {/* 🔥 ADD THIS */}
      </Routes>
    </BrowserRouter>
  )
}