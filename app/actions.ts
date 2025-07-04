"use server";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { prisma } from "./utils/db";
import { redirect } from "next/navigation";
export default async function headlesubmission(fromData: FormData) {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  if (!user) {
    return redirect("/api/ayth/register");
  }
  const title = fromData.get("title");
  const content = fromData.get("content");
  const url = fromData.get("url");

  const data = await prisma.blogPost.create({
    data: {
      title: title as string,
      content: content as string,
      imageUrl: url as string,
      authorId: user.id,
      authorImage: user.picture as string,
      authorName: user.family_name as string,
    },
  });
  return redirect("/dashboard");
}
