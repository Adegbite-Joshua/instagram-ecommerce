"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Menu } from "lucide-react"
import { cn } from "@/lib/utils"
import { useMobile } from "@/hooks/use-mobile"

interface LayoutProps {
    sidebar: React.ReactNode
    children: React.ReactNode
    childrenTopnav?: React.ReactNode
    className?: string
}

export function Layout({ sidebar, children, childrenTopnav, className }: LayoutProps) {
    const [sidebarOpen, setSidebarOpen] = useState(false)
    const isMobile = useMobile()

    // Close sidebar when switching to desktop view
    useEffect(() => {
        if (!isMobile) {
            setSidebarOpen(false)
        }
    }, [isMobile])

    // Close sidebar when clicking outside on mobile
    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (isMobile && sidebarOpen) {
                const target = e.target as HTMLElement
                if (target.id == "overlay") {
                    setSidebarOpen(false)
                }
            }
        }

        document.addEventListener("mousedown", handleClickOutside)
        return () => document.removeEventListener("mousedown", handleClickOutside)
    }, [isMobile, sidebarOpen])

    return (
        <div className={cn("flex min-h-screen w-full", className)}>
            {/* Mobile overlay */}
            {isMobile && sidebarOpen && (
                <div className="fixed inset-0 bg-black/50 z-40" id="overlay" onClick={() => setSidebarOpen(false)} />
            )}

            {/* Sidebar */}
            <div
                className={cn(
                    "fixed top-0 bottom-0 left-0 z-50 md:w-1/6 bg-background border-r transition-transform duration-300 ease-in-out",
                    isMobile && !sidebarOpen && "-translate-x-full",
                    !isMobile && "relative z-0",
                )}
            >
                {sidebar}
            </div>

            {/* Main content */}
            <div className={cn("flex-1 w-5/6")}>
                {/* Mobile header with menu button */}
                {isMobile && (
                    <div className="sticky bg-green-500 top-0 z-30 flex items-center h-14 px-4 border-b">
                        <button onClick={() => setSidebarOpen(true)} className="p-2 -ml-2 rounded-full hover:bg-accent">
                            <Menu className="w-5 h-5" />
                            <span className="sr-only">Toggle menu</span>
                        </button>
                        {childrenTopnav}
                    </div>
                )}

                {/* Page content */}
                <div className="flex-1">{children}</div>
            </div>
        </div>
    )
}

