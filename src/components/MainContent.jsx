import React from "react";
import FeatureSection from "./FeatureSection";

function MainContent() {
  return (
    <main>
      <div className="hero" style={{ backgroundImage: 'url(/assets/img/bank-tree.webp)' }}>
        <section className="hero-content">
          <h2 className="sr-only">Promoted Content</h2>
          <p className="subtitle">No fees.</p>
          <p className="subtitle">No minimum deposit.</p>
          <p className="subtitle">High interest rates.</p>
          <p className="text">Open a savings account with Argent Bank today!</p>
        </section>
      </div>

      <FeatureSection />
    </main>
  );
}

export default MainContent;
