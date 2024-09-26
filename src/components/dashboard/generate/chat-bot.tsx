import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

const ChatBot = () => {
  // Dummy data for SVG icons and chat messages
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Generate SVG icons for my creative project",
      sender: "You",
      img: "/generate/profile4.png",
    },
    {
      id: 2,
      text: "You're welcome! I can generate an icon file for you in a format that is convenient for you.",
      sender: "Iconicity",
      img: "/generate/chat-ai.svg",
    },

    {
      id: 1,
      text: " Generate SVG icons for my creative project....",
      sender: "You",
      img: "/generate/profile4.png",
    },
    {
      id: 2,
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus quos voluptates sint ipsum nostrum dicta distinctio culpa eligendi minima! Atque molestiae placeat exercitationem laudantium in, omnis beatae asperiores a itaque?",
      sender: "Iconicity",
      img: "/generate/chat-ai.svg",
    },
    {
      id: 1,
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus quos voluptates sint ipsum nostrum dicta distinctio culpa eligendi minima! Atque molestiae placeat exercitationem laudantium in, omnis beatae asperiores a itaque?",
      sender: "You",
      img: "/generate/profile4.png",
    },
    {
      id: 2,
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero consectetur repudiandae et error obcaecati tempora accusantium quibusdam dignissimos architecto. Harum, fugit, provident nihil quos explicabo dignissimos eos quia impedit mollitia voluptates adipisci odio blanditiis perferendis optio animi vel iste ex ut expedita ea deserunt est? Ducimus mollitia nesciunt ut, nulla quaerat autem ipsum maxime inventore dolore sapiente minus, distinctio blanditiis excepturi eveniet modi impedit dignissimos, sed magnam ratione commodi velit atque! Sunt magni tempora illo, blanditiis rem perspiciatis sapiente. Rerum architecto fuga ad quod eos! Quo sequi adipisci maiores omnis, neque odit ex veniam illo numquam vitae esse soluta libero.      ",
      sender: "Iconicity",
      img: "/generate/chat-ai.svg",
    },
    {
      id: 1,
      text: " Generate SVG icons for my creative project",
      sender: "You",
      img: "/generate/profile4.png",
    },

    {
      id: 2,
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus quos voluptates sint ipsum nostrum dicta distinctio culpa eligendi minima! Atque molestiae placeat exercitationem laudantium in, omnis beatae asperiores a itaque?",
      // text: "You're welcome! I can generate an icon file for you...",
      sender: "Iconicity",
      img: "/generate/chat-ai.svg",
    },

    {
      id: 2,
      text: "You're welcome! I can generate an icon file for you...",
      sender: "Iconicity",
      img: "/generate/chat-ai.svg",
    },
    {
      id: 1,
      text: "Generate SVG icons for my creative project afuasfashfk",
      sender: "You",
      img: "/generate/profile4.png",
    },
    {
      id: 1,
      text: "Generate SVG icons for my creative project afuasfashfk",
      sender: "You",
      img: "/generate/profile4.png",
    },
  ]);

  return (
    <div className="bg-chatbot-gradient border border-[#1C2037] rounded-2xl px-8 py-5 mt-5">
      {/* messages */}
      <div className="h-[300px] space-y-5  overflow-y-auto custom-scrollbar">
        {messages.map((msg) => (
          <div key={msg.id} className="w-[70%] flex gap-5 ">
            {/* profile img */}
            <Image
              src={msg.img}
              width={300}
              height={300}
              alt="profile"
              className=" w-5 h-5 shrink-0 object-cover rounded-full"
            />
            {/* msg */}
            <div>
              <h3 className="text-base text-white font-semibold">
                {msg.sender}
              </h3>
              <span className=" text-sm text-[#BAC0DD] font-light">
                {msg.text}
              </span>
            </div>
          </div>
        ))}
      </div>
      {/* input field */}
      <div className="flex items-center bg-[#1C2038] border border-[#2D3033] rounded-lg mt-4 py-2 pl-9 pr-3">
        <Input
          type="text"
          placeholder="Type your request"
          className="text-white placeholder:text-[#7C7F99] flex-1 bg-transparent border-none"
        />
        <Button className="bg-transparent border border-white px-3">
          <Send className="w-5 h-auto text-[#BAC0DD]" />
        </Button>
      </div>
      {/* footer */}
      <p className="text-xs text-[#BAC0DD] text-center font-light mt-3">
        Iconicity can make mistakes. Specify the information
      </p>
    </div>
  );
};

export default ChatBot;
