import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function DiseaseDetection() {
  return (
    <>
      <Navbar />

      <main className="max-w-4xl mx-auto py-20 px-6">
        <h1 className="text-4xl font-bold mb-6">
          Crop Disease Detection
        </h1>

        <input type="file" className="mb-4" />

        <button className="bg-green-700 text-white px-6 py-3 rounded">
          Detect Disease
        </button>
      </main>

      <Footer />
    </>
  );
}