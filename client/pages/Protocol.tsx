import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Database, Shield, Zap, Settings } from "lucide-react";

export default function Protocol() {
  return (
    <div className="min-h-screen bg-retro-gradient relative overflow-hidden">
      <div className="absolute inset-0 bg-pixel-grid opacity-30"></div>

      {/* Navigation */}
      <nav className="relative z-50 px-6 py-4 border-b border-retro-yellow/20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-retro-brown to-retro-brown-light rounded-lg flex items-center justify-center shadow-lg">
              <span className="text-retro-yellow font-bold text-xl">B</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-retro-yellow font-pixel">
                BITTENSAUR
              </h1>
              <p className="text-xs text-retro-orange-light font-pixel">
                QUANTUM LEAP
              </p>
            </div>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/legend"
              className="text-retro-yellow hover:text-retro-orange-light transition-colors font-pixel"
            >
              The Legend
            </Link>
            <Link
              to="/legion"
              className="text-retro-yellow hover:text-retro-orange-light transition-colors font-pixel"
            >
              Rex's Legion
            </Link>
            <Link
              to="/vision"
              className="text-retro-yellow hover:text-retro-orange-light transition-colors font-pixel"
            >
              Strategic Vision
            </Link>
            <Link
              to="/protocol"
              className="text-retro-orange font-pixel border-b-2 border-retro-orange"
            >
              Primal Protocol
            </Link>
          </div>

          <Button className="bg-gradient-to-r from-retro-orange to-retro-yellow text-retro-black font-bold px-6 hover:from-retro-yellow hover:to-retro-orange-light transition-all duration-300 shadow-lg border-2 border-retro-yellow/50">
            Connect Wallet
          </Button>
        </div>
      </nav>

      {/* Content */}
      <section className="relative z-10 px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <Link
            to="/"
            className="inline-flex items-center text-retro-cyan hover:text-retro-yellow transition-colors mb-8 font-pixel"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>

          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-retro-yellow font-pixel mb-6">
              PRIMAL PROTOCOL
            </h1>
            <p className="text-xl text-retro-orange-light font-pixel max-w-3xl mx-auto">
              Regulatory Framework for Decentralized Exchanges and Digital Twins
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <Card className="bg-retro-black/50 border-retro-blue-bright/30 backdrop-blur-sm p-8 text-center hover:border-retro-blue-bright/50 transition-colors">
              <Database className="w-12 h-12 text-retro-blue-bright mx-auto mb-4" />
              <h3 className="text-xl font-bold text-retro-yellow font-pixel mb-4">
                DEX GOVERNANCE
              </h3>
              <p className="text-retro-orange-light font-pixel text-sm">
                Decentralized exchange protocol standards and regulations
              </p>
            </Card>

            <Card className="bg-retro-black/50 border-retro-red/30 backdrop-blur-sm p-8 text-center hover:border-retro-red/50 transition-colors">
              <Shield className="w-12 h-12 text-retro-red mx-auto mb-4" />
              <h3 className="text-xl font-bold text-retro-yellow font-pixel mb-4">
                CEX OVERSIGHT
              </h3>
              <p className="text-retro-orange-light font-pixel text-sm">
                Centralized exchange compliance and security frameworks
              </p>
            </Card>

            <Card className="bg-retro-black/50 border-retro-cyan/30 backdrop-blur-sm p-8 text-center hover:border-retro-cyan/50 transition-colors">
              <Zap className="w-12 h-12 text-retro-cyan mx-auto mb-4" />
              <h3 className="text-xl font-bold text-retro-yellow font-pixel mb-4">
                DIGITAL TWINS
              </h3>
              <p className="text-retro-orange-light font-pixel text-sm">
                Virtual asset representation and management protocols
              </p>
            </Card>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <Card className="bg-retro-black/50 border-retro-yellow/30 backdrop-blur-sm p-8">
              <Settings className="w-12 h-12 text-retro-yellow mb-6" />
              <h3 className="text-2xl font-bold text-retro-yellow font-pixel mb-4">
                CORE PRINCIPLES
              </h3>
              <ul className="space-y-3 text-retro-orange-light font-pixel">
                <li>• Decentralized Governance</li>
                <li>• Stoic Wisdom Integration</li>
                <li>• Quantum Security</li>
                <li>• Universal Compatibility</li>
                <li>• Self-Sovereignty</li>
              </ul>
            </Card>

            <Card className="bg-retro-black/50 border-retro-orange/30 backdrop-blur-sm p-8">
              <Shield className="w-12 h-12 text-retro-orange mb-6" />
              <h3 className="text-2xl font-bold text-retro-yellow font-pixel mb-4">
                SECURITY MODEL
              </h3>
              <ul className="space-y-3 text-retro-orange-light font-pixel">
                <li>• Byzantine Fault Tolerance</li>
                <li>• Zero-Knowledge Proofs</li>
                <li>• Multi-Signature Validation</li>
                <li>• Quantum Encryption</li>
                <li>• Time-Lock Mechanisms</li>
              </ul>
            </Card>
          </div>

          <Card className="bg-retro-black/50 border-retro-yellow/30 backdrop-blur-sm p-12 text-center">
            <h2 className="text-2xl font-bold text-retro-yellow font-pixel mb-6">
              PROTOCOL IMPLEMENTATION
            </h2>
            <p className="text-lg text-retro-orange-light font-pixel mb-8">
              The Primal Protocol establishes the foundational rules for the
              next generation of decentralized finance, ensuring security,
              transparency, and universal access.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                className="bg-gradient-to-r from-retro-orange to-retro-yellow text-retro-black font-bold px-8 py-4 text-lg font-pixel hover:from-retro-yellow hover:to-retro-orange-light transition-all duration-300 shadow-xl border-2 border-retro-yellow/50"
              >
                <Link to="/connect">Join Community</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-2 border-retro-cyan text-retro-cyan px-8 py-4 text-lg font-pixel hover:bg-retro-cyan hover:text-retro-black transition-all duration-300 shadow-xl"
              >
                <Link to="/legend">Read the Legend</Link>
              </Button>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}
