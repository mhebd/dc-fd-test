'use client';

import { useState } from 'react';
import BlogCard from './BlogCard';
import SearchBar from './SearchBar';
import { Post } from '@/types/post';

export default function BlogList({ posts }: { posts: Post[] }) {
	const [searchTerm, setSearchTerm] = useState('');

	const filteredPosts = posts.filter(
		(post) =>
			post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
			post.body.toLowerCase().includes(searchTerm.toLowerCase())
	);

	return (
		<div className='space-y-8'>
			<SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
			<div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
				{filteredPosts.map((post: Post) => (
					<BlogCard key={post.id} post={post} />
				))}
			</div>
		</div>
	);
}
