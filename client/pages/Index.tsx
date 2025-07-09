import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ChevronRight,
  Zap,
  Shield,
  Coins,
  Users,
  Star,
  ArrowRight,
} from "lucide-react";

export default function Index() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

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
              <img
                src="https://cdn.builder.io/api/v1/assets/ef3faeff1b9f473b96a37231f864c2da/20250709_0301_bittensaur-quantum-leap_remix_01jzqa14qwesr8gwpv9sp8zywz-ce4d75?format=webp&width=800"
                alt="Bittensaur Quantum Leap"
                className="w-96 h-96 object-contain mx-auto rounded-3xl shadow-2xl border-4 border-yellow-400/50"
              />
              <div className="absolute -top-4 -right-4 bg-gradient-to-r from-orange-500 to-yellow-400 px-4 py-2 rounded-full border-2 border-yellow-400/50">
                <span
                  className="text-black font-bold"
                  style={{ fontFamily: "monospace" }}
                >
                  QUANTUM LEAP™
                </span>
              </div>
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
              From ancient Rome to the TAO mesh - witness the rebirth of the
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
              size="lg"
              className="bg-gradient-to-r from-orange-500 to-yellow-400 text-black font-bold px-8 py-4 text-xl hover:from-yellow-400 hover:to-orange-300 transition-all duration-300 shadow-xl border-2 border-yellow-400/50 group"
              style={{ fontFamily: "monospace" }}
            >
              Enter the Mesh
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 text-xl hover:bg-cyan-400 hover:text-black transition-all duration-300 shadow-xl group"
              style={{ fontFamily: "monospace" }}
            >
              Explore Legion
              <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
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
              Harness the ancient wisdom of Rome through cutting-edge blockchain
              technology
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
    </div>
  );
}
