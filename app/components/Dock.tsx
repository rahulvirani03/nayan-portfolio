import { Dock, DockIcon } from "@/components/magicui/dock";
import { buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { Briefcase, Home, ImageIcon, Instagram, Mail } from "lucide-react";
import Link from "next/link";
import { FaInstagram, FaPinterest } from "react-icons/fa";

export default function NewDock() {
  const navItems = [
    { name: "Home", icon: Home, href: "#home" },
    { name: "Projects", icon: Briefcase, href: "#projects" },
    { name: "Gallery", icon: ImageIcon, href: "#gallery" },
    // { name: "Experience", icon: Award, href: "#experience" },
    { name: "Contact", icon: Mail, href: "#contact" },
  ];

  const socialItems = [
    {
      name: "Instagram",
      icon: FaInstagram,
      url: "",
    },
    {
      name: "Pinterest",
      icon: FaPinterest,
      url: "",
    },
  ];
  return (
    <TooltipProvider>
      <Dock
        direction="middle"
        className="bg-transparent border gap-5 shadow-xl shadow-gray-200 bg-white fixed z-50 bottom-10 left-1/2 -translate-x-1/2"
      >
        {navItems.map((item) => (
          <DockIcon key={item.name} className="">
            <Tooltip>
              <TooltipTrigger asChild className="">
                <Link
                  href={item.href}
                  aria-label={item.name}
                  className={cn(
                    buttonVariants({ variant: "ghost", size: "icon" }),
                    "size-12 rounded-full"
                  )}
                >
                  <item.icon className="size-4" />
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                <p>{item.name}</p>
              </TooltipContent>
            </Tooltip>
          </DockIcon>
        ))}
        <Separator orientation="vertical" className="h-full" />
        {socialItems.map((social) => (
          <DockIcon key={social.name}>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href={social.url}
                  aria-label={social.name}
                  className={cn(
                    buttonVariants({ variant: "ghost", size: "icon" }),
                    "size-12 rounded-full"
                  )}
                >
                  <social.icon className="size-4" />
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                <p>{social.name}</p>
              </TooltipContent>
            </Tooltip>
          </DockIcon>
        ))}
        {/* <Separator orientation="vertical" className="h-full py-2" />
          <DockIcon>
            <Tooltip>
              <TooltipTrigger asChild>
                <ModeToggle className="rounded-full" />
              </TooltipTrigger>
              <TooltipContent>
                <p>Theme</p>
              </TooltipContent>
            </Tooltip>
          </DockIcon> */}
      </Dock>
    </TooltipProvider>
  );
}
