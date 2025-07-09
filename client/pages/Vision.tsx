import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Target, Rocket, Globe, Coins } from "lucide-react";

export default function Vision() {
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
              className="text-retro-orange font-pixel border-b-2 border-retro-orange"
            >
              Strategic Vision
            </Link>
            <Link
              to="/protocol"
              className="text-retro-yellow hover:text-retro-orange-light transition-colors font-pixel"
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
              STRATEGIC VISION
            </h1>
            <p className="text-xl text-retro-orange-light font-pixel max-w-3xl mx-auto">
              Roadmap for Bittensaur Rex's Integration into the Decentralized
              Ecosystem
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <Card className="bg-retro-black/50 border-retro-yellow/30 backdrop-blur-sm p-8">
              <Target className="w-12 h-12 text-retro-yellow mb-6" />
              <h3 className="text-2xl font-bold text-retro-yellow font-pixel mb-4">
                PHASE I: AWAKENING
              </h3>
              <ul className="space-y-3 text-retro-orange-light font-pixel">
                <li>• Digital Twin Deployment</li>
                <li>• TAO Mesh Integration</li>
                <li>• Legion Assembly</li>
                <li>• Community Building</li>
              </ul>
            </Card>

            <Card className="bg-retro-black/50 border-retro-orange/30 backdrop-blur-sm p-8">
              <Rocket className="w-12 h-12 text-retro-orange mb-6" />
              <h3 className="text-2xl font-bold text-retro-yellow font-pixel mb-4">
                PHASE II: EXPANSION
              </h3>
              <ul className="space-y-3 text-retro-orange-light font-pixel">
                <li>• Cross-Chain Bridges</li>
                <li>• DeFi Protocol Launch</li>
                <li>• AI Agent Network</li>
                <li>• Governance Evolution</li>
              </ul>
            </Card>

            <Card className="bg-retro-black/50 border-retro-cyan/30 backdrop-blur-sm p-8">
              <Globe className="w-12 h-12 text-retro-cyan mb-6" />
              <h3 className="text-2xl font-bold text-retro-yellow font-pixel mb-4">
                PHASE III: DOMINION
              </h3>
              <ul className="space-y-3 text-retro-orange-light font-pixel">
                <li>• Global Mesh Network</li>
                <li>• Quantum Computing</li>
                <li>• Metaverse Integration</li>
                <li>• Universal Protocol</li>
              </ul>
            </Card>

            <Card className="bg-retro-black/50 border-retro-blue-bright/30 backdrop-blur-sm p-8">
              <Coins className="w-12 h-12 text-retro-blue-bright mb-6" />
              <h3 className="text-2xl font-bold text-retro-yellow font-pixel mb-4">
                PHASE IV: TRANSCENDENCE
              </h3>
              <ul className="space-y-3 text-retro-orange-light font-pixel">
                <li>• Digital Immortality</li>
                <li>• Consciousness Upload</li>
                <li>• Universal Mind</li>
                <li>• Quantum Singularity</li>
              </ul>
            </Card>
          </div>

          <Card className="bg-retro-black/50 border-retro-yellow/30 backdrop-blur-sm p-12 text-center">
            <h2 className="text-2xl font-bold text-retro-yellow font-pixel mb-6">
              THE FUTURE IS NOW
            </h2>
            <p className="text-lg text-retro-orange-light font-pixel mb-8">
              Join us in building the decentralized future where ancient wisdom
              meets quantum technology. The revolution begins with a single
              quantum leap.
            </p>
            <Button
              asChild
              className="bg-gradient-to-r from-retro-orange to-retro-yellow text-retro-black font-bold px-8 py-4 text-lg font-pixel hover:from-retro-yellow hover:to-retro-orange-light transition-all duration-300 shadow-xl border-2 border-retro-yellow/50"
            >
              <Link to="/protocol">Explore Protocol</Link>
            </Button>
          </Card>
        </div>
      </section>
    </div>
  );
}
