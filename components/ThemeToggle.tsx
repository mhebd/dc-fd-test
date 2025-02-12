'use client';

import { useThemeStore } from '@/store/ThemeStore';
import { Moon, Sun } from 'lucide-react';

export default function ThemeToggle() {
	const { theme, toggleTheme } = useThemeStore();

	return (
		<button
			onClick={toggleTheme}
			className='p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors'
			aria-label='Toggle theme'
		>
			{theme === 'dark' ? (
				<Sun className='w-5 h-5' />
			) : (
				<Moon className='w-5 h-5' />
			)}
		</button>
	);
}
