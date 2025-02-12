import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Layout from '@/components/Layout';
import ThemeProvider from '@/components/ThemeProvider';
import type React from 'react';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'BlogApp',
	description: 'A themed blog listing application',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en' suppressHydrationWarning>
			<body className={inter.className} suppressHydrationWarning>
				<ThemeProvider>
					<Layout>{children}</Layout>
				</ThemeProvider>
			</body>
		</html>
	);
}
