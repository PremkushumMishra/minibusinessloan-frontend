import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import {
  MessageCircle,
  X,
  Send,
  Bot,
  User,
  CheckCircle,
  XCircle,
} from "lucide-react";
import { motion } from "framer-motion";
// import heroFace from '../../assets/heroFace.png';

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showEmiCalculator, setShowEmiCalculator] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [showEligibilityQuiz, setShowEligibilityQuiz] = useState(false);
  const [quizStep, setQuizStep] = useState(0);
  const [quizAnswers, setQuizAnswers] = useState({});
  const [emiInputs, setEmiInputs] = useState({
    loanAmount: "",
    interestRate: "",
    tenure: "",
  });
  const [messages, setMessages] = useState([
    {
      type: "bot",
      content:
        getGreeting() + " How can I help you with your loan application today?",
      options: [
        "How to start loan application?",
        "What documents do I need?",
        "Rates and Charges",
        "EMI calculator",
        // 'Check my eligibility',
        "View FAQs",
      ],
    },
  ]);
  const messagesEndRef = useRef(null);
  const navigate = useNavigate();

  // Place these constants before handleOptionClick
  const minDays = 7;
  const maxDays = 100;
  const fixedInterestRate = 0.2; // per day

  // Function to get personalized greeting based on time of day
  function getGreeting() {
    const hour = new Date().getHours();
    if (hour < 12) return "Good morning! 👋";
    if (hour < 18) return "Good afternoon! 👋";
    return "Good evening! 👋";
  }

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleOptionClick = (option) => {
    // Add user's message with typing animation
    setMessages((prev) => [...prev, { type: "user", content: option }]);

    // Show typing indicator
    setIsTyping(true);

    // Bot's response based on the option
    let botResponse = {
      type: "bot",
      content: "",
      options: [],
    };

    switch (option) {
      case "How to start loan application?":
        botResponse.content =
          'To start your loan application, click on "Apply Now" button. You will need to provide your  mobile number first. 🚀';
        botResponse.options = [
          "What documents do I need?",
          "Back to main menu",
        ];
        break;

      case "What documents do I need?":
        botResponse.content =
          "Only a bank statement, and Udyam registration certificate is required. 📄";
        botResponse.options = ["Back to main menu"];
        break;

      case "Rates and Charges":
        botResponse.content =
          "Here are our rates and charges:\n\n" +
          "💰 Loan Amount 5k upto 10L: ₹5,000 to ₹10,00,000\n\n" +
          "📅 Tenure: 7 to 100 Days\n\n" +
          "✅ No Pre-closure Charges\n\n" +
          "✅ No Prepayment Charges\n\n" +
          "📊 Interest Rate: 0.2% per day";
        botResponse.options = ["Back to main menu"];
        break;

      case "EMI calculator":
        setShowEmiCalculator(true);
        botResponse.content =
          "Let me help you calculate your EMI. Please enter the following details: 📊";
        botResponse.options = ["Back to main menu"];
        break;

      case "Yes":
      case "No":
        if (showEligibilityQuiz) {
          const answer = option === "Yes";
          setQuizAnswers((prev) => ({ ...prev, [quizStep]: answer }));

          if (quizStep < 3) {
            // Move to next question
            const nextStep = quizStep + 1;
            setQuizStep(nextStep);
            botResponse.content = getQuizQuestion(nextStep);
            botResponse.options = ["Yes", "No"];
          } else {
            // Quiz completed, show results
            const isEligible = calculateEligibility();
            setShowEligibilityQuiz(false);

            if (isEligible) {
              botResponse.content =
                "🎉 Congratulations! You are eligible for a loan with us!\n\n" +
                "Based on your answers, you meet our basic eligibility criteria. Would you like to proceed with your application?";
              botResponse.options = ["Apply Now", "Back to main menu"];
            } else {
              botResponse.content =
                "😔 Based on your answers, you may not be eligible for a loan at this time.\n\n" +
                "Don't worry! You can try again in a few months or contact our support team for more information.";
              botResponse.options = ["Back to main menu"];
            }
          }
        } else {
          // Handle regular Yes/No responses
          botResponse.content =
            "Thank you for your response! How else can I help you?";
          botResponse.options = [
            "How to start loan application?",
            "What documents do I need?",
            "Rates and Charges",
            "EMI calculator",
            // 'Check my eligibility',
            "View FAQs",
          ];
        }
        break;

      case "Apply Now":
        // Show bot's response only (user message is already added by the main handler)
        setTimeout(() => {
          setIsTyping(false);
          setMessages((prev) => [
            ...prev,
            {
              type: "bot",
              content:
                "Great choice! 🚀 Let me take you to the application page. Please have your PAN card and mobile number ready.",
              options: ["Back to main menu"],
            },
          ]);
          setTimeout(() => {
            navigate("/apply/pan-mobile");
          }, 1500);
        }, 1000);
        break;

      case "Calculate EMI":
        if (emiInputs.loanAmount && emiInputs.tenure) {
          const principal = parseFloat(emiInputs.loanAmount);
          const days = parseInt(emiInputs.tenure);
          if (days < minDays || days > maxDays) {
            botResponse.content = `Please enter a tenure between ${minDays} and ${maxDays} days.`;
            botResponse.options = ["Back to main menu"];
          } else {
            // Simple interest calculation for daily interest
            const totalInterest = (principal * fixedInterestRate * days) / 100;
            const totalAmount = principal + totalInterest;
            const emi = totalAmount / days;
            botResponse.content =
              `Here's your EMI breakdown:\n\n` +
              `💰 Daily EMI: ₹${Math.round(emi).toLocaleString("en-IN")}\n` +
              `💵 Total Interest: ₹${Math.round(totalInterest).toLocaleString(
                "en-IN"
              )}\n` +
              `📊 Total Amount: ₹${Math.round(totalAmount).toLocaleString(
                "en-IN"
              )}\n\n` +
              `Would you like to calculate another EMI?`;
            botResponse.options = [
              "Calculate Another EMI",
              "Back to main menu",
            ];
            setShowEmiCalculator(false);
          }
        } else {
          botResponse.content =
            "Please fill in all the details to calculate EMI.";
          botResponse.options = ["Back to main menu"];
        }
        break;

      case "Calculate Another EMI":
        setShowEmiCalculator(true);
        setEmiInputs({ loanAmount: "", interestRate: "", tenure: "" });
        botResponse.content =
          "Please enter the following details for your new EMI calculation:";
        botResponse.options = ["Back to main menu"];
        break;

      case "View FAQs":
        botResponse.content =
          "Here are some frequently asked questions. What would you like to know?";
        botResponse.options = [
          "What is the minimum loan amount?",
          "What is the maximum loan amount?",
          "What is the interest rate?",
          "What is the loan tenure?",
          "Back to main menu",
        ];
        break;

      case "What is the minimum loan amount?":
        botResponse.content =
          "The minimum loan amount is ₹5,000. Would you like to know more about our loan products?";
        botResponse.options = [
          "What is the maximum loan amount?",
          "What is the interest rate?",
          "What is the loan tenure?",
          "Back to main menu",
        ];
        break;

      case "What is the maximum loan amount?":
        botResponse.content =
          "The maximum loan amount is ₹10,00,000. Would you like to know more about our loan products?";
        botResponse.options = [
          "What is the minimum loan amount?",
          "What is the interest rate?",
          "What is the loan tenure?",
          "Back to main menu",
        ];
        break;

      case "What is the interest rate?":
        botResponse.content =
          "Our interest start from 0.2% per day. Would you like to know more?";
        botResponse.options = [
          "What is the minimum loan amount?",
          "What is the maximum loan amount?",
          "What is the loan tenure?",
          "Back to main menu",
        ];
        break;

      case "What is the loan tenure?":
        botResponse.content =
          "The loan tenure ranges from 7 days to 100 days. Would you like to know more about our loan products?";
        botResponse.options = [
          "What is the minimum loan amount?",
          "What is the maximum loan amount?",
          "What is the interest rate?",
          "Back to main menu",
        ];
        break;

      case "Go to Dashboard":
        navigate("/dashboard");
        break;

      case "Back to main menu":
        botResponse.content = "How else can I help you?";
        botResponse.options = [
          "How to start loan application?",
          "What documents do I need?",
          "Rates and Charges",
          "EMI calculator",
          // 'Check my eligibility',
          "View FAQs",
        ];
        break;

      default:
        botResponse.content =
          "I can help you with your loan application. What would you like to know?";
        botResponse.options = [
          "How to start loan application?",
          "What documents do I need?",
          "Rates and Charges",
          "EMI calculator",
          // 'Check my eligibility',
          "View FAQs",
        ];
    }

    // Add bot response with a slight delay for typing effect
    setTimeout(() => {
      setIsTyping(false);
      setMessages((prev) => [...prev, botResponse]);
    }, 1000);
  };

  // Function to get quiz questions
  const getQuizQuestion = (step) => {
    const questions = [
      "Are you between 18-58 years of age?",
      "Is your net monthly salary ₹40,000 or more?",
      "Do you have a bank account with at least 3 months of transaction history?",
      "Do you have a valid PAN card?",
    ];
    return questions[step];
  };

  // Function to calculate eligibility based on quiz answers
  const calculateEligibility = () => {
    // Simple eligibility check - all answers should be Yes
    return Object.values(quizAnswers).every((answer) => answer === true);
  };

  return (
    <div className="fixed bottom-6  right-6 z-9999">
      {/* Chat Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 ${
          isOpen
            ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white"
            : "bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:scale-110"
        }`}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -180, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 180, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X className="w-6 h-6" />
            </motion.div>
          ) : (
            <motion.div
              key="open"
              initial={{ rotate: 180, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -180, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <MessageCircle className="w-6 h-6" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className={`${
              isFullscreen
                ? "fixed inset-0 w-full h-full rounded-none"
                : // : 'absolute bottom-20 right-0 w-96 h-[600px] rounded-2xl'
                  // udpated
                  "absolute bottom-15 right-0 w-96 h-[500px] rounded-2xl"
            } bg-white shadow-2xl overflow-hidden border border-gray-100`}
          >
            {/* Chat Header */}
            <div className="bg-gradient-to-r from-teal-500 to-green-500 p-4 relative overflow-hidden">
              <div className="absolute inset-0 bg-white/10 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.1)_1px,_transparent_1px)] bg-[length:10px_10px]"></div>
              <div className="absolute top-0 right-0 w-24 h-24 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 translate-x-1/2 -translate-y-1/2"></div>
              <div className="absolute top-0 left-0 w-24 h-24 bg-indigo-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 -translate-x-1/2 -translate-y-1/2"></div>
              <div className="relative flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {/* <img src={heroFace} alt="Hero Face" className="w-6 h-6 text-white" /> */}
                  <div>
                    <h3 className="text-white font-semibold">
                      Hi, My name is MiniFund
                    </h3>
                    <p className="text-white/80 text-sm">Always here to help</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsFullscreen(!isFullscreen)}
                  className="p-2 rounded-full hover:bg-white/10 transition-colors duration-200"
                >
                  {isFullscreen ? (
                    <X className="w-5 h-5 text-white" />
                  ) : (
                    <MessageCircle className="w-5 h-5 text-white" />
                  )}
                </button>
              </div>
            </div>

            {/* Chat Messages */}
            <div
              className={
                isFullscreen ? "h-[calc(100%-8rem)]" : "h-[calc(100%-8rem)]"
              }
              style={{ overflowY: "auto" }}
            >
              {messages
                .filter((m) => m.content)
                .map((message, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className={`flex ${
                      message.type === "user" ? "justify-end" : "justify-start"
                    }`}
                  >
                    <div
                      className={`flex items-start gap-2 max-w-[80%] ${
                        message.type === "user"
                          ? "flex-row-reverse"
                          : "flex-row"
                      }`}
                    >
                      <div
                        className={`rounded-full flex items-center justify-center ${
                          message.type === "user"
                            ? "w-8 h-8 bg-gradient-to-r from-blue-600 to-indigo-600 text-white"
                            : ""
                        }`}
                      >
                        {message.type === "user" ? (
                          <User className="w-4 h-4" />
                        ) : (
                          <div className="w-8 h-8 rounded-full flex items-center justify-center bg-gray-100 text-gray-600">
                            {/* <img src={heroFace} alt="Hero Face" className="w-6 h-6" /> */}
                          </div>
                        )}
                      </div>
                      <div
                        className={`rounded-2xl p-3 ${
                          message.type === "user"
                            ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white"
                            : "bg-gray-100 text-gray-800"
                        }`}
                      >
                        <p className="whitespace-pre-line text-sm">
                          {message.content}
                        </p>
                        {showEmiCalculator &&
                          message.type === "bot" &&
                          message.content.includes(
                            "Please enter the following details"
                          ) && (
                            <div className="mt-4 space-y-3">
                              <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                  Loan Amount (₹5k to ₹10L)
                                </label>
                                <input
                                  type="number"
                                  value={emiInputs.loanAmount}
                                  onChange={(e) =>
                                    setEmiInputs((prev) => ({
                                      ...prev,
                                      loanAmount: e.target.value,
                                    }))
                                  }
                                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                  placeholder="Enter loan amount"
                                />
                              </div>
                              <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                  Interest Rate (per day)
                                </label>
                                <input
                                  type="number"
                                  value={0.2}
                                  readOnly
                                  className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-gray-100 text-gray-500 cursor-not-allowed"
                                />
                              </div>
                              <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                  Loan Tenure (7-100 Days)
                                </label>
                                <input
                                  type="number"
                                  min={7}
                                  max={100}
                                  value={emiInputs.tenure}
                                  onChange={(e) =>
                                    setEmiInputs((prev) => ({
                                      ...prev,
                                      tenure: e.target.value,
                                    }))
                                  }
                                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                  placeholder="Enter loan tenure (7-100 days)"
                                />
                              </div>
                              <motion.button
                                onClick={() =>
                                  handleOptionClick("Calculate EMI")
                                }
                                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-2 rounded-lg hover:opacity-90 transition-opacity"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                              >
                                Calculate EMI
                              </motion.button>
                            </div>
                          )}
                        {message.options && (
                          <div className="mt-3 space-y-2">
                            {message.options.map((option, optIndex) => (
                              <motion.button
                                key={optIndex}
                                onClick={() => handleOptionClick(option)}
                                className={`w-full text-left px-4 py-2 rounded-lg text-sm transition-all duration-200 ${
                                  message.type === "user"
                                    ? "bg-white/20 hover:bg-white/30 text-white"
                                    : "bg-white hover:bg-gray-50 text-gray-800"
                                }`}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                              >
                                {option}
                              </motion.button>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}

              {/* Typing Indicator */}
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex justify-start"
                >
                  <div className="flex items-start gap-2 max-w-[80%]">
                    <div className="w-8 h-8 rounded-full flex items-center justify-center bg-gray-100 text-gray-600">
                      {/* <img src={heroFace} alt="Hero Face" className="w-6 h-6" /> */}
                    </div>
                    <div className="rounded-2xl p-3 bg-gray-100 text-gray-800">
                      <div className="flex space-x-1">
                        <motion.div
                          className="w-2 h-2 bg-gray-400 rounded-full"
                          animate={{ y: [0, -5, 0] }}
                          transition={{
                            duration: 0.6,
                            repeat: Infinity,
                            delay: 0,
                          }}
                        />
                        <motion.div
                          className="w-2 h-2 bg-gray-400 rounded-full"
                          animate={{ y: [0, -5, 0] }}
                          transition={{
                            duration: 0.6,
                            repeat: Infinity,
                            delay: 0.2,
                          }}
                        />
                        <motion.div
                          className="w-2 h-2 bg-gray-400 rounded-full"
                          animate={{ y: [0, -5, 0] }}
                          transition={{
                            duration: 0.6,
                            repeat: Infinity,
                            delay: 0.4,
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ChatBot;
