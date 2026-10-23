
import {
  FadeIn,
  AnimatedSection,
  AnimatedCard,
} from "../components/HomeAnimations";

const features = [
  {
    number: "01",
    title: "Quote to Order",
    description:
      "Move customer enquiries into quotations and confirmed orders with a workflow your entire team can follow.",
    tag: "SALES",
    icon: "↗",
  },
  {
    number: "02",
    title: "Bill of Materials",
    description:
      "Organize components, material requirements and costing details before production begins.",
    tag: "ENGINEERING",
    icon: "⌘",
  },
  {
    number: "03",
    title: "Sales Pipeline",
    description:
      "Track active opportunities, pending quotations and follow-ups without losing sight of the next step.",
    tag: "VISIBILITY",
    icon: "↗",
  },
  {
    number: "04",
    title: "WhatsApp Follow-ups",
    description:
      "Keep customer communication and follow-up tasks connected to your sales workflow.",
    tag: "COMMUNICATION",
    icon: "↗",
  },
  {
    number: "05",
    title: "Reports & Insights",
    description:
      "Review quotation activity, order progress and business indicators in one clearer view.",
    tag: "INTELLIGENCE",
    icon: "▥",
  },
  {
    number: "06",
    title: "Work Anywhere",
    description:
      "Access important sales and order information across desktop, tablet and mobile screens.",
    tag: "FLEXIBILITY",
    icon: "□",
  },
];

const industries = [
  "Metal fabrication",
  "Machine manufacturing",
  "Industrial components",
  "Engineering workshops",
  "OEM suppliers",
];

const questions = [
  {
    question: "What is KanchanFlow?",
    answer:
      "KanchanFlow is a manufacturing workflow concept that brings quotations, customer opportunities, materials and work-order information into one connected workspace.",
  },
  {
    question: "Who is it designed for?",
    answer:
      "It is designed for manufacturing teams, engineering workshops and industrial businesses that need a clearer way to manage sales enquiries and order progress.",
  },
  {
    question: "Can I manage quotations and work orders together?",
    answer:
      "The website illustrates a connected workflow from enquiry and quotation to work-order planning. This assignment demo does not connect to a production backend.",
  },
  {
    question: "Can I use KanchanFlow on mobile?",
    answer:
      "The website is designed to adapt to mobile, tablet and desktop screen sizes. The actual product functionality is not connected to a backend in this demo.",
  },
];

function WorkflowPreview() {
  const steps = [
    { number: "01", title: "Customer enquiry", status: "RECEIVED" },
    { number: "02", title: "Quotation & costing", status: "READY" },
    { number: "03", title: "Materials & work order", status: "IN REVIEW" },
    { number: "04", title: "Production", status: "NEXT UP" },
  ];

  return (
    <div className="home-workspace">
      <div className="home-workspace-top">
        <div className="home-workspace-brand">
          <span className="brand-mark">K</span>
          <span>KANCHANFLOW <span className="home-muted">/ WORKSPACE</span></span>
        </div>
        <span className="home-live">
          <span className="badge-dot" /> DEMO VIEW
        </span>
      </div>

      <div className="home-workspace-heading">
        <div>
          <span className="home-eyebrow">OPERATIONS / OVERVIEW</span>
          <h2>Every handoff, in view.</h2>
          <p>One connected journey from enquiry to production.</p>
        </div>
        <span className="home-workspace-code">KF / 001</span>
      </div>

      <div className="home-metrics">
        <div>
          <span>OPEN QUOTATIONS</span>
          <strong>24</strong>
          <small>Illustrative data</small>
        </div>
        <div>
          <span>WORK ORDERS</span>
          <strong>12</strong>
          <small>Illustrative data</small>
        </div>
        <div>
          <span>PIPELINE VALUE</span>
          <strong>₹8.4L</strong>
          <small>Illustrative data</small>
        </div>
      </div>

      <div className="home-workflow">
        <div className="home-workflow-heading">
          <strong>ORDER JOURNEY</strong>
          <span>4 CONNECTED STAGES</span>
        </div>

        {steps.map((step, index) => (
          <div className="home-workflow-step" key={step.number}>
            <span className={`home-step-number ${index === 2 ? "home-step-active" : ""}`}>
              {step.number}
            </span>
            <div className="home-step-copy">
              <strong>{step.title}</strong>
              <span>{step.status}</span>
            </div>
            <span className="home-step-arrow" aria-hidden="true">
              {index === 3 ? "↗" : "↓"}
            </span>
          </div>
        ))}
      </div>

      <div className="home-workspace-bottom">
        <span><span className="badge-dot" /> CONNECTED WORKFLOW CONCEPT</span>
        <span>BUILT FOR THE FACTORY FLOOR</span>
      </div>
    </div>
  );
}

