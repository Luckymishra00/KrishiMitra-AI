export default function Footer() {
  return (
    <footer className="bg-[#4F7C0D] dark:bg-slate-900 text-white mt-16 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 py-10">

        <div className="grid md:grid-cols-3 gap-8">

          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold mb-3">
              🌱 KrishiMitra AI
            </h2>

            <p className="text-green-100 dark:text-slate-300">
              AI-powered smart farming platform helping farmers
              detect diseases, monitor weather, and improve crop yield.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-3">
              Quick Links
            </h3>

            <ul className="space-y-2 text-green-100 dark:text-slate-300">
              <li>Home</li>
              <li>Dashboard</li>
              <li>Disease Detection</li>
              <li>Login</li>
            </ul>
          </div>

          {/* Features */}
          <div>
            <h3 className="font-semibold text-lg mb-3">
              Features
            </h3>

            <ul className="space-y-2 text-green-100 dark:text-slate-300">
              <li>🌿 Disease Detection</li>
              <li>🤖 AI Assistant</li>
              <li>☁️ Weather Monitoring</li>
              <li>📈 Market Insights</li>
            </ul>
          </div>

        </div>

        <div className="border-t border-green-600 dark:border-slate-700 mt-8 pt-6 text-center text-green-100 dark:text-slate-300">
          © 2026 KrishiMitra AI. All Rights Reserved.
        </div>

      </div>
    </footer>
  );
}