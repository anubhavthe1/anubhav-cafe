export default function App() {
  return (
    <div>
      <header className="hero">
        <h1>Anubhav Cafe</h1>
        <p>Delicious food, made fresh every day</p>
        <a
          href="https://wa.me/919749861665"
          target="_blank"
          className="btn"
        >
          Order on WhatsApp
        </a>
      </header>

      <section className="section">
        <h2>About Us</h2>
        <p>
          Anubhav Cafe serves fresh and tasty food in a warm, friendly
          atmosphere. Perfect for quick bites and relaxing meals.
        </p>
      </section>

      <section className="section menu">
        <h2>Our Menu</h2>
        <div className="menu-grid">
          {[
            "Chicken Fried Rice",
            "Chicken Momo",
            "Chicken Noodles",
            "Juices",
          ].map((item) => (
            <div className="menu-card" key={item}>
              <div className="image-placeholder">Image</div>
              <h3>{item}</h3>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <h2>Timings</h2>
        <p><strong>10:00 AM – 5:00 PM</strong></p>
      </section>

      <section className="section">
        <h2>Location</h2>
        <iframe
          src="https://www.google.com/maps?q=https://maps.app.goo.gl/VA8xUPAbpCHy8gKk8&output=embed"
          width="100%"
          height="300"
          loading="lazy"
          title="Cafe Location"
        ></iframe>
      </section>

      <a
        href="https://wa.me/919749861665"
        target="_blank"
        className="whatsapp"
      >
        WhatsApp
      </a>

      <footer className="footer">
        <p>© 2026 Anubhav Cafe</p>
      </footer>
    </div>
  );
}