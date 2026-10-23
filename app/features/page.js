
// const features = [
//   {
//     number: "01",
//     title: "Quote to Order",
//     description:
//       "Turn customer enquiries into accurate quotations and confirmed orders with a clear, organized workflow.",
//     detail:
//       "Keep quotation details, customer requirements and order status connected from the first enquiry to confirmation.",
//   },
//   {
//     number: "02",
//     title: "Bill of Materials",
//     description:
//       "Keep product components, material requirements and costing details organized in one place.",
//     detail:
//       "Organize materials and cost estimates to make production planning easier and reduce manual tracking.",
//   },
//   {
//     number: "03",
//     title: "Sales Pipeline",
//     description:
//       "Track every opportunity from the first enquiry to the final order without losing sight of follow-ups.",
//     detail:
//       "Get a clearer view of active enquiries, pending quotations and upcoming sales opportunities.",
//   },
//   {
//     number: "04",
//     title: "WhatsApp Follow-ups",
//     description:
//       "Keep customer conversations and follow-up tasks close to your sales workflow.",
//     detail:
//       "Help your team stay on top of customer communication and remember important follow-up actions.",
//   },
//   {
//     number: "05",
//     title: "Reports & Insights",
//     description:
//       "Get a clearer view of quotations, order progress and sales performance.",
//     detail:
//       "Review useful business indicators to understand pending work and make better-informed decisions.",
//   },
//   {
//     number: "06",
//     title: "Work Anywhere",
//     description:
//       "Keep your team connected to important sales and order information across devices.",
//     detail:
//       "Access a clear view of your workflow on different screen sizes, including mobile devices.",
//   },
// ];

// export const metadata = {
//   title: "Features | KanchanFlow",
//   description:
//     "Explore KanchanFlow manufacturing CRM features for quotations, materials, sales pipelines, follow-ups and reporting.",
//   openGraph: {
//     title: "KanchanFlow Features",
//     description:
//       "Explore tools that connect manufacturing sales and order workflows.",
//   },
// };

// export default function FeaturesPage() {
//   return (
//     <main>
//       <section className="hero-section">
//         <div className="container hero-grid">
//           <div className="hero-copy">
//             <span className="hero-badge">
//               <span className="badge-dot" />
//               BUILT FOR MANUFACTURING
//             </span>

//             <h1>
//               Every order.
//               <br />
//               Every detail.
//               <br />
//               <span>One workflow.</span>
//             </h1>

//             <p className="hero-description">
//               From the first customer enquiry to the final order, keep your
//               manufacturing sales workflow organized and visible.
//             </p>

//             <div className="hero-actions">
//               <a className="btn btn-primary" href="/pricing">
//                 Explore Pricing ↗
//               </a>
//               <a className="btn btn-secondary" href="/#features">
//                 Back to Overview
//               </a>
//             </div>
//           </div>

//           <div className="hero-visual">
//             <div className="dashboard">
//               <div className="dashboard-top">
//                 <div className="window-dots">
//                   <span />
//                   <span />
//                   <span />
//                 </div>
//                 <span>KANCHANFLOW / FEATURES</span>
//                 <span className="dashboard-status">● Connected workflow</span>
//               </div>

//               <div className="dashboard-content">
//                 <span className="dashboard-eyebrow">
//                   WORKSPACE / OVERVIEW
//                 </span>
//                 <h3>From enquiry to production</h3>
//                 <p className="dashboard-subtitle">
//                   Keep your team 's work organized.
//                 </p>

//                 <div className="dashboard-table">
//                   <div className="table-heading">
//                     <strong>Workflow overview</strong>
//                     <span>6 features</span>
//                   </div>
//                   {features.slice(0, 4).map((feature) => (
//                     <div className="table-row" key={feature.number}>
//                       <span>{feature.number}</span>
//                       <span>{feature.title}</span>
//                       <span className="status-progress">Available</span>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       <section className="section features-section">
//         <div className="container">
//           <div className="features-heading">
//             <span className="section-label">THE TOOLKIT</span>
//             <h2 className="section-title">
//               Everything connected.
//               <br />
//               Nothing overlooked.
//             </h2>
//             <p className="section-description">
//               Practical tools designed around the way manufacturing teams
//               manage enquiries, quotations and orders.
//             </p>
//           </div>

