import BlogDetails from '@/components/BlogDetails';

async function getPost(id: string) {
	const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
	if (!res.ok) {
		throw new Error('Failed to fetch post');
	}
	return res.json();
}

export default async function Post({ params }: { params: { id: string } }) {
	const post = await getPost(params.id);

	return <BlogDetails post={post} />;
}
