const features = [
  {
    icon: "📲",
    title: "Mobile Money",
    description:
      "Accept payments through M-Pesa, Airtel Money, and other mobile money providers using one consistent API.",
  },
  {
    icon: "🏦",
    title: "Bank Payments",
    description:
      "Connect businesses to banks, SACCOs, and transfer networks without maintaining separate integrations.",
  },
  {
    icon: "🔀",
    title: "Smart Orchestration",
    description:
      "Route transactions using provider availability, success rates, cost, customer preference, and payment method.",
  },
  {
    icon: "🔔",
    title: "Reliable Webhooks",
    description:
      "Receive normalized payment events with signatures, retries, delivery logs, and dead-letter handling.",
  },
  {
    icon: "📊",
    title: "Unified Reporting",
    description:
      "Track collections, failures, refunds, provider performance, and settlements from one dashboard.",
  },
  {
    icon: "🛡️",
    title: "Secure by Design",
    description:
      "Built around API keys, idempotency, audit trails, encrypted credentials, access controls, and transaction monitoring.",
  },
];

const steps = [
  {
    number: "01",
    title: "Create your account",
    description:
      "Register your business and access sandbox credentials for development.",
  },
  {
    number: "02",
    title: "Integrate once",
    description:
      "Use one API contract instead of maintaining separate integrations for every provider.",
  },
  {
    number: "03",
    title: "Accept payments",
    description:
      "Collect money through supported mobile money, bank, card, and SACCO channels.",
  },
  {
    number: "04",
    title: "Track everything",
    description:
      "Monitor transactions, webhooks, provider responses, settlements, and analytics.",
  },
];