//           <div className="features-grid">
//             {features.map((feature) => (
//               <article className="feature-card" key={feature.number}>
//                 <span className="feature-number">{feature.number}</span>
//                 <span className="feature-arrow" aria-hidden="true">
//                   ↗
//                 </span>
//                 <h3>{feature.title}</h3>
//                 <p>{feature.description}</p>
//                 <p>{feature.detail}</p>
//               </article>
//             ))}
//           </div>
//         </div>
//       </section>

//       <section className="closing-section">
//         <div className="container closing-inner">
//           <span className="section-label">A CLEARER WAY TO WORK</span>
//           <h2>Ready to bring your workflow together?</h2>
//           <p>
//             Explore a plan that fits your manufacturing business.
//           </p>
//           <a className="btn btn-primary" href="/pricing">
//             View Pricing ↗
//           </a>
//         </div>
//       </section>
//     </main>
//   );
// }



const features = [
  {
    number: "01",
    symbol: "↗",
    tag: "SALES WORKFLOW",
    title: "Quote to Order",
    description:
      "Turn customer enquiries into accurate quotations and confirmed orders with a clear, organized workflow.",
    detail:
      "Keep quotation details, customer requirements and order status connected from the first enquiry to confirmation.",
  },
  {
    number: "02",
    symbol: "▤",
    tag: "COST MANAGEMENT",
    title: "Bill of Materials",
    description:
      "Keep product components, material requirements and costing details organized in one place.",
    detail:
      "Organize materials and cost estimates to make production planning easier and reduce manual tracking.",
  },
  {
    number: "03",
    symbol: "⌁",
    tag: "OPPORTUNITY TRACKING",
    title: "Sales Pipeline",
    description:
      "Track every opportunity from the first enquiry to the final order without losing sight of follow-ups.",
    detail:
      "Get a clearer view of active enquiries, pending quotations and upcoming sales opportunities.",
  },
  {
    number: "04",
    symbol: "◉",
    tag: "CUSTOMER COMMUNICATION",
    title: "WhatsApp Follow-ups",
    description:
      "Keep customer conversations and follow-up tasks close to your sales workflow.",
    detail:
      "Help your team stay on top of customer communication and remember important follow-up actions.",
  },
  {
    number: "05",
    symbol: "▥",
    tag: "BUSINESS VISIBILITY",
    title: "Reports & Insights",
    description:
      "Get a clearer view of quotations, order progress and sales performance.",
    detail:
      "Review useful business indicators to understand pending work and make better-informed decisions.",
  },
  {
    number: "06",
    symbol: "◎",
    tag: "FLEXIBLE ACCESS",
    title: "Work Anywhere",
    description:
      "Keep your team connected to important sales and order information across devices.",
    detail:
      "Access a clear view of your workflow on different screen sizes, including mobile devices.",
  },
];

export const metadata = {
  title: "Features | KanchanFlow",
  description:
    "Explore KanchanFlow manufacturing CRM features for quotations, materials, sales pipelines, follow-ups and reporting.",
  openGraph: {
    title: "KanchanFlow Features",
    description:
      "Explore tools that connect manufacturing sales and order workflows.",
  },
};

