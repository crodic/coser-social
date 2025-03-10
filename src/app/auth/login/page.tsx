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
import { Sparkles } from "lucide-react";

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsLoading(false);
  };

  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 px-4 py-12">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            suppressHydrationWarning
            key={i}
            className="absolute rounded-full bg-white/10 backdrop-blur-sm"
            style={{
              width: Math.random() * 100 + 50,
              height: Math.random() * 100 + 50,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0.1, 0.3, 0.1],
              scale: [1, 1.2, 1],
              x: [0, Math.random() * 50 - 25, 0],
              y: [0, Math.random() * 50 - 25, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Floating characters */}
      <motion.div
        className="absolute top-1/4 left-0 hidden xl:block"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <Image
          src="/demo1 (1).png"
          alt="Anime character"
          width={300}
          height={500}
          className="h-auto w-auto max-w-[300px]"
        />
      </motion.div>

      <motion.div
        className="absolute top-1/3 right-0 hidden xl:block"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
      >
        <Image
          src="/demo1 (2).png"
          alt="Cosplay character"
          width={300}
          height={500}
          className="h-auto w-auto max-w-[300px]"
        />
      </motion.div>

      {/* Login card */}
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
                  <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                  <polyline points="14 2 14 8 20 8" />
                  <path d="M12 18v-6" />
                  <path d="M8 15l4 4 4-4" />
                </svg>
              </motion.div>
              <motion.h1
                className="text-2xl font-bold text-white"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                Welcome Back!
              </motion.h1>
              <motion.p
                className="mt-1 text-sm text-gray-300"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                Log in to your cosplay community account
              </motion.p>
            </div>

            <motion.form
              onSubmit={handleSubmit}
              className="space-y-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <div className="space-y-2">
                <Label htmlFor="email" className="text-gray-200">
                  Email or Username
                </Label>
                <Input
                  id="email"
                  placeholder="Enter your email or username"
                  required
                  className="border-gray-700 bg-gray-800/50 text-white placeholder:text-gray-400 focus-visible:ring-purple-500"
                />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password" className="text-gray-200">
                    Password
                  </Label>
                  <Link href="/forgot-password" className="text-xs text-blue-300 hover:text-blue-200">
                    Forgot password?
                  </Link>
                </div>
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  required
                  className="border-gray-700 bg-gray-800/50 text-white placeholder:text-gray-400 focus-visible:ring-purple-500"
                />
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="remember" />
                <Label htmlFor="remember" className="text-sm text-gray-300">
                  Remember me
                </Label>
              </div>
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 font-medium text-white hover:from-blue-600 hover:to-indigo-700"
                disabled={isLoading}
              >
                {isLoading ? (
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                    className="mr-2 h-4 w-4 rounded-full border-2 border-white border-t-transparent"
                  />
                ) : null}
                {isLoading ? "Logging in..." : "Log In"}
              </Button>

              <div className="relative flex items-center justify-center">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-700"></div>
                </div>
                <div className="relative bg-black/40 px-4 text-xs text-gray-400">Or continue with</div>
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
            </motion.form>

            <motion.p
              className="mt-6 text-center text-sm text-gray-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              Don&apos;t have an account?{" "}
              <Link href="/auth/register" className="font-medium text-blue-300 hover:text-blue-200">
                Sign up
              </Link>
            </motion.p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
