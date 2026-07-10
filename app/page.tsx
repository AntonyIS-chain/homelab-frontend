"use client";

import "./globals.css";
import { useState, useEffect } from "react";

const features = [
  {
    icon: "📲",
    title: "Mobile Money",
    description:
      "Accept payments through M-Pesa, Airtel Money, and other mobile money providers using one consistent API.",
    gradient: "from-emerald-50 to-teal-50",
    border: "border-emerald-200",
  },
  {
    icon: "🏦",
    title: "Bank Payments",
    description:
      "Connect businesses to banks, SACCOs, and transfer networks without maintaining separate integrations.",
    gradient: "from-blue-50 to-cyan-50",
    border: "border-blue-200",
  },
  {
    icon: "🔀",
    title: "Smart Orchestration",
    description:
      "Route transactions using provider availability, success rates, cost, customer preference, and payment method.",
    gradient: "from-purple-50 to-pink-50",
    border: "border-purple-200",
  },
  {
    icon: "🔔",
    title: "Reliable Webhooks",
    description:
      "Receive normalized payment events with signatures, retries, delivery logs, and dead-letter handling.",
    gradient: "from-amber-50 to-orange-50",
    border: "border-amber-200",
  },
  {
    icon: "📊",
    title: "Unified Reporting",
    description:
      "Track collections, failures, refunds, provider performance, and settlements from one dashboard.",
    gradient: "from-indigo-50 to-violet-50",
    border: "border-indigo-200",
  },
  {
    icon: "🛡️",
    title: "Secure by Design",
    description:
      "Built around API keys, idempotency, audit trails, encrypted credentials, access controls, and transaction monitoring.",
    gradient: "from-rose-50 to-red-50",
    border: "border-rose-200",
  },
];