export default function FeaturesPage() {
  return (
    <main className="features-page">
      <section className="hero-section features-hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="hero-badge">
              <span className="badge-dot" />
              BUILT FOR MANUFACTURING
            </span>

            <h1>
              Every order.
              <br />
              Every detail.
              <br />
              <span>One workflow.</span>
            </h1>

            <p className="hero-description">
              From the first customer enquiry to the final order,
              bring your manufacturing sales workflow into one
              clear, connected workspace.
            </p>

            <div className="hero-actions">
              <a className="btn btn-primary" href="/pricing">
                Explore Pricing ↗
              </a>
              <a className="btn btn-secondary" href="/#features">
                Back to Overview
              </a>
            </div>

            <div className="features-hero-note">
              <span className="badge-dot" />
              ONE CONNECTED WORKFLOW
              <span className="features-note-divider">/</span>
              BUILT FOR CLARITY
            </div>
          </div>

          <div className="hero-visual">
            <div className="dashboard features-dashboard">
              <div className="dashboard-top">
                <div className="window-dots">
                  <span />
                  <span />
                  <span />
                </div>
                <span>KANCHANFLOW / FEATURES</span>
                <span className="dashboard-status">
                  ● Connected workflow
                </span>
              </div>

              <div className="dashboard-content">
                <span className="dashboard-eyebrow">
                  WORKSPACE / OVERVIEW
                </span>
                <h3>From enquiry to production</h3>
                <p className="dashboard-subtitle">
                  Every stage, clearly organized.
                </p>

                <div className="features-preview-stats">
                  <div>
                    <span>CORE TOOLS</span>
                    <strong>06</strong>
                  </div>
                  <div>
                    <span>WORKFLOW</span>
                    <strong>01</strong>
                  </div>
                </div>

                <div className="dashboard-table">
                  <div className="table-heading">
                    <strong>Workflow toolkit</strong>
                    <span>OVERVIEW</span>
                  </div>

                  {features.slice(0, 4).map((feature) => (
                    <div className="table-row" key={feature.number}>
                      <span>{feature.number}</span>
                      <span>{feature.title}</span>
                      <span className="status-progress">
                        Included
                      </span>
                    </div>
                  ))}
                </div>

                <div className="features-preview-footer">
                  <span className="badge-dot" />
                  SALES WORKFLOW AT A GLANCE
                </div>
              </div>
            </div>

            <div className="features-visual-caption">
              <span>FIG. 01 — CONNECTED OPERATIONS</span>
              <span>KANCHANFLOW</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section features-section features-catalog">
        <div className="container">
          <div className="features-heading">
            <span className="section-label">THE TOOLKIT / 01—06</span>
            <h2 className="section-title">
              Everything connected.
              <br />
              <span className="features-heading-accent">
                Nothing overlooked.
              </span>
            </h2>
            <p className="section-description">
              Practical tools designed around the way manufacturing
              teams manage enquiries, quotations and orders.
            </p>
          </div>

          <div className="features-grid">
            {features.map((feature) => (
              <article
                className="feature-card features-detail-card"
                key={feature.number}
              >
                <div className="features-card-top">
                  <span className="features-card-symbol" aria-hidden="true">
                    {feature.symbol}
                  </span>
                  <span className="feature-number">
                    {feature.number}
                  </span>
                </div>

                <span className="features-card-tag">
                  {feature.tag}
                </span>

                <h3>{feature.title}</h3>

                <p className="features-card-description">
                  {feature.description}
                </p>

                <div className="features-card-divider" />

                <p className="features-card-detail">
                  {feature.detail}
                </p>
              </article>
            ))}
          </div>

          <div className="features-catalog-footer">
            <span>06 CAPABILITIES</span>
            <span>ONE CONNECTED WORKFLOW <span aria-hidden="true">↗</span></span>
          </div>
        </div>
      </section>

      <section className="closing-section features-closing">
        <div className="container closing-inner">
          <span className="section-label">
            A CLEARER WAY TO WORK
          </span>
          <h2>
            Bring every part
            <br />
            of your workflow together.
          </h2>
          <p>
            Explore a plan that fits your manufacturing business.
          </p>
          <a className="btn btn-primary" href="/pricing">
            View Pricing ↗
          </a>
        </div>
      </section>
    </main>
  );
}
