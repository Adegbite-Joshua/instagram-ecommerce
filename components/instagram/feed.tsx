"use client"

import { useState } from "react"
import { Heart, MessageCircle, Send, Bookmark, MoreHorizontal, X, Smile, Camera, Paperclip, Mic } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { cn } from "@/lib/utils"

export function Feed() {
  const [isLiked, setIsLiked] = useState(false)
  const [showCommentIcons, setShowCommentIcons] = useState(false)

  const toggleLike = () => {
    setIsLiked(!isLiked)
  }

  return (
    <div className="max-w-xl mx-auto py-4 px-4">
      {/* Post */}
      <div className="mb-8 border border-gray-800 rounded-md overflow-hidden bg-black">
        <div className="p-3 flex items-center">
          <Avatar className="h-8 w-8 mr-3">
            <AvatarImage src="/placeholder.svg?height=32&width=32" />
            <AvatarFallback>IB</AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <div className="flex items-center">
              <span className="font-semibold text-sm">iamblaisebeatz</span>
              <span className="ml-1 text-blue-500">
                <svg className="w-4 h-4 inline-block" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                </svg>
              </span>
            </div>
          </div>
          <button className="text-gray-400">
            <MoreHorizontal className="w-5 h-5" />
          </button>
        </div>

        <div className="aspect-square bg-gray-900">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5_HRrNHI.jpg-JKvUq3TpULWKsmNmV48MnucFtJPX8V.jpeg"
            alt="Post image"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="p-3">
          <div className="flex justify-between mb-2">
            <div className="flex space-x-4">
              <button onClick={toggleLike}>
                <Heart
                  className={cn("w-6 h-6 transition-colors duration-200", isLiked ? "text-red-500 fill-red-500" : "")}
                />
              </button>
              <button>
                <MessageCircle className="w-6 h-6" />
              </button>
              <button>
                <Send className="w-6 h-6" />
              </button>
            </div>
            <button>
              <Bookmark className="w-6 h-6" />
            </button>
          </div>

          <div className="mb-2 flex items-center">
            <Avatar className="h-5 w-5 mr-2">
              <AvatarImage src="/placeholder.svg?height=20&width=20" />
              <AvatarFallback>TL</AvatarFallback>
            </Avatar>
            <span className="text-sm">
              Liked by <span className="font-semibold">thisizlondon</span> and{" "}
              <span className="font-semibold">others</span>
            </span>
          </div>

          <div className="mb-2">
            <span className="font-semibold text-sm mr-2">iamblaisebeatz</span>
            <span className="text-sm">Thankful for inner peace</span>
          </div>

          <button className="text-gray-400 text-sm">View all 93 comments</button>

          <div className="mt-3 border-t border-gray-800 pt-3">
            <div className="flex items-center">
              <input
                type="text"
                placeholder="Add a comment..."
                className="flex-1 bg-transparent text-sm outline-none"
                onFocus={() => setShowCommentIcons(true)}
              />
              <button className="text-gray-400 ml-2">
                <Smile className="w-5 h-5" />
              </button>
            </div>

            {showCommentIcons && (
              <div className="flex items-center justify-between mt-3 pt-2 border-t border-gray-800">
                <div className="flex space-x-4">
                  <button className="text-gray-400">
                    <Camera className="w-5 h-5" />
                  </button>
                  <button className="text-gray-400">
                    <Paperclip className="w-5 h-5" />
                  </button>
                  <button className="text-gray-400">
                    <Mic className="w-5 h-5" />
                  </button>
                </div>
                <button className="text-blue-500 text-sm font-medium" onClick={() => setShowCommentIcons(false)}>
                  Post
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Suggested section */}
      <div className="border border-gray-800 rounded-md overflow-hidden bg-black mb-8">
        <div className="p-3 flex items-center justify-between">
          <span className="font-medium">Suggested for you</span>
          <button>
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-3 flex items-center">
          <Avatar className="h-10 w-10 mr-3 ring-2 ring-blue-500 rounded-full">
            <AvatarImage src="/placeholder.svg?height=40&width=40" />
            <AvatarFallback>JM</AvatarFallback>
          </Avatar>

          <div className="flex-1">
            <div className="flex items-center">
              <span className="font-semibold text-sm">jimmckenzie</span>
              <span className="ml-1 text-blue-500">
                <svg className="w-4 h-4 inline-block" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                </svg>
              </span>
            </div>
            <div className="text-xs text-gray-400">
              <span>1w</span>
              <span className="mx-1">•</span>
              <span>Follow</span>
            </div>
            <div className="text-xs text-gray-400 mt-1">Original audio</div>
          </div>

          <button className="text-gray-400">
            <MoreHorizontal className="w-5 h-5" />
          </button>
        </div>

        <div className="aspect-square bg-gray-900">
          <img
            src="/placeholder.svg?height=400&width=400"
            alt="Suggested post"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  )
}

