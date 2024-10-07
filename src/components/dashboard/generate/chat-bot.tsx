"use client";

import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ProjectContext } from "@/context/ProjectProvider";
import { UseUpdateIconsByQuery } from "@/hooks/mutation/useUpdateIconsByQuery";
import { Send } from "lucide-react";
import Image from "next/image";
import React, {
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

export interface IMessage {
  id: string;
  content: string;
  isUser: boolean;
}

const ChatBot = () => {
  // context
  const { selectedProjectId } = useContext(ProjectContext);

  // Dummy data for SVG icons and chat messages
  const [inputMessage, setInputMessage] = useState("");
  const [messages, setMessages] = useState<IMessage[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current?.scrollTo({
        top: containerRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [messages]);

  const { mutate: sendQuery, isLoading } = UseUpdateIconsByQuery();

  const handleMessageSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    // Add the user message to the chat
    const userMessage: IMessage = {
      id: Date.now().toString(),
      content: inputMessage,
      isUser: true,
    };

    setMessages((prevMessages) => [...prevMessages, userMessage]);

    //
    const botMessage: IMessage = {
      id: Date.now().toString(),
      content: "",
      isUser: false,
    };
    setMessages((prevMessages) => [...prevMessages, botMessage]);

    // Clear input field
    setInputMessage("");

    sendQuery(
      {
        project_id: selectedProjectId,
        query: inputMessage,
      },
      {
        onSuccess: (response) => {
          setMessages((prevMessages) => {
            const lastMessage = prevMessages[prevMessages.length - 1];
            if (!lastMessage.isUser) {
              return [
                ...prevMessages.slice(0, -1),
                {
                  ...lastMessage,
                  content: response,
                },
              ];
            }
            return prevMessages;
          });
        },
        onError() {
          setMessages((prevMessages) => {
            const lastMessage = prevMessages[prevMessages.length - 1];
            if (!lastMessage.isUser) {
              return [
                ...prevMessages.slice(0, -1),
                {
                  ...lastMessage,
                  content: "An error occurred. Please try again.",
                },
              ];
            }
            return prevMessages;
          });
        },
      }
    );
  };

  // clear chat funtion
  const clearMessages = useCallback(() => {
    setMessages([]);
  }, []);

  return (
    <div className="relative bg-chatbot-gradient border border-[#1C2037] rounded-2xl px-8 py-5 mt-5">
      {/* messages */}
      {messages.length > 0 ? (
        <div
          className="h-[300px] space-y-5  overflow-y-auto custom-scrollbar"
          ref={containerRef}
        >
          {messages.map((msg) => (
            <div key={msg.id} className="w-[70%] flex gap-5 ">
              {/* profile img */}
              <Image
                src={
                  msg.isUser
                    ? "/generate/profile4.png"
                    : "/generate/chat-ai.svg"
                }
                width={300}
                height={300}
                alt="profile"
                className=" w-5 h-5 shrink-0 object-cover rounded-full"
              />
              <div>
                <h3 className="text-base text-white font-semibold">
                  {msg.isUser ? "User" : "AI"}
                </h3>
                {isLoading && !msg.isUser && !msg.content ? (
                  <div className="ml-1.5 dot-falling mt-2" />
                ) : (
                  <p className="text-sm text-[#BAC0DD] font-light">
                    {msg.content}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="h-[300px] flex items-center justify-center">
          <div className="flex flex-col items-center justify-center gap-4 text-white">
            <Icons.message />
            <p className="text-xs">Type your icon design requests here</p>
          </div>
        </div>
      )}
      {/* input field */}
      <div className="flex items-center bg-[#1C2038] border border-[#2D3033] focus-within:border-white rounded-lg mt-4 py-2 pl-3 pr-3">
        <Input
          type="text"
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !isLoading) {
              handleMessageSubmit(e);
            }
          }}
          placeholder="Type your request"
          className="text-white placeholder:text-[#7C7F99] flex-1 bg-transparent border-none"
        />
        <Button
          type="submit"
          onClick={handleMessageSubmit}
          disabled={isLoading}
          className="bg-transparent border border-white px-3"
        >
          <Send className="w-5 h-auto text-[#BAC0DD]" />
        </Button>
      </div>

      {/* clear chat button */}
      {messages.length > 0 && (
        <p
          className="absolute top-5 right-7 text-white hover:text-blue-500 font-normal text-xs underline cursor-pointer"
          onClick={() => clearMessages()}
        >
          Clear Chat
        </p>
      )}

      {/* footer */}
      <p className="text-xs text-[#BAC0DD] text-center font-light mt-3">
        Iconocity can make mistakes. Be specific in your requests.
      </p>
    </div>
  );
};

export default ChatBot;
