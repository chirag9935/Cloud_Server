import avatarImg from '../assets/hero.png';

const TESTIMONIALS = [
  {
    id: 't1',
    quote:
      '"The onboarding process was smooth, and their team ensured everything was set up perfectly from day one, allowing us to start operations quickly without any delays or technical issues, while providing continuous guidance and reliable support throughout the entire setup phase."',
    rating: 4,
    name: 'Suraj Mishra',
    role: 'Chemistry student',
  },
  {
    id: 't2',
    quote:
      '"The onboarding process was smooth, and their team ensured everything was set up perfectly from day one, making the transition seamless, efficient, and completely hassle-free for our entire organization."',
    rating: 4,
    name: 'Suraj Mishra',
    role: 'Chemistry student',
  },
  {
    id: 't3',
    quote:
      '"The onboarding process was smooth, and their team ensured everything was set up perfectly from day one, making the transition seamless, efficient, and completely hassle-free for our entire organization."',
    rating: 4,
    name: 'Suraj Mishra',
    role: 'Chemistry student',
  },
  {
    id: 't4',
    quote:
      '"The onboarding process was smooth, and their team ensured everything was set up perfectly from day one, allowing us to start operations quickly without any delays or technical issues, while providing continuous guidance and reliable support throughout the entire setup phase."',
    rating: 4,
    name: 'Suraj Mishra',
    role: 'Chemistry student',
  },
  {
    id: 't5',
    quote:
      '"The onboarding process was smooth, and their team ensured everything was set up perfectly from day one, making the transition seamless, efficient, and completely hassle-free for our entire organization."',
    rating: 4,
    name: 'Suraj Mishra',
    role: 'Chemistry student',
  },
  {
    id: 't6',
    quote:
      '"Switching to CloudServer was the best decision we made this year. The infrastructure is blazing fast and their support team responds within minutes. We have seen a massive improvement in our application uptime since migrating."',
    rating: 5,
    name: 'Arjun Patel',
    role: 'Backend Engineer',
  },
  {
    id: 't7',
    quote:
      '"Exceptional service from start to finish. The DevOps tools integrated seamlessly with our existing pipeline, and the monitoring dashboard gave us real-time visibility we never had before. Highly recommend to any growing team."',
    rating: 5,
    name: 'Priya Sharma',
    role: 'CTO, TechVentures',
  },
];

function StarRating({ rating }) {
  return (
    <div className="testimonial-rating">
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} className={`star ${i < rating ? 'star-filled' : 'star-empty'}`}>
          {i < rating ? '★' : '☆'}
        </span>
      ))}
    </div>
  );
}

function TestimonialCard({ t }) {
  return (
    <article className="testimonial-card">
      <p className="testimonial-quote">{t.quote}</p>
      <StarRating rating={t.rating} />
      <div className="testimonial-person">
        <img src={avatarImg} alt={t.name} className="testimonial-avatar" />
        <div className="testimonial-meta">
          <strong>{t.name}</strong>
          <span>{t.role}</span>
        </div>
      </div>
    </article>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="testimonials-section">
      <div className="testimonials-inner">
        <div className="testimonials-heading">
          <div className="testimonials-kicker">
            <span className="testimonials-kicker-text">TESTIMONIALS</span>
          </div>
          <h2>
            Client Feedback and <span>Reviews</span>
          </h2>
        </div>

        <div className="testimonials-track-wrapper">
          <div className="testimonials-track">
            {TESTIMONIALS.map((t) => (
              <TestimonialCard key={t.id} t={t} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
