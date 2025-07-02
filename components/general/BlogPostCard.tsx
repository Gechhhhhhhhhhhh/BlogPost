import Link from "next/link";
import Image from "next/image";
interface IappProps {
  data: {
    id: string;
    title: string;
    content: string;
    imageUrl: string;
    authorId: string;
    authorName: string;
    authorImage: string;
    createAt: Date;
    updateAt: Date;
  };
}
export function BlogPostCard({ data }: IappProps) {
  return (
    <div className="group relative overflow-hidden rounded-lg border border-gray-200 bg-white shadow-md transition-all hover:shadow-2xl">
      <Link href={`/post/${data.id}`} className="block w-full h-full">
        <div className="relative h-48 w-full overflow-hidden">
          <Image
            src={data.imageUrl}
            alt="Image for blog"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            fill
          />
        </div>
        <div className="p-4">
          <h3 className="mb-2 text-lg font-semibold text-gray-700">
            {data.title}
          </h3>
          <p className="mb-4 text-sm text-gray-600 line-clamp-3">
            {data.content}
          </p>
          <div className="flex items-center justify-between">
            <div className="flex item-center space-x-2">
              <div className="relative size-8 overflow-hidden rounded-full">
                <Image src={data.authorImage} alt={data.authorName} fill />
              </div>
              <p>{data.authorName}</p>
            </div>
            <time className="text-md">
              {new Intl.DateTimeFormat("en-US", {
                year: "numeric",
                month: "short",
                day: "numeric",
              }).format(data.createAt)}
            </time>
          </div>
        </div>
      </Link>
    </div>
  );
}
