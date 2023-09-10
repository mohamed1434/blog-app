import { groq } from "next-sanity";
import { client } from "../../../lib/sanity.client";
import BlogList from "../../../components/BlogList";
import { sanityFetch } from "../../../lib/sanity.fetch";

const query = groq`*[_type=='post'] {
  ...,
  author->,
  categories[]->
} | order(_createdAt desc)`;

export default async function Home() {
  // const posts = await client.fetch(query);
  const posts = await sanityFetch<Post[]>({
    query: groq`*[_type=='post'] {
    ...,
    author->,
    categories[]->
  } | order(_createdAt desc)`,
    tags: ["Gaming"],
  });
  // console.log(posts);
  return (
    <div>
      <BlogList posts={posts} />
    </div>
  );
}
