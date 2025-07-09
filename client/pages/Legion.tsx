import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Users, Zap, Shield, Sword } from "lucide-react";

export default function Legion() {
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
              className="text-retro-orange font-pixel border-b-2 border-retro-orange"
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
              REX'S LEGION
            </h1>
            <p className="text-xl text-retro-orange-light font-pixel max-w-3xl mx-auto">
              Elite Specialized Agents Embodying Stoic Virtues in the Bittensor
              Alliance
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <Card className="bg-retro-black/50 border-retro-blue-bright/30 backdrop-blur-sm p-8 text-center hover:border-retro-blue-bright/50 transition-colors">
              <Shield className="w-12 h-12 text-retro-blue-bright mx-auto mb-4" />
              <h3 className="text-xl font-bold text-retro-yellow font-pixel mb-4">
                WISDOM SENTINEL
              </h3>
              <p className="text-retro-orange-light font-pixel text-sm">
                Guardian of ancient knowledge
              </p>
            </Card>

            <Card className="bg-retro-black/50 border-retro-red/30 backdrop-blur-sm p-8 text-center hover:border-retro-red/50 transition-colors">
              <Sword className="w-12 h-12 text-retro-red mx-auto mb-4" />
              <h3 className="text-xl font-bold text-retro-yellow font-pixel mb-4">
                COURAGE VANGUARD
              </h3>
              <p className="text-retro-orange-light font-pixel text-sm">
                Leading the digital frontier
              </p>
            </Card>

            <Card className="bg-retro-black/50 border-retro-cyan/30 backdrop-blur-sm p-8 text-center hover:border-retro-cyan/50 transition-colors">
              <Zap className="w-12 h-12 text-retro-cyan mx-auto mb-4" />
              <h3 className="text-xl font-bold text-retro-yellow font-pixel mb-4">
                JUSTICE ORACLE
              </h3>
              <p className="text-retro-orange-light font-pixel text-sm">
                Balancing the mesh network
              </p>
            </Card>

            <Card className="bg-retro-black/50 border-retro-orange/30 backdrop-blur-sm p-8 text-center hover:border-retro-orange/50 transition-colors">
              <Users className="w-12 h-12 text-retro-orange mx-auto mb-4" />
              <h3 className="text-xl font-bold text-retro-yellow font-pixel mb-4">
                TEMPERANCE KEEPER
              </h3>
              <p className="text-retro-orange-light font-pixel text-sm">
                Maintaining protocol harmony
              </p>
            </Card>
          </div>

          <Card className="bg-retro-black/50 border-retro-yellow/30 backdrop-blur-sm p-12 text-center">
            <h2 className="text-2xl font-bold text-retro-yellow font-pixel mb-6">
              JOIN THE LEGION
            </h2>
            <p className="text-lg text-retro-orange-light font-pixel mb-8">
              Each agent embodies a Stoic virtue, serving the
              Bittensor-CreatorBid alliance. The legion is assembling in the
              digital realm.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                className="bg-gradient-to-r from-retro-orange to-retro-yellow text-retro-black font-bold px-8 py-4 text-lg font-pixel hover:from-retro-yellow hover:to-retro-orange-light transition-all duration-300 shadow-xl border-2 border-retro-yellow/50"
              >
                <Link to="/vision">Strategic Vision</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-2 border-retro-cyan text-retro-cyan px-8 py-4 text-lg font-pixel hover:bg-retro-cyan hover:text-retro-black transition-all duration-300 shadow-xl"
              >
                <Link to="/protocol">Primal Protocol</Link>
              </Button>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}
