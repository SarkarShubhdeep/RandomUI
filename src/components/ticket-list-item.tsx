"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin, Ticket, ArrowRight, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface TicketListItemProps {
  title?: string;
  date?: string;
  time?: string;
  location?: string;
  price?: string;
  status?: "available" | "sold-out" | "fast-selling";
  image?: string;
  className?: string;
}

export function TicketListItem({
  title = "Neon Nights Festival 2026",
  date = "MAR 24",
  time = "20:00 PM",
  location = "Cyber Arena, Neo Tokyo",
  price = "$150.00",
  status = "available",
  className,
}: TicketListItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.01 }}
      className={cn(
        "group relative flex w-full max-w-3xl flex-col gap-4 overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl transition-all hover:bg-white/10 dark:bg-black/20 dark:hover:bg-black/40 sm:flex-row sm:items-center",
        className
      )}
    >
      {/* Glow Effect */}
      <div className="absolute -left-16 -top-16 h-32 w-32 rounded-full bg-primary/20 blur-[100px] transition-all group-hover:bg-primary/30" />

      {/* Date Box */}
      <div className="flex shrink-0 flex-row items-center justify-between gap-4 rounded-xl border border-white/5 bg-white/5 p-4 text-center dark:bg-white/5 sm:w-24 sm:flex-col sm:justify-center sm:gap-1">
        <span className="text-xs font-medium uppercase text-muted-foreground">
          {date.split(" ")[0]}
        </span>
        <span className="text-2xl font-bold tracking-tight text-foreground">
          {date.split(" ")[1]}
        </span>
      </div>

      {/* Content */}
      <div className="flex grow flex-col gap-2">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-lg font-semibold tracking-tight text-foreground group-hover:text-primary transition-colors">
            {title}
          </h3>
          {status === "fast-selling" && (
            <Badge variant="destructive" className="animate-pulse">
              Fast Selling
            </Badge>
          )}
          {status === "sold-out" && <Badge variant="secondary">Sold Out</Badge>}
        </div>

        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted-foreground">
          <div className="flex items-center gap-1.5">
            <Clock className="h-3.5 w-3.5" />
            <span>{time}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <MapPin className="h-3.5 w-3.5" />
            <span>{location}</span>
          </div>
        </div>
      </div>

      {/* Action Area */}
      <div className="flex shrink-0 items-center justify-between gap-4 sm:flex-col sm:items-end sm:gap-2">
        <div className="text-xl font-bold text-foreground">{price}</div>
        <Button className="w-full shrink-0 sm:w-auto z-10">
          <Ticket className="mr-2 h-4 w-4" />
          Buy Ticket
        </Button>
      </div>
    </motion.div>
  );
}
