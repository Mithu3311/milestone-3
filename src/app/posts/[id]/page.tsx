'use client'
import { useState, ChangeEvent } from 'react';
import { useParams } from 'next/navigation';  // Use useParams from next/navigation
import { posts } from '@/app/data/posts';
import Comments from '@/app/comments/page';

export default function PostPage() {
  const { id } = useParams(); // Access the dynamic route parameter
  const postId = id ? parseInt(id as string) : null;
  const post = posts.find((p) => p.id === postId);

  const [comments, setComments] = useState<string[]>([]);
  const [newComment, setNewComment] = useState<string>('');

  if (!post) {
    return <p>Post not found</p>;
  }

  const handleAddComment = () => {
    if (newComment.trim()) {
      setComments([...comments, newComment]);
      setNewComment('');
    }
  };

  const handleChangeComment = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setNewComment(e.target.value);
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <p className="mb-6 text-justify">{post.content}</p>
      <Comments/>
    </div>
  );
}
