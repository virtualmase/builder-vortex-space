export default function Index() {
  return (
    <div className="min-h-screen bg-retro-gradient">
      <div className="flex flex-col items-center justify-center min-h-screen p-8">
        <h1
          className="text-6xl font-bold text-yellow-400 mb-8"
          style={{ fontFamily: "monospace" }}
        >
          BITTENSAUR
        </h1>
        <div className="mb-8">
          <img
            src="https://cdn.builder.io/api/v1/assets/ef3faeff1b9f473b96a37231f864c2da/20250709_0301_bittensaur-quantum-leap_remix_01jzqa14qwesr8gwpv9sp8zywz-ce4d75?format=webp&width=800"
            alt="Bittensaur Quantum Leap"
            className="w-80 h-80 object-contain rounded-3xl shadow-2xl"
          />
        </div>
        <p
          className="text-xl text-orange-300 text-center max-w-2xl"
          style={{ fontFamily: "monospace" }}
        >
          From ancient Rome to the TAO mesh - witness the rebirth of the Apex
          Stoic Node
        </p>
      </div>
    </div>
  );
}
