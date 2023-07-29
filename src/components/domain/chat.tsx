"use client";

import { useChat } from "ai/react";
import ReactMarkdown from "react-markdown";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";

export function Chat() {
  const { input, messages, handleInputChange, handleSubmit, isLoading } =
    useChat({
      api: "/api/chat",
    });

  return (
    <Card className="w-[440px]">
      <CardHeader>
        <CardTitle>AI Chat</CardTitle>
        <CardDescription>
          Usando a{" "}
          <a href="https://sdk.vercel.ai" target="_blank">
            Vercel SDK
          </a>{" "}
          para criar um chat bot.
        </CardDescription>
      </CardHeader>

      <CardContent>
        <ScrollArea className=" h-[600px] w-full pr-4">
          {messages.map((message) => (
            <div
              className="flex gap-3 text-slate-300 text-sm mb-4"
              key={message.id}
            >
              <Avatar>
                {message.role === "user" ? (
                  <>
                    <AvatarFallback>JN</AvatarFallback>
                    <AvatarImage src="https://github.com/Jonatan966.png" />
                  </>
                ) : (
                  <>
                    <AvatarFallback>GH</AvatarFallback>
                    <AvatarImage src="https://github.com/github.png" />
                  </>
                )}
              </Avatar>

              <p className="leading-relaxed">
                <span className="block font-bold text-slate-400">
                  {message.role === "user" ? "Usuário" : "AI"}:
                </span>
                <ReactMarkdown>{message.content}</ReactMarkdown>
              </p>
            </div>
          ))}
        </ScrollArea>
      </CardContent>

      <CardFooter>
        <form className="w-full flex gap-2" onSubmit={handleSubmit}>
          <Input
            placeholder="Como posso te ajudar?"
            value={input}
            onChange={handleInputChange}
            disabled={isLoading}
          />
          <Button type="submit" disabled={isLoading}>
            Enviar
          </Button>
        </form>
      </CardFooter>
    </Card>
  );
}
