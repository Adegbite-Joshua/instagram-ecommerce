"use client"

import { Layout } from "@/components/layout"
import { Sidebar } from "@/components/ecommerce/sidebar"
import { Products } from "@/components/ecommerce/products"
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
    <Layout sidebar={<Sidebar />} childrenTopnav={<h1 className="text-2xl font-serif italic font-bold text-white">E Commerce</h1>} className="bg-gray-50">
      <Products />
    </Layout>
  )
}

