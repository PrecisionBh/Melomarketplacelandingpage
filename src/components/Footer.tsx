export default function Footer() {
  return (
    <footer className="footer">

      <p>© 2026 Melo Marketplace</p>

      <p>
        Support:{" "}
        <a href="mailto:support@melomarketplace.app">
          support@melomarketplace.app
        </a>
      </p>

      <p style={{ fontSize: "12px", opacity: 0.8 }}>
        <a href="/privacy.html">Privacy Policy</a> {" | "}
        <a href="/delete-account.html">Delete Account</a>
      </p>

    </footer>
  )
}