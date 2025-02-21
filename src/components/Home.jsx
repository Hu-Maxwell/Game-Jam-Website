import React from "react";
import "./base.css";
import "./index.css";

function Home() {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="resources.html">Resources</a></li>
            <li><a href="schedule.html">Schedule</a></li>
            <li><a href="contact.html">Contact</a></li>
            <li><a href="about.html">About</a></li>
            <li><a href="itch.io" target="_blank" rel="noopener noreferrer">Itch.io</a></li>
            <li><a href="google forms">Register</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <section className="hero">
          <h1>MercedJam 2025</h1>
          <p>Starts in HH:MM:SS</p>
        </section>

        <section className="faq">
          <h2>FAQ</h2>
          <p>PLACEHOLDER</p>
        </section>

        <section className="sponsors">
          <h2>Sponsors</h2>
          <p>PLACEHOLDER</p>
        </section>
      </main>

      <footer>
        <div className="socials">
          <a href="#"><img src="images/tiktok.png" alt="TikTok" /></a>
          <a href="#"><img src="images/instagram.png" alt="Instagram" /></a>
          <a href="#"><img src="images/discord.png" alt="Discord" /></a>
        </div>
      </footer>
    </>
  );
}

export default Home;