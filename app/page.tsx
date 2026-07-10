export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-center px-6 py-20">
        <span className="rounded-full bg-green-600 px-4 py-2 text-sm font-semibold">
          ✅ Deployment Successful
        </span>

        <h1 className="mt-6 text-center text-5xl font-extrabold">
          🚀 Home Lab Deployment Platform
        </h1>

        <p className="mt-4 max-w-3xl text-center text-lg text-slate-300">
          This application is automatically deployed from GitHub to my Ubuntu
          Server using GitHub Actions, Tailscale, Docker, and Docker Compose.
        </p>

        <div className="mt-8 rounded-xl bg-slate-900 p-6 shadow-xl">
          <h2 className="text-2xl font-bold text-green-400">
            Version 2.0.0
          </h2>

          <p className="mt-2 text-slate-300">
            Successfully deployed on <strong>July 2026</strong>.
          </p>
        </div>

        <div className="mt-12 grid w-full gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-xl border border-slate-700 bg-slate-900 p-6">
            <h3 className="text-xl font-semibold">💻 Development</h3>
            <p className="mt-3 text-slate-400">
              MacBook M1 & Lenovo X1 Carbon used for software development.
            </p>
          </div>

          <div className="rounded-xl border border-slate-700 bg-slate-900 p-6">
            <h3 className="text-xl font-semibold">⚙️ CI/CD</h3>
            <p className="mt-3 text-slate-400">
              GitHub Actions automatically builds and deploys every push to the
              <code className="ml-1 rounded bg-slate-800 px-2 py-1">
                main
              </code>{" "}
              branch.
            </p>
          </div>

          <div className="rounded-xl border border-slate-700 bg-slate-900 p-6">
            <h3 className="text-xl font-semibold">🖥️ Deployment Server</h3>
            <p className="mt-3 text-slate-400">
              Ubuntu Server running Docker, CasaOS, and Tailscale for secure
              deployments.
            </p>
          </div>

          <div className="rounded-xl border border-slate-700 bg-slate-900 p-6">
            <h3 className="text-xl font-semibold">📦 Containers</h3>
            <p className="mt-3 text-slate-400">
              Applications are packaged as Docker containers and managed with
              Docker Compose.
            </p>
          </div>

          <div className="rounded-xl border border-slate-700 bg-slate-900 p-6">
            <h3 className="text-xl font-semibold">🔐 Secure Network</h3>
            <p className="mt-3 text-slate-400">
              Remote access is secured using Tailscale without exposing the
              server directly to the internet.
            </p>
          </div>

          <div className="rounded-xl border border-slate-700 bg-slate-900 p-6">
            <h3 className="text-xl font-semibold">🚀 Future Platform</h3>
            <p className="mt-3 text-slate-400">
              Building a payment orchestration platform for Africa powered by
              Golang, Next.js, PostgreSQL, Redis, Kafka, Kubernetes, and AI.
            </p>
          </div>
        </div>

        <div className="mt-16 rounded-xl border border-green-500 bg-green-950/30 p-6 text-center">
          <h2 className="text-2xl font-bold text-green-400">
            End-to-End CI/CD Pipeline
          </h2>

          <p className="mt-4 text-slate-300">
            MacBook / Lenovo → GitHub → GitHub Actions → Tailscale → Ubuntu
            Server → Docker Compose → Live Application
          </p>
        </div>
      </div>
    </main>
  );
}