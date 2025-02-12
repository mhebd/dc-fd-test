import BlogList from "@/components/BlogList"

async function getPosts() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts")
  if (!res.ok) {
    throw new Error("Failed to fetch posts")
  }
  return res.json()
}

export default async function Home() {
  const posts = await getPosts()

  return (
    <>
      <h1 className="text-4xl font-bold mb-8 text-center">Latest Blog Posts</h1>
      <BlogList posts={posts} />
    </>
  )
}

