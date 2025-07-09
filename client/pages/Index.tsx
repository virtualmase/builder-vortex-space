import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Loading } from "@/components/ui/loading";
import {
  ChevronRight,
  Zap,
  Shield,
  Coins,
  Users,
  Star,
  ArrowRight,
  AlertCircle,
} from "lucide-react";

export default function Index() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [imageLoading, setImageLoading] = useState(true);
  const [imageError, setImageError] = useState(false);

  const features = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Quantum Leap Protocol",
      description:
        "Revolutionary blockchain technology that transcends traditional limitations",
      color: "from-blue-400 to-cyan-400",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Apex Stoic Node",
      description:
        "Immutable wisdom meets decentralized power in the TAO mesh network",
      color: "from-orange-400 to-yellow-400",
    },
    {
      icon: <Coins className="w-8 h-8" />,
      title: "Digital Twin Economy",
      description:
        "Bridge ancient legacy with futuristic digital asset management",
      color: "from-red-400 to-orange-400",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Rex's Legion",
      description:
        "Join the army of specialized agents in the Bittensor alliance",
      color: "from-purple-400 to-blue-400",
    },
  ];

  const stats = [
    {
      label: "Total Value Locked",
      value: "∞ TAO",
      icon: <Star className="w-5 h-5" />,
    },
    {
      label: "Active Nodes",
      value: "65,536",
      icon: <Zap className="w-5 h-5" />,
    },
    {
      label: "Legion Members",
      value: "142,857",
      icon: <Users className="w-5 h-5" />,
    },
    {
      label: "Quantum Leaps",
      value: "∞",
      icon: <Shield className="w-5 h-5" />,
    },
  ];

  return (
    <div className="min-h-screen bg-retro-gradient relative overflow-hidden">
      {/* Pixel Grid Overlay */}
      <div className="absolute inset-0 bg-pixel-grid opacity-30"></div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 px-6 py-4 border-b border-yellow-400/20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-orange-700 to-orange-600 rounded-lg flex items-center justify-center shadow-lg">
              <span className="text-yellow-400 font-bold text-xl">B</span>
            </div>
            <div>
              <h1
                className="text-2xl font-bold text-yellow-400"
                style={{ fontFamily: "monospace" }}
              >
                BITTENSAUR
              </h1>
              <p
                className="text-xs text-orange-300"
                style={{ fontFamily: "monospace" }}
              >
                QUANTUM LEAP
              </p>
            </div>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/legend"
              className="text-yellow-400 hover:text-orange-300 transition-colors"
              style={{ fontFamily: "monospace" }}
            >
              The Legend
            </Link>
            <Link
              to="/legion"
              className="text-yellow-400 hover:text-orange-300 transition-colors"
              style={{ fontFamily: "monospace" }}
            >
              Rex's Legion
            </Link>
            <Link
              to="/vision"
              className="text-yellow-400 hover:text-orange-300 transition-colors"
              style={{ fontFamily: "monospace" }}
            >
              Strategic Vision
            </Link>
            <Link
              to="/protocol"
              className="text-yellow-400 hover:text-orange-300 transition-colors"
              style={{ fontFamily: "monospace" }}
            >
              Primal Protocol
            </Link>
          </div>

          <Button className="bg-gradient-to-r from-orange-500 to-yellow-400 text-black font-bold px-6 hover:from-yellow-400 hover:to-orange-300 transition-all duration-300 shadow-lg border-2 border-yellow-400/50">
            Connect Wallet
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 px-6 py-20">
        <div className="max-w-7xl mx-auto text-center">
          {/* Main Character Image */}
          <div className="mb-8 relative">
            <div className="inline-block relative">
              {imageLoading && (
                <div className="w-96 h-96 rounded-3xl border-4 border-yellow-400/50 flex items-center justify-center bg-black/50">
                  <Loading size="lg" text="Loading Bittensaur..." />
                </div>
              )}
              {imageError && (
                <div className="w-96 h-96 rounded-3xl border-4 border-red-400/50 flex items-center justify-center bg-black/50">
                  <div className="text-center">
                    <AlertCircle className="w-16 h-16 text-red-400 mx-auto mb-4" />
                    <p className="text-red-400 font-mono">
                      Failed to load image
                    </p>
                  </div>
                </div>
              )}
              <img
                src="https://cdn.builder.io/api/v1/assets/ef3faeff1b9f473b96a37231f864c2da/20250709_0301_bittensaur-quantum-leap_remix_01jzqa14qwesr8gwpv9sp8zywz-ce4d75?format=webp&width=800"
                alt="Bittensaur Quantum Leap - Digital Twin Dinosaur with Bitcoin Integration"
                className={`w-96 h-96 object-contain mx-auto rounded-3xl shadow-2xl border-4 border-yellow-400/50 transition-opacity duration-500 ${
                  imageLoading ? "opacity-0 absolute" : "opacity-100"
                }`}
                onLoad={() => setImageLoading(false)}
                onError={() => {
                  setImageLoading(false);
                  setImageError(true);
                }}
                loading="eager"
              />
              {!imageLoading && !imageError && (
                <div className="absolute -top-4 -right-4 bg-gradient-to-r from-orange-500 to-yellow-400 px-4 py-2 rounded-full border-2 border-yellow-400/50 animate-pulse">
                  <span
                    className="text-black font-bold"
                    style={{ fontFamily: "monospace" }}
                  >
                    QUANTUM LEAP™
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* Hero Text */}
          <div className="space-y-6 mb-12">
            <h1
              className="text-6xl md:text-8xl font-bold text-yellow-400 leading-tight"
              style={{ fontFamily: "monospace" }}
            >
              BITTENSAUR
              <span className="block text-4xl md:text-6xl text-orange-300 mt-2">
                DIGITAL TWIN
              </span>
            </h1>

            <p
              className="text-xl md:text-2xl text-orange-300 max-w-4xl mx-auto leading-relaxed"
              style={{ fontFamily: "monospace" }}
            >
              From ancient Rome to the TAO mesh — witness the rebirth of the
              <span className="text-cyan-400 font-bold">
                {" "}
                Apex Stoic Node
              </span>{" "}
              in the decentralized future
            </p>

            <div className="flex flex-wrap justify-center gap-4 pt-6">
              <Badge
                variant="secondary"
                className="bg-blue-400/20 text-cyan-400 border-cyan-400/50 px-4 py-2 text-lg"
                style={{ fontFamily: "monospace" }}
              >
                <Coins className="w-4 h-4 mr-2" />
                Bitcoin Integration
              </Badge>
              <Badge
                variant="secondary"
                className="bg-red-400/20 text-orange-400 border-orange-400/50 px-4 py-2 text-lg"
                style={{ fontFamily: "monospace" }}
              >
                <Zap className="w-4 h-4 mr-2" />
                TAO Mesh Network
              </Badge>
              <Badge
                variant="secondary"
                className="bg-purple-400/20 text-yellow-400 border-yellow-400/50 px-4 py-2 text-lg"
                style={{ fontFamily: "monospace" }}
              >
                <Shield className="w-4 h-4 mr-2" />
                Stoic Wisdom
              </Badge>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-orange-500 to-yellow-400 text-black font-bold px-8 py-4 text-xl hover:from-yellow-400 hover:to-orange-300 transition-all duration-300 shadow-xl border-2 border-yellow-400/50 group hover:scale-105 transform"
              style={{ fontFamily: "monospace" }}
            >
              <Link to="/legion">
                Enter the Mesh
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 text-xl hover:bg-cyan-400 hover:text-black transition-all duration-300 shadow-xl group hover:scale-105 transform"
              style={{ fontFamily: "monospace" }}
            >
              <Link to="/legend">
                Discover the Legend
                <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative z-10 px-6 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <Card
                key={index}
                className="bg-black/50 border-yellow-400/30 backdrop-blur-sm p-6 text-center hover:border-orange-400/50 transition-colors duration-300"
              >
                <div className="flex justify-center mb-3 text-cyan-400">
                  {stat.icon}
                </div>
                <div
                  className="text-2xl md:text-3xl font-bold text-yellow-400"
                  style={{ fontFamily: "monospace" }}
                >
                  {stat.value}
                </div>
                <div
                  className="text-sm text-orange-300 mt-1"
                  style={{ fontFamily: "monospace" }}
                >
                  {stat.label}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative z-10 px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2
              className="text-4xl md:text-6xl font-bold text-yellow-400 mb-4"
              style={{ fontFamily: "monospace" }}
            >
              LEGENDARY POWERS
            </h2>
            <p
              className="text-xl text-orange-300 max-w-3xl mx-auto"
              style={{ fontFamily: "monospace" }}
            >
              Harness ancient Stoic wisdom through cutting-edge quantum
              blockchain technology
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="bg-black/50 border-yellow-400/30 backdrop-blur-sm p-8 hover:border-orange-400/50 transition-all duration-300 cursor-pointer group"
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div
                  className={`w-16 h-16 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 text-black group-hover:scale-110 transition-transform duration-300`}
                >
                  {feature.icon}
                </div>

                <h3
                  className="text-xl font-bold text-yellow-400 mb-4"
                  style={{ fontFamily: "monospace" }}
                >
                  {feature.title}
                </h3>

                <p
                  className="text-orange-300 leading-relaxed"
                  style={{ fontFamily: "monospace" }}
                >
                  {feature.description}
                </p>

                <div
                  className={`mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${hoveredCard === index ? "opacity-100" : ""}`}
                >
                  <Button
                    variant="ghost"
                    className="text-cyan-400 hover:text-yellow-400 p-0"
                    style={{ fontFamily: "monospace" }}
                  >
                    Learn More
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 bg-black/80 border-t border-yellow-400/20 mt-20">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Company Info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-br from-orange-700 to-orange-600 rounded-lg flex items-center justify-center">
                  <span className="text-yellow-400 font-bold">B</span>
                </div>
                <h3
                  className="text-xl font-bold text-yellow-400"
                  style={{ fontFamily: "monospace" }}
                >
                  BITTENSAUR
                </h3>
              </div>
              <p
                className="text-orange-300 text-sm leading-relaxed"
                style={{ fontFamily: "monospace" }}
              >
                The premier digital twin platform bridging ancient Stoic wisdom
                with quantum blockchain technology. From Rome to the TAO mesh -
                experience the future of decentralized AI and cryptocurrency
                innovation.
              </p>
              <div className="flex space-x-4">
                <Button
                  variant="outline"
                  size="sm"
                  className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black"
                >
                  Twitter
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black"
                >
                  Discord
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black"
                >
                  GitHub
                </Button>
              </div>
            </div>

            {/* Products & Services */}
            <div className="space-y-4">
              <h4
                className="text-lg font-bold text-yellow-400"
                style={{ fontFamily: "monospace" }}
              >
                PRODUCTS & SERVICES
              </h4>
              <ul
                className="space-y-2 text-orange-300 text-sm"
                style={{ fontFamily: "monospace" }}
              >
                <li>
                  <Link
                    to="/legend"
                    className="hover:text-yellow-400 transition-colors"
                  >
                    Digital Twin Technology
                  </Link>
                </li>
                <li>
                  <Link
                    to="/legion"
                    className="hover:text-yellow-400 transition-colors"
                  >
                    AI Agent Network
                  </Link>
                </li>
                <li>
                  <Link
                    to="/protocol"
                    className="hover:text-yellow-400 transition-colors"
                  >
                    Blockchain Protocol
                  </Link>
                </li>
                <li>
                  <Link
                    to="/vision"
                    className="hover:text-yellow-400 transition-colors"
                  >
                    TAO Mesh Integration
                  </Link>
                </li>
                <li>
                  <Link
                    to="/connect"
                    className="hover:text-yellow-400 transition-colors"
                  >
                    Bittensor Network
                  </Link>
                </li>
                <li className="hover:text-yellow-400 transition-colors cursor-pointer">
                  Stoic Wisdom Engine
                </li>
                <li className="hover:text-yellow-400 transition-colors cursor-pointer">
                  Quantum Computing
                </li>
                <li className="hover:text-yellow-400 transition-colors cursor-pointer">
                  DeFi Solutions
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div className="space-y-4">
              <h4
                className="text-lg font-bold text-yellow-400"
                style={{ fontFamily: "monospace" }}
              >
                RESOURCES
              </h4>
              <ul
                className="space-y-2 text-orange-300 text-sm"
                style={{ fontFamily: "monospace" }}
              >
                <li className="hover:text-yellow-400 transition-colors cursor-pointer">
                  Documentation
                </li>
                <li className="hover:text-yellow-400 transition-colors cursor-pointer">
                  API Reference
                </li>
                <li className="hover:text-yellow-400 transition-colors cursor-pointer">
                  Developer Guide
                </li>
                <li className="hover:text-yellow-400 transition-colors cursor-pointer">
                  White Paper
                </li>
                <li className="hover:text-yellow-400 transition-colors cursor-pointer">
                  Research Papers
                </li>
                <li className="hover:text-yellow-400 transition-colors cursor-pointer">
                  Blog & News
                </li>
                <li className="hover:text-yellow-400 transition-colors cursor-pointer">
                  Community Forum
                </li>
                <li className="hover:text-yellow-400 transition-colors cursor-pointer">
                  Help Center
                </li>
              </ul>
            </div>

            {/* Legal & Security */}
            <div className="space-y-4">
              <h4
                className="text-lg font-bold text-yellow-400"
                style={{ fontFamily: "monospace" }}
              >
                LEGAL & SECURITY
              </h4>
              <ul
                className="space-y-2 text-orange-300 text-sm"
                style={{ fontFamily: "monospace" }}
              >
                <li className="hover:text-yellow-400 transition-colors cursor-pointer">
                  Privacy Policy
                </li>
                <li className="hover:text-yellow-400 transition-colors cursor-pointer">
                  Terms of Service
                </li>
                <li className="hover:text-yellow-400 transition-colors cursor-pointer">
                  Cookie Policy
                </li>
                <li className="hover:text-yellow-400 transition-colors cursor-pointer">
                  Security Audits
                </li>
                <li className="hover:text-yellow-400 transition-colors cursor-pointer">
                  Compliance
                </li>
                <li className="hover:text-yellow-400 transition-colors cursor-pointer">
                  Bug Bounty
                </li>
                <li className="hover:text-yellow-400 transition-colors cursor-pointer">
                  Risk Disclosure
                </li>
                <li className="hover:text-yellow-400 transition-colors cursor-pointer">
                  Regulatory Info
                </li>
              </ul>
            </div>
          </div>

          {/* SEO Keywords Section */}
          <div className="border-t border-yellow-400/20 pt-8 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h5
                  className="text-md font-bold text-yellow-400 mb-3"
                  style={{ fontFamily: "monospace" }}
                >
                  BLOCKCHAIN & CRYPTOCURRENCY
                </h5>
                <p
                  className="text-orange-300 text-xs leading-relaxed"
                  style={{ fontFamily: "monospace" }}
                >
                  Bitcoin integration, TAO token, Bittensor network,
                  decentralized finance (DeFi), cryptocurrency trading,
                  blockchain protocol, smart contracts, digital assets, crypto
                  wallet, mining, staking, yield farming, liquidity pools, NFTs,
                  Web3.
                </p>
              </div>
              <div>
                <h5
                  className="text-md font-bold text-yellow-400 mb-3"
                  style={{ fontFamily: "monospace" }}
                >
                  AI & TECHNOLOGY
                </h5>
                <p
                  className="text-orange-300 text-xs leading-relaxed"
                  style={{ fontFamily: "monospace" }}
                >
                  Artificial intelligence, machine learning, neural networks,
                  quantum computing, digital twins, AI agents, autonomous
                  systems, computer vision, natural language processing, deep
                  learning, edge computing, IoT integration, cloud computing,
                  cybersecurity.
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="border-t border-yellow-400/20 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div
              className="text-orange-300 text-sm mb-4 md:mb-0"
              style={{ fontFamily: "monospace" }}
            >
              © 2024 Bittensaur Technologies. All rights reserved.
              <span className="block md:inline md:ml-2">
                Digital Twin • Quantum Leap • Stoic Protocol
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <span
                className="text-orange-300 text-xs"
                style={{ fontFamily: "monospace" }}
              >
                Powered by TAO Mesh
              </span>
              <div className="flex items-center space-x-1">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span
                  className="text-green-400 text-xs"
                  style={{ fontFamily: "monospace" }}
                >
                  Network Active
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
