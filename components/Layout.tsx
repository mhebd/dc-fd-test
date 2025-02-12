import type React from 'react';
import Header from './Header';
import Footer from './Footer';

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<div className='min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300'>
			<Header />
			<main className='flex-grow container mx-auto px-4 py-8'>{children}</main>
			<Footer />
		</div>
	);
}
