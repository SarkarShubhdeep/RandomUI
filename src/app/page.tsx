"use client";

import { motion } from "framer-motion";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Search, Plus, Layers, Box, Layout, Type, Github, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import Image from "next/image";
import LogoDark from "@/assets/logo-randomui-dark.svg";
import LogoLight from "@/assets/logo-randomui-light.svg";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useState, useEffect } from "react";
// ...
export default function Home() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 }
  };


  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/20">
      {/* Background Gradients */}
      <div className="fixed inset-0 -z-10 h-full w-full bg-background mt-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-primary/20 opacity-20 blur-[100px]"></div>
      </div>

      <div className="flex h-screen overflow-hidden">
        {/* Sidebar */}
        <aside className="hidden w-64 flex-col border-r bg-background/50 backdrop-blur-xl md:flex">
          <div className="flex h-14 items-center border-b px-6">
            <div className="flex items-center gap-2 font-semibold tracking-tight">

                {mounted ? (
                  resolvedTheme === "light" ? (
                    <Image src={LogoLight} alt="Logo" height={32} />
                  ) : (
                    <Image src={LogoDark} alt="Logo" height={32} />
                  )
                ) : (
                  // Render a placeholder or one of the logos with opacity 0 to prevent layout shift during hydration
                  <div style={{ height: 32, width: 100 }} /> 
                )}
            </div>
          </div>
          <ScrollArea className="flex-1">
            <div className="flex flex-col gap-2 p-4">
              <Collapsible defaultOpen>
                <CollapsibleTrigger asChild>
                  <Button variant="secondary" className="w-full justify-start group">
                    <Layout className="mr-2 h-4 w-4" />
                    All Components
                    <ChevronDown className="ml-auto h-4 w-4 transition-transform group-data-[state=open]:rotate-180" />
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent className="pl-6 space-y-1 mt-1">
                   <Button variant="ghost" size="sm" className="w-full justify-start">Comp 1</Button>
                   <Button variant="ghost" size="sm" className="w-full justify-start">Comp 2</Button>
                   <Button variant="ghost" size="sm" className="w-full justify-start">Comp 3</Button>
                </CollapsibleContent>
              </Collapsible>
              <Button variant="ghost" className="justify-start">
                <Type className="mr-2 h-4 w-4" />
                Typography
              </Button>
              <Button variant="ghost" className="justify-start">
                <Layers className="mr-2 h-4 w-4" />
                Patterns
              </Button>
            </div>
          </ScrollArea>
          
        </aside>

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto">
          {/* Top Bar */}
          <div className="border-b bg-background/50 backdrop-blur-xl sticky top-0 z-10">
            <div className="flex h-14 items-center gap-4 px-6 justify-end">
              <div className="relative w-full max-w-xs">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search components..."
                  className="w-full pl-8"
                />
              </div>
              <div className="flex items-center gap-2">
                <Link href="https://github.com/SarkarShubhdeep/RandomUI.git" target="_blank">
                  <Button variant="ghost" size="icon">
                    <Github className="h-4 w-4" />
                  </Button>
                </Link>
                <ModeToggle />
              </div>
            </div>
          </div>

          <ScrollArea className="h-[calc(100vh-3.5rem)]">
            <div className="container mx-auto max-w-6xl p-6 md:p-10">
              <div className="mb-8">
                <h1 className="text-3xl font-bold tracking-tight mb-2">🫵 🪨</h1>
                <p className="text-muted-foreground">
                  A totally random collection of UI components that I designed my on own or collected/was inspired from the somewhere else. Made this for my own convience but feel free to use them to in your projects. 
                </p>
              </div>

              <motion.div 
                variants={container}
                initial="hidden"
                animate="show"
                className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
              >
                
              </motion.div>
            </div>
          </ScrollArea>
        </main>
      </div>
    </div>
  );
}
