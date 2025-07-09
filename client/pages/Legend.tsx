import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Crown, Sword, Shield } from "lucide-react";

export default function Legend() {
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
              className="text-retro-orange font-pixel border-b-2 border-retro-orange"
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
        <div className="max-w-4xl mx-auto">
          <Link
            to="/"
            className="inline-flex items-center text-retro-cyan hover:text-retro-yellow transition-colors mb-8 font-pixel"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>

          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-retro-yellow font-pixel mb-6">
              THE LEGEND
            </h1>
            <p className="text-xl text-retro-orange-light font-pixel max-w-3xl mx-auto">
              From Ancient Rome to the TAO Mesh - The Epic Journey of Bittensaur
              Rex
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="bg-retro-black/50 border-retro-yellow/30 backdrop-blur-sm p-8 text-center">
              <Crown className="w-12 h-12 text-retro-yellow mx-auto mb-4" />
              <h3 className="text-xl font-bold text-retro-yellow font-pixel mb-4">
                ANCIENT ROME
              </h3>
              <p className="text-retro-orange-light font-pixel">
                Born in the eternal city, forged by Stoic philosophy
              </p>
            </Card>

            <Card className="bg-retro-black/50 border-retro-orange/30 backdrop-blur-sm p-8 text-center">
              <Sword className="w-12 h-12 text-retro-orange mx-auto mb-4" />
              <h3 className="text-xl font-bold text-retro-yellow font-pixel mb-4">
                DIGITAL REBIRTH
              </h3>
              <p className="text-retro-orange-light font-pixel">
                Quantum leap into the decentralized future
              </p>
            </Card>

            <Card className="bg-retro-black/50 border-retro-cyan/30 backdrop-blur-sm p-8 text-center">
              <Shield className="w-12 h-12 text-retro-cyan mx-auto mb-4" />
              <h3 className="text-xl font-bold text-retro-yellow font-pixel mb-4">
                TAO MESH
              </h3>
              <p className="text-retro-orange-light font-pixel">
                Apex Stoic Node in the Bittensor network
              </p>
            </Card>
          </div>

          <Card className="bg-retro-black/50 border-retro-yellow/30 backdrop-blur-sm p-12 text-center">
            <h2 className="text-2xl font-bold text-retro-yellow font-pixel mb-6">
              COMING SOON
            </h2>
            <p className="text-lg text-retro-orange-light font-pixel mb-8">
              The full legend of Bittensaur Rex is being forged in the digital
              realm. Witness the transformation from ancient wisdom to quantum
              power.
            </p>
            <Button
              asChild
              className="bg-gradient-to-r from-retro-orange to-retro-yellow text-retro-black font-bold px-8 py-4 text-lg font-pixel hover:from-retro-yellow hover:to-retro-orange-light transition-all duration-300 shadow-xl border-2 border-retro-yellow/50"
            >
              <Link to="/legion">Explore the Legion</Link>
            </Button>
          </Card>
        </div>
      </section>
    </div>
  );
}
