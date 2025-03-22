"use client"


import { Search, ChevronRight, Bookmark, HelpCircle, MessageSquare } from "lucide-react"
import { cn } from "@/lib/utils"
import { Input } from "@/components/ui/input"
import { useState } from "react"
import Link from "next/link"

export function Sidebar() {
  return (
    <div className="flex flex-col h-full bg-white">
      <div className="p-4 border-b">
        <div className="relative">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-400" />
          <Input type="search" placeholder="Search..." className="pl-9 bg-gray-100 border-gray-200" />
        </div>
      </div>

      <div className="flex-1 overflow-auto">
        <CategoryMenu />

        <div className="px-4 py-3 border-t">
          <Link href="#" className="flex items-center py-2 text-sm">
            <Bookmark className="w-4 h-4 mr-3 text-gray-500" />
            <span>Saved Items</span>
          </Link>

          <Link href="#" className="flex items-center py-2 text-sm">
            <HelpCircle className="w-4 h-4 mr-3 text-gray-500" />
            <span>Help centre</span>
          </Link>

          <Link href="#" className="flex items-center py-2 text-sm">
            <MessageSquare className="w-4 h-4 mr-3 text-gray-500" />
            <span>Feedback</span>
          </Link>
        </div>
      </div>
    </div>
  )
}

function CategoryMenu() {
    const [categories, setCategories] = useState([
        {
          name: "Products",
          isOpen: true,
          subcategories: [
            "Popular now",
            "Vehicles",
            "Phone & tablet",
            "Electronics",
            "Food & snacks",
            "Repair & construction",
            "Fashion",
            "Health & beauty",
            "Pets",
            "Furniture",
            "Jobs",
          ],
        },
        { 
            name: "Service", 
            isOpen: false,
            subcategories: [
                "Home services",
                "Personal care",
                "Gardening",
                "Pet care",
                "Cleaning",
                "Travel",
                "Business services",
                "Education",
                "Sports & recreation",
                "Events & promotions",
                "Real estate",
                "Childcare",
                "Financial services",
                "Insurance",
                "Legal services",
                "Arts & crafts",
                "Health & fitness",
                "Beauty & spa",
                "Dating & relationship",
                "Relationships",
                "Pets",
                "Fashion",
                "Sustainability",
            ] },
        { 
            name: "Taka", 
            isOpen: false,
            subcategories: [
                "E-commerce",
                "Mobile apps",
                "Websites",
                "Social media",
                "Marketplaces",
                "Mobile games",
                "Artificial intelligence",
                "Cybersecurity",
                "Analytics",
                "Data management",
                "Cloud computing",
                "IoT",
                "Blockchain",
                "Game development",
                "Digital marketing",
            ]
        },
      ])
  return (
    <div className="py-2">
      {categories.map((category, index) => (
        <div key={category.name} className="mb-1">
          <button onClick={()=>setCategories(prev => {
            return prev.map((c, i) =>
              i === index? {...c, isOpen:!c.isOpen } : c
            );
          })} className="flex cursor-pointer items-center justify-between w-full px-4 py-2 text-sm font-medium hover:bg-gray-100">
            {category.name}
            {category.subcategories.length > 0 && (
              <ChevronRight
                className={cn("w-4 h-4 text-gray-400 transition-transform", category.isOpen && "rotate-90")}
              />
            )}
          </button>

          {category.isOpen && category.subcategories.length > 0 && (
            <div className="pl-4">
              {category.subcategories.map((subcat) => (
                <Link
                  key={subcat}
                  href="#"
                  className="flex items-center px-4 py-1.5 text-sm text-gray-700 hover:bg-gray-100"
                >
                  {subcat}
                </Link>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

