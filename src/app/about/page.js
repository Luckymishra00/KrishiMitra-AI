import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function About() {
  return (
    <>
      <Navbar />

      <main className="max-w-6xl mx-auto py-16 px-6">
        <h1 className="text-4xl font-bold mb-6 dark:text-white">
          About KrishiMitra AI
        </h1>

        <p className="text-gray-600 dark:text-gray-300">
          KrishiMitra AI is an AI-powered smart farming platform that helps
          farmers detect crop diseases, receive recommendations, monitor weather,
          and improve agricultural productivity.
        </p>
      </main>

      <Footer />
    </>
  );
}