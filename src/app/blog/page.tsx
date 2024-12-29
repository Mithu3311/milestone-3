import Link from "next/link";
import { blogs } from "@/app/blogs";

const Blog = () => {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Dynamic Blog</h1>
      <ul className="space-y-4">
        {blogs.map((blog) => (
          <li key={blog.id} className="text-blue-500 hover:underline">
            <Link href={`/blog/${blog.id}`}>{blog.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Blog;
