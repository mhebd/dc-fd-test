import BlogDetails from '@/components/BlogDetails';
import { Post as IPost } from '@/types/post';

async function getPost(id: string): Promise<IPost> {
	const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
	if (!res.ok) {
		throw new Error('Failed to fetch post');
	}
	return res.json();
}

interface PageProps {
	params: { id: string };
}

export default async function Post({ params }: PageProps) {
	const { id } = await params;
	const post = await getPost(id);

	return <BlogDetails post={post} />;
}
