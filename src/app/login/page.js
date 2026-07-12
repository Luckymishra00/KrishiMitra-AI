"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

import {
  Mail,
  LockKeyhole,
  Eye,
  EyeOff,
  ArrowRight,
} from "lucide-react";

export default function Login() {
  const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginUser = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem("token", data.token);

        alert("Login Successful!");

        router.push("/dashboard");
      } else {
        alert(data.message || "Login Failed");
      }
    } catch (error) {
      console.error(error);
      alert("Server Error");
    }
  };

  return (
    <>
      <Navbar />

      <section className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-100 flex items-center justify-center px-6 py-20">
        <div className="max-w-6xl w-full bg-white rounded-3xl shadow-2xl overflow-hidden grid lg:grid-cols-2">

          {/* Left Side */}

          <div className="hidden lg:flex relative">
            <img
              src="/login/farmer-login.jpg"
              alt="Farmer"
              className="absolute inset-0 w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-black/35"></div>

            <div className="absolute bottom-10 left-10 z-10 text-white">
              <h2 className="text-4xl font-bold">
                Welcome to
              </h2>

              <h1 className="text-5xl font-extrabold mt-2">
                KrishiMitra AI
              </h1>

              <p className="mt-5 text-lg leading-8 text-green-100 max-w-md">
                Smart farming begins with intelligent decisions.
                Manage crops, detect diseases and monitor weather
                using AI.
              </p>
            </div>
          </div>

          {/* Right Side */}

          <div className="p-10 lg:p-16 flex flex-col justify-center">

            <h2 className="text-5xl font-bold text-slate-900">
              Welcome Back 👋
            </h2>

            <p className="text-gray-500 mt-3 mb-10 text-lg">
              Login to continue using KrishiMitra AI.
            </p>

            {/* Email */}

            <div className="relative mb-6">

              <Mail
                className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400"
                size={22}
              />

              <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-xl border border-gray-300 py-4 pl-14 pr-4 outline-none transition focus:border-green-600 focus:ring-4 focus:ring-green-100"
              />

            </div>

            {/* Password */}

            <div className="relative mb-5">

              <LockKeyhole
                className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400"
                size={22}
              />

              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full rounded-xl border border-gray-300 py-4 pl-14 pr-14 outline-none transition focus:border-green-600 focus:ring-4 focus:ring-green-100"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-500"
              >
                {showPassword ? (
                  <EyeOff size={22} />
                ) : (
                  <Eye size={22} />
                )}
              </button>

            </div>

            {/* Remember + Forgot */}

            <div className="flex items-center justify-between mb-8">

              <label className="flex items-center gap-2 text-gray-600">

                <input
                  type="checkbox"
                  className="accent-green-700 w-4 h-4"
                />

                Remember Me

              </label>

              <button className="text-green-700 hover:underline font-medium">
                Forgot Password?
              </button>

            </div>

            {/* Login */}

            <button
              onClick={loginUser}
              className="w-full bg-green-700 hover:bg-green-800 transition text-white py-4 rounded-xl text-lg font-semibold shadow-lg flex items-center justify-center gap-3"
            >
              Login
              <ArrowRight size={20} />
            </button>

            {/* Register */}

            <p className="text-center text-gray-500 mt-8">
              Don't have an account?

              <span
                onClick={() => router.push("/signup")}
                className="text-green-700 font-semibold ml-2 cursor-pointer hover:underline"
              >
                Register
              </span>

            </p>

          </div>

        </div>

      </section>

      <Footer />
    </>
  );
}