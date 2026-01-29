import "./App.css";

function App() {
  return (
    <div className="app">
      {/* HERO SECTION */}
      <header className="hero">
        <h1>Anubhav Cafe ☕</h1>
        <p>Fresh • Tasty • Made with Love</p>
        <span className="timing">🕙 10 AM – 5 PM</span>
      </header>

      {/* MENU SECTION */}
      <section className="menu">
        <h2>Our Menu</h2>

        <div className="menu-grid">
          <div className="menu-card">🍗 Chicken Fried Rice</div>
          <div className="menu-card">🥟 Chicken Momo</div>
          <div className="menu-card">🍜 Chicken Noodles</div>
          <div className="menu-card">🥤 Fresh Juices</div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <p>📍 Anubhav Cafe • Open Daily • Visit Us Today</p>
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
