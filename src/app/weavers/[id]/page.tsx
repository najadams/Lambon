"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { BottomNav } from "@/components/navigation/BottomNav";
import { WeaverDetail } from "@/components/views/WeaverDetail";
import weaversData from "@/data/weavers.json";

interface Weaver {
  id: string;
  name: string;
  age: number;
  region: string;
  yearsExperience: number;
  specialization: string;
  bio: string;
  story: string;
  products: string[];
}

export default function WeaverPage() {
  const params = useParams();
  const weaverId = params.id as string;
  const weaver = weaversData.weavers.find((w) => w.id === weaverId) as Weaver | undefined;

  if (!weaver) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-off-white">
        <div className="text-center">
          <h1 className="text-display-sub font-display text-dark mb-4">
            Weaver Not Found
          </h1>
          <Link
            href="/weavers"
            className="text-primary text-sm uppercase tracking-widest hover:underline"
          >
            Return to Weavers
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <BottomNav />
      <WeaverDetail weaver={weaver} />
    </>
  );
}
