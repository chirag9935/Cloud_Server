const PLANS = [
  {
    id: 'plan-basic',
    iconClass: 'fa-solid fa-layer-group',
    name: 'Basic plan',
    price: '$20',
    note: 'Billed annually.',
    features: [
      'Access to all basic features',
      'Basic reporting and analytics',
      'Up to 10 individual users',
      '20GB individual data each user',
      'Basic chat and email support',
    ],
  },
  {
    id: 'plan-premium',
    iconClass: 'fa-solid fa-cubes',
    name: 'Premium plan',
    price: '$40',
    note: 'Billed annually.',
    features: [
      'Access to all basic features',
      'Basic reporting and analytics',
      'Up to 10 individual users',
      '20GB individual data each user',
      'Basic chat and email support',
    ],
  },
  {
    id: 'plan-advance',
    iconClass: 'fa-solid fa-box-open',
    name: 'Advance plan',
    price: '$80',
    note: 'Billed annually.',
    features: [
      'Access to all basic features',
      'Basic reporting and analytics',
      'Up to 10 individual users',
      '20GB individual data each user',
      'Basic chat and email support',
    ],
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="pricing-section">
      <div className="pricing-kicker">
        <span className="pricing-kicker-text">PRICING PLANS</span>
        <span className="pricing-kicker-line"></span>
      </div>
      <h2 className="pricing-heading">
        Choose a plan that fits your needs with scalable, secure, and
        high-performance{' '}
        <span className="text-blue">cloud solutions—no hidden costs.</span>
      </h2>

      <div className="pricing-grid">
        {PLANS.map((plan) => (
          <article key={plan.id} className="pricing-card">
            <div className="pricing-icon">
              <i className={plan.iconClass}></i>
            </div>
            <p className="plan-name">{plan.name}</p>
            <strong className="plan-price">
              {plan.price}
              <span className="per">/month</span>
            </strong>
            <p className="plan-note">{plan.note}</p>
            <ul className="plan-features">
              {plan.features.map((feat, fi) => (
                <li key={fi}>
                  <i className="fa-regular fa-circle-check check-icon"></i>
                  {feat}
                </li>
              ))}
            </ul>
            <a href="#start" className="pricing-cta-btn">
              <span className="pricing-arrow-badge">
                <img src="/Arrow%20icon.png" alt="" />
              </span>
              Get Started
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
