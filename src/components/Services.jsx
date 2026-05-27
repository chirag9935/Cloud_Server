// Icon mapping (per reference image):
// Cloud Hosting      → Property_1_6 (cloud+server)
// Cloud Storage      → Property_1_5 (cloud+db)
// Cyber Security     → Property_1_4 (globe+shield)
// DevOps Solutions   → Property_1_3 (gears)
// Perf. Monitoring   → Property_1_2 (monitor+chart)
// Scalability        → Property_1_1 (network/team)

const SERVICES = [
  {
    id: 'srv-hosting',
    img: '/Property_1_6.png',
    title: 'Cloud Hosting',
    desc: 'High-performance hosting solutions ensuring fast loading, maximum uptime, and seamless user experience for your applications.',
  },
  {
    id: 'srv-storage',
    img: '/Property_1_5.png',
    title: 'Cloud Storage',
    desc: 'Secure and scalable storage systems to store, manage, and access your data efficiently from anywhere anytime with advanced encryption and reliability.',
  },
  {
    id: 'srv-security',
    img: '/Property_1_4.png',
    title: 'Cyber Security',
    desc: 'Advanced security solutions protecting your systems, networks, and sensitive data from modern cyber threats and advanced attacks.',
  },
  {
    id: 'srv-devops',
    img: '/Property_1_3.png',
    title: 'DevOps Solutions',
    desc: 'Automate development workflows with efficient CI/CD pipelines, faster deployments, and improved collaboration across teams and environments.',
  },
  {
    id: 'srv-monitor',
    img: '/Property_1_2.png',
    title: 'Performance Monitoring',
    desc: 'Real-time monitoring tools to track system performance, detect issues early, and ensure smooth and uninterrupted operations.',
  },
  {
    id: 'srv-scale',
    img: '/Property_1_1.png',
    title: 'Scalability & Support',
    desc: 'Flexible infrastructure and expert support services that adapt to your business growth and evolving technical requirements.',
  },
];

export default function Services() {
  return (
    <section id="services" className="services-section">
      <div className="services-header">
        <div className="section-kicker-row">
          <span className="kicker-line"></span>
          <span className="kicker-text">SERVICES</span>
          <span className="kicker-line rev"></span>
        </div>
        <h2>
          Provide Reliable Solutions to Simplify and Strengthen Your
          <span className="text-blue"> Cloud Operations</span>
        </h2>
      </div>

      <div className="services-grid">
        {SERVICES.map((srv) => (
          <div className="service-card" key={srv.id}>
            <div className="service-icon-wrap">
              <img src={srv.img} alt={srv.title} className="service-icon-img" />
            </div>
            <h3>{srv.title}</h3>
            <p>{srv.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
