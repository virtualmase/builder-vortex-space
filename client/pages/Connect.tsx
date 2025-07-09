import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  ArrowLeft,
  Twitter,
  MessageCircle,
  Github,
  Globe,
  Users,
  Zap,
} from "lucide-react";

export default function Connect() {
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
              CONNECT
            </h1>
            <p className="text-xl text-retro-orange-light font-pixel max-w-3xl mx-auto">
              Join the Bittensaur Community - Links to Social Media Platforms
              and Hubs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <Card className="bg-retro-black/50 border-retro-blue-bright/30 backdrop-blur-sm p-8 text-center hover:border-retro-blue-bright/50 transition-all duration-300 cursor-pointer group">
              <Twitter className="w-12 h-12 text-retro-blue-bright mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-retro-yellow font-pixel mb-4">
                TWITTER / X
              </h3>
              <p className="text-retro-orange-light font-pixel text-sm mb-4">
                Follow for real-time updates and announcements
              </p>
              <Button
                variant="outline"
                className="border-retro-blue-bright text-retro-blue-bright hover:bg-retro-blue-bright hover:text-retro-black font-pixel"
              >
                Follow
              </Button>
            </Card>

            <Card className="bg-retro-black/50 border-retro-red/30 backdrop-blur-sm p-8 text-center hover:border-retro-red/50 transition-all duration-300 cursor-pointer group">
              <MessageCircle className="w-12 h-12 text-retro-red mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-retro-yellow font-pixel mb-4">
                DISCORD
              </h3>
              <p className="text-retro-orange-light font-pixel text-sm mb-4">
                Join the legion for discussions and community events
              </p>
              <Button
                variant="outline"
                className="border-retro-red text-retro-red hover:bg-retro-red hover:text-retro-black font-pixel"
              >
                Join
              </Button>
            </Card>

            <Card className="bg-retro-black/50 border-retro-cyan/30 backdrop-blur-sm p-8 text-center hover:border-retro-cyan/50 transition-all duration-300 cursor-pointer group">
              <Github className="w-12 h-12 text-retro-cyan mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-retro-yellow font-pixel mb-4">
                GITHUB
              </h3>
              <p className="text-retro-orange-light font-pixel text-sm mb-4">
                Explore the protocol and contribute to development
              </p>
              <Button
                variant="outline"
                className="border-retro-cyan text-retro-cyan hover:bg-retro-cyan hover:text-retro-black font-pixel"
              >
                Explore
              </Button>
            </Card>

            <Card className="bg-retro-black/50 border-retro-yellow/30 backdrop-blur-sm p-8 text-center hover:border-retro-yellow/50 transition-all duration-300 cursor-pointer group">
              <Globe className="w-12 h-12 text-retro-yellow mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-retro-yellow font-pixel mb-4">
                WEBSITE
              </h3>
              <p className="text-retro-orange-light font-pixel text-sm mb-4">
                Official portal for all Bittensaur information
              </p>
              <Button
                variant="outline"
                className="border-retro-yellow text-retro-yellow hover:bg-retro-yellow hover:text-retro-black font-pixel"
              >
                Visit
              </Button>
            </Card>

            <Card className="bg-retro-black/50 border-retro-orange/30 backdrop-blur-sm p-8 text-center hover:border-retro-orange/50 transition-all duration-300 cursor-pointer group">
              <Users className="w-12 h-12 text-retro-orange mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-retro-yellow font-pixel mb-4">
                COMMUNITY
              </h3>
              <p className="text-retro-orange-light font-pixel text-sm mb-4">
                Connect with fellow legion members worldwide
              </p>
              <Button
                variant="outline"
                className="border-retro-orange text-retro-orange hover:bg-retro-orange hover:text-retro-black font-pixel"
              >
                Connect
              </Button>
            </Card>

            <Card className="bg-retro-black/50 border-retro-purple/30 backdrop-blur-sm p-8 text-center hover:border-retro-purple/50 transition-all duration-300 cursor-pointer group">
              <Zap className="w-12 h-12 text-retro-purple mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-retro-yellow font-pixel mb-4">
                TAO NETWORK
              </h3>
              <p className="text-retro-orange-light font-pixel text-sm mb-4">
                Access the Bittensor mesh and stake TAO
              </p>
              <Button
                variant="outline"
                className="border-retro-purple text-retro-purple hover:bg-retro-purple hover:text-retro-black font-pixel"
              >
                Stake
              </Button>
            </Card>
          </div>

          <Card className="bg-retro-black/50 border-retro-yellow/30 backdrop-blur-sm p-12 text-center">
            <h2 className="text-2xl font-bold text-retro-yellow font-pixel mb-6">
              JOIN THE REVOLUTION
            </h2>
            <p className="text-lg text-retro-orange-light font-pixel mb-8">
              Become part of the digital twin evolution. Connect with the
              community and help shape the future of decentralized AI and
              blockchain technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-gradient-to-r from-retro-orange to-retro-yellow text-retro-black font-bold px-8 py-4 text-lg font-pixel hover:from-retro-yellow hover:to-retro-orange-light transition-all duration-300 shadow-xl border-2 border-retro-yellow/50">
                Get Started
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-2 border-retro-cyan text-retro-cyan px-8 py-4 text-lg font-pixel hover:bg-retro-cyan hover:text-retro-black transition-all duration-300 shadow-xl"
              >
                <Link to="/">Back to Home</Link>
              </Button>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}
