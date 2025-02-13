import { Post } from '@/types/post';

export default function BlogDetail({ post }: { post: Post }) {
	return (
		<article className='bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden'>
			<div className='p-8'>
				<h1 className='text-3xl font-bold mb-4 text-indigo-600 dark:text-indigo-400'>
					{post.title}
				</h1>
				<p className='text-gray-600 dark:text-gray-300 mb-6'>{post.body}</p>
				<div className='text-sm text-gray-500 dark:text-gray-400'>
					<span>Author: {post.userId}</span>
				</div>
			</div>
		</article>
	);
}
