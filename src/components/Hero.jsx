export default function Hero() {
  return (
    <section className="bg-[#F8F3E8] dark:bg-slate-900 py-20">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">

        {/* Left Content */}
        <div>
          <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold">
            🌱 AI-Powered Agriculture Platform
          </span>

          <h1 className="text-5xl lg:text-6xl font-bold text-green-800 dark:text-white mt-6 leading-tight">
            Smart Farming <br />
            With Artificial Intelligence
          </h1>

          <p className="text-gray-600 dark:text-gray-300 text-lg mt-6">
            Detect crop diseases, receive AI-powered recommendations,
            monitor weather conditions, and improve farming decisions
            using KrishiMitra AI.
          </p>

          <div className="flex flex-wrap gap-4 mt-8">
            <button className="bg-green-700 text-white px-6 py-3 rounded-xl hover:bg-green-800 transition">
              Get Started
            </button>

            <button className="border border-green-700 text-green-700 dark:text-green-300 px-6 py-3 rounded-xl hover:bg-green-50 transition">
              Learn More
            </button>
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-3 gap-6 mt-12">
            <div>
              <h3 className="text-3xl font-bold text-green-700">95%</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Accuracy
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-green-700">50K+</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Farmers
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-green-700">24/7</h3>
              <p className="text-gray-500 dark:text-gray-400">
                AI Support
              </p>
            </div>
          </div>
        </div>

        {/* Right Side Image */}
        <div className="flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=800"
            alt="Smart Farming"
            className="rounded-3xl shadow-2xl w-full max-w-lg"
          />
        </div>

      </div>
    </section>
  );
}