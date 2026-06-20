import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function Login() {
  return (
    <>
      <Navbar />

      <main className="max-w-md mx-auto py-20 px-6">
        <h1 className="text-3xl font-bold mb-6 dark:text-white">
          Login
        </h1>

        <input
          className="
            w-full
            p-3
            mb-4
            rounded-lg
            border
            border-gray-300
            bg-white
            text-black
            placeholder-gray-500
            dark:bg-slate-800
            dark:text-white
            dark:placeholder-gray-400
            dark:border-slate-600
          "
          placeholder="Email"
        />

        <input
          type="password"
          className="
            w-full
            p-3
            mb-4
            rounded-lg
            border
            border-gray-300
            bg-white
            text-black
            placeholder-gray-500
            dark:bg-slate-800
            dark:text-white
            dark:placeholder-gray-400
            dark:border-slate-600
          "
          placeholder="Password"
        />

        <button className="bg-green-700 text-white px-6 py-3 rounded-lg hover:bg-green-800">
          Login
        </button>
      </main>

      <Footer />
    </>
  );
}