const paymentMethods = [
  "M-Pesa",
  "Airtel Money",
  "Banks",
  "SACCOs",
  "Cards",
  "Wallets",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <nav className="border-b border-slate-800/80 bg-slate-950/90">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <a href="#" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500 font-black text-slate-950">
              D
            </div>

            <div>
              <p className="text-lg font-bold">Dipple Payments</p>
              <p className="text-xs text-slate-400">
                Payment infrastructure for Africa
              </p>
            </div>
          </a>

          <div className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
            <a href="#features" className="transition hover:text-white">
              Features
            </a>
            <a href="#how-it-works" className="transition hover:text-white">
              How it works
            </a>
            <a href="#developers" className="transition hover:text-white">
              Developers
            </a>
          </div>

          <a
            href="#contact"
            className="rounded-lg border border-emerald-400/70 px-4 py-2 text-sm font-semibold text-emerald-300 transition hover:bg-emerald-400 hover:text-slate-950"
          >
            Join the waitlist
          </a>
        </div>
      </nav>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.16),transparent_38%)]" />

        <div className="relative mx-auto grid max-w-7xl gap-16 px-6 py-24 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:py-32">
          <div>
            <span className="inline-flex rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-sm font-semibold text-emerald-300">
              Kenya-first. Africa-ready.
            </span>

            <h1 className="mt-7 max-w-4xl text-5xl font-black leading-tight tracking-tight sm:text-6xl lg:text-7xl">
              One API for
              <span className="block text-emerald-400">
                African payments.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              Dipple helps businesses accept and manage payments through
              M-Pesa, Airtel Money, banks, SACCOs, cards, and wallets using one
              secure developer-friendly platform.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a
                href="#contact"
                className="rounded-xl bg-emerald-400 px-6 py-3 text-center font-bold text-slate-950 transition hover:bg-emerald-300"
              >
                Start building
              </a>

              <a
                href="#developers"
                className="rounded-xl border border-slate-700 bg-slate-900 px-6 py-3 text-center font-semibold text-white transition hover:border-slate-500"
              >
                View API example
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              {paymentMethods.map((method) => (
                <span
                  key={method}
                  className="rounded-full border border-slate-700 bg-slate-900/80 px-4 py-2 text-sm text-slate-300"
                >
                  {method}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-slate-700 bg-slate-900/90 p-5 shadow-2xl shadow-emerald-950/40">
            <div className="mb-5 flex items-center justify-between border-b border-slate-800 pb-4">
              <div>
                <p className="font-semibold">Create a payment</p>
                <p className="text-sm text-slate-400">
                  Unified collections API
                </p>
              </div>

              <span className="rounded-full bg-emerald-400/10 px-3 py-1 text-xs font-semibold text-emerald-300">
                POST
              </span>
            </div>

            <pre className="overflow-x-auto rounded-2xl bg-slate-950 p-5 text-sm leading-7 text-slate-300">
              <code>{`POST /v1/payments

{
  "reference": "INV-10001",
  "amount": 2500,
  "currency": "KES",
  "paymentMethod": "mobile_money",
  "provider": "AUTO",
  "customer": {
    "phone": "254712345678"
  },
  "callbackUrl":
    "https://merchant.co.ke/webhooks"
}`}</code>
            </pre>

            <div className="mt-5 rounded-2xl border border-emerald-400/20 bg-emerald-400/5 p-5">
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-400">Payment status</span>
                <span className="rounded-full bg-amber-400/10 px-3 py-1 text-xs font-semibold text-amber-300">
                  PENDING
                </span>
              </div>

              <p className="mt-3 font-mono text-sm text-emerald-300">
                PAY_01JXYZ123456
              </p>

              <p className="mt-2 text-sm text-slate-400">
                Routed to the appropriate provider and awaiting customer
                confirmation.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-800 bg-slate-900/40">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-12 text-center sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="text-3xl font-black text-emerald-400">1 API</p>
            <p className="mt-2 text-sm text-slate-400">
              Multiple payment providers
            </p>
          </div>

          <div>
            <p className="text-3xl font-black text-emerald-400">KES</p>
            <p className="mt-2 text-sm text-slate-400">
              Kenya-first payment support
            </p>
          </div>

          <div>
            <p className="text-3xl font-black text-emerald-400">24/7</p>
            <p className="mt-2 text-sm text-slate-400">
              Transaction monitoring
            </p>
          </div>

          <div>
            <p className="text-3xl font-black text-emerald-400">99.9%</p>
            <p className="mt-2 text-sm text-slate-400">
              Target platform availability
            </p>
          </div>
        </div>
      </section>

      <section id="features" className="mx-auto max-w-7xl px-6 py-24">
        <div className="max-w-3xl">
          <p className="font-semibold text-emerald-400">Platform capabilities</p>

          <h2 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">
            Stop maintaining separate payment integrations.
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-400">
            Dipple normalizes provider APIs, callbacks, statuses, and errors so
            your engineering team can focus on building your product.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <article
              key={feature.title}
              className="rounded-2xl border border-slate-800 bg-slate-900 p-7 transition hover:-translate-y-1 hover:border-emerald-400/40"
            >
              <span className="text-3xl">{feature.icon}</span>

              <h3 className="mt-5 text-xl font-bold">{feature.title}</h3>

              <p className="mt-3 leading-7 text-slate-400">
                {feature.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section
        id="how-it-works"
        className="border-y border-slate-800 bg-slate-900/40"
      >
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="text-center">
            <p className="font-semibold text-emerald-400">How it works</p>

            <h2 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">
              Go live with fewer integrations.
            </h2>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step) => (
              <article
                key={step.number}
                className="rounded-2xl border border-slate-800 bg-slate-950 p-7"
              >
                <span className="text-sm font-black text-emerald-400">
                  {step.number}
                </span>

                <h3 className="mt-5 text-xl font-bold">{step.title}</h3>

                <p className="mt-3 leading-7 text-slate-400">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="developers"
        className="mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-2 lg:items-center"
      >
        <div>
          <p className="font-semibold text-emerald-400">Built for developers</p>

          <h2 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">
            Consistent APIs across every provider.
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-400">
            Work with a predictable payment model regardless of whether the
            transaction is processed by mobile money, a bank, a SACCO, or a
            card provider.
          </p>

          <div className="mt-8 space-y-4 text-slate-300">
            <p>✓ Sandbox and production environments</p>
            <p>✓ Idempotent payment requests</p>
            <p>✓ Signed webhook events</p>
            <p>✓ Normalized provider errors</p>
            <p>✓ SDKs and API documentation</p>
          </div>
        </div>

        <div className="rounded-3xl border border-slate-700 bg-slate-900 p-5">
          <div className="flex items-center justify-between border-b border-slate-800 pb-4">
            <p className="font-semibold">Normalized response</p>
            <span className="text-sm text-slate-400">application/json</span>
          </div>

          <pre className="mt-5 overflow-x-auto rounded-2xl bg-slate-950 p-5 text-sm leading-7 text-slate-300">
            <code>{`{
  "id": "PAY_01JXYZ123456",
  "reference": "INV-10001",
  "status": "PENDING",
  "provider": "MPESA",
  "amount": 2500,
  "currency": "KES",
  "createdAt": "2026-07-10T15:30:00Z"
}`}</code>
          </pre>
        </div>
      </section>

      <section id="contact" className="px-6 pb-24">
        <div className="mx-auto max-w-5xl rounded-3xl border border-emerald-400/30 bg-gradient-to-br from-emerald-400/15 to-slate-900 p-10 text-center sm:p-16">
          <p className="font-semibold text-emerald-300">
            Building the payment layer for African businesses
          </p>

          <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
            Join the Dipple early-access programme.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-300">
            We are working with developers and businesses that need simpler
            access to mobile money, bank, SACCO, and digital payment rails.
          </p>

          <a
            href="mailto:hello@dipple.site"
            className="mt-8 inline-flex rounded-xl bg-emerald-400 px-7 py-3 font-bold text-slate-950 transition hover:bg-emerald-300"
          >
            Contact Dipple
          </a>
        </div>
      </section>

      <footer className="border-t border-slate-800">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Dipple Payments. All rights reserved.</p>

          <p>Payment infrastructure for Kenya and Africa.</p>
        </div>
      </footer>
    </main>
  );
}