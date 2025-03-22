export function Products() {
    const products = [
        {
          id: 1,
          image: "https://images.unsplash.com/photo-1598032895397-b9472444bf93?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
          title: "Men's Casual Shirt & Trouser Set",
          price: "NGN 12,000",
          brand: "Daniel Kloset",
        },
        {
          id: 2,
          image: "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
          title: "Women's Summer Dress",
          price: "NGN 15,000",
          brand: "Daniel Kloset",
        },
        {
          id: 3,
          image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
          title: "Men's Formal Suit",
          price: "NGN 25,000",
          brand: "Daniel Kloset",
        },
        {
          id: 4,
          image: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
          title: "Women's Office Blazer & Skirt",
          price: "NGN 18,000",
          brand: "Daniel Kloset",
        },
        {
          id: 5,
          image: "https://images.unsplash.com/photo-1620012253295-c15cc3b65d8f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
          title: "Men's Denim Jacket & Jeans",
          price: "NGN 22,000",
          brand: "Daniel Kloset",
        },
        {
          id: 6,
          image: "https://images.unsplash.com/photo-1617137818397-19f992ab5a8e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
          title: "Women's Casual Jumpsuit",
          price: "NGN 14,000",
          brand: "Daniel Kloset",
        },
        {
          id: 7,
          image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
          title: "Men's Sportswear Set",
          price: "NGN 10,000",
          brand: "Daniel Kloset",
        },
        {
          id: 8,
          image: "https://images.unsplash.com/photo-1618354691551-44de113f0164?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
          title: "Women's Evening Gown",
          price: "NGN 30,000",
          brand: "Daniel Kloset",
        },
      ];
  
    return (
      <div className="p-4 md:p-6">
        <h1 className="text-xl font-semibold mb-6">Popular products</h1>
  
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    )
  }
  
  interface ProductCardProps {
    product: {
      id: number
      image: string
      title: string
      price: string
      brand: string
    }
  }
  
  function ProductCard({ product }: ProductCardProps) {
    return (
      <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
        <div className="aspect-square overflow-visible">
          <img src={product.image || "/placeholder.svg"} alt={product.title} className="w-full transition-transform duration-300 hover:scale-110! h-full object-cover" />
        </div>
  
        <div className="p-3 text-center">
          <h3 className="font-bold">{product.title}</h3>
          <p className="font-bold mt-1">{product.price}</p>
          <p className="text-xs text-gray-500 mt-1">{product.brand}</p>
        </div>
      </div>
    )
  }
  
  