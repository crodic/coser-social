"use client";

import type React from "react";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Sparkles, Star } from "lucide-react";

export default function RegisterPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [step, setStep] = useState(1);
  const totalSteps = 2;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (step < totalSteps) {
      setStep(step + 1);
      return;
    }

    setIsLoading(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsLoading(false);
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  // Animation variants for the form steps
  const formVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -50 },
  };

  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-blue-900 via-indigo-800 to-blue-800 px-4 py-12">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-white/20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              fontSize: `${Math.random() * 20 + 10}px`,
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0.1, 0.5, 0.1],
              scale: [1, 1.5, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: Math.random() * 10 + 5,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          >
            <Star />
          </motion.div>
        ))}

        {/* Floating particles */}
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute h-2 w-2 rounded-full bg-white/30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, Math.random() * -100 - 50],
              x: [0, (Math.random() - 0.5) * 50],
              opacity: [0, 0.5, 0],
              scale: [0, Math.random() + 0.5, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeOut",
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      {/* Floating characters */}
      <motion.div
        className="absolute bottom-0 left-0 hidden xl:block"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <Image
          src="/demo1 (1).png"
          alt="Anime character"
          width={250}
          height={400}
          className="h-auto w-auto max-w-[250px]"
        />
      </motion.div>

      <motion.div
        className="absolute right-0 bottom-0 hidden xl:block"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
      >
        <Image
          src="/demo1 (2).png"
          alt="Cosplay character"
          width={250}
          height={400}
          className="h-auto w-auto max-w-[250px]"
        />
      </motion.div>

      {/* Register card */}
      <motion.div
        className="relative z-10 w-full max-w-md"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="overflow-hidden rounded-2xl bg-black/40 backdrop-blur-xl">
          <div className="relative p-6 sm:p-8">
            {/* Sparkle effects */}
            <motion.div
              className="absolute top-4 right-4 text-blue-400"
              animate={{
                rotate: [0, 15, -15, 0],
                scale: [1, 1.2, 0.8, 1],
              }}
              transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY }}
            >
              <Sparkles className="h-6 w-6" />
            </motion.div>

            <div className="mb-6 text-center">
              <motion.div
                className="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-indigo-500"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6 text-white"
                >
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </motion.div>
              <motion.h1
                className="text-2xl font-bold text-white"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                Join the Cosplay Community
              </motion.h1>
              <motion.p
                className="mt-1 text-sm text-gray-300"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                Create your account in just a few steps
              </motion.p>
            </div>

            {/* Progress indicator */}
            <div className="mb-6">
              <div className="flex justify-between">
                {[...Array(totalSteps)].map((_, i) => (
                  <motion.div
                    key={i}
                    className={`flex h-8 w-8 items-center justify-center rounded-full ${
                      i + 1 === step
                        ? "bg-gradient-to-r from-blue-500 to-indigo-500 text-white"
                        : i + 1 < step
                          ? "bg-blue-700 text-white"
                          : "bg-gray-800 text-gray-400"
                    }`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => i + 1 < step && setStep(i + 1)}
                  >
                    {i + 1}
                  </motion.div>
                ))}
              </div>
              <div className="relative mt-2">
                <div className="absolute h-1 w-full rounded bg-gray-800"></div>
                <motion.div
                  className="absolute h-1 rounded bg-gradient-to-r from-blue-500 to-indigo-500"
                  initial={{ width: "0%" }}
                  animate={{ width: `${((step - 1) / (totalSteps - 1)) * 100}%` }}
                  transition={{ duration: 0.3 }}
                ></motion.div>
              </div>
            </div>

            <motion.form
              onSubmit={handleSubmit}
              className="space-y-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              {step === 1 && (
                <motion.div
                  className="space-y-4"
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={formVariants}
                  transition={{ duration: 0.3 }}
                >
                  <div className="space-y-2">
                    <Label htmlFor="username" className="text-gray-200">
                      Username
                    </Label>
                    <Input
                      id="username"
                      placeholder="Choose a unique username"
                      required
                      className="border-gray-700 bg-gray-800/50 text-white placeholder:text-gray-400 focus-visible:ring-purple-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-gray-200">
                      Email
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email address"
                      required
                      className="border-gray-700 bg-gray-800/50 text-white placeholder:text-gray-400 focus-visible:ring-purple-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="password" className="text-gray-200">
                      Password
                    </Label>
                    <Input
                      id="password"
                      type="password"
                      placeholder="Create a strong password"
                      required
                      className="border-gray-700 bg-gray-800/50 text-white placeholder:text-gray-400 focus-visible:ring-purple-500"
                    />
                  </div>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div
                  className="space-y-4"
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={formVariants}
                  transition={{ duration: 0.3 }}
                >
                  <div className="space-y-2">
                    <Label htmlFor="displayName" className="text-gray-200">
                      Display Name
                    </Label>
                    <Input
                      id="displayName"
                      placeholder="How you'll appear to others"
                      required
                      className="border-gray-700 bg-gray-800/50 text-white placeholder:text-gray-400 focus-visible:ring-purple-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-gray-200">Interests (select at least one)</Label>
                    <div className="grid grid-cols-2 gap-2">
                      {["Anime", "Manga", "Cosplay", "Gaming", "Art", "Conventions"].map((interest) => (
                        <div key={interest} className="flex items-center space-x-2">
                          <Checkbox id={interest.toLowerCase()} />
                          <Label htmlFor={interest.toLowerCase()} className="text-sm text-gray-300">
                            {interest}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="terms" required />
                    <Label htmlFor="terms" className="text-sm text-gray-300">
                      I agree to the{" "}
                      <Link href="/terms" className="text-blue-300 hover:text-blue-200">
                        Terms of Service
                      </Link>{" "}
                      and{" "}
                      <Link href="/privacy" className="text-blue-300 hover:text-blue-200">
                        Privacy Policy
                      </Link>
                    </Label>
                  </div>
                </motion.div>
              )}

              <div className="flex gap-2">
                {step > 1 && (
                  <Button
                    type="button"
                    variant="outline"
                    className="flex-1 border-gray-700 bg-gray-800/50 text-white hover:bg-gray-700"
                    onClick={handleBack}
                  >
                    Back
                  </Button>
                )}
                <Button
                  type="submit"
                  className="flex-1 bg-gradient-to-r from-blue-500 to-indigo-600 font-medium text-white hover:from-blue-600 hover:to-indigo-700"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                      className="mr-2 h-4 w-4 rounded-full border-2 border-white border-t-transparent"
                    />
                  ) : null}
                  {isLoading ? "Creating Account..." : step < totalSteps ? "Continue" : "Create Account"}
                </Button>
              </div>

              {step === 1 && (
                <>
                  <div className="relative flex items-center justify-center">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-gray-700"></div>
                    </div>
                    <div className="relative bg-black/40 px-4 text-xs text-gray-400">Or sign up with</div>
                  </div>

                  <div className="grid grid-cols-3 gap-2">
                    <Button variant="outline" className="border-gray-700 bg-gray-800/50 text-white hover:bg-gray-700">
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M22.258 1H2.742C1.781 1 1 1.781 1 2.742v18.516C1 22.219 1.781 23 2.742 23h9.796v-8.458h-2.66v-3.315h2.66V8.042c0-2.863 1.822-4.41 4.418-4.41 1.255 0 2.33.093 2.645.134v3.06h-1.815c-1.423 0-1.7.675-1.7 1.665v2.335h3.396l-.443 3.315h-2.953V23h5.791c.96 0 1.742-.781 1.742-1.742V2.742C24 1.781 23.219 1 22.258 1z" />
                      </svg>
                    </Button>
                    <Button variant="outline" className="border-gray-700 bg-gray-800/50 text-white hover:bg-gray-700">
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                      </svg>
                    </Button>
                    <Button variant="outline" className="border-gray-700 bg-gray-800/50 text-white hover:bg-gray-700">
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path
                          fillRule="evenodd"
                          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </Button>
                  </div>
                </>
              )}
            </motion.form>

            <motion.p
              className="mt-6 text-center text-sm text-gray-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              Already have an account?{" "}
              <Link href="/auth/login" className="font-medium text-blue-300 hover:text-blue-200">
                Log in
              </Link>
            </motion.p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
