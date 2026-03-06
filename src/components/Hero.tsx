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

          <button className="storeBtn disabled">
            App Store (Coming Soon)
          </button>

          <button className="storeBtn disabled">
            Google Play (Coming Soon)
          </button>

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