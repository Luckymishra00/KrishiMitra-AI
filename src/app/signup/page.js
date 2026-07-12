"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function Signup() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const registerUser = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/auth/register", {
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
        alert("Registration Successful!");
        router.push("/login");
      } else {
        alert(data.message || "Registration Failed");
      }
    } catch (error) {
      alert("Server Error");
      console.error(error);
    }
  };

  return (
    <>
      <Navbar />

      <main className="max-w-md mx-auto py-20 px-6">
        <h1 className="text-3xl font-bold mb-6">
          Sign Up
        </h1>

        <input
          type="text"
          placeholder="Name"
          className="border w-full p-3 mb-4 rounded"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Email"
          className="border w-full p-3 mb-4 rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="border w-full p-3 mb-4 rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={registerUser}
          className="bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded w-full"
        >
          Register
        </button>
      </main>

      <Footer />
    </>
  );
}