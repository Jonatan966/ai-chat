"use client";

import { useChat } from "ai/react";

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
        <CardTitle>Chat AI</CardTitle>
        <CardDescription>
          Using Vercel SDK to create a chat bot.
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
                {message.content}
              </p>
            </div>
          ))}
        </ScrollArea>
      </CardContent>

      <CardFooter>
        <form className="w-full flex gap-2" onSubmit={handleSubmit}>
          <Input
            placeholder="How can I help you?"
            value={input}
            onChange={handleInputChange}
            disabled={isLoading}
          />
          <Button type="submit" disabled={isLoading}>
            Send
          </Button>
        </form>
      </CardFooter>
    </Card>
  );
}
