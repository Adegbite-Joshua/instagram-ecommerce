"use client"

import { Layout } from "@/components/layout"
import { Sidebar } from "@/components/instagram/sidebar"
import { Feed } from "@/components/instagram/feed"
import { useEffect, useState } from "react";

export default function page() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <Layout sidebar={<Sidebar />} childrenTopnav={<h1 className="text-2xl font-serif italic font-bold text-white">Instagram</h1>} className="bg-black text-white">
      <Feed />
    </Layout>
  )
}

