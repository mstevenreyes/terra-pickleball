"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from 'next/navigation';

export default function TerraLogin() {
  const [showPassword, setShowPassword] = useState(false);
 const router = useRouter()

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-stone-950 font-sans px-4 sm:px-6 overflow-hidden">
      
      {/* Ambient Dark Background mimicking the Terra Pickleball landing page */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.img
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 0.2, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          src="https://images.unsplash.com/photo-1703376827787-899a034ac43e?q=80&w=2000&auto=format&fit=crop"
          alt="Pickleball Court Background"
          className="w-full h-full object-cover blur-sm"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-stone-950/70 via-stone-950/90 to-stone-950"></div>
      </div>

      <div className="relative z-10 w-full max-w-[440px] flex flex-col items-center">
        
        {/* Brand Logo (Matches Terra Pickleball Navigation) */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-10 flex flex-col items-center justify-center pt-1"
        >
          <span className="text-4xl font-black tracking-widest text-white leading-none">TERRA</span>
          <span className="text-[11px] font-bold tracking-[0.4em] text-white/90 leading-none mt-1 ml-0.5">PICKLEBALL</span>
        </motion.div>

        {/* Login Card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="w-full bg-stone-900/70 backdrop-blur-xl border border-stone-800 rounded-2xl shadow-2xl p-8"
        >
          
          {/* Header */}
          <div className="mb-6">
            <h1 className="text-[22px] font-bold text-white tracking-tight">Login</h1>
            <p className="text-[13px] text-stone-400 mt-1">Enter your credentials to access your account</p>
          </div>

          <form className="flex flex-col gap-5" onSubmit={(e) => e.preventDefault()}>
            
            {/* Username / Email Input */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="username" className="text-[13px] font-semibold text-stone-300">
                Username or Email
              </label>
              <input
                type="text"
                id="username"
                placeholder="Username or Email"
                className="w-full bg-stone-950/50 border border-stone-800 rounded-lg px-4 py-3 text-sm text-white placeholder:text-stone-600 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all"
              />
            </div>

            {/* Password Input */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="password" className="text-[13px] font-semibold text-stone-300">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  placeholder="Password"
                  className="w-full bg-stone-950/50 border border-stone-800 rounded-lg pl-4 pr-10 py-3 text-sm text-white placeholder:text-stone-600 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-500 hover:text-stone-300 transition-colors p-1"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    {showPassword ? (
                      <>
                        <path d="M9.88 9.88a3 3 0 1 0 4.24 4.24"/>
                        <path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"/>
                        <path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"/>
                        <line x1="2" y1="2" x2="22" y2="22"/>
                      </>
                    ) : (
                      <>
                        <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/>
                        <circle cx="12" cy="12" r="3"/>
                      </>
                    )}
                  </svg>
                </button>
              </div>
            </div>

            {/* Sign In Button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={()=> router.push('/player')}
              type="submit"
              className="mt-2 flex items-center justify-center gap-2 w-full bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-lg py-3 transition-colors shadow-lg shadow-orange-900/20"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/><polyline points="10 17 15 12 10 7"/><line x1="15" x2="3" y1="12" y2="12"/></svg>
              Sign In
            </motion.button>
          </form>

          {/* Divider */}
          <div className="my-6 border-t border-stone-800"></div>

          {/* Links & Navigation */}
          <div className="flex flex-col items-center gap-4">
            <p className="text-[13px] text-stone-400">
              Don't have an account yet?{" "}
              <a href="#" className="font-semibold text-orange-500 hover:text-orange-400 transition-colors">
                Create now!
              </a>
            </p>

            <motion.button 
              whileHover={{ scale: 1.02, backgroundColor: "rgba(28, 25, 23, 0.8)" }} 
              whileTap={{ scale: 0.98 }}
              onClick={() => router.push('/')}
              className="flex items-center justify-center gap-2 w-full bg-stone-900/50 border border-stone-800 text-stone-300 font-medium text-[13px] rounded-lg py-3 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>
              Back to Home
            </motion.button>
          </div>
          
        </motion.div>
      </div>
    </div>
  );
}