import { notFound } from "next/navigation";
import { blogs } from "@/app/blogs";
import Comments from "@/app/comments/comments";


export async function generateStaticParams() {
  return blogs.map((blog) => ({ id: blog.id }));
}

const BlogPost = ({ params }: { params: { id: number } }) => {
  const blog = blogs.find((b) => b.id === String(params.id)); // Ensure ID is string

  if (!blog) {
    notFound(); // Show 404 if the blog doesn't exist
  }

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
      <p className="text-gray-700 whitespace-pre-line">{blog.content}</p>
      <Comments />
    </div>
  );
};

export default BlogPost;
