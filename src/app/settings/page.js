"use client";

import { useState } from "react";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

import {
  Button,
  Input,
  Modal,
  Toast,
  Loader,
} from "../../components/ui";

export default function Settings() {
  const [showModal, setShowModal] = useState(false);
  const [showToast, setShowToast] = useState(false);

  return (
    <>
      <Navbar />

      <main className="max-w-4xl mx-auto py-16 px-6">
        <h1 className="text-4xl font-bold mb-8">
          UI Component Showcase
        </h1>

        <div className="space-y-6">
          <Button variant="primary">Primary Button</Button>

          <Button variant="secondary">
            Secondary Button
          </Button>

          <Button variant="outline">
            Outline Button
          </Button>

          <Input
            label="Email"
            placeholder="Enter your email"
          />

          <Button onClick={() => setShowModal(true)}>
            Open Modal
          </Button>

          <Button
            onClick={() => {
              setShowToast(true);

              setTimeout(() => {
                setShowToast(false);
              }, 3000);
            }}
          >
            Show Toast
          </Button>

          <Loader />
        </div>

        <Modal
          isOpen={showModal}
          onClose={() => setShowModal(false)}
          title="Demo Modal"
        >
          <p>This is a reusable modal component.</p>
        </Modal>

        {showToast && (
          <Toast message="Settings saved successfully!" />
        )}
      </main>

      <Footer />
    </>
  );
}