function IndustryStrip() {
  return (
    <AnimatedSection className="home-industries">
      <div className="container">
        <div className="home-industries-heading">
          <span className="section-label">MADE FOR INDUSTRY</span>
          <h2>Built around how manufacturing works.</h2>
        </div>

        <div className="home-industry-list">
          {industries.map((industry) => (
            <div className="home-industry-item" key={industry}>
              <span aria-hidden="true">◆</span>
              {industry}
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}

function PricingTeaser() {
  return (
    <AnimatedSection className="home-pricing-section">
      <div className="container">
        <div className="home-pricing-panel">
          <div className="home-pricing-copy">
            <span className="section-label">SIMPLE, CLEAR PRICING</span>
            <h2>
              The right tools for
              <span> your next stage of growth.</span>
            </h2>
            <p>
              Explore example plans for different manufacturing team needs.
              Choose the level that fits your workflow.
            </p>
          </div>

          <div className="home-pricing-details">
            <span className="home-plan-label">MADE FOR YOUR WORKFLOW</span>
            <h3>Manufacturing CRM</h3>
            <p>
              Quotations, materials, sales opportunities and work orders
              in one connected workspace.
            </p>

            <div className="home-pricing-points">
              <span>✓ Quotation and order tracking</span>
              <span>✓ Bill of materials overview</span>
              <span>✓ Sales pipeline visibility</span>
              <span>✓ Reports and insights</span>
            </div>

            <div className="home-pricing-bottom">
              <span>Illustrative plans for this assignment</span>
              <a className="btn btn-primary" href="/pricing">
                Explore pricing <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}

function HomeFAQ() {
  return (
    <AnimatedSection className="home-faq-section">
      <div className="container home-faq-layout">
        <div className="home-faq-intro">
          <span className="section-label">GOOD QUESTIONS</span>
          <h2>
            Clarity before
            <span> you get started.</span>
          </h2>
          <p>
            A few quick answers about the KanchanFlow workflow concept
            and this website demonstration.
          </p>
          <a href="/features" className="home-text-link">
            Explore all features <span aria-hidden="true">↗</span>
          </a>
        </div>

        <div className="home-faq-list">
          {questions.map((item, index) => (
            <details className="home-faq-item" key={item.question}>
              <summary>
                <span>{item.question}</span>
                <span className="home-faq-icon" aria-hidden="true">
                  +
                </span>
              </summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}

export default function Home() {
  return (
    <main>
      <section className="hero-section home-hero">
        <div className="home-hero-grid" aria-hidden="true" />
        <div className="container home-hero-layout">
          <FadeIn className="hero-copy home-hero-copy">
            <span className="hero-badge">
              <span className="badge-dot" />
              THE MANUFACTURING WORKSPACE
            </span>

            <h1>
              Less chasing.
              <br />
              <span>More making.</span>
            </h1>

            <p className="hero-description">
              Bring quotations, materials, sales opportunities and work
              orders into one connected workflow. Give your manufacturing
              business the clarity to move forward.
            </p>

            <div className="hero-actions">
              <a href="/pricing" className="btn btn-primary">
                Explore plans <span aria-hidden="true">↗</span>
              </a>
              <a href="#home-features" className="btn btn-secondary">
                Discover features <span aria-hidden="true">↓</span>
              </a>
            </div>

            <p className="hero-note">
              Designed around connected manufacturing workflows.
            </p>
          </FadeIn>

          <FadeIn className="hero-visual home-hero-visual" delay={0.2}>
            <WorkflowPreview />
          </FadeIn>
        </div>

        <div className="container home-hero-caption">
          <span>01 / CONNECTED OPERATIONS</span>
          <span>SALES <i>→</i> MATERIALS <i>→</i> PRODUCTION</span>
        </div>
      </section>

      <AnimatedSection className="home-manifesto">
        <div className="container home-manifesto-layout">
          <div>
            <span className="section-label">THE EVERYDAY CHALLENGE</span>
            <span className="home-section-index">01 — VISIBILITY</span>
          </div>
          <div>
            <h2>
              Your production is connected.
              <span>Your information should be too.</span>
            </h2>
            <p>
              Scattered spreadsheets, messages and disconnected processes
              make it harder to see what needs attention. KanchanFlow brings
              the workflow into one clearer view.
            </p>
          </div>
        </div>
      </AnimatedSection>

      <section className="section features-section home-features" id="home-features">
        <div className="container">
          <div className="home-features-heading">
            <div>
              <span className="section-label">THE EVERYDAY TOOLKIT</span>
              <h2 className="section-title">
                One workspace.
                <br />
                <span>Six connected capabilities.</span>
              </h2>
            </div>
            <p className="section-description">
              Practical tools designed around the way manufacturing teams
              manage enquiries, quotations and orders.
            </p>
          </div>

          <div className="home-feature-grid">
            {features.map((feature) => (
              <AnimatedCard className="home-feature-card" key={feature.number}>
                <div className="home-feature-card-top">
                  <span className="home-feature-icon" aria-hidden="true">
                    {feature.icon}
                  </span>
                  <span className="home-feature-number">{feature.number}</span>
                </div>
                <span className="home-feature-tag">{feature.tag}</span>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
                <a href="/features" className="home-feature-link">
                  Learn more <span aria-hidden="true">↗</span>
                </a>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      <IndustryStrip />
      <PricingTeaser />
      <HomeFAQ />

      <AnimatedSection className="home-final-section">
        <div className="container">
          <div className="home-final-panel">
            <div>
              <span className="section-label">BRING IT TOGETHER</span>
              <h2>
                Give every order
                <span> a clearer path forward.</span>
              </h2>
              <p>
                Explore a more connected way to manage manufacturing sales
                and operations.
              </p>
            </div>
            <a href="/pricing" className="btn btn-primary">
              View pricing <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </AnimatedSection>
    </main>
  );
}
