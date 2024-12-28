import BlogCard from "@/app/components/BlogCard";

import { client } from "../sanity/lib/client";

export const revalidate = 60; //seconds

export default async function Home() {
  const query = `*[_type=='post'] | order(_createdAt asc){
  
    summary,title,image,
      "slug":slug.current
  }`;

  const posts:Post[] = await client.fetch(query)
  // console.log(posts)

  return (
    <main className="flex min-h-screen flex-col ">
    <h1 className="text-3xl sm:text-4xl lg:text-6xl font-extrabold uppercase my-12 text-center supports-[backdrop-filter]:bg-background/60 text-white dark:text-black tracking-wide">
  <span className=" hover:text-black dark:hover:text-white bg-gradient-to-r from-white via-gray-300 to-gray-500 text-transparent bg-clip-text text-balance">
    Welcome To
  </span>{' '}
  <span className="hover:text-black dark:hover:text-white supports-[backdrop-filter]:bg-background/60 hover:decoration-white dark:hover:decoration-black transition-all duration-300 bg-gradient-to-r from-white via-gray-300 to-gray-500 text-transparent text-balance bg-clip-text">
    DN Blog Website
  </span>
</h1>



      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {
          posts.map((post:Post)=>(
            <BlogCard post={post} key={post.slug} />
          ))
        }

      </section>
    </main>
  );
}