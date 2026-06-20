import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function Signup() {
  return (
    <>
      <Navbar />

      <main className="max-w-md mx-auto py-20 px-6">
        <h1 className="text-3xl font-bold mb-6">
          Sign Up
        </h1>

        <input className="border w-full p-3 mb-4" placeholder="Name" />
        <input className="border w-full p-3 mb-4" placeholder="Email" />
        <input className="border w-full p-3 mb-4" placeholder="Password" />

        <button className="bg-green-700 text-white px-6 py-3 rounded">
          Register
        </button>
      </main>

      <Footer />
    </>
  );
}