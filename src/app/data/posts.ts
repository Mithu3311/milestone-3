// app/data/posts.ts
export interface Post {
    id: number;
    title: string;
    content: string;
  }
  
  export const posts: Post[] = [
    { id: 1, title: 'First Blog Post', content: 'This is the first blog post content.' },
    { id: 2, title: 'Second Blog Post', content: 'This is the second blog post content.' },
    { id: 3, title: 'Third Blog Post', content: 'This is the third blog post content.' },
  ];
  