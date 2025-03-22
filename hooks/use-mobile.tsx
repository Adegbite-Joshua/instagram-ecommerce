"use client"

import { useState, useEffect } from "react"

export function useMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(false);

  console.log(window.innerWidth);  

  useEffect(() => {
    const checkIfIsMobile = () => {
      setIsMobile(window.innerWidth < breakpoint)
    }

    checkIfIsMobile()

    window.addEventListener("resize", checkIfIsMobile)

    // Clean up
    return () => window.removeEventListener("resize", checkIfIsMobile)
  }, [breakpoint])

  return isMobile
}

