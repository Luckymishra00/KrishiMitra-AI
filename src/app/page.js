import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import FeatureCard from "../components/FeatureCard";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <Hero />

      <section className="max-w-7xl mx-auto py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-10 dark:text-white">
          Our Features
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <FeatureCard
            title="Crop Disease Detection"
            description="Upload crop images and detect diseases instantly."
          />

          <FeatureCard
            title="AI Farming Assistant"
            description="Get smart farming recommendations powered by AI."
          />

          <FeatureCard
            title="Weather Monitoring"
            description="Track weather conditions and receive alerts."
          />

          <FeatureCard
            title="Market Insights"
            description="Monitor crop pricing and market trends."
          />
        </div>
      </section>

      <Footer />
    </>
  );
}