import headlesubmission from "@/app/actions";
import Submit from "@/components/general/Submit";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
export default function CreateBlog() {
  return (
    <div className="">
      <Card className="max-w-lg mx-auto mt-10 ">
        <CardHeader>
          <CardTitle>Creat Post</CardTitle>
          <CardDescription>
            Create a new post to share with the world
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className="flex flex-col gap-4" action={headlesubmission}>
            <div className="flex flex-col gap-2">
              <label>Title</label>
              <input
                name="title"
                required
                type="text"
                placeholder="text"
                className="border-b-blue-300"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label>Content</label>
              <textarea
                name="content"
                required
                placeholder="Content "
                className=""
              />
            </div>
            <div className="flex flex-col gap-2">
              <label>Image URL</label>
              <input
                name="url"
                required
                placeholder="Image URL "
                className=""
              />
            </div>
            <Submit />
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
