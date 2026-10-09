"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from 'next/navigation';

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const router = useRouter();

  return (
    // Replaced fixed centering with a safer scrolling flex layout for mobile devices
    <div className="min-h-[100dvh] w-full bg-stone-950 font-sans flex flex-col items-center py-10 px-4 sm:px-6">
      
      <div className="w-full max-w-lg my-auto flex flex-col items-center">
        {/* Brand Logo */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center mb-6"
        >
          <span className="text-3xl sm:text-4xl font-black tracking-widest text-white leading-none">TERRA</span>
          <span className="text-[10px] sm:text-xs font-bold tracking-[0.4em] text-orange-500 leading-none mt-1 ml-1">PICKLEBALL</span>
        </motion.div>

        {/* Registration Card - Reduced padding and max-width for better fit */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="w-full rounded-2xl sm:rounded-3xl border border-stone-800 bg-stone-900/60 p-6 sm:p-8 backdrop-blur-xl shadow-2xl shadow-black/50"
        >
          <div className="mb-6">
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">Create Account</h2>
            <p className="text-xs sm:text-sm text-stone-400 mt-1">Fill in your details to register as a player</p>
          </div>

          {/* Reduced gap from 5 to 4 to save vertical space */}
          <form className="flex flex-col gap-4">
            
            {/* Row 1: Name */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1">
                <label className="text-[11px] sm:text-xs font-semibold text-stone-300">First Name <span className="text-orange-500">*</span></label>
                <input 
                  type="text" 
                  placeholder="First name"
                  className="w-full rounded-xl border border-stone-700 bg-stone-950/50 px-3 py-2.5 text-sm text-white placeholder-stone-500 transition-colors focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-[11px] sm:text-xs font-semibold text-stone-300">Last Name <span className="text-orange-500">*</span></label>
                <input 
                  type="text" 
                  placeholder="Last name"
                  className="w-full rounded-xl border border-stone-700 bg-stone-950/50 px-3 py-2.5 text-sm text-white placeholder-stone-500 transition-colors focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500"
                />
              </div>
            </div>

            {/* Row 2: Birth Year & Gender */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1">
                <label className="text-[11px] sm:text-xs font-semibold text-stone-300">Birth Year <span className="text-orange-500">*</span></label>
                <input 
                  type="text" 
                  placeholder="e.g. 1990"
                  className="w-full rounded-xl border border-stone-700 bg-stone-950/50 px-3 py-2.5 text-sm text-white placeholder-stone-500 transition-colors focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-[11px] sm:text-xs font-semibold text-stone-300">Gender <span className="text-orange-500">*</span></label>
                <div className="relative">
                  <select defaultValue="" className="w-full appearance-none rounded-xl border border-stone-700 bg-stone-950/50 px-3 py-2.5 text-sm text-stone-300 transition-colors focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500">
                    <option value="" disabled>Select gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                    <option value="prefer-not-to-say">Prefer not to say</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-stone-400">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Row 3: Skill Level */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1 sm:col-span-2">
                <label className="text-[11px] sm:text-xs font-semibold text-stone-300">Skill Level <span className="text-orange-500">*</span></label>
                <div className="relative">
                  <select defaultValue="new" className="w-full appearance-none rounded-xl border border-stone-700 bg-stone-950/50 px-3 py-2.5 text-sm text-stone-300 transition-colors focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500">
                    <option value="new">New (less than 2 months)</option>
                    <option value="beginner">Beginner (2.0 - 2.5)</option>
                    <option value="intermediate">Intermediate (3.0 - 3.5)</option>
                    <option value="advanced">Advanced (4.0+)</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-stone-400">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Row 4: Contact Info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1">
                <label className="text-[11px] sm:text-xs font-semibold text-stone-300">Email</label>
                <input 
                  type="email" 
                  placeholder="Optional"
                  className="w-full rounded-xl border border-stone-700 bg-stone-950/50 px-3 py-2.5 text-sm text-white placeholder-stone-500 transition-colors focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500"
                />
                <span className="text-[9px] sm:text-[10px] text-stone-500 mt-0.5">Can be used to sign in later</span>
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-[11px] sm:text-xs font-semibold text-stone-300">Contact Number</label>
                <input 
                  type="tel" 
                  placeholder="Optional"
                  className="w-full rounded-xl border border-stone-700 bg-stone-950/50 px-3 py-2.5 text-sm text-white placeholder-stone-500 transition-colors focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500"
                />
              </div>
            </div>

            {/* Row 5: Password */}
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2">
                <label className="text-[11px] sm:text-xs font-semibold text-stone-300">Password <span className="text-orange-500">*</span></label>
                <span className="text-[9px] sm:text-[10px] text-stone-500">(min. 6 characters)</span>
              </div>
              <div className="relative">
                <input 
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  className="w-full rounded-xl border border-stone-700 bg-stone-950/50 px-3 py-2.5 text-sm text-white placeholder-stone-500 transition-colors focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500 pr-10"
                />
                <button 
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 flex items-center px-3 text-stone-400 hover:text-stone-200"
                >
                  {showPassword ? (
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9.88 9.88a3 3 0 1 0 4.24 4.24"/><path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"/><path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"/><line x1="2" x2="22" y1="2" y2="22"/></svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>
                  )}
                </button>
              </div>
            </div>

            {/* Row 6: Confirm Password */}
            <div className="flex flex-col gap-1">
              <label className="text-[11px] sm:text-xs font-semibold text-stone-300">Confirm Password <span className="text-orange-500">*</span></label>
              <div className="relative">
                <input 
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Confirm password"
                  className="w-full rounded-xl border border-stone-700 bg-stone-950/50 px-3 py-2.5 text-sm text-white placeholder-stone-500 transition-colors focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500 pr-10"
                />
                <button 
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute inset-y-0 right-0 flex items-center px-3 text-stone-400 hover:text-stone-200"
                >
                  {showConfirmPassword ? (
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9.88 9.88a3 3 0 1 0 4.24 4.24"/><path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"/><path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"/><line x1="2" x2="22" y1="2" y2="22"/></svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>
                  )}
                </button>
              </div>
            </div>

            {/* Submit Action */}
            <div className="mt-2 flex flex-col gap-3 sm:gap-4">
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full flex items-center justify-center gap-2 rounded-xl bg-orange-600 px-4 py-3 text-sm font-bold text-white transition-colors hover:bg-orange-700 shadow-lg shadow-orange-900/20"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><line x1="19" x2="19" y1="8" y2="14"/><line x1="22" x2="16" y1="11" y2="11"/></svg>
                Create Account
              </motion.button>
              
              <p className="text-center text-xs sm:text-sm text-stone-400">
                Already have an account? <a href="#" className="font-semibold text-orange-500 hover:text-orange-400 transition-colors">Sign in</a>
              </p>
            </div>

            <hr className="my-1 sm:my-2 border-stone-800" />

            {/* Back Action */}
            <motion.button 
              whileHover={{ backgroundColor: "rgba(255,255,255,0.05)" }}
              whileTap={{ scale: 0.98 }}
              onClick={() => router.push('/')}
              type="button"
              className="w-full flex items-center justify-center gap-2 rounded-xl border border-stone-700/50 bg-stone-900/50 px-4 py-2.5 sm:py-3 text-sm font-semibold text-stone-300 transition-colors hover:text-white"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg>
              Back to Home
            </motion.button>

          </form>
        </motion.div>
      </div>
    </div>
  );
}