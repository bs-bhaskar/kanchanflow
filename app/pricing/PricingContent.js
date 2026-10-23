
"use client";

import { useState } from "react";

const plans = [
  {
    name: "Starter",
    description: "For small manufacturing teams getting organized.",
    monthlyPrice: 999,
    annualPrice: 799,
    features: [
      "Quotation management",
      "Customer records",
      "Basic sales pipeline",
      "Work order tracking",
      "Email support",
    ],
  },
  {
    name: "Growth",
    description: "For growing teams managing more orders.",
    monthlyPrice: 2499,
    annualPrice: 1999,
    popular: true,
    features: [
      "Everything in Starter",
      "Bill of Materials tracking",
      "Advanced sales pipeline",
      "Reports and insights",
      "WhatsApp follow-up workflow",
      "Priority support",
    ],
  },
  {
    name: "Enterprise",
    description: "For larger teams with complex workflows.",
    monthlyPrice: 4999,
    annualPrice: 3999,
    features: [
      "Everything in Growth",
      "Advanced reporting",
      "Multiple team workflows",
      "Custom onboarding",
      "Dedicated support",
      "Priority assistance",
    ],
  },
];

const faqs = [
  {
    question: "Can I change my plan later?",
    answer:
      "This is a frontend demonstration. In a real product, plan changes would depend on the billing and account system.",
  },
  {
    question: "Does this page process payments?",
    answer:
      "No. This project is a marketing website only. It does not connect to a payment gateway or create subscriptions.",
  },
  {
    question: "Are these the official KanchanFlow prices?",
    answer:
      "No. The prices shown here are illustrative values for this assignment and should be confirmed before being presented as official pricing.",
  },
  {
    question: "Is there a backend connected?",
    answer:
      "No backend or database is included in this assignment. The plan toggle and FAQ work entirely in the browser.",
  },
];

export default function PricingPage() {
  const [billing, setBilling] = useState("monthly");
  const [openFaq, setOpenFaq] = useState(0);

  const isAnnual = billing === "annual";

  return (
    <main>
      <section className="pricing-hero">
        <div className="container pricing-hero-inner">
          <span className="hero-badge">
            <span className="badge-dot" />
            SIMPLE, TRANSPARENT PLANS
          </span>

          <h1 className="section-title">
            The right plan for
            <br />
            <span>your workflow.</span>
          </h1>

          <p className="section-description">
            Choose a plan that fits your team today and gives your manufacturing
            workflow room to grow.
          </p>

          <div className="billing-toggle" aria-label="Billing frequency">
            <button
              type="button"
              className={!isAnnual ? "billing-option active" : "billing-option"}
              aria-pressed={!isAnnual}
              onClick={() => setBilling("monthly")}
            >
              Monthly
            </button>

            <button
              type="button"
              className={isAnnual ? "billing-option active" : "billing-option"}
              aria-pressed={isAnnual}
              onClick={() => setBilling("annual")}
            >
              Yearly
              <span className="save-label">Save 20%</span>
            </button>
          </div>

          <p className="pricing-note">
            Illustrative pricing for this website assignment. Not official
            product pricing.
          </p>
        </div>
      </section>

      <section className="section pricing-section">
        <div className="container">
          <div className="pricing-grid">
            {plans.map((plan) => {
              const price = isAnnual
                ? plan.annualPrice
                : plan.monthlyPrice;

              return (
                <article
                  className={
                    plan.popular
                      ? "plan-card plan-card-popular"
                      : "plan-card"
                  }
                  key={plan.name}
                >
                  {plan.popular && (
                    <span className="popular-label">RECOMMENDED</span>
                  )}

                  <div className="plan-card-heading">
                    <span className="section-label">{plan.name}</span>
                    <h2>{plan.name}</h2>
                    <p>{plan.description}</p>
                  </div>

                  <div className="plan-price">
                    <span className="currency">₹</span>
                    <strong>{price.toLocaleString("en-IN")}</strong>
                    <span className="price-period">/ month</span>
                  </div>

                  <p className="billing-caption">
                    {isAnnual
                      ? "Billed annually (illustrative)"
                      : "Billed monthly (illustrative)"}
                  </p>

                  <a
                    className={
                      plan.popular
                        ? "btn btn-primary plan-button"
                        : "btn btn-secondary plan-button"
                    }
                    href="#pricing-faq"
                  >
                    {plan.name === "Starter"
                      ? "Get Started"
                      : plan.name === "Growth"
                        ? "Choose Growth"
                        : "Contact Sales"}
                    <span aria-hidden="true">↗</span>
                  </a>

                  <div className="plan-divider" />

                  <h3 className="included-heading">What's included</h3>

                  <ul className="plan-features">
                    {plan.features.map((feature) => (
                      <li key={feature}>
                        <span className="check-icon" aria-hidden="true">
                          ✓
                        </span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>

          <p className="pricing-disclaimer">
            Plan features and prices are sample content for demonstration.
            No purchase or subscription is processed.
          </p>
        </div>
      </section>

      <section className="section comparison-section">
        <div className="container">
          <span className="section-label">COMPARE PLANS</span>
          <h2 className="section-title">See what fits your team.</h2>
          <p className="section-description">
            Compare the example features available in each plan.
          </p>

          <div className="comparison-table-wrap">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th scope="col">Feature</th>
                  <th scope="col">Starter</th>
                  <th scope="col">Growth</th>
                  <th scope="col">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Quotation management</th>
                  <td>✓</td>
                  <td>✓</td>
                  <td>✓</td>
                </tr>
                <tr>
                  <th scope="row">Work order tracking</th>
                  <td>✓</td>
                  <td>✓</td>
                  <td>✓</td>
                </tr>
                <tr>
                  <th scope="row">Bill of Materials</th>
                  <td>—</td>
                  <td>✓</td>
                  <td>✓</td>
                </tr>
                <tr>
                  <th scope="row">Advanced reporting</th>
                  <td>—</td>
                  <td>—</td>
                  <td>✓</td>
                </tr>
                <tr>
                  <th scope="row">Priority support</th>
                  <td>—</td>
                  <td>✓</td>
                  <td>✓</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="section pricing-faq-section" id="pricing-faq">
        <div className="container pricing-faq-inner">
          <span className="section-label">NEED CLARITY?</span>
          <h2 className="section-title">Frequently asked questions.</h2>
          <p className="section-description">
            A few details about the plans and this demo website.
          </p>

          <div className="pricing-faq-list">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              const answerId = `pricing-faq-answer-${index}`;

              return (
                <div className="pricing-faq-item" key={faq.question}>
                  <h3>
                    <button
                      type="button"
                      className="pricing-faq-question"
                      aria-expanded={isOpen}
                      aria-controls={answerId}
                      onClick={() =>
                        setOpenFaq(isOpen ? -1 : index)
                      }
                    >
                      <span>{faq.question}</span>
                      <span aria-hidden="true">
                        {isOpen ? "−" : "+"}
                      </span>
                    </button>
                  </h3>

                  {isOpen && (
                    <div className="pricing-faq-answer" id={answerId}>
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="closing-section">
        <div className="container closing-inner">
          <span className="section-label">ONE CONNECTED WORKFLOW</span>
          <h2>Bring every order into focus.</h2>
          <p>
            Explore how KanchanFlow can help organize manufacturing sales
            workflows.
          </p>
          <a className="btn btn-primary" href="/features">
            Explore Features ↗
          </a>
        </div>
      </section>
    </main>
  );
}






















