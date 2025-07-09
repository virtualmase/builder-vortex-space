export default function Index() {
  const features = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Quantum Leap Protocol",
      description:
        "Revolutionary blockchain technology that transcends traditional limitations",
      color: "from-retro-blue-bright to-retro-cyan",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Apex Stoic Node",
      description:
        "Immutable wisdom meets decentralized power in the TAO mesh network",
      color: "from-retro-orange to-retro-yellow",
    },
    {
      icon: <Coins className="w-8 h-8" />,
      title: "Digital Twin Economy",
      description:
        "Bridge ancient legacy with futuristic digital asset management",
      color: "from-retro-red to-retro-orange",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Rex's Legion",
      description:
        "Join the army of specialized agents in the Bittensor alliance",
      color: "from-retro-purple to-retro-blue",
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
            className="absolute w-1 h-1 bg-retro-cyan animate-pulse"
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
      <nav className="relative z-50 px-6 py-4 border-b border-retro-yellow/20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
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
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#legend"
              className="text-retro-yellow hover:text-retro-orange-light transition-colors font-pixel"
            >
              The Legend
            </a>
            <a
              href="#legion"
              className="text-retro-yellow hover:text-retro-orange-light transition-colors font-pixel"
            >
              Rex's Legion
            </a>
            <a
              href="#vision"
              className="text-retro-yellow hover:text-retro-orange-light transition-colors font-pixel"
            >
              Strategic Vision
            </a>
            <a
              href="#protocol"
              className="text-retro-yellow hover:text-retro-orange-light transition-colors font-pixel"
            >
              Primal Protocol
            </a>
          </div>

          <Button className="bg-gradient-to-r from-retro-orange to-retro-yellow text-retro-black font-bold px-6 hover:from-retro-yellow hover:to-retro-orange-light transition-all duration-300 shadow-lg border-2 border-retro-yellow/50">
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
                className="w-96 h-96 object-contain mx-auto rounded-3xl shadow-2xl border-4 border-retro-yellow/50"
              />
              <div className="absolute -top-4 -right-4 bg-gradient-to-r from-retro-orange to-retro-yellow px-4 py-2 rounded-full border-2 border-retro-yellow/50">
                <span className="text-retro-black font-bold font-pixel">
                  QUANTUM LEAP™
                </span>
              </div>
            </div>
          </div>

          {/* Hero Text */}
          <div className="space-y-6 mb-12">
            <h1 className="text-6xl md:text-8xl font-bold text-retro-yellow font-pixel leading-tight">
              BITTENSAUR
              <span className="block text-4xl md:text-6xl text-retro-orange-light mt-2">
                DIGITAL TWIN
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-retro-orange-light max-w-4xl mx-auto font-pixel leading-relaxed">
              From ancient Rome to the TAO mesh - witness the rebirth of the
              <span className="text-retro-cyan font-bold">
                {" "}
                Apex Stoic Node
              </span>{" "}
              in the decentralized future
            </p>

            <div className="flex flex-wrap justify-center gap-4 pt-6">
              <Badge
                variant="secondary"
                className="bg-retro-blue-bright/20 text-retro-cyan border-retro-cyan/50 px-4 py-2 text-lg font-pixel"
              >
                <Coins className="w-4 h-4 mr-2" />
                Bitcoin Integration
              </Badge>
              <Badge
                variant="secondary"
                className="bg-retro-red/20 text-retro-orange border-retro-orange/50 px-4 py-2 text-lg font-pixel"
              >
                <Zap className="w-4 h-4 mr-2" />
                TAO Mesh Network
              </Badge>
              <Badge
                variant="secondary"
                className="bg-retro-purple/20 text-retro-yellow border-retro-yellow/50 px-4 py-2 text-lg font-pixel"
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
              className="bg-gradient-to-r from-retro-orange to-retro-yellow text-retro-black font-bold px-8 py-4 text-xl font-pixel hover:from-retro-yellow hover:to-retro-orange-light transition-all duration-300 shadow-xl border-2 border-retro-yellow/50 group"
            >
              Enter the Mesh
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="border-2 border-retro-cyan text-retro-cyan px-8 py-4 text-xl font-pixel hover:bg-retro-cyan hover:text-retro-black transition-all duration-300 shadow-xl group"
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
                className="bg-retro-black/50 border-retro-yellow/30 backdrop-blur-sm p-6 text-center hover:border-retro-orange/50 transition-colors duration-300"
              >
                <div className="flex justify-center mb-3 text-retro-cyan">
                  {stat.icon}
                </div>
                <div className="text-2xl md:text-3xl font-bold text-retro-yellow font-pixel">
                  {stat.value}
                </div>
                <div className="text-sm text-retro-orange-light font-pixel mt-1">
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
            <h2 className="text-4xl md:text-6xl font-bold text-retro-yellow font-pixel mb-4">
              LEGENDARY POWERS
            </h2>
            <p className="text-xl text-retro-orange-light font-pixel max-w-3xl mx-auto">
              Harness the ancient wisdom of Rome through cutting-edge blockchain
              technology
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="bg-retro-black/50 border-retro-yellow/30 backdrop-blur-sm p-8 hover:border-retro-orange/50 transition-all duration-300 cursor-pointer group"
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div
                  className={`w-16 h-16 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 text-retro-black group-hover:scale-110 transition-transform duration-300`}
                >
                  {feature.icon}
                </div>

                <h3 className="text-xl font-bold text-retro-yellow font-pixel mb-4">
                  {feature.title}
                </h3>

                <p className="text-retro-orange-light font-pixel leading-relaxed">
                  {feature.description}
                </p>

                <div
                  className={`mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${hoveredCard === index ? "opacity-100" : ""}`}
                >
                  <Button
                    variant="ghost"
                    className="text-retro-cyan hover:text-retro-yellow p-0 font-pixel"
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
