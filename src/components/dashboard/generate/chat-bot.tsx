import React, {
  Dispatch,
  SetStateAction,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/icons";
import { ProjectContext } from "@/context/ProjectProvider";
import { UseUpdateIconsByQuery } from "@/hooks/mutation/useUpdateIconsByQuery";
import Image from "next/image";
import { Send } from "lucide-react";
import { toast } from "sonner";

export interface IMessage {
  id: string;
  content: string;
  isUser: boolean;
}

interface ChatBotProps {
  keywords: string[];
  setPageNumber: Dispatch<SetStateAction<number>>;
  setShowChat: Dispatch<SetStateAction<boolean>>;
  messages: IMessage[];
  setMessages: Dispatch<SetStateAction<IMessage[]>>;
}

const ChatBot: React.FC<ChatBotProps> = ({
  keywords,
  setPageNumber,
  setShowChat,
  messages,
  setMessages,
}) => {
  const { selectedProjectId } = useContext(ProjectContext);
  const [inputMessage, setInputMessage] = useState("");
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTo({
        top: containerRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [messages]);

  useEffect(() => {
    // Load messages from localStorage
    const savedMessages = localStorage.getItem("chatMessages");
    if (savedMessages) {
      setMessages(JSON.parse(savedMessages));
    }
  }, [setMessages]);

  useEffect(() => {
    // Save messages to localStorage whenever they change
    localStorage.setItem("chatMessages", JSON.stringify(messages));
  }, [messages]);

  const { mutate: sendQuery, isLoading } = UseUpdateIconsByQuery();

  const handleMessageSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    const userMessage: IMessage = {
      id: Date.now().toString(),
      content: inputMessage,
      isUser: true,
    };

    setMessages((prevMessages) => [...prevMessages, userMessage]);

    const botMessage: IMessage = {
      id: Date.now().toString(),
      content: "",
      isUser: false,
    };
    setMessages((prevMessages) => [...prevMessages, botMessage]);

    setInputMessage("");

    sendQuery(
      {
        project_id: selectedProjectId,
        query: inputMessage,
      },
      {
        onSuccess: (response) => {
          setPageNumber(1);
          setMessages((prevMessages) => {
            const lastMessage = prevMessages[prevMessages.length - 1];
            if (!lastMessage.isUser) {
              return [
                ...prevMessages.slice(0, -1),
                {
                  ...lastMessage,
                  content: response.query_response,
                },
              ];
            }
            return prevMessages;
          });
        },
        onError: () => {
          setMessages((prevMessages) => {
            const lastMessage = prevMessages[prevMessages.length - 1];
            if (!lastMessage.isUser) {
              return [
                ...prevMessages.slice(0, -1),
                {
                  ...lastMessage,
                  content: "Please retry with a different query and be specific in your request.",
                },
              ];
            }
            return prevMessages;
          });
        },
      }
    );
  };

  const clearMessages = useCallback(() => {
    setMessages([]);
    localStorage.removeItem("chatMessages"); // Clear messages from localStorage
  }, [setMessages]);

  useEffect(() => {
    setInputMessage(keywords.join(", "));
  }, [keywords]);

  return (
    <div className="absolute bottom-[-50px] right-[-60px] bg-chatbot-gradient border border-white rounded-2xl px-4 py-5 mt-5 w-[290px] z-[100] h-[450px]">
            {/* input field */}
            <div className={`flex flex-row items center ${messages.length>0?'justify-between':'justify-end'}  `}>
            {messages.length > 0 && (
        <p
          className="  text-white hover:text-blue-500 font-normal text-xs underline cursor-pointer"
          onClick={() => clearMessages()}
        >
          Clear Chat
        </p>
      )}
            <svg onClick={()=>{setShowChat(false)}} className="cursor-pointer" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.99486 7.00636C6.60433 7.39689 6.60433 8.03005 6.99486 8.42058L10.58 12.0057L6.99486 15.5909C6.60433 15.9814 6.60433 16.6146 6.99486 17.0051C7.38538 17.3956 8.01855 17.3956 8.40907 17.0051L11.9942 13.4199L15.5794 17.0051C15.9699 17.3956 16.6031 17.3956 16.9936 17.0051C17.3841 16.6146 17.3841 15.9814 16.9936 15.5909L13.4084 12.0057L16.9936 8.42059C17.3841 8.03007 17.3841 7.3969 16.9936 7.00638C16.603 6.61585 15.9699 6.61585 15.5794 7.00638L11.9942 10.5915L8.40907 7.00636C8.01855 6.61584 7.38538 6.61584 6.99486 7.00636Z" fill="white"/>
</svg>
            </div>
      <div className="flex items-center bg-[#1C2038] border border-[#2D3033] focus-within:border-white rounded-lg mt-4 py-1 pl-3 pr-3">
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
          <Send className="w-3 h-auto text-[#BAC0DD]" />
        </Button>
      </div>
      {/* messages */}
      {messages.length > 0 ? (
        <div
          className="min-h-[300px] space-y-5 mt-9  overflow-y-auto custom-scrollbar"
          ref={containerRef}
        >
          {messages.map((msg) => (
            <div key={msg.id} className="w-[90%] flex gap-5 ">
              {/* profile img */}
              <Image
                src={
                  msg.isUser
                    ? "/default-user.svg"
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
                  <p className="text-sm text-[#BAC0DD] leading-6 font-light">
                    {msg.content}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="h-[100px] flex items-center justify-center">
          <div className="flex flex-col items-center justify-center gap-4 text-white">
            <Icons.message />
            <p className="text-xs">Type your icon design requests here</p>
          </div>
        </div>
      )}


      {/* clear chat button */}
     

      {/* footer */}
      <p className="text-xs text-[#BAC0DD] text-center font-light mt-3">
        Iconocity can make mistakes. Be specific in your requests.
      </p>
    </div>
  );
};

export default ChatBot;
