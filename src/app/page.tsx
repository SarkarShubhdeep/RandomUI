"use client";

import { motion } from "framer-motion";
import { Search, Plus, Layers, Box, Layout, Type } from "lucide-react";
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

export default function Home() {
  const { theme } = useTheme();
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

                {/* if theme is dark then show dark logo else show light logo */}
                {theme === "light" ? (
                  <Image src={LogoLight} alt="Logo" height={32} />
                ) : (
                  <Image src={LogoDark} alt="Logo" height={32} />
                )}
            </div>
          </div>
          <ScrollArea className="flex-1">
            <div className="flex flex-col gap-2 p-4">
              <Button variant="secondary" className="justify-start">
                <Layout className="mr-2 h-4 w-4" />
                All Components
              </Button>
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
          <div className="border-t p-4">
             <div className="flex items-center gap-3 rounded-lg bg-secondary/50 p-3">
                <Avatar className="h-9 w-9 border border-background">
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div className="text-sm">
                  <p className="font-medium leading-none">Designer</p>
                  <p className="text-muted-foreground text-xs">user@example.com</p>
                </div>
             </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto">
          <div className="border-b bg-background/50 backdrop-blur-xl sticky top-0 z-10">
            <div className="flex h-14 items-center gap-4 px-6 justify-between">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" size="icon" className="md:hidden">
                    <Layout className="h-4 w-4" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="left">
                   {/* Mobile Sidebar Content */}
                   <div className="py-4 font-semibold">RandomUI</div>
                </SheetContent>
              </Sheet>
              
              <div className="relative w-full max-w-md">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search components..."
                  className="w-full bg-background pl-8 md:w-2/3 lg:w-full"
                />
              </div>
              <div className="flex items-center gap-2">
                <ModeToggle />
              </div>
            </div>
          </div>

          <ScrollArea className="h-[calc(100vh-3.5rem)]">
            <div className="container mx-auto max-w-6xl p-6 md:p-10">
              <div className="mb-8">
                <h1 className="text-3xl font-bold tracking-tight mb-2">Component Library</h1>
                <p className="text-muted-foreground">
                  A collection of premium, reusable components ready for your next project.
                </p>
              </div>

              <motion.div 
                variants={container}
                initial="hidden"
                animate="show"
                className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
              >
                {/* Buttons Card */}
                <motion.div variants={item}>
                  <Card className="h-full overflow-hidden border-border/50 bg-card/50 hover:bg-card/80 transition-colors">
                    <CardHeader>
                      <CardTitle>Buttons</CardTitle>
                      <CardDescription>Interactive elements for user actions.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex flex-wrap gap-2">
                        <Button>Default</Button>
                        <Button variant="secondary">Secondary</Button>
                        <Button variant="outline">Outline</Button>
                        <Button variant="destructive">Destructive</Button>
                        <Button variant="ghost">Ghost</Button>
                        <Button size="sm">Small</Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>

                {/* Inputs Card */}
                <motion.div variants={item}>
                  <Card className="h-full overflow-hidden border-border/50 bg-card/50 hover:bg-card/80 transition-colors">
                    <CardHeader>
                      <CardTitle>Form Inputs</CardTitle>
                      <CardDescription>Data entry components.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                       <Input placeholder="Email address" />
                       <div className="flex items-center gap-2">
                         <Input type="password" placeholder="Password" />
                         <Button size="icon" variant="ghost">
                           <Box className="h-4 w-4" />
                         </Button>
                       </div>
                    </CardContent>
                  </Card>
                </motion.div>

                {/* Badges Card */}
                <motion.div variants={item}>
                  <Card className="h-full overflow-hidden border-border/50 bg-card/50 hover:bg-card/80 transition-colors">
                    <CardHeader>
                      <CardTitle>Badges</CardTitle>
                      <CardDescription>Status indicators and labels.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex flex-wrap gap-2">
                        <Badge>Default</Badge>
                        <Badge variant="secondary">Secondary</Badge>
                        <Badge variant="outline">Outline</Badge>
                        <Badge variant="destructive">Destructive</Badge>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>

                 {/* Typography Card */}
                 <motion.div variants={item} className="lg:col-span-2">
                  <Card className="h-full overflow-hidden border-border/50 bg-card/50 hover:bg-card/80 transition-colors">
                    <CardHeader>
                      <CardTitle>Typography</CardTitle>
                      <CardDescription>Headings and text styles.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid gap-4">
                        <div>
                          <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
                            The Joke Tax Chronicles
                          </h4>
                          <p className="leading-7 [&:not(:first-child)]:mt-2 text-muted-foreground">
                            Once upon a time, in a far-off land, there was a very lazy king who
                            spent all day lounging on his throne. One day, his advisors came him...
                          </p>
                        </div>
                        <Separator />
                        <div className="flex h-5 items-center space-x-4 text-sm">
                          <div>Blog</div>
                          <Separator orientation="vertical" />
                          <div>Docs</div>
                          <Separator orientation="vertical" />
                          <div>Source</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>

                {/* Dropdown Card */}
                <motion.div variants={item}>
                  <Card className="h-full overflow-hidden border-border/50 bg-card/50 hover:bg-card/80 transition-colors">
                    <CardHeader>
                      <CardTitle>Dropdowns</CardTitle>
                      <CardDescription>Menu tailored for actions.</CardDescription>
                    </CardHeader>
                    <CardContent className="flex items-center justify-center p-6">
                       <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="outline">Open Menu</Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                          <DropdownMenuItem>Profile</DropdownMenuItem>
                          <DropdownMenuItem>Billing</DropdownMenuItem>
                          <DropdownMenuItem>Team</DropdownMenuItem>
                          <DropdownMenuItem>Subscription</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </CardContent>
                  </Card>
                </motion.div>

              </motion.div>
            </div>
          </ScrollArea>
        </main>
      </div>
    </div>
  );
}
