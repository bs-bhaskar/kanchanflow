
const features = [
  {
    number: "01",
    title: "Quote to Order",
    description:
      "Turn customer enquiries into accurate quotations and confirmed orders with a clear, organized workflow.",
  },
  {
    number: "02",
    title: "Bill of Materials",
    description:
      "Keep product components, material requirements and costing details organized in one place.",
  },
  {
    number: "03",
    title: "Sales Pipeline",
    description:
      "Track every opportunity from the first enquiry to the final order without losing sight of follow-ups.",
  },
  {
    number: "04",
    title: "WhatsApp Follow-ups",
    description:
      "Keep customer conversations and follow-up tasks close to your sales workflow.",
  },
  {
    number: "05",
    title: "Reports & Insights",
    description:
      "Get a clearer view of quotations, order progress and sales performance.",
  },
  {
    number: "06",
    title: "Work Anywhere",
    description:
      "Keep your team connected to important sales and order information across devices.",
  },
];

function DashboardMockup() {
  return (
    <div className="dashboard">
      <div className="dashboard-top">
        <div className="window-dots" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
        <span> KANCHANFLOW / OVERVIEW </span>
        <span className="dashboard-status">● Live overview</span>
      </div>

      <div className="dashboard-body">
        <aside className="dashboard-sidebar">
          <strong>K<span>F</span></strong>
          <span className="sidebar-active">Overview</span>
          <span>Quotations</span>
          <span>Work Orders</span>
          <span>Customers</span>
          <span>Reports</span>
        </aside>

        <div className="dashboard-content">
          <p className="dashboard-eyebrow">WORKSPACE / OVERVIEW</p>
          <h3>Good morning, Team.</h3>
          <p className="dashboard-subtitle">
            Here&apos;s what&apos;s happening with your business.
          </p>

          <div className="dashboard-stats">
            <div>
              <span>Open quotations</span>
              <strong>24</strong>
              <small>Across active customers</small>
            </div>
            <div>
              <span>Work orders</span>
              <strong>12</strong>
              <small>Currently in progress</small>
            </div>
            <div>
              <span>Pipeline value</span>
              <strong>₹8.4L</strong>
              <small>Illustrative sample data</small>
            </div>
          </div>

          <div className="dashboard-table">
            <div className="table-heading">
              <strong>Recent work orders</strong>
              <span>View all ↗</span>
            </div>
            <div className="table-row">
              <span>WO-2048</span>
              <span>Precision Components</span>
              <span className="status-progress">In progress</span>
            </div>
            <div className="table-row">
              <span>WO-2047</span>
              <span>Industrial Systems</span>
              <span className="status-review">Under review</span>
            </div>
            <div className="table-row">
              <span>WO-2046</span>
              <span>Metro Fabrication</span>
              <span className="status-complete">Completed</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <section className="hero-section">
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="hero-badge">
              <span className="badge-dot" />
              BUILT FOR MODERN MANUFACTURING
            </span>

            <h1>
              From quotation to production.
              <span> All in one flow.</span>
            </h1>

            <p className="hero-description">
              Bring quotations, work orders and your manufacturing sales
              pipeline together in one clear workspace. Less chasing.
              More control.
            </p>

            <div className="hero-actions">
              <a href="/pricing" className="btn btn-primary">
                Explore Plans <span aria-hidden="true">↗</span>
              </a>
              <a href="#features" className="btn btn-secondary">
                Explore Features
              </a>
            </div>

            <p className="hero-note">
              Designed for teams that build things.
            </p>
          </div>

          <div className="hero-visual">
            <DashboardMockup />
          </div>
        </div>
      </section>

      <section className="section features-section" id="features">
        <div className="container">
          <div className="features-heading">
            <span className="section-label">ONE CONNECTED WORKFLOW</span>
            <h2 className="section-title">
              Less paperwork.
              <br />
              More production.
            </h2>
            <p className="section-description">
              Keep your team, customer enquiries and order progress connected
              without jumping between disconnected tools.
            </p>
          </div>

          <div className="features-grid">
            {features.map((feature) => (
              <article className="feature-card" key={feature.number}>
                <span className="feature-number">{feature.number}</span>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
                <span className="feature-arrow" aria-hidden="true">
                  ↗
                </span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="closing-section">
        <div className="container closing-inner">
          <span className="section-label">A CLEARER WAY TO WORK</span>
          <h2>Bring every order into focus.</h2>
          <p>
            Explore a more organized workflow for your manufacturing business.
          </p>
          <a href="/pricing" className="btn btn-primary">
            View Pricing <span aria-hidden="true">↗</span>
          </a>
        </div>
      </section>
    </>
  );
}
