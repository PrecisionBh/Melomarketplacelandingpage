import Hero from "./components/Hero"
import Features from "./components/Features"
import Screenshots from "./components/Screenshots"
import Footer from "./components/Footer"
import Ball from "./components/ball"

import "./App.css"

function App() {
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

export default App