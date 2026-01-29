import "./App.css";

function App() {
  return (
    <div className="app">
      {/* HERO */}
      <header className="hero">
        <h1>Anubhav Cafe ☕</h1>
        <p>Fresh • Tasty • Made with Love</p>
        <span className="timing">🕙 10 AM – 5 PM</span>
      </header>

      {/* IMAGE GALLERY */}
      <section className="gallery">
        <img src="https://images.unsplash.com/photo-1509042239860-f550ce710b93" />
        <img src="https://images.unsplash.com/photo-1554118811-1e0d58224f24" />
        <img src="https://images.unsplash.com/photo-1521017432531-fbd92d768814" />
        <img src="https://images.unsplash.com/photo-1511920170033-f8396924c348" />
      </section>

      {/* MENU */}
      <section className="menu">
        <h2>Our Menu</h2>
        <div className="menu-grid">
          <div className="menu-card">🍗 Chicken Fried Rice</div>
          <div className="menu-card">🥟 Chicken Momo</div>
          <div className="menu-card">🍜 Chicken Noodles</div>
          <div className="menu-card">🥤 Fresh Juices</div>
        </div>
      </section>
      {/* LOCATION SECTION */}

{/* LOCATION LINK SECTION */}
<section className="location-link">
  <h2>Location</h2>

  <a
    href="https://maps.app.goo.gl/VA8xUPAbpCHy8gKk8"
    target="_blank"
    rel="noreferrer"
    className="map-link"
  >
    📍 View Anubhav Cafe on Google Maps
  </a>
</section>

      {/* FOOTER */}
      <footer className="footer">
        <p>📍 Anubhav Cafe • Visit Us Today</p>
      </footer>

      {/* WHATSAPP BUTTON */}
      <a
        href="https://wa.me/919749861665"
        className="whatsapp-float"
        target="_blank"
        rel="noreferrer"
      >
        💬
      </a>
    </div>
  );
}

export default App;
