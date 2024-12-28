import BlogCard from "@/app/components/BlogCard";

import { client } from "../../sanity/lib/client";

export const revalidate = 60; //seconds

export default async function Blog() {
  const query = `*[_type=='post'] | order(_createdAt asc){
  
    summary,title,image,
      "slug":slug.current
  }`;

  const posts:Post[] = await client.fetch(query)
  // console.log(posts)

  return (
    <main className="flex min-h-screen flex-col ">
     
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-20 gap-12">
        {
          posts.map((post:Post)=>(
            <BlogCard post={post} key={post.slug} />
          ))
        }

      </section>
    </main>
  );
}