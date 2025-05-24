import React, { useState, useEffect } from "react";
import * as Tone from 'tone';

const LoanEligibility = ({ businessDetails }) => {
  const [selectedOption, setSelectedOption] = useState("daily");
  const [isVisible, setIsVisible] = useState(false);
  const [animatedAmount, setAnimatedAmount] = useState(0);
  const [showConfetti, setShowConfetti] = useState(false);

  // Sound effects functions
  const playCoinsSound = async () => {
    try {
      // Ensure audio context is ready
      if (Tone.context.state !== 'running') {
        await Tone.start();
      }
      // Create a simple synth for coin sounds
      const coinSynth = new Tone.Synth({
        oscillator: { type: "triangle" },
        envelope: { attack: 0.01, decay: 0.2, sustain: 0.1, release: 0.3 }
      }).toDestination();
      // Play coin dropping sequence
      const coinNotes = ["G4", "A4", "C5", "E5", "G5"];
      coinNotes.forEach((note, index) => {
        setTimeout(() => {
          coinSynth.triggerAttackRelease(note, "16n");
        }, index * 150);
      });
      // Clean up
      setTimeout(() => {
        coinSynth.dispose();
      }, 2000);
    } catch {
      // ignore
    }
  };

  const playClickSound = async () => {
    try {
      await Tone.start();
      const synth = new Tone.Synth({
        oscillator: { type: "sine" },
        envelope: { attack: 0.01, decay: 0.1, sustain: 0, release: 0.1 }
      }).toDestination();
      synth.triggerAttackRelease("A4", "32n");
    } catch {
      // ignore
    }
  };

  useEffect(() => {
    const baseAmount = businessDetails?.monthlyTurnover * 3 || 250000;
    // Trigger entrance animation
    setTimeout(() => setIsVisible(true), 100);
    // Animate amount counting
    setTimeout(() => {
      const duration = 2000;
      const increment = baseAmount / (duration / 50);
      let current = 0;
      const timer = setInterval(() => {
        current += increment;
        if (current >= baseAmount) {
          current = baseAmount;
          clearInterval(timer);
          playCoinsSound(); // Play coins sound when animation completes
          setShowConfetti(true);
          setTimeout(() => setShowConfetti(false), 3000);
        }
        setAnimatedAmount(Math.floor(current));
      }, 50);
    }, 800);
  }, [businessDetails]);

  const handleSanctionLetter = () => {
    playClickSound(); // Play click sound
    console.log("Generating sanction letter...");
  };

  // Confetti particles
  const confettiParticles = Array.from({ length: 50 }, (_, i) => (
    <div
      key={i}
      className={`absolute w-2 h-2 rounded-full animate-pulse ${
        i % 4 === 0 ? 'bg-yellow-400' :
        i % 4 === 1 ? 'bg-pink-400' :
        i % 4 === 2 ? 'bg-blue-400' : 'bg-green-400'
      }`}
      style={{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 2}s`,
        animationDuration: `${1 + Math.random() * 2}s`
      }}
    />
  ));

  return (
    <div className="max-w-md mx-auto mt-16 p-8 relative overflow-hidden">
      {/* Confetti Animation */}
      {showConfetti && (
        <div className="absolute inset-0 pointer-events-none z-10">
          {confettiParticles}
        </div>
      )}
      {/* Main Card */}
      <div 
        className={`relative bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 rounded-3xl shadow-2xl text-center border border-blue-200 backdrop-blur-sm transition-all duration-1000 transform ${
          isVisible ? 'scale-100 opacity-100 translate-y-0' : 'scale-95 opacity-0 translate-y-8'
        }`}
        style={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          boxShadow: '0 20px 40px rgba(102, 126, 234, 0.3), 0 15px 12px rgba(102, 126, 234, 0.2)'
        }}
      >
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden rounded-3xl">
          <div className="absolute -top-4 -right-4 w-24 h-24 bg-white/10 rounded-full animate-bounce" 
               style={{ animationDelay: '0.5s', animationDuration: '3s' }} />
          <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-white/10 rounded-full animate-bounce" 
               style={{ animationDelay: '1s', animationDuration: '2.5s' }} />
          <div className="absolute top-1/2 right-8 w-8 h-8 bg-white/10 rounded-full animate-ping" 
               style={{ animationDelay: '2s' }} />
        </div>
        <div className="relative z-10 p-6">
          {/* Header */}
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-3 text-white drop-shadow-lg animate-pulse">
              <span className="inline-block animate-bounce" style={{ animationDelay: '0.1s' }}>🎉</span>
              <span className="mx-2">Congratulations!</span>
              <span className="inline-block animate-bounce" style={{ animationDelay: '0.3s' }}>🎊</span>
            </h2>
            <p className="text-base md:text-lg mb-6 text-white/90 font-medium">
              Based on your business profile, you are eligible for a loan of
            </p>
          </div>
          {/* Animated Amount */}
          <div className={`flex flex-col items-center mb-6 transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
            <div className="relative mb-4 group">
              <div className="absolute inset-0 bg-white/20 rounded-full blur-xl animate-pulse"></div>
              <span className="relative block text-4xl md:text-5xl font-black text-white bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent px-8 py-4 rounded-full border-4 border-white/30 backdrop-blur-sm transition-all duration-300 group-hover:scale-105 group-hover:border-white/50"
                    style={{ 
                      fontFamily: 'system-ui',
                      letterSpacing: '1px',
                      textShadow: '0 2px 10px rgba(255,255,255,0.3)'
                    }}>
                ₹{animatedAmount.toLocaleString()}
              </span>
            </div>
          </div>
          {/* Pulsing Ring Animation around amount */}
          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
            <div className="w-64 h-64 border-2 border-white/20 rounded-full animate-ping" style={{ animationDuration: '2s' }}></div>
            <div className="absolute inset-4 border-2 border-white/10 rounded-full animate-ping" style={{ animationDuration: '2.5s', animationDelay: '0.5s' }}></div>
          </div>
          {/* Sanction Letter Button */}
          <div className={`transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
            <button
              onClick={handleSanctionLetter}
              className="w-full mb-6 px-8 py-4 bg-white/20 backdrop-blur-sm text-white rounded-2xl font-bold text-lg border-2 border-white/30 transition-all duration-300 hover:bg-white/30 hover:scale-[1.02] hover:shadow-lg transform active:scale-[0.98] group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
              <span className="relative flex items-center justify-center gap-2">
                📧 Preview & Send Sanction Letter
              </span>
            </button>
          </div>
          {/* Divider */}
          <div className={`my-6 transition-all duration-1000 delay-900 ${isVisible ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'}`}>
            <div className="h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
          </div>
          {/* Payment Options */}
          <div className={`transition-all duration-1000 delay-1100 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
            <div className="flex justify-center gap-4">
              <button
                className={`px-6 py-3 rounded-xl font-bold text-base transition-all duration-300 transform hover:scale-105 active:scale-95 relative overflow-hidden group ${
                  selectedOption === "daily"
                    ? "bg-white text-purple-600 shadow-lg border-2 border-white"
                    : "bg-white/20 text-white border-2 border-white/30 hover:bg-white/30 backdrop-blur-sm"
                }`}
                onClick={() => {
                  playClickSound();
                  setSelectedOption("daily");
                }}
              >
                <div className={`absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                <span className="relative">📊 Daily Payment</span>
              </button>
              <button
                className={`px-6 py-3 rounded-xl font-bold text-base transition-all duration-300 transform hover:scale-105 active:scale-95 relative overflow-hidden group ${
                  selectedOption === "weekly"
                    ? "bg-white text-purple-600 shadow-lg border-2 border-white"
                    : "bg-white/20 text-white border-2 border-white/30 hover:bg-white/30 backdrop-blur-sm"
                }`}
                onClick={() => {
                  playClickSound();
                  setSelectedOption("weekly");
                }}
              >
                <div className={`absolute inset-0 bg-gradient-to-r from-green-400 to-blue-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                <span className="relative">📅 Weekly Payment</span>
              </button>
            </div>
          </div>
          {/* Floating Success Icon */}
          <div className="absolute -top-2 -right-2 w-12 h-12 bg-green-400 rounded-full flex items-center justify-center text-white text-xl animate-bounce shadow-lg border-4 border-white/30"
               style={{ animationDelay: '1.5s' }}>
            ✓
          </div>
        </div>
      </div>
      {/* Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-3xl blur-xl -z-10 animate-pulse"></div>
    </div>
  );
};

export default LoanEligibility;