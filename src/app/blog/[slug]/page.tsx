import Image from "next/image";
import { client } from "../../../sanity/lib/client";
import { urlForImage } from "../../../sanity/lib/image";
import { PortableText } from "@portabletext/react";


export const revalidate = 60; //seconds

 export async function generateStaticParams() {
  const query = `*[_type=='post']{
    "slug":slug.current
  }`;
  const slugs = await client.fetch(query);
  const slugRoutes = slugs.map((item:{slug:string})=>(
    item.slug
  ));
  // console.log(slugRoutes)
  return slugRoutes.map((slug:string)=>(
    {slug}
  ))
  
}

// To create static pages for dynamic routes
export default async function blog({params:{slug}}:{params:{slug:string}}) {

  const query = `*[_type=='post' && slug.current=="${slug}"]{
    title,summary,image,content,
      author->{bio,image,name}
  }[0]`;
  const post = await client.fetch(query);
  // console.log(post);



  return (
    <article className="mt-12 mb-24 px-2  2xl:px-12 flex flex-col gap-y-8">

      {/* Blog Title */}
      <h1 className="text-xl xs:text-3xl lg:text-5xl font-bold text-dark dark:text-light">
        {post.title}
      </h1>

      {/* Featured Image */}
      <Image
        src={urlForImage(post.image)}
        width={1000}
        height={800}
        alt="AI for everyone"
        className="rounded-lg w-full object-cover"
      />

      {/* Blog Summary Section */}
      <section>
      <h2 className="text-lg sm:text-2xl md:text-3xl font-bold uppercase font-sans text-balance">
        Summary
      </h2>
      <p className="text-base  sm:text-lg md:text-xl leading-relaxed text-justify text-dark/80 dark:text-light/80">
        {post.summary}
      </p>
      </section>

      {/* Author Section (Image & Bio) */}
      <section className="px-2 sm:px-8 md:px-12 flex gap-2 xs:gap-4 sm:gap-6 items-start xs:items-center justify-start">
        <Image
          src={urlForImage(post.author.image)}
          width={200}
          height={200}
          alt="author"
          className="object-cover rounded-full h-12 w-12 sm:h-24 sm:w-24"
        />
        <div className="flex flex-col gap-1">
          <h3 className="text-lg sm:text-xl font-bold text-balance">{post.author.name}</h3>
          <p className="italic text-xs xs:text-sm sm:text-base text-dark/80 dark:text-light/80">
            {post.author.bio}
          </p>
        </div>
      </section>

      {/* Main Body of Blog */}
      <section className=" prose prose-lg dark:prose-invert mt-6 prose-h4:text-xl prose-h4:font-bold font-sans text-xl leading-normal text-dark/80 dark:text-light/80
    text-balance 
      prose-li:list-disc prose-li:list-inside dark:prose-li:marker:text-white
      prose-strong:text-black dark:prose-strong:text-white
      
      ">
        <PortableText 
        value={post.content} 
        // components={components} 
        />
        

      </section>

      
    </article>
  );
}