"use client";

import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Loader from "../../components/Loader";

export default function DiseaseDetection() {
  const [diseases, setDiseases] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/api/diseases")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch diseases");
        }

        return response.json();
      })
      .then((result) => {
        setDiseases(result.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching diseases:", error);
        setError("Unable to connect to the server.");
        setLoading(false);
      });
  }, []);

  return (
    <>
      <Navbar />

      <main className="max-w-6xl mx-auto py-16 px-6">
        <h1 className="text-4xl font-bold mb-8 dark:text-white">
          Crop Disease Detection
        </h1>

        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <input
            type="file"
            className="border p-2 rounded flex-1"
          />

          <button className="bg-green-700 text-white px-6 py-3 rounded hover:bg-green-800 transition">
            Detect Disease
          </button>
        </div>

        <h2 className="text-2xl font-bold mb-6 dark:text-white">
          Available Diseases
        </h2>

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
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {diseases.map((disease) => (
              <div
                key={disease.id}
                className="bg-white dark:bg-slate-800 shadow-lg rounded-xl p-6 hover:shadow-xl transition"
              >
                <h3 className="text-2xl font-bold text-green-700 dark:text-green-400 mb-3">
                  {disease.name}
                </h3>

                <p className="mb-2 dark:text-gray-300">
                  <strong>Crop:</strong> {disease.crop}
                </p>

                <p className="dark:text-gray-300">
                  <strong>Treatment:</strong> {disease.treatment}
                </p>
              </div>
            ))}
          </div>
        )}
      </main>

      <Footer />
    </>
  );
}