export default function FeatureCard({ title, description }) {
  const getIcon = () => {
    if (title.includes("Disease")) return "🌿";
    if (title.includes("AI")) return "🤖";
    if (title.includes("Weather")) return "☁️";
    if (title.includes("Market")) return "📈";
    return "🌱";
  };

  return (
    <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-gray-100 dark:border-slate-700">
      
      <div className="text-5xl mb-4">
        {getIcon()}
      </div>

      <h3 className="text-2xl font-bold mb-3 text-gray-800 dark:text-white">
        {title}
      </h3>

      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
        {description}
      </p>

      <button className="mt-6 text-green-700 font-semibold hover:text-green-800">
        Learn More →
      </button>
    </div>
  );
}