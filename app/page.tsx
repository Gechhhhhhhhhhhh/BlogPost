import React, { Suspense } from "react";
import { prisma } from "./utils/db";
import { BlogPostCard } from "@/components/general/BlogPostCard";

async function getData() {
  await new Promise((resolve) => setTimeout(resolve, 200));
  const data = await prisma.blogPost.findMany({
    select: {
      title: true,
      content: true,
      imageUrl: true,
      authorImage: true,
      authorName: true,
      id: true,
      createAt: true,
      authorId: true,
      updateAt: true,
    },
  });

  return data;
}

export default function Home() {
  return (
    <div className="py-6">
      <h1 className="font-bold text-3xl tracking-tight mb-8 ">Latest posts</h1>
      <Suspense fallback={<p>Gello....</p>}>
        <BlogPost />
      </Suspense>
    </div>
  );
}

async function BlogPost() {
  const data = await getData();
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {data.map((item) => {
        return <BlogPostCard data={item} key={item.id} />;
      })}
    </div>
  );
}
