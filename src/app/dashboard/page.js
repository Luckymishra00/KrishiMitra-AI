import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function Dashboard() {
  return (
    <>
      <Navbar />

      <main className="max-w-6xl mx-auto py-16 px-6">
        <h1 className="text-4xl font-bold mb-8 dark:text-white">
          Farmer Dashboard
        </h1>

        <div className="grid md:grid-cols-3 gap-6">

          <div className="bg-white dark:bg-slate-800 shadow-lg rounded-xl p-6">
            <h2 className="text-4xl font-bold text-green-700 dark:text-green-400">
              120
            </h2>

            <p className="mt-2 text-gray-600 dark:text-gray-300">
              Total Farmers
            </p>
          </div>

          <div className="bg-white dark:bg-slate-800 shadow-lg rounded-xl p-6">
            <h2 className="text-4xl font-bold text-green-700 dark:text-green-400">
              35
            </h2>

            <p className="mt-2 text-gray-600 dark:text-gray-300">
              Diseases Detected
            </p>
          </div>

          <div className="bg-white dark:bg-slate-800 shadow-lg rounded-xl p-6">
            <h2 className="text-4xl font-bold text-green-700 dark:text-green-400">
              5
            </h2>

            <p className="mt-2 text-gray-600 dark:text-gray-300">
              Weather Alerts
            </p>
          </div>

        </div>
      </main>

      <Footer />
    </>
  );
}