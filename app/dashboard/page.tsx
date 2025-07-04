import { buttonVariants } from "@/components/ui/button";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Link from "next/link";
import { prisma } from "../utils/db";
import { BlogPostCard } from "@/components/general/BlogPostCard";

async function getData(userId: string) {
  const data = await prisma.blogPost.findMany({
    where: {
      authorId: userId,
    },
    orderBy: {
      createAt: "desc",
    },
  });
  return data;
}

export default async function DashboardPage() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  const data = await getData(user?.id);
  return (
    <div className="">
      <div className="flex items-center justify-between mb-6 mt-5">
        <h2 className="text-xl font-semibold">Your Blog Articles</h2>
        <Link className={buttonVariants()} href="/dashboard/create">
          Create Post
        </Link>
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-20">
        {data.map((item) => (
          <BlogPostCard data={item} key={item.id} />
        ))}
      </div>
    </div>
  );
}
