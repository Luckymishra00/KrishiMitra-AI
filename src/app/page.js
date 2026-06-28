"use client";

import { useEffect, useState } from "react";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import FeatureCard from "../components/FeatureCard";
import Footer from "../components/Footer";
import Loader from "../components/Loader";
import {
  MapPin,
  Thermometer,
  Droplets,
  Wind,
  Sun,
} from "lucide-react";

import {
  Leaf,
  Bot,
  CloudRain,
  TrendingUp,
} from "lucide-react";



import WeatherCard from "../components/WeatherCard";

export default function Home() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const weatherCards = weather
  ? [
      {
        title: "Location",
        value: weather.location,
        subtitle: "Uttarakhand, India",
        image: "/weather/location.jpg",
        icon: <MapPin size={34} />,
      },
      {
        title: "Temperature",
        value: weather.temperature,
        subtitle: "Feels Pleasant",
        image: "/weather/temperature.jpg",
        icon: <Thermometer size={34} />,
      },
      {
        title: "Humidity",
        value: weather.humidity,
        subtitle: "Healthy Moisture",
        image: "/weather/humidity.jpg",
        icon: <Droplets size={34} />,
      },
      {
        title: "Wind Speed",
        value: weather.windSpeed,
        subtitle: "Light Breeze",
        image: "/weather/wind.jpg",
        icon: <Wind size={34} />,
      },
      {
        title: "Condition",
        value: weather.condition,
        subtitle: "Perfect for Farming",
        image: "/weather/condition.jpg",
        icon: <Sun size={34} />,
      },
    ]
  : [];

  useEffect(() => {
    fetch("http://localhost:5000/api/weather")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch weather");
        }
        return res.json();
      })
      .then((data) => {
        setWeather(data.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching weather:", err);
        setError("Unable to connect to the server.");
        setLoading(false);
      });
  }, []);

  return (
    <>
      <Navbar />

      <Hero />

      {/* Weather Section */}
      <section className="max-w-7xl mx-auto px-6 py-15">

        <h2 className="text-4xl md:text-5xl font-bold text-center dark:text-white">
           Current Weather
        </h2>
        <div className="flex justify-center items-center gap-3 mt-4 mb-8">
  <div className="h-[2px] w-12 bg-green-600"></div>

  <span className="text-green-600 text-xl">🌿</span>

  <div className="h-[2px] w-12 bg-green-600"></div>
</div>

        <p className="text-center text-gray-600 dark:text-gray-300 mt-4 mb-12 text-lg">
Real-time weather insights for smarter farming decisions and improved crop management.
        </p>

        {loading ? (
          <Loader />
        ) : error ? (
          <div className="text-center py-10">
            <h2 className="text-2xl font-bold text-red-600">
              {error}
            </h2>

            <p className="text-gray-600 dark:text-gray-300 mt-2">
              Please try again later.
            </p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 xl:grid-cols-5 gap-8">
  {weatherCards.map((card) => (
    <WeatherCard
      key={card.title}
      image={card.image}
      icon={card.icon}
      title={card.title}
      value={card.value}
      subtitle={card.subtitle}
    />
  ))}
</div>
        )}
      </section>

      {/* Features */}
<section className="max-w-7xl mx-auto py-16 px-6">
  <h2 className="text-5xl font-bold text-center dark:text-white">
    Our Features
  </h2>

  {/* Green Divider */}
  <div className="flex items-center justify-center gap-4 my-5">
    <div className="w-16 h-1 bg-green-600 rounded-full"></div>

    <span className="text-2xl">🌿</span>

    <div className="w-16 h-1 bg-green-600 rounded-full"></div>
  </div>

  <p className="text-center text-gray-600 dark:text-gray-300 text-xl mb-16">
    Powerful tools and intelligent solutions to help farmers grow better and smarter.
  </p>

  <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">

    <FeatureCard
      icon={<Leaf size={45} />}
      title="Crop Disease Detection"
      description="Upload crop images and detect diseases instantly using AI-powered analysis."
    />

    <FeatureCard
      icon={<Bot size={45} />}
      title="AI Farming Assistant"
      description="Receive intelligent farming recommendations and expert agricultural guidance."
    />

    <FeatureCard
      icon={<CloudRain size={45} />}
      title="Weather Monitoring"
      description="Track real-time weather updates and receive alerts for better crop planning."
    />

    <FeatureCard
      icon={<TrendingUp size={45} />}
      title="Market Insights"
      description="Monitor crop prices, demand trends, and market opportunities."
    />

  </div>

</section>
      <Footer />
    </>
  );
}