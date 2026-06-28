"use client";

import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Loader from "../../components/Loader";

export default function Dashboard() {
  const [dashboardData, setDashboardData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/api/dashboard")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch dashboard");
        }
        return res.json();
      })
      .then((data) => {
        setDashboardData(data.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching dashboard:", err);
        setError("Unable to connect to the server.");
        setLoading(false);
      });
  }, []);

  return (
    <>
      <Navbar />

      <main className="max-w-6xl mx-auto py-16 px-6">
        <h1 className="text-4xl font-bold mb-8 dark:text-white">
          Farmer Dashboard
        </h1>

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
          <div className="grid md:grid-cols-3 gap-6">

            <div className="bg-white dark:bg-slate-800 shadow-lg rounded-xl p-6">
              <h2 className="text-4xl font-bold text-green-700 dark:text-green-400">
                {dashboardData.totalFarmers}
              </h2>

              <p className="mt-2 text-gray-600 dark:text-gray-300">
                Total Farmers
              </p>
            </div>

            <div className="bg-white dark:bg-slate-800 shadow-lg rounded-xl p-6">
              <h2 className="text-4xl font-bold text-green-700 dark:text-green-400">
                {dashboardData.diseasesDetected}
              </h2>

              <p className="mt-2 text-gray-600 dark:text-gray-300">
                Diseases Detected
              </p>
            </div>

            <div className="bg-white dark:bg-slate-800 shadow-lg rounded-xl p-6">
              <h2 className="text-4xl font-bold text-green-700 dark:text-green-400">
                {dashboardData.weatherAlerts}
              </h2>

              <p className="mt-2 text-gray-600 dark:text-gray-300">
                Weather Alerts
              </p>
            </div>

          </div>
        )}
      </main>

      <Footer />
    </>
  );
}