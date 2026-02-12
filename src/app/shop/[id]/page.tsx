"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { BottomNav } from "@/components/navigation/BottomNav";
import { ProductDetail } from "@/components/views/ProductDetail";
import { products } from "@/lib/data";

export default function ProductPage() {
  const params = useParams();
  const productId = params.id as string;
  const product = products.find((p) => p.id === productId);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-off-white">
        <div className="text-center">
          <h1 className="text-display-sub font-display text-dark mb-4">
            Product Not Found
          </h1>
          <Link
            href="/shop"
            className="text-primary text-sm uppercase tracking-widest hover:underline"
          >
            Return to Shop
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <BottomNav />
      <ProductDetail product={product} />
    </>
  );
}
