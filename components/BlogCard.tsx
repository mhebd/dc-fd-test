import { Post } from '@/types/post';
import Link from 'next/link';

export default function BlogCard({ post }: { post: Post }) {
	return (
		<Link href={`/post/${post.id}`} className='block'>
			<div className='bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow'>
				<div className='p-6'>
					<h2 className='text-xl font-semibold mb-2 text-indigo-600 dark:text-indigo-400'>
						{post.title}
					</h2>
					<p className='text-gray-600 dark:text-gray-300 mb-4'>
						{post.body.substring(0, 100)}...
					</p>
					<div className='flex justify-between items-center text-sm text-gray-500 dark:text-gray-400'>
						<span>Author: {post.userId}</span>
						<span>Read more →</span>
					</div>
				</div>
			</div>
		</Link>
	);
}
