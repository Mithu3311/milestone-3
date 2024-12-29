'use client'
import Link from 'next/link';
import { posts } from './data/posts';

export default function Home() {
  return (
    <div className="p-4">
      <h1 className="text-4xl font-bold mb-6">Welcome to My Blog</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id} className="mb-4">
            <Link href={`/posts/${post.id}`} className="text-xl font-semibold text-blue-500">
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