const steps = [
  {
    number: "01",
    title: "Create your account",
    description:
      "Register your business and access sandbox credentials for development.",
    icon: "✨",
  },
  {
    number: "02",
    title: "Integrate once",
    description:
      "Use one API contract instead of maintaining separate integrations for every provider.",
    icon: "🔌",
  },
  {
    number: "03",
    title: "Accept payments",
    description:
      "Collect money through supported mobile money, bank, card, and SACCO channels.",
    icon: "💳",
  },
  {
    number: "04",
    title: "Track everything",
    description:
      "Monitor transactions, webhooks, provider responses, settlements, and analytics.",
    icon: "📈",
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

const stats = [
  { value: "500+", label: "Businesses onboarded", icon: "🏢" },
  { value: "₦50B+", label: "Transaction volume", icon: "💰" },
  { value: "99.99%", label: "Uptime guarantee", icon: "⏱️" },
  { value: "24/7", label: "Support available", icon: "🌍" },
];

const testimonials = [
  {
    quote: "Dipple has transformed how we handle payments. One API for everything!",
    author: "Samuel O.",
    role: "CTO, FinTech Africa",
    image: "👨‍💻",
  },
  {
    quote: "The best decision we made was switching to Dipple. No more integration headaches.",
    author: "Amina K.",
    role: "CEO, HealthTech Kenya",
    image: "👩‍💼",
  },
  {
    quote: "Our developers love the clean API. Implementation took less than a day!",
    author: "David M.",
    role: "Lead Engineer, E-Commerce Nigeria",
    image: "👨‍💻",
  },
];

const integrations = [
  "M-Pesa",
  "Airtel Money",
  "MTN Mobile Money",
  "Orange Money",
  "Vodafone Cash",
  "Tigo Pesa",
  "Equity Bank",
  "KCB Bank",
  "Cooperative Bank",
  "NCBA Bank",
  "Safaricom",
  "Airtel",
];

const pricingPlans = [
  {
    name: "Starter",
    price: "Free",
    description: "Perfect for startups and small businesses",
    features: [
      "Up to 100 transactions/month",
      "Basic API access",
      "Email support",
      "Sandbox environment",
      "Standard reporting",
    ],
    cta: "Get started",
    popular: false,
  },
  {
    name: "Professional",
    price: "$49",
    description: "For growing businesses with higher volume",
    features: [
      "Up to 10,000 transactions/month",
      "Advanced API features",
      "Priority support",
      "Custom webhooks",
      "Advanced analytics",
      "Multi-currency support",
    ],
    cta: "Start trial",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For large organizations with complex needs",
    features: [
      "Unlimited transactions",
      "Dedicated support team",
      "Custom integrations",
      "SLA guarantee",
      "White-label options",
      "Advanced security features",
    ],
    cta: "Contact sales",
    popular: false,
  },
];

const faqs = [
  {
    question: "What payment methods does Dipple support?",
    answer: "Dipple supports M-Pesa, Airtel Money, MTN Mobile Money, Orange Money, Vodafone Cash, Tigo Pesa, all major banks, SACCOs, credit cards, and digital wallets across Africa.",
  },
  {
    question: "How long does it take to integrate?",
    answer: "Most businesses can integrate Dipple within a few hours. Our SDKs and documentation make it straightforward, and we provide dedicated support during integration.",
  },
  {
    question: "Is Dipple secure?",
    answer: "Yes! Dipple is PCI DSS compliant and uses bank-grade encryption, API keys, idempotency, audit trails, and advanced fraud detection to keep your transactions secure.",
  },
  {
    question: "Do you offer support?",
    answer: "Yes! We provide 24/7 email support, live chat during business hours, and dedicated support for Professional and Enterprise plans.",
  },
  {
    question: "Can I migrate from another provider?",
    answer: "Absolutely! We provide migration tools, documentation, and support to help you transition smoothly from other payment providers.",
  },
  {
    question: "What countries do you support?",
    answer: "Currently we support Kenya, Nigeria, Ghana, Tanzania, Uganda, Rwanda, and South Africa. We're expanding to more countries every quarter.",
  },
];

const blogPosts = [
  {
    title: "The Future of African Payments Infrastructure",
    excerpt: "How modern APIs are transforming the way businesses accept payments across the continent.",
    date: "July 10, 2026",
    readTime: "5 min read",
    category: "Industry Insights",
  },
  {
    title: "Why Developers Love Unified Payment APIs",
    excerpt: "A deep dive into why one API is better than maintaining multiple provider integrations.",
    date: "July 8, 2026",
    readTime: "4 min read",
    category: "Developer Experience",
  },
  {
    title: "M-Pesa to Bank: The Evolution of Digital Payments",
    excerpt: "Tracing the journey of mobile money and what the future holds for African fintech.",
    date: "July 5, 2026",
    readTime: "6 min read",
    category: "Fintech Trends",
  },
];

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [selectedPlan, setSelectedPlan] = useState(1);

  useEffect(() => {
    // Use requestAnimationFrame to avoid cascading renders
    requestAnimationFrame(() => {
      setIsVisible(true);
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll(".card-enter");
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
      observer.disconnect();
    };
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-br from-white via-slate-50 to-emerald-50/30 text-slate-900 overflow-x-hidden">
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');
        
        * {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, system-ui, sans-serif;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-8px) rotate(1deg); }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        .animate-float-slow {
          animation: float-slow 6s ease-in-out infinite;
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.1; transform: scale(1); }
          50% { opacity: 0.25; transform: scale(1.05); }
        }
        .animate-pulse-slow {
          animation: pulse-slow 5s ease-in-out infinite;
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-slide-up {
          animation: slideUp 0.6s ease-out forwards;
        }
        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-40px); }
          to { opacity: 1; transform: translateX(0); }
        }
        .animate-slide-in-left {
          animation: slideInLeft 0.6s ease-out forwards;
        }
        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(40px); }
          to { opacity: 1; transform: translateX(0); }
        }
        .animate-slide-in-right {
          animation: slideInRight 0.6s ease-out forwards;
        }
        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        .shimmer-text {
          background: linear-gradient(90deg, #059669, #10b981, #059669);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: shimmer 3s linear infinite;
        }
        @keyframes gradientBorder {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .gradient-border {
          position: relative;
          background: white;
          border-radius: 1rem;
        }
        .gradient-border::before {
          content: '';
          position: absolute;
          inset: -1px;
          border-radius: 1rem;
          padding: 1px;
          background: linear-gradient(135deg, rgba(5, 150, 105, 0.3), rgba(16, 185, 129, 0.1));
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          pointer-events: none;
        }
        @keyframes rotate3d {
          0% { transform: perspective(1000px) rotateY(0deg); }
          100% { transform: perspective(1000px) rotateY(360deg); }
        }
        .rotate-3d {
          animation: rotate3d 20s linear infinite;
          transform-style: preserve-3d;
        }
        @keyframes shimmerEffect {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        .shimmer-bg {
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
          background-size: 200% 100%;
          animation: shimmerEffect 3s infinite;
        }
        .card-enter {
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .card-enter.visible {
          opacity: 1;
          transform: translateY(0);
        }
        .glass-white {
          background: rgba(255, 255, 255, 0.6);
          backdrop-filter: blur(16px) saturate(180%);
          -webkit-backdrop-filter: blur(16px) saturate(180%);
          border: 1px solid rgba(255, 255, 255, 0.8);
        }
        .glass-white-hover {
          background: rgba(255, 255, 255, 0.7);
          backdrop-filter: blur(16px) saturate(180%);
          -webkit-backdrop-filter: blur(16px) saturate(180%);
          border: 1px solid rgba(255, 255, 255, 0.9);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .glass-white-hover:hover {
          background: rgba(255, 255, 255, 0.9);
          transform: translateY(-4px);
          box-shadow: 0 12px 40px -8px rgba(0, 0, 0, 0.08);
        }
        .delay-100 { animation-delay: 100ms; }
        .delay-200 { animation-delay: 200ms; }
        .delay-300 { animation-delay: 300ms; }
        .delay-400 { animation-delay: 400ms; }
        .delay-500 { animation-delay: 500ms; }
        .delay-600 { animation-delay: 600ms; }
        .delay-700 { animation-delay: 700ms; }
        .delay-800 { animation-delay: 800ms; }
        .delay-900 { animation-delay: 900ms; }
        .delay-1000 { animation-delay: 1000ms; }

        @keyframes heartbeat {
          0% { transform: scale(1); }
          14% { transform: scale(1.1); }
          28% { transform: scale(1); }
          42% { transform: scale(1.05); }
          70% { transform: scale(1); }
        }
        .animate-heartbeat {
          animation: heartbeat 2s infinite;
        }
        @keyframes bounceIn {
          0% { transform: scale(0.3); opacity: 0; }
          50% { transform: scale(1.05); }
          70% { transform: scale(0.9); }
          100% { transform: scale(1); opacity: 1; }
        }
        .animate-bounce-in {
          animation: bounceIn 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
        }
        @keyframes floatParticle {
          0% { transform: translateY(0px) translateX(0px); opacity: 0; }
          20% { opacity: 1; }
          80% { opacity: 1; }
          100% { transform: translateY(-120px) translateX(30px); opacity: 0; }
        }
        .particle {
          animation: floatParticle 5s ease-in-out infinite;
        }
        @keyframes slideDown {
          from { opacity: 0; max-height: 0; }
          to { opacity: 1; max-height: 500px; }
        }
        .faq-answer {
          animation: slideDown 0.4s ease-out forwards;
        }
        @keyframes pulseGlow {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 0.8; }
        }
        .animate-pulse-glow {
          animation: pulseGlow 2s ease-in-out infinite;
        }
        @keyframes slideInFromBottom {
          from { opacity: 0; transform: translateY(60px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-slide-in-bottom {
          animation: slideInFromBottom 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }
        @keyframes rotateSlow {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        .animate-rotate-slow {
          animation: rotateSlow 30s linear infinite;
        }
      `}</style>

      {/* Animated background */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-emerald-100/30 blur-3xl animate-pulse-slow" />
        <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-emerald-50/40 blur-3xl animate-pulse-slow" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-emerald-50/20 blur-3xl rotate-3d" />
        
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="particle absolute w-1.5 h-1.5 rounded-full bg-emerald-400/20"
            style={{
              left: `${5 + i * 8}%`,
              top: `${10 + i * 7}%`,
              animationDelay: `${i * 0.4}s`,
              animationDuration: `${4 + i * 0.5}s`,
            }}
          />
        ))}
      </div>

      {/* Navigation */}
      <nav className={`fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-2xl saturate-200 border-b border-slate-200/50 transition-all duration-700 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative h-10 w-10 flex items-center justify-center rounded-xl bg-gradient-to-br from-emerald-600 to-emerald-500 font-bold text-white shadow-lg shadow-emerald-200 transition-transform duration-300 group-hover:scale-110">
              D
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/20 to-transparent" />
            </div>
            <span className="text-xl font-bold tracking-tight text-slate-900">Dipple</span>
          </a>

          <div className="hidden items-center gap-8 md:flex">
            {["Features", "How it works", "Pricing", "Developers"].map((item, index) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                className={`text-sm font-medium text-slate-600 transition-all duration-300 hover:text-slate-900 relative group delay-${index * 100}`}
              >
                {item}
                <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-emerald-600 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          <a
            href="#contact"
            className="group relative overflow-hidden rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-500 px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-emerald-200 transition-all duration-300 hover:shadow-emerald-300 hover:scale-105"
          >
            <span className="relative z-10">Get started</span>
            <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-36 pb-20 px-6">
        <div className="mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-20 items-center">
            <div className="relative">
              <div className={`inline-flex items-center gap-3 rounded-full glass-white px-5 py-2 shadow-sm transition-all duration-700 ${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`}>
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
                </span>
                <span className="text-sm font-semibold text-emerald-700">🚀 Kenya-first · Africa-ready</span>
              </div>

              <h1 className={`mt-8 max-w-4xl transition-all duration-700 delay-200 ${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`}>
                <span className="text-5xl sm:text-6xl lg:text-7xl font-black leading-[1.1] tracking-tight text-slate-900">
                  One API for
                </span>
                <span className="text-5xl sm:text-6xl lg:text-7xl font-black leading-[1.1] tracking-tight shimmer-text block">
                  African payments.
                </span>
              </h1>

              <p className={`mt-6 max-w-2xl text-lg leading-relaxed text-slate-600 transition-all duration-700 delay-300 ${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`}>
                Dipple is the unified payment infrastructure for Africa. Accept, send, and orchestrate
                payments via M‑Pesa, Airtel Money, banks, SACCOs, cards, and wallets — one API.
              </p>

              <div className={`mt-10 flex flex-wrap gap-4 transition-all duration-700 delay-400 ${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`}>
                <a
                  href="#contact"
                  className="group relative overflow-hidden rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-500 px-8 py-3.5 font-semibold text-white shadow-lg shadow-emerald-200 transition-all duration-300 hover:shadow-emerald-300 hover:scale-105 active:scale-95"
                >
                  <span className="relative z-10">Start building →</span>
                  <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                </a>

                <a
                  href="#developers"
                  className="group rounded-xl glass-white px-8 py-3.5 font-medium text-slate-700 transition-all duration-300 hover:bg-white hover:shadow-lg hover:scale-105 active:scale-95"
                >
                  <span className="flex items-center gap-2">
                    View API example
                    <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </a>
              </div>

              <div className={`mt-12 flex flex-wrap gap-2 transition-all duration-700 delay-500 ${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`}>
                {paymentMethods.map((method, index) => (
                  <span
                    key={method}
                    className="px-4 py-1.5 rounded-full glass-white text-sm font-medium text-slate-700 transition-all duration-300 hover:bg-white hover:shadow-md hover:scale-105 cursor-default animate-float"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {method}
                  </span>
                ))}
              </div>

              <div className={`mt-8 flex items-center gap-6 transition-all duration-700 delay-600 ${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`}>
                <div className="flex -space-x-2">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-slate-200 to-slate-300 border-2 border-white flex items-center justify-center text-xs font-bold text-slate-600">
                      {i === 0 ? '⭐' : i === 1 ? '👤' : i === 2 ? '👤' : i === 3 ? '👤' : '👤'}
                    </div>
                  ))}
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900">Trusted by 500+ businesses</p>
                  <p className="text-xs text-slate-500">Across Kenya, Nigeria, Ghana & more</p>
                </div>
              </div>
            </div>

            {/* Code Card */}
            <div className={`relative transition-all duration-700 delay-300 ${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`}>
              <div className="absolute -top-6 -right-6 w-20 h-20 rounded-full bg-emerald-200/30 blur-2xl animate-float" />
              <div className="absolute -bottom-8 -left-8 w-32 h-32 rounded-full bg-emerald-100/30 blur-2xl animate-float-slow" />

              <div className="relative gradient-border p-[1px]">
                <div className="rounded-xl bg-white/90 backdrop-blur-2xl p-6 shadow-2xl">
                  <div className="flex items-center justify-between border-b border-slate-200/60 pb-4">
                    <div>
                      <p className="font-semibold text-slate-900">Create a payment</p>
                      <p className="text-sm text-slate-500">Unified collections API</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="flex gap-1.5">
                        <div className="w-3 h-3 rounded-full bg-red-400" />
                        <div className="w-3 h-3 rounded-full bg-amber-400" />
                        <div className="w-3 h-3 rounded-full bg-emerald-400" />
                      </div>
                      <span className="rounded-lg bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700 border border-emerald-200">
                        POST
                      </span>
                    </div>
                  </div>

                  <div className="mt-4 overflow-x-auto rounded-lg bg-slate-50 p-5 border border-slate-200 relative">
                    <div className="absolute top-3 right-3 flex gap-1.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse delay-150" />
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse delay-300" />
                    </div>
                    <pre className="text-sm leading-7 text-slate-700 font-mono">
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
                  </div>

                  <div className="mt-5 rounded-xl bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-200 p-5 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 to-teal-500/5 animate-pulse" />
                    <div className="flex items-center justify-between relative">
                      <span className="text-sm font-medium text-slate-700">Payment status</span>
                      <span className="inline-flex items-center gap-2 rounded-lg bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-700 border border-amber-200">
                        <span className="relative flex h-1.5 w-1.5">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
                          <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-amber-500" />
                        </span>
                        PENDING
                      </span>
                    </div>

                    <div className="mt-3 flex items-center justify-between">
                      <p className="font-mono text-sm text-emerald-700 font-semibold">PAY_01JXYZ123456</p>
                      <div className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400/50" />
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400/20" />
                      </div>
                    </div>

                    <p className="mt-2 text-sm text-slate-500">Routed to the appropriate provider and awaiting customer confirmation.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative px-6 py-12">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div
                key={stat.value}
                className={`glass-white rounded-xl p-6 text-center transition-all duration-500 card-enter ${isVisible ? 'visible' : ''}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="text-3xl mb-2 animate-float" style={{ animationDelay: `${index * 0.2}s` }}>{stat.icon}</div>
                <p className="text-2xl font-bold text-slate-900">{stat.value}</p>
                <p className="mt-1 text-sm text-slate-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="relative px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <div className={`inline-flex items-center gap-2 rounded-full glass-white px-4 py-1.5 transition-all duration-700 card-enter ${isVisible ? 'visible' : ''}`}>
              <span className="text-sm font-medium text-emerald-700">✦ Platform capabilities</span>
            </div>

            <h2 className={`mt-6 text-4xl sm:text-5xl font-black tracking-tight text-slate-900 transition-all duration-700 delay-100 card-enter ${isVisible ? 'visible' : ''}`}>
              Stop maintaining separate
              <span className="block shimmer-text">payment integrations.</span>
            </h2>

            <p className={`mt-4 text-lg leading-relaxed text-slate-600 transition-all duration-700 delay-200 card-enter ${isVisible ? 'visible' : ''}`}>
              Dipple normalizes provider APIs, callbacks, statuses, and errors so
              your engineering team can focus on building your product.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className={`group relative rounded-xl bg-gradient-to-br ${feature.gradient} border ${feature.border} p-8 transition-all duration-500 hover:shadow-xl hover:-translate-y-2 card-enter ${isVisible ? 'visible' : ''}`}
                style={{ transitionDelay: `${index * 100 + 300}ms` }}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative">
                  <div className="text-4xl mb-4 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">{feature.icon}</div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{feature.title}</h3>
                  <p className="text-sm leading-relaxed text-slate-600">{feature.description}</p>
                  <div className="mt-4 w-8 h-0.5 bg-emerald-600 rounded-full group-hover:w-12 transition-all duration-500" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="relative px-6 py-24 bg-gradient-to-b from-white to-emerald-50/20">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            {/* <div className={`inline-flex items-center gap-2 rounded-full glass-white px-4 py-1.5 transition-all duration-700 card-enter ${isVisible ? 'visible' : ''}`}>
              <span className="text-sm font-medium text-emerald-700">🚀 How it works</span>
            </div> */}

            <h2 className={`mt-6 text-4xl sm:text-5xl font-black tracking-tight text-slate-900 transition-all duration-700 delay-100 card-enter ${isVisible ? 'visible' : ''}`}>
              Go live with
              <span className="block shimmer-text">fewer integrations.</span>
            </h2>

            <p className={`mt-4 text-lg leading-relaxed text-slate-600 max-w-2xl mx-auto transition-all duration-700 delay-200 card-enter ${isVisible ? 'visible' : ''}`}>
              From signup to going live in minutes. No complex configurations, just pure payment power.
            </p>
          </div>

          <div className="mt-16 relative">
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-emerald-200 via-emerald-400 to-emerald-200 -translate-y-1/2" />
            
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {steps.map((step, index) => (
                <div
                  key={step.number}
                  className={`group relative card-enter ${isVisible ? 'visible' : ''}`}
                  style={{ transitionDelay: `${index * 150 + 300}ms` }}
                >
                  <div className="glass-white-hover rounded-2xl p-8 text-center h-full">
                    <div className="relative inline-block">
                      <div className="absolute inset-0 bg-emerald-400/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500" />
                      <div className="relative inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-50 to-emerald-100 text-emerald-700 font-black text-xl border border-emerald-200 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg">
                        <span className="text-2xl">{step.icon}</span>
                      </div>
                    </div>

                    <div className="mt-4">
                      <span className="text-sm font-bold text-emerald-600 block mb-1">Step {step.number}</span>
                      <h3 className="text-lg font-bold text-slate-900 mb-2">{step.title}</h3>
                      <p className="text-sm leading-relaxed text-slate-600">{step.description}</p>
                    </div>

                    {index < steps.length - 1 && (
                      <div className="hidden lg:block absolute -right-4 top-1/2 -translate-y-1/2 text-emerald-400 text-2xl animate-pulse">
                        →
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {[
              {
                icon: "⚡",
                title: "Lightning Fast",
                description: "Process transactions in seconds with our optimized routing engine.",
                color: "from-yellow-50 to-amber-50",
                border: "border-yellow-200",
              },
              {
                icon: "🛡️",
                title: "Bank-Grade Security",
                description: "Enterprise-level security with PCI DSS compliance and encryption.",
                color: "from-blue-50 to-cyan-50",
                border: "border-blue-200",
              },
              {
                icon: "🌍",
                title: "Pan-African Coverage",
                description: "Support for all major African payment providers and currencies.",
                color: "from-green-50 to-emerald-50",
                border: "border-green-200",
              },
            ].map((item, index) => (
              <div
                key={item.title}
                className={`glass-white-hover rounded-xl p-6 text-center card-enter ${isVisible ? 'visible' : ''}`}
                style={{ transitionDelay: `${index * 100 + 600}ms` }}
              >
                <div className="text-4xl mb-3 animate-float" style={{ animationDelay: `${index * 0.2}s` }}>{item.icon}</div>
                <h4 className="font-bold text-slate-900 mb-1">{item.title}</h4>
                <p className="text-sm text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section id="integrations" className="relative px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            {/* <div className={`inline-flex items-center gap-2 rounded-full glass-white px-4 py-1.5 transition-all duration-700 card-enter ${isVisible ? 'visible' : ''}`}>
              <span className="text-sm font-medium text-emerald-700">🔌 Integrations</span>
            </div> */}

            <h2 className={`mt-6 text-4xl sm:text-5xl font-black tracking-tight text-slate-900 transition-all duration-700 delay-100 card-enter ${isVisible ? 'visible' : ''}`}>
              Connect to everything
              <span className="block shimmer-text">with one API.</span>
            </h2>

            <p className={`mt-4 text-lg leading-relaxed text-slate-600 max-w-2xl mx-auto transition-all duration-700 delay-200 card-enter ${isVisible ? 'visible' : ''}`}>
              Seamlessly integrate with all major African payment providers through our unified platform.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {integrations.map((provider, index) => (
              <div
                key={provider}
                className={`glass-white-hover rounded-xl p-4 text-center transition-all duration-300 card-enter ${isVisible ? 'visible' : ''}`}
                style={{ transitionDelay: `${index * 50 + 300}ms` }}
              >
                <div className="text-2xl mb-2 animate-float" style={{ animationDelay: `${index * 0.05}s` }}>
                  {provider.includes("M-Pesa") ? "📱" :
                   provider.includes("Airtel") ? "📶" :
                   provider.includes("MTN") ? "📡" :
                   provider.includes("Orange") ? "🟠" :
                   provider.includes("Vodafone") ? "🔴" :
                   provider.includes("Tigo") ? "🔵" :
                   provider.includes("Equity") ? "🏦" :
                   provider.includes("KCB") ? "🏛️" :
                   provider.includes("Cooperative") ? "🤝" :
                   provider.includes("NCBA") ? "💳" :
                   provider.includes("Safaricom") ? "📱" :
                   "📱"}
                </div>
                <p className="text-xs font-medium text-slate-700">{provider}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <span className="inline-flex items-center gap-2 text-sm text-slate-500">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              +20 more providers coming soon
            </span>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="relative px-6 py-24 bg-gradient-to-b from-emerald-50/20 to-white">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            {/* <div className={`inline-flex items-center gap-2 rounded-full glass-white px-4 py-1.5 transition-all duration-700 card-enter ${isVisible ? 'visible' : ''}`}>
              <span className="text-sm font-medium text-emerald-700">💬 Testimonials</span>
            </div> */}

            <h2 className={`mt-6 text-4xl sm:text-5xl font-black tracking-tight text-slate-900 transition-all duration-700 delay-100 card-enter ${isVisible ? 'visible' : ''}`}>
              Trusted by
              <span className="block shimmer-text">African businesses.</span>
            </h2>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.author}
                className={`glass-white-hover rounded-2xl p-8 transition-all duration-500 card-enter ${isVisible ? 'visible' : ''}`}
                style={{ transitionDelay: `${index * 150 + 300}ms` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-100 to-emerald-200 flex items-center justify-center text-2xl">
                    {testimonial.image}
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">{testimonial.author}</p>
                    <p className="text-xs text-slate-500">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-slate-600 leading-relaxed">&quot;{testimonial.quote}&quot;</p>
                <div className="mt-4 flex text-emerald-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="relative px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <div className={`inline-flex items-center gap-2 rounded-full glass-white px-4 py-1.5 transition-all duration-700 card-enter ${isVisible ? 'visible' : ''}`}>
              {/* <span className="text-sm font-medium text-emerald-700">💰 Pricing</span> */}
            </div>

            <h2 className={`mt-6 text-4xl sm:text-5xl font-black tracking-tight text-slate-900 transition-all duration-700 delay-100 card-enter ${isVisible ? 'visible' : ''}`}>
              Simple, transparent
              <span className="block shimmer-text">pricing for everyone.</span>
            </h2>

            <p className={`mt-4 text-lg leading-relaxed text-slate-600 max-w-2xl mx-auto transition-all duration-700 delay-200 card-enter ${isVisible ? 'visible' : ''}`}>
              Choose the plan that works for you. All plans include our core features and support.
            </p>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {pricingPlans.map((plan, index) => (
              <div
                key={plan.name}
                className={`relative rounded-2xl p-8 transition-all duration-500 card-enter ${isVisible ? 'visible' : ''} ${
                  plan.popular 
                    ? 'glass-white border-2 border-emerald-400 shadow-xl scale-105' 
                    : 'glass-white-hover'
                }`}
                style={{ transitionDelay: `${index * 150 + 300}ms` }}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-emerald-500 to-emerald-400 text-white text-xs font-bold px-4 py-1 rounded-full">
                    MOST POPULAR
                  </div>
                )}
                <div className="text-center">
                  <h3 className="text-lg font-bold text-slate-900">{plan.name}</h3>
                  <div className="mt-4">
                    <span className="text-4xl font-black text-slate-900">{plan.price}</span>
                    {plan.price !== "Custom" && plan.price !== "Free" && (
                      <span className="text-slate-500">/month</span>
                    )}
                  </div>
                  <p className="mt-2 text-sm text-slate-500">{plan.description}</p>
                </div>

                <ul className="mt-6 space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm text-slate-600">
                      <svg className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className={`mt-8 block text-center rounded-xl px-6 py-3 font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-emerald-600 to-emerald-500 text-white shadow-lg shadow-emerald-200 hover:shadow-emerald-300 hover:scale-105'
                      : 'glass-white hover:bg-white hover:shadow-lg hover:scale-105 text-slate-700'
                  }`}
                >
                  {plan.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Proposition Section - Dipple's Superpowers with AI */}
      <section className="relative px-6 py-24 bg-gradient-to-b from-white to-emerald-50/20">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            {/* <div className={`inline-flex items-center gap-2 rounded-full glass-white px-4 py-1.5 transition-all duration-700 card-enter ${isVisible ? 'visible' : ''}`}>
              <span className="text-sm font-medium text-emerald-700">⚡ The Dipple Difference</span>
            </div> */}

            <h2 className={`mt-6 text-4xl sm:text-5xl font-black tracking-tight text-slate-900 transition-all duration-700 delay-100 card-enter ${isVisible ? 'visible' : ''}`}>
              Your superpower for
              <span className="block shimmer-text">African payments.</span>
            </h2>

            <p className={`mt-4 text-lg leading-relaxed text-slate-600 max-w-2xl mx-auto transition-all duration-700 delay-200 card-enter ${isVisible ? 'visible' : ''}`}>
              Everything you need to accept, manage, and optimize payments across Africa — powered by AI.
            </p>
          </div>

          {/* AI-Powered Cards */}
          <div className={`mt-14 grid gap-6 md:grid-cols-3 card-enter ${isVisible ? 'visible' : ''}`}>
            {[
              {
                icon: "🧠",
                title: "AI-Powered Routing",
                description: "Our AI analyzes millions of transactions to route payments through the fastest, most cost-effective provider in real-time.",
                gradient: "from-emerald-50 to-teal-50",
                border: "border-emerald-200",
                stat: "99.9%",
                statLabel: "success rate",
                badge: "🤖 AI",
              },
              {
                icon: "🔮",
                title: "Predictive Analytics",
                description: "Forecast transaction volumes, identify trends, and get AI-generated insights to optimize your payment strategy.",
                gradient: "from-blue-50 to-cyan-50",
                border: "border-blue-200",
                stat: "95%",
                statLabel: "prediction accuracy",
                badge: "📊 AI",
              },
              {
                icon: "🛡️",
                title: "AI Fraud Detection",
                description: "Real-time anomaly detection and fraud prevention powered by machine learning models trained on African payment patterns.",
                gradient: "from-purple-50 to-pink-50",
                border: "border-purple-200",
                stat: "98%",
                statLabel: "fraud detection rate",
                badge: "🔒 AI",
              },
            ].map((item, index) => (
              <div
                key={item.title}
                className={`group relative rounded-2xl bg-gradient-to-br ${item.gradient} border ${item.border} p-8 transition-all duration-500 hover:shadow-2xl hover:-translate-y-3`}
                style={{ transitionDelay: `${index * 150 + 300}ms` }}
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* AI Badge */}
                <div className="absolute -top-3 -right-3 bg-gradient-to-r from-emerald-500 to-emerald-400 text-white rounded-xl px-4 py-1.5 shadow-lg border border-emerald-300/50">
                  <span className="text-xs font-bold tracking-wider">{item.badge}</span>
                </div>

                {/* Stat badge */}
                <div className="absolute -top-3 -left-3 bg-white rounded-xl px-4 py-2 shadow-lg border border-slate-200/50">
                  <div className="text-center">
                    <div className="text-2xl font-black text-emerald-600">{item.stat}</div>
                    <div className="text-[10px] font-medium text-slate-500 uppercase tracking-wider">{item.statLabel}</div>
                  </div>
                </div>

                <div className="relative mt-4">
                  <div className="text-5xl mb-4 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">{item.icon}</div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-slate-600">{item.description}</p>
                  
                  {/* Animated progress indicator */}
                  <div className="mt-4 flex items-center gap-2">
                    <div className="flex-1 h-1 bg-slate-200 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-full transition-all duration-1000 group-hover:w-full" style={{ width: '85%' }} />
                    </div>
                    <span className="text-xs font-medium text-emerald-600">✓</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Interactive Feature Showcase with AI Focus */}
          <div className={`mt-16 card-enter ${isVisible ? 'visible' : ''}`}>
            <div className="relative glass-white rounded-2xl p-8 sm:p-10 overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.03),transparent_60%)]" />
              
              <div className="relative grid gap-8 lg:grid-cols-2">
                {/* Left: AI Features */}
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">
                    AI-Powered <span className="text-emerald-600">Intelligence</span>
                  </h3>
                  <div className="space-y-4">
                    {[
                      {
                        icon: "🤖",
                        title: "Smart Payment Routing",
                        desc: "AI chooses the best provider based on cost, speed, success rates, and real-time availability.",
                        highlight: "98% optimal routing",
                      },
                      {
                        icon: "📈",
                        title: "Revenue Intelligence",
                        desc: "Predictive analytics helps you forecast revenue, identify opportunities, and optimize pricing.",
                        highlight: "95% forecast accuracy",
                      },
                      {
                        icon: "🔍",
                        title: "Anomaly Detection",
                        desc: "Machine learning identifies suspicious patterns and prevents fraud before it happens.",
                        highlight: "Real-time alerts",
                      },
                      {
                        icon: "💡",
                        title: "Actionable Insights",
                        desc: "AI-generated recommendations to improve success rates, reduce costs, and grow revenue.",
                        highlight: "Weekly insights",
                      },
                    ].map((item, index) => (
                      <div
                        key={index}
                        className="group flex items-start gap-4 p-4 rounded-xl transition-all duration-300 hover:bg-white/50"
                      >
                        <div className="text-3xl group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <h4 className="font-semibold text-slate-900 group-hover:text-emerald-600 transition-colors duration-300">
                              {item.title}
                            </h4>
                            <span className="text-xs font-medium bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded-full border border-emerald-200">
                              {item.highlight}
                            </span>
                          </div>
                          <p className="text-sm text-slate-600 mt-0.5">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* AI Trust Signal */}
                  <div className="mt-6 p-4 bg-gradient-to-r from-emerald-50/50 to-teal-50/50 rounded-xl border border-emerald-200/50">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">🚀</span>
                      <div>
                        <p className="text-sm font-semibold text-slate-900">AI models trained on 50M+ transactions</p>
                        <p className="text-xs text-slate-500">Continuously learning and improving</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right: AI Demo Card */}
                <div className="relative">
                  <div className="absolute -top-4 -right-4 w-20 h-20 rounded-full bg-emerald-200/30 blur-2xl animate-float" />
                  <div className="absolute -bottom-4 -left-4 w-20 h-20 rounded-full bg-emerald-100/30 blur-2xl animate-float-slow" />

                  <div className="relative bg-white rounded-xl border border-slate-200 shadow-lg p-6">
                    <div className="flex items-center justify-between border-b border-slate-200 pb-4">
                      <div>
                        <p className="text-xs font-semibold text-emerald-600">🤖 AI LIVE DEMO</p>
                        <p className="text-sm font-medium text-slate-900">Smart routing in action</p>
                      </div>
                      <div className="flex gap-1.5">
                        <div className="w-2 h-2 rounded-full bg-red-400 animate-pulse" />
                        <div className="w-2 h-2 rounded-full bg-amber-400 animate-pulse delay-150" />
                        <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse delay-300" />
                      </div>
                    </div>

                    <div className="mt-4 space-y-3">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-slate-500">Payment amount</span>
                        <span className="font-medium text-slate-900">KES 2,500</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-slate-500">AI Analysis</span>
                        <span className="inline-flex items-center gap-1.5 text-emerald-600">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                          Analyzing...
                        </span>
                      </div>

                      {/* AI Routing Visualization */}
                      <div className="mt-3 p-4 bg-gradient-to-br from-slate-50 to-emerald-50/30 rounded-lg border border-slate-200">
                        <p className="text-xs font-semibold text-slate-700 mb-2">AI Routing Decision</p>
                        <div className="space-y-2">
                          {[
                            { provider: "M-Pesa", score: "98%", status: "✅ Recommended", bar: "w-[98%]" },
                            { provider: "Airtel Money", score: "85%", status: "👍 Good", bar: "w-[85%]" },
                            { provider: "Bank Transfer", score: "72%", status: "👌 Available", bar: "w-[72%]" },
                          ].map((item) => (
                            <div key={item.provider} className="flex items-center gap-2">
                              <span className="text-xs font-medium text-slate-600 w-24">{item.provider}</span>
                              <div className="flex-1 h-1.5 bg-slate-200 rounded-full overflow-hidden">
                                <div className={`h-full bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-full ${item.bar}`} />
                              </div>
                              <span className="text-xs font-semibold text-slate-700 w-10 text-right">{item.score}</span>
                              <span className="text-xs text-slate-500 w-20">{item.status}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="mt-4 pt-4 border-t border-slate-200">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-emerald-100 to-emerald-200 flex items-center justify-center text-xs font-bold text-emerald-700">
                              🧠
                            </div>
                            <div>
                              <p className="text-xs font-medium text-slate-900">AI Decision</p>
                              <p className="text-xs text-slate-500">Optimal route: M-Pesa</p>
                            </div>
                          </div>
                          <span className="text-xs font-semibold text-emerald-600 animate-pulse-glow">Live</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* AI Impact Metrics */}
          <div className={`mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 card-enter ${isVisible ? 'visible' : ''}`}>
            {[
              { 
                icon: "🎯", 
                value: "98%", 
                label: "Optimal routing",
                description: "AI chooses the best provider"
              },
              { 
                icon: "🚀", 
                value: "2.5x", 
                label: "Faster processing",
                description: "AI-optimized transaction speed"
              },
              { 
                icon: "💰", 
                value: "~40%", 
                label: "Cost reduction",
                description: "AI finds cheapest routes"
              },
              { 
                icon: "🛡️", 
                value: "95%", 
                label: "Fraud prevention",
                description: "AI detects suspicious activity"
              },
            ].map((item, index) => (
              <div
                key={index}
                className="glass-white-hover rounded-xl p-5 text-center transition-all duration-500"
                style={{ transitionDelay: `${index * 100 + 400}ms` }}
              >
                <div className="text-3xl mb-2 animate-float" style={{ animationDelay: `${index * 0.2}s` }}>{item.icon}</div>
                <p className="text-2xl font-black text-slate-900">{item.value}</p>
                <p className="text-sm font-semibold text-slate-700">{item.label}</p>
                <p className="text-xs text-slate-400 mt-0.5">{item.description}</p>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className={`mt-12 text-center card-enter ${isVisible ? 'visible' : ''}`}>
            <div className="inline-flex items-center gap-6 text-sm text-slate-500 bg-white/50 backdrop-blur-sm rounded-full px-6 py-3 border border-slate-200/50">
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Free forever plan
              </span>
              <span className="w-px h-4 bg-slate-300" />
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse delay-150" />
                No credit card required
              </span>
              <span className="w-px h-4 bg-slate-300" />
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse delay-300" />
                AI-powered from day one
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="relative px-6 py-24">
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            {/* <div className={`inline-flex items-center gap-2 rounded-full glass-white px-4 py-1.5 transition-all duration-700 card-enter ${isVisible ? 'visible' : ''}`}>
              <span className="text-sm font-medium text-emerald-700">❓ FAQ</span>
            </div> */}

            <h2 className={`mt-6 text-4xl sm:text-5xl font-black tracking-tight text-slate-900 transition-all duration-700 delay-100 card-enter ${isVisible ? 'visible' : ''}`}>
              Frequently asked
              <span className="block shimmer-text">questions.</span>
            </h2>
          </div>

          <div className="mt-14 space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`glass-white-hover rounded-xl overflow-hidden card-enter ${isVisible ? 'visible' : ''}`}
                style={{ transitionDelay: `${index * 100 + 300}ms` }}
              >
                <button
                  className="w-full px-6 py-4 flex items-center justify-between text-left transition-colors duration-200 hover:bg-white/20"
                  onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                >
                  <span className="font-medium text-slate-900">{faq.question}</span>
                  <span className={`text-2xl transition-transform duration-300 ${activeFaq === index ? 'rotate-180' : ''}`}>
                    {activeFaq === index ? '−' : '+'}
                  </span>
                </button>
                {activeFaq === index && (
                  <div className="px-6 pb-4 faq-answer">
                    <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog/Resources Section */}
      <section className="relative px-6 py-24 bg-gradient-to-b from-emerald-50/20 to-white">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            {/* <div className={`inline-flex items-center gap-2 rounded-full glass-white px-4 py-1.5 transition-all duration-700 card-enter ${isVisible ? 'visible' : ''}`}>
              <span className="text-sm font-medium text-emerald-700">📚 Resources</span>
            </div> */}

            <h2 className={`mt-6 text-4xl sm:text-5xl font-black tracking-tight text-slate-900 transition-all duration-700 delay-100 card-enter ${isVisible ? 'visible' : ''}`}>
              Insights from
              <span className="block shimmer-text">the Dipple team.</span>
            </h2>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {blogPosts.map((post, index) => (
              <div
                key={post.title}
                className={`glass-white-hover rounded-2xl p-8 transition-all duration-500 card-enter ${isVisible ? 'visible' : ''}`}
                style={{ transitionDelay: `${index * 150 + 300}ms` }}
              >
                <div className="text-xs font-semibold text-emerald-600 uppercase tracking-wider mb-2">{post.category}</div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{post.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-4">{post.excerpt}</p>
                <div className="flex items-center justify-between text-xs text-slate-500">
                  <span>{post.date}</span>
                  <span>{post.readTime}</span>
                </div>
                <a href="#" className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-emerald-600 hover:text-emerald-700 transition-colors">
                  Read more →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Developers Section */}
      <section id="developers" className="relative px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className={`transition-all duration-700 card-enter ${isVisible ? 'visible' : ''}`}>
              <div className="inline-flex items-center gap-2 rounded-full glass-white px-4 py-1.5">
                <span className="text-sm font-medium text-emerald-700">💻 Built for developers</span>
              </div>

              <h2 className="mt-6 text-4xl sm:text-5xl font-black tracking-tight text-slate-900">
                Consistent APIs
                <span className="block shimmer-text">across every provider.</span>
              </h2>

              <p className="mt-4 text-lg leading-relaxed text-slate-600">
                Work with a predictable payment model regardless of whether the
                transaction is processed by mobile money, a bank, a SACCO, or a card provider.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-3">
                {[
                  "Sandbox & production",
                  "Idempotent requests",
                  "Signed webhooks",
                  "Normalized errors",
                  "SDKs & docs",
                  "Testing console",
                ].map((item, index) => (
                  <div key={item} className={`flex items-center gap-2 text-sm text-slate-600 transition-all duration-300 hover:text-slate-900 card-enter ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: `${index * 100 + 400}ms` }}>
                    <svg className="w-4 h-4 text-emerald-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {item}
                  </div>
                ))}
              </div>

              <div className="mt-8 flex gap-4">
                <a
                  href="#"
                  className="group relative overflow-hidden rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-500 px-6 py-3 font-semibold text-white shadow-lg shadow-emerald-200 transition-all duration-300 hover:shadow-emerald-300 hover:scale-105"
                >
                  <span className="relative z-10">Read documentation →</span>
                  <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                </a>
                <a
                  href="#"
                  className="rounded-xl glass-white px-6 py-3 font-medium text-slate-700 transition-all duration-300 hover:bg-white hover:shadow-lg hover:scale-105"
                >
                  <span className="flex items-center gap-2">
                    View SDKs
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </span>
                </a>
              </div>
            </div>

            <div className={`relative transition-all duration-700 delay-300 card-enter ${isVisible ? 'visible' : ''}`}>
              <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-emerald-200/30 blur-2xl animate-float" />
              <div className="absolute -bottom-6 -left-6 w-24 h-24 rounded-full bg-emerald-100/30 blur-2xl animate-float-slow" />

              <div className="relative gradient-border p-[1px]">
                <div className="rounded-xl bg-white/90 backdrop-blur-2xl p-6 shadow-2xl">
                  <div className="flex items-center justify-between border-b border-slate-200/60 pb-4">
                    <p className="font-semibold text-slate-900">Normalized response</p>
                    <span className="text-xs font-mono text-slate-500 bg-slate-50 px-3 py-1 rounded-lg border border-slate-200">
                      application/json
                    </span>
                  </div>

                  <pre className="mt-4 overflow-x-auto rounded-lg bg-slate-50 p-5 border border-slate-200 relative">
                    <div className="absolute top-3 right-3 flex gap-1.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse delay-150" />
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse delay-300" />
                    </div>
                    <code className="text-sm leading-7 text-slate-700 font-mono">{`{
  "id": "PAY_01JXYZ123456",
  "reference": "INV-10001",
  "status": "PENDING",
  "provider": "MPESA",
  "amount": 2500,
  "currency": "KES",
  "createdAt": "2026-07-10T15:30:00Z",
  "ai_routing": {
    "selected": "MPESA",
    "confidence": 0.98,
    "alternatives": ["AIRTEL", "BANK"]
  }
}`}</code>
                  </pre>

                  <div className="mt-4 flex items-center gap-4 text-xs text-slate-500">
                    <span className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
                      Normalized
                    </span>
                    <span className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse delay-100" />
                      Provider-agnostic
                    </span>
                    <span className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse delay-200" />
                      AI-powered
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="relative px-6 py-16 bg-gradient-to-b from-emerald-50/20 to-white">
        <div className="mx-auto max-w-4xl">
          <div className={`glass-white rounded-2xl p-8 sm:p-12 text-center transition-all duration-700 card-enter ${isVisible ? 'visible' : ''}`}>
            <div className="text-4xl mb-4 animate-float">📬</div>
            <h3 className="text-2xl font-bold text-slate-900 mb-2">Stay in the loop</h3>
            <p className="text-slate-600 mb-6 max-w-md mx-auto">
              Get the latest updates on new features, AI capabilities, integrations, and payment insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 rounded-xl border border-slate-200 bg-white/50 px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent transition-all duration-300"
              />
              <button className="group relative overflow-hidden rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-500 px-6 py-3 font-semibold text-white shadow-lg shadow-emerald-200 transition-all duration-300 hover:shadow-emerald-300 hover:scale-105 whitespace-nowrap">
                <span className="relative z-10">Subscribe</span>
                <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
              </button>
            </div>
            <p className="text-xs text-slate-500 mt-3">No spam. Unsubscribe anytime. 🤖 AI insights included</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="relative px-6 pb-24">
        <div className="mx-auto max-w-5xl">
          <div className={`relative overflow-hidden rounded-3xl glass-white p-12 sm:p-16 text-center shadow-2xl transition-all duration-700 card-enter ${isVisible ? 'visible' : ''}`}>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.05),transparent_60%)]" />
            <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-emerald-200/20 blur-3xl animate-float" />
            <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-emerald-100/20 blur-3xl animate-float-slow" />
            
            <div className="relative">
              <div className="inline-flex items-center gap-2 rounded-full glass-white px-4 py-1.5 animate-float">
                <span className="text-sm font-medium text-emerald-700">🌟 Early access</span>
              </div>

              <h2 className="mt-6 text-4xl sm:text-5xl font-black tracking-tight text-slate-900">
                Ready to transform
                <span className="block shimmer-text">your payment infrastructure?</span>
              </h2>

              <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-slate-600">
                Join hundreds of businesses already using Dipple to power their payments across Africa.
                Get started today with our generous free tier and AI-powered features.
              </p>

              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <a
                  href="mailto:hello@dipple.site"
                  className="group relative overflow-hidden rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-500 px-8 py-3.5 font-semibold text-white shadow-lg shadow-emerald-200 transition-all duration-300 hover:shadow-emerald-300 hover:scale-105 active:scale-95"
                >
                  <span className="relative z-10">Start building for free →</span>
                  <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                </a>

                <a
                  href="#features"
                  className="rounded-xl glass-white px-8 py-3.5 font-medium text-slate-700 transition-all duration-300 hover:bg-white hover:shadow-lg hover:scale-105 active:scale-95"
                >
                  Explore features
                </a>
              </div>

              <div className="mt-6 flex flex-wrap justify-center gap-6 text-sm text-slate-500">
                <span className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  No credit card required
                </span>
                <span className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse delay-150" />
                  Free forever plan
                </span>
                <span className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse delay-300" />
                  AI-powered from day one
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative px-6 pb-6">
        <div className="mx-auto max-w-7xl">
          <div className={`rounded-xl glass-white px-8 py-8 transition-all duration-700 card-enter ${isVisible ? 'visible' : ''}`}>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-6">
              <div>
                <h4 className="font-bold text-slate-900 mb-3">Product</h4>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li><a href="#features" className="hover:text-emerald-600 transition-colors">Features</a></li>
                  <li><a href="#pricing" className="hover:text-emerald-600 transition-colors">Pricing</a></li>
                  <li><a href="#integrations" className="hover:text-emerald-600 transition-colors">Integrations</a></li>
                  <li><a href="#" className="hover:text-emerald-600 transition-colors">Changelog</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-slate-900 mb-3">Developers</h4>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li><a href="#" className="hover:text-emerald-600 transition-colors">Documentation</a></li>
                  <li><a href="#" className="hover:text-emerald-600 transition-colors">API Reference</a></li>
                  <li><a href="#" className="hover:text-emerald-600 transition-colors">SDKs</a></li>
                  <li><a href="#" className="hover:text-emerald-600 transition-colors">Status</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-slate-900 mb-3">Company</h4>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li><a href="#" className="hover:text-emerald-600 transition-colors">About</a></li>
                  <li><a href="#" className="hover:text-emerald-600 transition-colors">Careers</a></li>
                  <li><a href="#" className="hover:text-emerald-600 transition-colors">Blog</a></li>
                  <li><a href="#" className="hover:text-emerald-600 transition-colors">Contact</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-slate-900 mb-3">Legal</h4>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li><a href="#" className="hover:text-emerald-600 transition-colors">Privacy</a></li>
                  <li><a href="#" className="hover:text-emerald-600 transition-colors">Terms</a></li>
                  <li><a href="#" className="hover:text-emerald-600 transition-colors">Security</a></li>
                  <li><a href="#" className="hover:text-emerald-600 transition-colors">Cookies</a></li>
                </ul>
              </div>
            </div>
            <div className="border-t border-slate-200/50 pt-6 flex flex-col sm:flex-row items-center justify-between text-sm text-slate-500">
              <p className="font-medium">
                © 2026 <span className="text-emerald-600 font-bold">Dipple</span> Payments. All rights reserved.
              </p>
              <div className="flex items-center gap-6 mt-2 sm:mt-0">
                <span className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
                  Payment infrastructure for Africa.
                </span>
                <span className="hidden sm:inline">|</span>
                <span className="flex items-center gap-2">
                  <span className="text-sm">❤️</span>
                  Built in Africa
                </span>
                <span className="hidden sm:inline">|</span>
                <span className="flex items-center gap-2">
                  <span className="text-sm">🤖</span>
                  AI-powered
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}