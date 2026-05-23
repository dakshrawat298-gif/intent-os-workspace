"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  ArrowRight,
  Terminal,
  DollarSign,
  Users,
  Cpu,
  Database,
  Network,
  Activity,
  CheckCircle2,
  BarChart3,
  Command
} from "lucide-react";

// --- Constants & Mock Data ---

const LOG_SEQUENCE = [
  "Initializing Intent Engine v2.4...",
  "Parsing natural language request...",
  "Connecting to HydraDB cluster...",
  "Routing to Agent Swarm 01...",
  "Generating UI components...",
  "Compiling dashboard layout...",
  "Establishing real-time data streams...",
  "Finalizing render..."
];

const CHART_DATA = [35, 45, 30, 65, 50, 80, 60, 90, 75, 100];

// --- Main Component ---

export default function IntentOS() {
  const [appState, setAppState] = useState<"initial" | "loading" | "dashboard">("initial");
  const [inputValue, setInputValue] = useState("");
  const [logs, setLogs] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  // Handle the submission of the intent
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim() || appState !== "initial") return;
    setAppState("loading");
    inputRef.current?.blur();
  };

  // Reset the OS
  const handleReset = () => {
    setAppState("initial");
    setInputValue("");
    setLogs([]);
    setTimeout(() => inputRef.current?.focus(), 100);
  };

  // Simulate the Agent Orchestration logs
  useEffect(() => {
    if (appState === "loading") {
      let currentIndex = 0;
      const interval = setInterval(() => {
        if (currentIndex < LOG_SEQUENCE.length) {
          setLogs((prev) => [...prev, LOG_SEQUENCE[currentIndex]]);
          currentIndex++;
        } else {
          clearInterval(interval);
          // Wait a moment after the last log before showing the dashboard
          setTimeout(() => setAppState("dashboard"), 800);
        }
      }, 500);

      return () => clearInterval(interval);
    }
  }, [appState]);

  // Auto-focus input on mount
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <div className="min-h-screen bg-[#050505] text-neutral-200 font-sans overflow-hidden relative selection:bg-white/20">
      {/* --- Background Effects --- */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {/* Subtle Grid */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
        
        {/* Animated Glow Meshes */}
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-20%] left-[-10%] w-[50vw] h-[50vw] bg-indigo-900/20 rounded-full blur-[120px] mix-blend-screen"
        />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-[-20%] right-[-10%] w-[60vw] h-[60vw] bg-purple-900/10 rounded-full blur-[150px] mix-blend-screen"
        />
      </div>

      {/* --- Main Layout Container --- */}
      <div className="relative z-10 flex flex-col items-center w-full min-h-screen p-6 md:p-12">
        
        {/* Top Nav / Logo (Fades in when not initial) */}
        <AnimatePresence>
          {appState !== "initial" && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="absolute top-6 left-6 flex items-center gap-2 cursor-pointer group"
              onClick={handleReset}
            >
              <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                <Command className="w-4 h-4 text-neutral-400 group-hover:text-white transition-colors" />
              </div>
              <span className="font-medium text-sm tracking-wide text-neutral-400 group-hover:text-white transition-colors">
                Intent-OS
              </span>
            </motion.div>
          )}
        </AnimatePresence>

        {/* --- The Intent Bar (Centerpiece) --- */}
        <motion.div
          layout
          transition={{ type: "spring", stiffness: 150, damping: 20, mass: 0.8 }}
          className={`w-full max-w-3xl z-20 flex flex-col ${
            appState === "initial" ? "mt-[35vh]" : "mt-2 md:mt-0"
          }`}
        >
          <AnimatePresence>
            {appState === "initial" && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10, filter: "blur(10px)" }}
                className="text-center mb-8"
              >
                <h1 className="text-4xl md:text-5xl font-light tracking-tight text-white/90 mb-3">
                  What shall we build?
                </h1>
                <p className="text-neutral-500 text-lg">
                  Describe your intent. The swarm will handle the rest.
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          <form onSubmit={handleSubmit} className="relative group w-full">
            {/* Outer Glow Effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500/30 via-purple-500/30 to-pink-500/30 rounded-full blur-xl opacity-0 group-focus-within:opacity-100 transition-opacity duration-700"></div>
            
            {/* Main Input Container */}
            <div className="relative flex items-center bg-[#0a0a0a]/80 border border-white/10 rounded-full backdrop-blur-2xl shadow-[0_8px_32px_rgba(0,0,0,0.5)] group-focus-within:shadow-[0_0_20px_rgba(255,255,255,0.1)] group-focus-within:border-white/20 transition-all duration-500 overflow-hidden">
              <div className="pl-6 pr-3 text-neutral-500 group-focus-within:text-indigo-400 transition-colors">
                <Sparkles className="w-5 h-5" />
              </div>
              <input
                ref={inputRef}
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="e.g., Build a real-time analytics dashboard for my project..."
                className="w-full bg-transparent border-none outline-none py-5 text-lg text-white placeholder:text-neutral-600 focus:ring-0 disabled:opacity-50"
                disabled={appState !== "initial"}
              />
              <div className="pr-3 pl-2">
                <button
                  type="submit"
                  disabled={!inputValue.trim() || appState !== "initial"}
                  className="bg-white/5 hover:bg-white/15 disabled:opacity-0 disabled:pointer-events-none p-3 rounded-full transition-all duration-300 border border-white/5 hover:border-white/10 text-neutral-300 hover:text-white"
                >
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </form>
        </motion.div>

        {/* --- Content Area (Terminal & Dashboard) --- */}
        <div className="w-full max-w-7xl mt-12 flex-1 relative">
          <AnimatePresence mode="wait">
            
            {/* Loading State: Agent Orchestration Terminal */}
            {appState === "loading" && (
              <motion.div
                key="terminal"
                initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}
                transition={{ duration: 0.5 }}
                className="w-full max-w-2xl mx-auto bg-[#0a0a0a]/90 border border-white/10 rounded-2xl backdrop-blur-xl p-6 font-mono text-sm shadow-2xl"
              >
                <div className="flex items-center justify-between mb-6 border-b border-white/10 pb-4">
                  <div className="flex items-center gap-3">
                    <Terminal className="w-4 h-4 text-indigo-400" />
                    <span className="text-neutral-300 font-medium tracking-wider text-xs uppercase">
                      Agent Orchestration
                    </span>
                  </div>
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-white/10"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-white/10"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-white/10"></div>
                  </div>
                </div>
                
                <div className="space-y-3 min-h-[200px]">
                  {logs.map((log, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="flex gap-4 items-start"
                    >
                      <span className="text-neutral-600 shrink-0">
                        [{new Date().toISOString().split("T")[1].slice(0, -1)}]
                      </span>
                      <span className="text-neutral-300">{log}</span>
                      {i < logs.length - 1 && (
                        <CheckCircle2 className="w-4 h-4 text-emerald-500/70 ml-auto shrink-0" />
                      )}
                    </motion.div>
                  ))}
                  {logs.length < LOG_SEQUENCE.length && (
                    <motion.div
                      animate={{ opacity: [0, 1, 0] }}
                      transition={{ repeat: Infinity, duration: 0.8 }}
                      className="w-2 h-4 bg-indigo-400 mt-2 ml-[110px]"
                    />
                  )}
                </div>
              </motion.div>
            )}

            {/* Final State: Generated Dashboard */}
            {appState === "dashboard" && (
              <motion.div
                key="dashboard"
                initial={{ opacity: 0, y: 40, filter: "blur(20px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-full pb-12"
              >
                {/* Column 1: Key Metrics */}
                <div className="space-y-6 flex flex-col">
                  <MetricCard
                    title="Total Revenue"
                    value="$124,592.00"
                    icon={<DollarSign className="w-5 h-5" />}
                    trend="+14.2%"
                    delay={0.1}
                  />
                  <MetricCard
                    title="Active Users"
                    value="8,234"
                    icon={<Users className="w-5 h-5" />}
                    trend="+5.4%"
                    delay={0.2}
                  />
                  <MetricCard
                    title="System Load"
                    value="24%"
                    icon={<Cpu className="w-5 h-5" />}
                    trend="-2.1%"
                    trendDown
                    delay={0.3}
                  />
                </div>

                {/* Column 2: Main Analytics Chart */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="lg:col-span-1 bg-white/[0.02] border border-white/[0.08] rounded-3xl backdrop-blur-2xl p-6 flex flex-col relative overflow-hidden group"
                >
                  <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-indigo-500/5 to-transparent pointer-events-none"></div>
                  
                  <div className="flex items-center justify-between mb-8 relative z-10">
                    <div>
                      <h3 className="text-neutral-400 font-medium text-sm mb-1">Revenue Overview</h3>
                      <div className="text-2xl font-semibold text-white">Real-time</div>
                    </div>
                    <div className="p-2 bg-white/5 rounded-lg border border-white/10">
                      <BarChart3 className="w-5 h-5 text-indigo-400" />
                    </div>
                  </div>

                  <div className="flex-1 flex items-end gap-2 h-48 relative z-10 mt-auto">
                    {CHART_DATA.map((h, i) => (
                      <div key={i} className="flex-1 flex flex-col justify-end h-full group/bar">
                        <motion.div
                          initial={{ height: 0 }}
                          animate={{ height: `${h}%` }}
                          transition={{ delay: 0.5 + i * 0.05, duration: 0.8, type: "spring" }}
                          className="w-full bg-gradient-to-t from-indigo-600/40 to-purple-500/60 rounded-t-md border-t border-white/20 relative group-hover/bar:from-indigo-500/60 group-hover/bar:to-purple-400/80 transition-colors"
                        >
                          {/* Tooltip simulation */}
                          <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black/80 text-xs py-1 px-2 rounded border border-white/10 opacity-0 group-hover/bar:opacity-100 transition-opacity pointer-events-none">
                            {h}k
                          </div>
                        </motion.div>
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* Column 3: System Status & Activity */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="bg-white/[0.02] border border-white/[0.08] rounded-3xl backdrop-blur-2xl p-6 flex flex-col"
                >
                  <h3 className="text-neutral-400 font-medium text-sm mb-6">Live Network Status</h3>
                  <div className="space-y-4 flex-1">
                    <StatusRow icon={<Database />} text="HydraDB Cluster" status="Healthy" color="text-emerald-400" />
                    <StatusRow icon={<Network />} text="Edge Routing" status="Active" color="text-emerald-400" />
                    <StatusRow icon={<Activity />} text="Agent Swarm" status="Processing" color="text-indigo-400" pulse />
                    <StatusRow icon={<Cpu />} text="Compute Nodes" status="Scaling" color="text-amber-400" />
                  </div>
                  
                  <div className="mt-6 pt-6 border-t border-white/5">
                    <div className="flex items-center justify-between text-xs text-neutral-500">
                      <span>Last updated: Just now</span>
                      <span className="flex items-center gap-1">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                        Live
                      </span>
                    </div>
                  </div>
                </motion.div>

              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

// --- Sub Components ---

function MetricCard({
  title,
  value,
  icon,
  trend,
  trendDown = false,
  delay = 0,
}: {
  title: string;
  value: string;
  icon: React.ReactNode;
  trend: string;
  trendDown?: boolean;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
      className="bg-white/[0.02] border border-white/[0.08] rounded-3xl backdrop-blur-2xl p-6 flex-1 flex flex-col justify-between group hover:bg-white/[0.04] transition-colors"
    >
      <div className="flex items-start justify-between mb-4">
        <div className="p-3 bg-white/5 rounded-xl border border-white/10 text-neutral-300 group-hover:text-white group-hover:border-white/20 transition-all">
          {icon}
        </div>
        <div
          className={`text-xs font-medium px-2.5 py-1 rounded-full border ${
            trendDown
              ? "bg-rose-500/10 text-rose-400 border-rose-500/20"
              : "bg-emerald-500/10 text-emerald-400 border-emerald-500/20"
          }`}
        >
          {trend}
        </div>
      </div>
      <div>
        <h4 className="text-neutral-500 text-sm font-medium mb-1">{title}</h4>
        <div className="text-3xl font-semibold text-white tracking-tight">{value}</div>
      </div>
    </motion.div>
  );
}

function StatusRow({
  icon,
  text,
  status,
  color,
  pulse = false,
}: {
  icon: React.ReactNode;
  text: string;
  status: string;
  color: string;
  pulse?: boolean;
}) {
  return (
    <div className="flex items-center justify-between p-3 rounded-xl bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.05] transition-colors">
      <div className="flex items-center gap-3">
        <div className="text-neutral-400 w-5 h-5 [&>svg]:w-full [&>svg]:h-full">{icon}</div>
        <span className="text-neutral-300 text-sm">{text}</span>
      </div>
      <div className="flex items-center gap-2">
        <span className={`text-xs font-medium ${color}`}>{status}</span>
        {pulse && (
          <span className="relative flex h-2 w-2">
            <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-current ${color}`}></span>
            <span className={`relative inline-flex rounded-full h-2 w-2 bg-current ${color}`}></span>
          </span>
        )}
      </div>
    </div>
  );
}