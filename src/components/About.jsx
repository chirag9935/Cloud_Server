export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-images">
        <div className="img-collage">
          <img
            src="/about_collage.png"
            alt="Cloud Technology Collage"
          />
        </div>
      </div>

      <div className="about-content">
        <div className="about-kicker">
          <span className="about-kicker-text">ABOUT US</span>
          <span className="about-kicker-line"></span>
        </div>

        <h2>
          Empowering Businesses with Smart and Scalable{' '}
          <span className="text-blue">Cloud Solutions</span>
        </h2>

        <p>
          We are a forward-thinking cloud solutions provider dedicated to helping
          businesses grow through secure, scalable, and high-performance technologies.
          From cloud hosting and storage to DevOps and cybersecurity, we deliver
          end-to-end solutions tailored to your needs. Our focus is on reliability,
          innovation, and long-term success—ensuring your digital infrastructure is
          always optimized, protected, and ready for the future.
        </p>

        <a href="#start" className="btn-about">Learn More</a>
      </div>
    </section>
  );
}
