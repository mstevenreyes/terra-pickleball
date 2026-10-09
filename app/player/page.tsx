"use client";

import React from "react";
import { motion } from "framer-motion";

export default function PlayerDashboard() {
  // Staggered animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <div className="min-h-screen bg-stone-950 font-sans text-stone-300 p-4 sm:p-6 lg:p-8">
      
      {/* Top Navigation */}
      <nav className="flex items-center justify-between max-w-6xl mx-auto mb-12 sm:mb-16 pt-4">
        {/* Brand Logo */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex flex-col justify-center"
        >
          <span className="text-xl sm:text-2xl font-black tracking-widest text-white leading-none">TERRA</span>
          <span className="text-[8px] sm:text-[10px] font-bold tracking-[0.4em] text-orange-500 leading-none mt-1 ml-1">PICKLEBALL</span>
        </motion.div>

        {/* Logout Button */}
        <motion.button
          whileHover={{ backgroundColor: "rgba(255,255,255,0.05)" }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2 px-4 py-2 rounded-lg border border-stone-800 text-xs sm:text-sm font-semibold text-stone-300 transition-colors hover:text-white"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" x2="9" y1="12" y2="12"/></svg>
          LOGOUT
        </motion.button>
      </nav>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-6xl mx-auto w-full flex flex-col gap-6 sm:gap-8"
      >
        {/* Welcome Section */}
        <motion.div variants={itemVariants} className="mb-2">
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">
            Welcome back, <span className="text-orange-500">Mark Steven!</span>
          </h1>
          <p className="text-stone-400 text-sm sm:text-base">Here's your player dashboard</p>
        </motion.div>

        {/* Status Card */}
        <motion.div 
          variants={itemVariants}
          className="w-full rounded-2xl border border-stone-800 bg-stone-900/60 p-5 sm:p-6 backdrop-blur-xl shadow-xl shadow-black/40"
        >
          <div className="flex items-center justify-between border-b border-stone-800 pb-4 mb-4">
            <div className="flex items-center gap-2 text-white font-semibold">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-orange-500"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="4"/></svg>
              Status
            </div>
            <div className="flex items-center gap-2 text-xs font-medium text-stone-400 bg-stone-950/50 px-3 py-1.5 rounded-full border border-stone-800">
              <div className="w-2 h-2 rounded-full bg-stone-500"></div>
              Paused
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-stone-950 border border-stone-800">
              <div className="w-3 h-3 rounded-full border-2 border-stone-500"></div>
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold text-white">Not Playing</span>
              <span className="text-sm text-stone-400">Not checked in</span>
            </div>
          </div>
        </motion.div>

        {/* Two Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          
          {/* Profile Card */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col rounded-2xl border border-stone-800 bg-stone-900/60 p-5 sm:p-6 backdrop-blur-xl shadow-xl shadow-black/40"
          >
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2 text-white font-semibold">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-orange-500"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                Profile
              </div>
              <motion.button 
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-stone-800/50 text-xs font-semibold text-stone-300 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/><path d="m15 5 4 4"/></svg>
                Edit
              </motion.button>
            </div>

            <div className="flex items-start gap-4 mb-8">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-stone-800 text-2xl font-bold text-white shadow-inner">
                M
              </div>
              <div className="flex flex-col pt-1">
                <h3 className="text-lg font-bold text-white leading-tight">Mark Steven Reyes</h3>
                <span className="text-sm text-stone-400 mb-2">@mark.steven.reyes</span>
                <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-stone-800 text-orange-400 border border-stone-700/50 w-fit">
                  Beginner
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-4 mb-8">
              <div className="flex items-center gap-3 text-sm text-stone-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-stone-500"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                mstevenreyes@gmail.com
              </div>
              <div className="flex items-center gap-3 text-sm text-stone-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-stone-500"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                09568022028
              </div>
            </div>

            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="mt-auto w-full flex items-center justify-center gap-2 rounded-xl bg-orange-600 px-4 py-3 text-sm font-bold text-white transition-colors hover:bg-orange-700 shadow-lg shadow-orange-900/20"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
              CHANGE PASSWORD
            </motion.button>
          </motion.div>

          {/* Statistics Card */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col rounded-2xl border border-stone-800 bg-stone-900/60 p-5 sm:p-6 backdrop-blur-xl shadow-xl shadow-black/40"
          >
            <div className="flex items-center gap-2 text-white font-semibold mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-orange-500"><line x1="12" x2="12" y1="20" y2="10"/><line x1="18" x2="18" y1="20" y2="4"/><line x1="6" x2="6" y1="20" y2="16"/></svg>
              Statistics
            </div>

            <div className="grid grid-cols-2 gap-4 h-full">
              {/* Total Games Stat */}
              <motion.div 
                whileHover={{ y: -4, backgroundColor: "rgba(28,25,23,1)" }} // stone-950
                className="flex flex-col items-center justify-center rounded-xl bg-stone-950/80 border border-stone-800/80 p-6 transition-colors"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-stone-900 mb-4 border border-stone-800 text-orange-500">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                </div>
                <span className="text-4xl font-bold text-white mb-1">0</span>
                <span className="text-xs sm:text-sm text-stone-400">Total Games</span>
              </motion.div>

              {/* Total Visits Stat */}
              <motion.div 
                whileHover={{ y: -4, backgroundColor: "rgba(28,25,23,1)" }} // stone-950
                className="flex flex-col items-center justify-center rounded-xl bg-stone-950/80 border border-stone-800/80 p-6 transition-colors"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-stone-900 mb-4 border border-stone-800 text-orange-500">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/><path d="m9 16 2 2 4-4"/></svg>
                </div>
                <span className="text-4xl font-bold text-white mb-1">0</span>
                <span className="text-xs sm:text-sm text-stone-400">Total Visits</span>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </motion.div>
    </div>
  );
}