import BlogDetails from '@/components/BlogDetails';
import { Post as IPost } from '@/types/post';

async function getPost(id: string): Promise<IPost> {
	const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
	if (!res.ok) {
		throw new Error('Failed to fetch post');
	}
	return res.json();
}

export default async function Post({
	params,
}: {
	params: Promise<{ id: string }>;
}) {
	const { id } = await params;
	const post = await getPost(id);

	return <BlogDetails post={post} />;
}
