import preview from "../assets/melo-preview.png"

export default function Hero() {
  return (
    <section className="hero">

      <div className="heroInner">

        <h1 className="logo">Melo</h1>

        <p className="headline">
          Your Trusted Billiards Marketplace
        </p>

        <p className="tagline">
          Buy and Sell Cues, cases, and equipment with secured escrow payments.
        </p>

        <div className="buttons">

          {/* ✅ APP STORE BUTTON */}
          <a
            href="https://apps.apple.com/us/app/melo-marketplace/id6760438637"
            target="_blank"
            rel="noopener noreferrer"
            className="storeBtn"
          >
            Download on the App Store
          </a>

          {/* ✅ GOOGLE PLAY BUTTON */}
          <a
            href="https://play.google.com/store/apps/details?id=com.bhoffman4.MeloMP"
            target="_blank"
            rel="noopener noreferrer"
            className="storeBtn"
          >
            Get it on Google Play
          </a>

        </div>

        <div className="phoneWrapper">

          <div className="phoneGlow"></div>

          <img
            src={preview}
            alt="Melo App"
            className="phone"
          />

        </div>

      </div>

    </section>
  )
}