"use client"

import type React from "react"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, MessageSquare, Calendar, Settings } from "lucide-react"

interface NavItem {
  href: string
  label: string
  icon: React.ElementType
  adminOnly?: boolean
}

export function MobileNav({ isAdmin = false }: { isAdmin?: boolean }) {
  const pathname = usePathname()

  const navItems: NavItem[] = [
    {
      href: isAdmin ? "/admin/dashboard" : "/coach/dashboard",
      label: "Home",
      icon: Home,
    },
    {
      href: "/chat",
      label: "Chat",
      icon: MessageSquare,
      adminOnly: false,
    },
    {
      href: "/sessions",
      label: "Sessions",
      icon: Calendar,
    },
    {
      href: isAdmin ? "/admin/settings" : "/coach/settings",
      label: "Settings",
      icon: Settings,
    },
  ]

  // Filter out admin-only items if not admin
  const filteredItems = navItems.filter((item) => !item.adminOnly || isAdmin)

  return (
    <div className="fixed bottom-0 left-0 z-50 w-full border-t border-gray-200 bg-white">
      <div className="mx-auto grid h-16 max-w-lg grid-cols-4">
        {filteredItems.map((item) => {
          const isActive = pathname === item.href
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`group inline-flex flex-col items-center justify-center px-5 py-2 ${
                isActive ? "text-blue-600" : "text-gray-500 hover:text-blue-600"
              }`}
            >
              <item.icon
                className={`mb-1 h-6 w-6 ${isActive ? "text-blue-600" : "text-gray-500 group-hover:text-blue-600"}`}
              />
              <span className="text-xs">{item.label}</span>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
