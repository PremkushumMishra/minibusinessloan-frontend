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
// import { motion } from "motion/react";
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
        getGreeting() + " आज मैं आपकी लोन आवेदन में कैसे मदद कर सकता हूँ?",
      options: [
        "लोन आवेदन कैसे शुरू करें?",
        "मुझे कौन से दस्तावेज़ चाहिए?",
        "दरें और शुल्क",
        "EMI कैलकुलेटर",
        // 'मेरी पात्रता जांचें',
        "सामान्य प्रश्न देखें",
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
    if (hour < 12) return "सुप्रभात! 👋";
    if (hour < 18) return "नमस्कार! 👋";
    return "शुभ संध्या! 👋";
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
      case "लोन आवेदन कैसे शुरू करें?":
        botResponse.content =
          'लोन आवेदन शुरू करने के लिए "अभी आवेदन करें" बटन पर क्लिक करें। सबसे पहले आपको अपना मोबाइल नंबर देना होगा। 🚀';
        botResponse.options = [
          "मुझे कौन-कौन से दस्तावेज़ चाहिए?",
          "मुख्य मेनू पर वापस जाएं",
        ];
        break;
      case "मुझे कौन-कौन से दस्तावेज़ चाहिए?":
        botResponse.content =
          "केवल बैंक स्टेटमेंट और उद्यम पंजीकरण प्रमाणपत्र की आवश्यकता है। 📄";
        botResponse.options = ["मुख्य मेनू पर वापस जाएं"];
        break;

      case "रेट्स और चार्जेस":
        botResponse.content =
          "हमारी दरें और शुल्क इस प्रकार हैं:\n\n" +
          "💰 लोन राशि: ₹5,000 से ₹10,00,000 तक\n\n" +
          "📅 अवधि: 7 से 100 दिन\n\n" +
          "✅ कोई प्री-क्लोज़र चार्ज नहीं\n\n" +
          "✅ कोई प्रीपेमेंट चार्ज नहीं\n\n" +
          "📊 ब्याज दर: प्रति दिन 0.2%";
        botResponse.options = ["मुख्य मेनू पर वापस जाएं"];
        break;

      case "EMI कैलकुलेटर":
        setShowEmiCalculator(true);
        botResponse.content =
          "चलिए, मैं आपकी EMI गणना करने में मदद करता हूँ। कृपया नीचे दी गई जानकारी दर्ज करें: 📊";
        botResponse.options = ["मुख्य मेनू पर वापस जाएं"];
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
            "आपकी प्रतिक्रिया के लिए धन्यवाद! मैं आपकी और किस प्रकार सहायता कर सकता हूँ?";
          botResponse.options = [
            "लोन आवेदन कैसे शुरू करें?",
            "मुझे कौन-कौन से दस्तावेज़ चाहिए?",
            "ब्याज दरें और शुल्क",
            "EMI कैलकुलेटर",
            // 'मेरी पात्रता जांचें',
            "अक्सर पूछे जाने वाले सवाल देखें",
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
                "बहुत बढ़िया चुनाव! 🚀 चलिए आपको आवेदन पेज पर ले चलते हैं। कृपया अपना पैन कार्ड और मोबाइल नंबर तैयार रखें।",
              options: ["मुख्य मेनू पर वापस जाएँ"],
            },
          ]);
          setTimeout(() => {
            navigate("/apply/pan-mobile");
          }, 1500);
        }, 1000);
        break;

      case "EMI कैलकुलेट करें":
        if (emiInputs.loanAmount && emiInputs.tenure) {
          const principal = parseFloat(emiInputs.loanAmount);
          const days = parseInt(emiInputs.tenure);
          if (days < minDays || days > maxDays) {
            botResponse.content = `कृपया ${minDays} से ${maxDays} दिनों के बीच की अवधि दर्ज करें।`;
            botResponse.options = ["मुख्य मेनू पर वापस जाएँ"];
          } else {
            // Simple interest calculation for daily interest
            const totalInterest = (principal * fixedInterestRate * days) / 100;
            const totalAmount = principal + totalInterest;
            const emi = totalAmount / days;
            botResponse.content =
              `यहाँ आपके EMI का विवरण है:\n\n` +
              `💰 दैनिक EMI: ₹${Math.round(emi).toLocaleString("en-IN")}\n` +
              `💵 कुल ब्याज: ₹${Math.round(totalInterest).toLocaleString(
                "en-IN"
              )}\n` +
              `📊 कुल राशि: ₹${Math.round(totalAmount).toLocaleString(
                "en-IN"
              )}\n\n` +
              `क्या आप एक और EMI की गणना करना चाहेंगे?`;

            botResponse.options = [
              "एक और EMI की गणना करें",
              "मुख्य मेनू पर वापस जाएँ",
            ];
            setShowEmiCalculator(false);
          }
        } else {
          botResponse.content = "EMI की गणना करने के लिए कृपया सभी विवरण भरें।";
          botResponse.options = ["मुख्य मेनू पर वापस जाएँ"];
        }
        break;

      case "Calculate Another EMI":
        setShowEmiCalculator(true);
        setEmiInputs({ loanAmount: "", interestRate: "", tenure: "" });
        botResponse.content = "नई EMI गणना के लिए कृपया निम्न विवरण दर्ज करें:";
        botResponse.options = ["मुख्य मेनू पर वापस जाएँ"];
        break;

      case "View FAQs":
        botResponse.content =
          "यहाँ कुछ सामान्य पूछे जाने वाले प्रश्न हैं। आप क्या जानना चाहेंगे?";
        botResponse.options = [
          "न्यूनतम लोन राशि क्या है?",
          "अधिकतम लोन राशि क्या है?",
          "ब्याज दर क्या है?",
          "लोन की अवधि क्या है?",
          "मुख्य मेनू पर वापस जाएँ",
        ];
        break;

      case "What is the minimum loan amount?":
        botResponse.content =
          "न्यूनतम लोन राशि ₹5,000 है। क्या आप हमारे लोन प्रोडक्ट्स के बारे में और जानना चाहेंगे?";
        botResponse.options = [
          "अधिकतम लोन राशि क्या है?",
          "ब्याज दर क्या है?",
          "लोन की अवधि क्या है?",
          "मुख्य मेनू पर वापस जाएँ",
        ];
        break;

      case "What is the maximum loan amount?":
        botResponse.content =
          "अधिकतम लोन राशि ₹10,00,000 है। क्या आप हमारे लोन प्रोडक्ट्स के बारे में और जानना चाहेंगे?";
        botResponse.options = [
          "न्यूनतम लोन राशि क्या है?",
          "ब्याज दर क्या है?",
          "लोन की अवधि क्या है?",
          "मुख्य मेनू पर वापस जाएँ",
        ];
        break;
      case "What is the interest rate?":
        botResponse.content =
          "हमारा ब्याज दर 0.2% प्रति दिन से शुरू होता है। क्या आप और जानना चाहेंगे?";
        botResponse.options = [
          "न्यूनतम लोन राशि क्या है?",
          "अधिकतम लोन राशि क्या है?",
          "लोन की अवधि क्या है?",
          "मुख्य मेनू पर वापस जाएँ",
        ];
        break;

      case "What is the loan tenure?":
        botResponse.content =
          "लोन की अवधि 7 दिन से लेकर 100 दिन तक होती है। क्या आप हमारे लोन उत्पादों के बारे में और जानना चाहेंगे?";
        botResponse.options = [
          "न्यूनतम लोन राशि क्या है?",
          "अधिकतम लोन राशि क्या है?",
          "ब्याज दर क्या है?",
          "मुख्य मेनू पर वापस जाएँ",
        ];
        break;

      case "Go to Dashboard":
        navigate("/dashboard");
        break;
      case "Back to main menu":
        botResponse.content = "मैं आपकी और कैसे मदद कर सकता हूँ?";
        botResponse.options = [
          "लोन आवेदन कैसे शुरू करें?",
          "मुझे कौन से दस्तावेज़ चाहिए?",
          "दरें और शुल्क",
          "EMI कैलकुलेटर",
          // 'मेरी पात्रता जांचें',
          "FAQ देखें",
        ];
        break;
      default:
        botResponse.content =
          "मैं आपकी लोन आवेदन में मदद कर सकता हूँ। आप क्या जानना चाहेंगे?";
        botResponse.options = [
          "लोन आवेदन कैसे शुरू करें?",
          "मुझे कौन से दस्तावेज़ चाहिए?",
          "दरें और शुल्क",
          "EMI कैलकुलेटर",
          // 'मेरी पात्रता जांचें',
          "FAQ देखें",
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
      "क्या आपकी उम्र 18-58 वर्ष के बीच है?",
      "क्या आपकी मासिक नेट सैलरी ₹40,000 या उससे अधिक है?",
      "क्या आपके पास कम से कम 3 महीने का ट्रांजैक्शन हिस्ट्री वाला बैंक खाता है?",
      "क्या आपके पास एक वैध PAN कार्ड है?",
    ];

    return questions[step];
  };

  // Function to calculate eligibility based on quiz answers
  const calculateEligibility = () => {
    // Simple eligibility check - all answers should be Yes
    return Object.values(quizAnswers).every((answer) => answer === true);
  };

  return (
    <div className="fixed bottom-2  right-1 z-9999">
      {/* Chat Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-10 h-10  rounded-full flex items-center justify-center shadow-lg transition-all duration-300 ${
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
                ? "fixed inset-0 w-full h-full rounded-none "
                : 
                  // udpated
                  "absolute bottom-12 right-0 w-80 h-[440px]"
                } bg-white/20 shadow-1xl overflow-hidden rounded-2xl border border-blue-200`}

            // } bg-white shadow-2xl overflow-hidden border border-gray-100`}
          >
            {/* Chat Header */}
            <div className=" bg-blue-800 p-4 relative overflow-hidden">
              <div className="absolute inset-0 bg-white/10 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.1)_1px,_transparent_1px)] "></div>
              <div className="absolute top-0 right-0 w-24 h-24 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 translate-x-1/2 -translate-y-1/2"></div>
              <div className="absolute top-0 left-0 w-24 h-24 bg-indigo-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 -translate-x-1/2 -translate-y-1/2"></div>
              <div className="relative flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div>
                    <h3 className="text-white font-semibold">
                      "नमस्कार! मैं हूँ आपका लोनसहायक!"
                      <p className="text-white/80 text-sm">
                        "हमेशा आपकी मदद के लिए तैयार।"
                      </p>
                    </h3>{" "}
                  </div>
                </div>
                <button
                  onClick={() => setIsFullscreen(!isFullscreen)}
                  className="p-2 rounded-full hover:bg-white/60 transition-colors duration-200"
                >
                  {isFullscreen ? (
                    <X className="w-2 h-2 text-white" />
                  ) : (
                    <MessageCircle className="w-1 h-1 text-white" />
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
                          <></>
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
                          message.content.includes("EMI") && (
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
                                  handleOptionClick("कैलकुलेट करें")
                                }
                                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-2 rounded-lg hover:opacity-90 transition-opacity"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                              >
                                कैलकुलेट करें{" "}
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
                                    : "bg-white/60 hover:bg-gray-50 text-gray-800"
                                   
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
                    <div className="flex-shrink-0">
                      {/* Removed white circle here */}
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