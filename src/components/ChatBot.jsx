import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import {
  Bot,
  User,
  Send,
  MessageCircle,
  XCircle,
} from "lucide-react";

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      type: "bot",
      content: getGreeting() + " आज मैं आपकी लोन आवेदन में कैसे मदद कर सकता हूँ?",
      options: [
        "लोन आवेदन कैसे शुरू करें?",
        "मुझे कौन से दस्तावेज़ चाहिए?",
        "दरें और शुल्क",
        "EMI कैलकुलेटर",
        "सामान्य प्रश्न देखें",
      ],
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [showEmiCalculator, setShowEmiCalculator] = useState(false);
  const [emiInputs, setEmiInputs] = useState({
    loanAmount: "",
    interestRate: "",
    tenure: "",
  });
  const messagesEndRef = useRef(null);
  const navigate = useNavigate();

  const minDays = 7;
  const maxDays = 100;
  const monthlyInterestRate = 20;

  function getGreeting() {
    const hour = new Date().getHours();
    if (hour < 12) return "सुप्रभात! 👋";
    if (hour < 18) return "नमस्कार! 👋";
    return "शुभ संध्या! 👋";
  }

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = () => {
    if (!inputValue.trim()) return;
    handleOptionClick(inputValue.trim());
    setInputValue("");
  };

  const handleOptionClick = (option) => {
    setMessages((prev) => [...prev, { type: "user", content: option }]);
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      handleBotResponse(option);
    }, 1000);
  };

  const handleBotResponse = (option) => {
    let botMessage = { type: "bot", content: "", options: [] };

    switch (option) {
      case "लोन आवेदन कैसे शुरू करें?":
        botMessage.content =
          'लोन आवेदन शुरू करने के लिए "अभी आवेदन करें" बटन पर क्लिक करें।';
        botMessage.options = [
          "मुझे कौन से दस्तावेज़ चाहिए?",
          "मुख्य मेनू पर वापस जाएं",
        ];
        break;
      case "मुझे कौन से दस्तावेज़ चाहिए?":
        botMessage.content =
          "केवल बैंक स्टेटमेंट और उद्यम पंजीकरण प्रमाणपत्र की आवश्यकता है। 📄";
        botMessage.options = ["मुख्य मेनू पर वापस जाएं"];
        break;
      case "दरें और शुल्क":
        botMessage.content =
          "₹ लोन राशि: ₹5,000 से ₹10,00,000 तक\n📅 अवधि: 7 से 100 दिन\n📊 ब्याज दर: 20% प्रति माह\n✅ कोई प्री-क्लोज़र या प्रीपेमेंट चार्ज नहीं";
        botMessage.options = ["मुख्य मेनू पर वापस जाएं"];
        break;
      case "EMI कैलकुलेटर":
        botMessage.content =
          "EMI गणना के लिए राशि और अवधि दर्ज करें। उदाहरण: ₹10000, 30 दिन";
        setShowEmiCalculator(true);
        break;
      case "सामान्य प्रश्न देखें":
        botMessage.content = "FAQs:\n1. न्यूनतम लोन ₹5000\n2. अधिकतम ₹10 लाख";
        botMessage.options = ["मुख्य मेनू पर वापस जाएं"];
        break;
      case "मुख्य मेनू पर वापस जाएं":
        botMessage.content = "मैं आपकी और कैसे मदद कर सकता हूँ?";
        botMessage.options = [
          "लोन आवेदन कैसे शुरू करें?",
          "मुझे कौन से दस्तावेज़ चाहिए?",
          "दरें और शुल्क",
          "EMI कैलकुलेटर",
          "सामान्य प्रश्न देखें",
        ];
        break;
      default:
        botMessage.content =
          "माफ़ कीजिए, मैं वह समझ नहीं पाया। कृपया विकल्पों में से चुनें।";
        botMessage.options = ["मुख्य मेनू पर वापस जाएं"];
    }

    setMessages((prev) => [...prev, botMessage]);
  };

  const calculateEmi = () => {
    const { loanAmount, tenure } = emiInputs;
    const principal = parseFloat(loanAmount);
    const days = parseInt(tenure);

    if (!principal || !days || days < minDays || days > maxDays) {
      setMessages((prev) => [
        ...prev,
        {
          type: "bot",
          content: `कृपया मान्य राशि और ${minDays}-${maxDays} दिन के बीच की अवधि दर्ज करें।`,
        },
      ]);
      return;
    }

    // Calculate flat 20% interest
    const totalInterest = principal * 0.20; // 20% of principal amount
    const totalAmount = principal + totalInterest;
    const dailyEmi = totalAmount / days;

    setMessages((prev) => [
      ...prev,
      {
        type: "bot",
        content: `💰 दैनिक EMI: ₹${Math.round(dailyEmi)}\n💵 कुल ब्याज: ₹${Math.round(
          totalInterest
        )}\n📊 कुल राशि: ₹${Math.round(totalAmount)}`,
        options: ["मुख्य मेनू पर वापस जाएं"],
      },
    ]);
    setShowEmiCalculator(false);
    setEmiInputs({ loanAmount: "", interestRate: "", tenure: "" });
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center text-white shadow-lg"
        whileTap={{ scale: 0.9 }}
        whileHover={{ scale: 1.1 }}
      >
        {isOpen ? <XCircle /> : <MessageCircle />}
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="absolute bottom-16 right-0 w-80 bg-white rounded-xl shadow-xl flex flex-col"
          >
            <div className="p-4 border-b font-semibold text-blue-700 flex items-center gap-2">
              <Bot size={20} />
              नमस्कार! मैं आपका लोनसहायक!
            </div>

            <div className="p-4 flex-1 overflow-y-auto max-h-96 text-sm space-y-3">
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`flex ${
                    msg.type === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`p-2 rounded-lg max-w-[80%] ${
                      msg.type === "user"
                        ? "bg-blue-100 text-right"
                        : "bg-gray-100"
                    }`}
                  >
                    {msg.content.split("\n").map((line, j) => (
                      <div key={j}>{line}</div>
                    ))}
                    {msg.options?.length > 0 && (
                      <div className="mt-2 flex flex-col gap-1">
                        {msg.options.map((opt, j) => (
                          <motion.button
                            key={j}
                            whileTap={{ scale: 0.95 }}
                            whileHover={{ scale: 1.05 }}
                            onClick={() => handleOptionClick(opt)}
                            className="bg-blue-50 hover:bg-blue-100 text-blue-700 text-xs py-1 px-2 rounded transition-all"
                          >
                            {opt}
                          </motion.button>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
              {isTyping && (
                <div className="flex gap-1 items-center text-gray-500 text-sm px-2">
                  <span className="animate-bounce">•</span>
                  <span className="animate-bounce delay-150">•</span>
                  <span className="animate-bounce delay-300">•</span>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {showEmiCalculator && (
              <div className="p-3 border-t bg-blue-50 text-sm space-y-2">
                <input
                  type="number"
                  placeholder="Loan Amount (₹)"
                  value={emiInputs.loanAmount}
                  onChange={(e) =>
                    setEmiInputs({ ...emiInputs, loanAmount: e.target.value })
                  }
                  className="w-full p-1 rounded border"
                />
                <input
                  type="number"
                  placeholder="Tenure (in days)"
                  value={emiInputs.tenure}
                  onChange={(e) =>
                    setEmiInputs({ ...emiInputs, tenure: e.target.value })
                  }
                  className="w-full p-1 rounded border"
                />
                <button
                  onClick={calculateEmi}
                  className="w-full bg-blue-600 text-white py-1 rounded"
                >
                  EMI कैलकुलेट करें
                </button>
              </div>
            )}

            <div className="flex border-t">
              <input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                placeholder="Type here..."
                className="flex-1 p-2 text-sm border-none focus:outline-none"
              />
              <button
                onClick={sendMessage}
                className="bg-blue-600 text-white px-4"
              >
                <Send size={16} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ChatBot;
