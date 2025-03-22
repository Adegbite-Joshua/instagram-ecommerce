import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
      <h1 className="text-3xl font-bold mb-8">Instagram And E-Commerce UI</h1>

      <div className="flex flex-col sm:flex-row gap-4">
        <Link
          href="/instagram"
          className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-shadow"
        >
          Instagram UI
        </Link>

        <Link
          href="/ecommerce"
          className="px-6 py-3 bg-gradient-to-r from-blue-500 to-teal-500 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-shadow"
        >
          E-commerce UI
        </Link>
      </div>
    </div>
  );
}
