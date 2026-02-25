import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

const WELCOME_MESSAGE: ChatMessage = {
  role: "assistant",
  content:
    "Hi! I'm here to help answer questions about Home Sweet Home Care. Ask me about our services, service areas, how to get started, or anything else!",
};

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([WELCOME_MESSAGE]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  const sendMessage = async () => {
    const trimmed = input.trim();
    if (!trimmed || isLoading) return;

    const userMessage: ChatMessage = { role: "user", content: trimmed };
    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    setInput("");
    setIsLoading(true);

    try {
      const apiMessages = updatedMessages
        .filter((m) => m !== WELCOME_MESSAGE)
        .map((m) => ({ role: m.role, content: m.content }));

      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: apiMessages }),
      });

      const data = await response.json();

      if (data.success && data.message) {
        setMessages((prev) => [
          ...prev,
          { role: "assistant", content: data.message },
        ]);
      } else {
        setMessages((prev) => [
          ...prev,
          {
            role: "assistant",
            content:
              "I'm having trouble responding right now. Please call us at (941) 200-0848 for immediate assistance.",
          },
        ]);
      }
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "I'm having trouble connecting right now. Please call us at (941) 200-0848 for immediate assistance.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <>
      {isOpen && (
        <div className="fixed bottom-20 right-4 md:right-6 w-[calc(100vw-2rem)] max-w-sm z-[55] shadow-2xl rounded-xl border border-gray-200 bg-white flex flex-col overflow-hidden"
          style={{ height: "min(500px, calc(100vh - 120px))" }}
        >
          <div className="bg-primary text-white px-4 py-3 flex items-center justify-between flex-shrink-0">
            <div className="flex items-center gap-2">
              <MessageCircle className="w-5 h-5" />
              <span className="font-semibold text-base">Chat With Us</span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white/80 hover:text-white transition-colors"
              aria-label="Close chat"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[85%] rounded-lg px-3 py-2 text-sm leading-relaxed ${
                    msg.role === "user"
                      ? "bg-primary text-white"
                      : "bg-secondary text-gray-800"
                  }`}
                >
                  {msg.content}
                </div>
              </div>
            ))}

            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-secondary text-gray-500 rounded-lg px-3 py-2 text-sm flex items-center gap-2">
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Typing...
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          <div className="border-t border-gray-200 p-3 flex-shrink-0">
            <div className="flex gap-2">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Type your question..."
                className="flex-1 border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
                disabled={isLoading}
              />
              <Button
                onClick={sendMessage}
                disabled={!input.trim() || isLoading}
                size="sm"
                className="bg-primary hover:bg-primary/90 text-white px-3"
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      )}

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-4 right-4 md:right-6 z-[55] w-14 h-14 rounded-full bg-primary hover:bg-primary/90 text-white shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center"
        aria-label={isOpen ? "Close chat" : "Open chat"}
      >
        {isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <MessageCircle className="w-6 h-6" />
        )}
      </button>
    </>
  );
};

export default ChatWidget;
