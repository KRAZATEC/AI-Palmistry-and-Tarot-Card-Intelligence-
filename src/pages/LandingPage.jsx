import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const LandingPage = () => {
  const { isAuthenticated } = useAuth();

  const features = [
    {
      icon: "🖐️",
      title: "AI Palm Analysis",
      description:
        "Upload your palm image and get AI-powered insights about your life line, heart line, fate line and more.",
    },
    {
      icon: "🎴",
      title: "Tarot Reading",
      description:
        "Choose from multiple tarot spreads and receive personalized interpretations.",
    },
    {
      icon: "🧠",
      title: "Personality Intelligence",
      description:
        "Deep personality profiling using AI-powered palmistry and tarot.",
    },
    {
      icon: "📊",
      title: "Life Trend Analysis",
      description:
        "Track your spiritual journey and discover opportunities.",
    },
    {
      icon: "💡",
      title: "Personalized Guidance",
      description:
        "Receive AI-generated recommendations for your life.",
    },
    {
      icon: "📈",
      title: "Insight Dashboard",
      description:
        "Monitor your readings and spiritual progress over time.",
    },
  ];

  const spreads = [
    { name: "Single Card", emoji: "🃏", desc: "Quick Daily Insight" },
    { name: "Three Card", emoji: "🎴", desc: "Past • Present • Future" },
    { name: "Relationship", emoji: "💕", desc: "Love Reading" },
    { name: "Career", emoji: "💼", desc: "Professional Path" },
    { name: "Celtic Cross", emoji: "✝️", desc: "Deep Reading" },
    { name: "Life Path", emoji: "🌟", desc: "Soul Journey" },
  ];

  return (
    <div className="min-h-screen bg-dark-900 text-white">

      {/* HERO */}

      <section className="stars-bg overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 py-24">

          <div className="grid lg:grid-cols-2 gap-20 items-center">

            {/* LEFT */}

            <div>

              <h1 className="font-mystical text-5xl lg:text-7xl font-bold leading-tight gradient-text mb-8">
                Palmistry &
                <br />
                Tarot
                <br />
                Intelligence
                <br />
                Platform
              </h1>

              <p className="text-gray-300 text-xl leading-9 max-w-xl mb-10">
                Discover your spiritual path through AI-powered palm analysis
                and tarot readings. Unlock personalized insights about your
                personality, relationships, career and future.
              </p>

              <div className="flex flex-wrap gap-5">

                {isAuthenticated ? (

                  <Link
                    to="/dashboard"
                    className="px-9 py-4 rounded-2xl bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 text-white font-semibold text-lg shadow-[0_0_40px_rgba(139,92,246,.5)] hover:scale-105 transition-all duration-300"
                  >
                    Go to Dashboard ✨
                  </Link>

                ) : (

                  <>
                    <Link
                      to="/register"
                      className="px-9 py-4 rounded-2xl bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 text-white font-semibold text-lg shadow-[0_0_40px_rgba(139,92,246,.5)] hover:scale-105 transition-all duration-300"
                    >
                      Begin Your Journey ✨
                    </Link>

                    <Link
                      to="/login"
                      className="px-9 py-4 rounded-2xl border border-violet-500 text-violet-300 font-semibold text-lg hover:bg-violet-600 hover:text-white hover:scale-105 transition-all duration-300"
                    >
                      Sign In
                    </Link>
                  </>
                )}

              </div>

            </div>

            {/* RIGHT */}

            <div className="flex justify-center">

              <img
                src="/images/palm.png"
                alt="Palm"
                className="w-[430px] lg:w-[520px] animate-float drop-shadow-[0_0_70px_rgba(139,92,246,.7)]"
              />

            </div>

          </div>

        </div>
      </section>

      {/* FEATURES */}

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-mystical gradient-text text-center mb-14">
            Mystical Features
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {features.map((item, index) => (

              <div
                key={index}
                className="glass-card p-8 hover:scale-105 transition duration-300"
              >
                <div className="text-5xl mb-5">{item.icon}</div>

                <h3 className="text-xl font-semibold mb-3">
                  {item.title}
                </h3>

                <p className="text-gray-400">
                  {item.description}
                </p>

              </div>

            ))}

          </div>

        </div>
      </section>

      {/* TAROT */}

      <section className="py-20 bg-dark-800/30">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-mystical gradient-text text-center mb-14">
            Tarot Spreads
          </h2>

          <div className="grid grid-cols-2 lg:grid-cols-6 gap-5">

            {spreads.map((item, index) => (

              <div
                key={index}
                className="glass-card p-5 text-center hover:scale-105 transition duration-300"
              >
                <div className="text-4xl mb-3">{item.emoji}</div>

                <h3 className="font-semibold mb-2">
                  {item.name}
                </h3>

                <p className="text-sm text-gray-400">
                  {item.desc}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="py-24">

        <div className="max-w-4xl mx-auto px-6">

          <div className="glass-card p-14 text-center mystic-glow">

            <h2 className="font-mystical text-4xl gradient-text mb-5">
              Ready to Discover Your Path?
            </h2>

            <p className="text-gray-300 text-lg mb-10">
              Join thousands of seekers exploring their destiny through AI.
            </p>

            {!isAuthenticated && (

              <Link
                to="/register"
                className="px-10 py-4 rounded-2xl bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 text-white font-semibold text-lg shadow-[0_0_40px_rgba(139,92,246,.5)] hover:scale-105 transition-all duration-300"
              >
                Start Free ✨
              </Link>

            )}

          </div>

        </div>

      </section>

    </div>
  );
};

export default LandingPage;