"use client";

import type React from "react";
import { Home, Search, Compass, Film, MessageCircle, Heart, PlusSquare, Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

export function Sidebar() {
  return (
    <div className="flex flex-col h-full bg-black text-white">
      <div className="p-6 pb-8">
        <h1 className="text-2xl font-serif italic font-bold">Instagram</h1>
      </div>

      <nav className="flex-1 px-3">
        <ul className="space-y-1">
          <NavItem icon={Home} label="Home" isActive />
          <NavItem icon={Search} label="Search" />
          <NavItem icon={Compass} label="Explore" />
          <NavItem icon={Film} label="Reels" />
          <NavItem icon={MessageCircle} label="Messages" badge="2" />
          <NavItem icon={Heart} label="Notifications" badge="1" />
          <NavItem icon={PlusSquare} label="Create" />
          <li>
            <a href="#" className={"flex items-center gap-4 px-3 py-3 rounded-md transition-colors text-gray-300 hover:bg-gray-900"}
            >
              <Avatar className="w-6 h-6">
                <AvatarImage src="/placeholder.svg?height=24&width=24" />
                <AvatarFallback>U</AvatarFallback>
              </Avatar>
              <span>Profile</span>
              {/* <Badge className="ml-auto bg-red-500 hover:bg-red-600 text-white">{badge}</Badge> */}
            </a>
          </li>
        </ul>
      </nav>

      <div className="p-4 mt-auto">
        <NavItem icon={Menu} label="More" />
      </div>
    </div>
  );
}

interface NavItemProps {
  icon: React.ElementType;
  label: string;
  isActive?: boolean;
  badge?: string;
}

function NavItem({ icon: Icon, label, isActive, badge }: NavItemProps) {
  return (
    <li>
      <a
        href="#"
        className={cn(
          "flex items-center gap-4 px-3 py-3 rounded-md transition-colors",
          isActive ? "font-semibold" : "text-gray-300 hover:bg-gray-900"
        )}
      >
        <Icon className="w-6 h-6" />
        <span>{label}</span>
        {badge && <Badge className="ml-auto bg-red-500 hover:bg-red-600 text-white">{badge}</Badge>}
      </a>
    </li>
  );
}