'use client';

import { useEffect, useState } from 'react';
import { useThemeStore } from '@/store/ThemeStore';
import type React from 'react';

export default function ThemeProvider({
	children,
}: {
	children: React.ReactNode;
}) {
	const [mounted, setMounted] = useState(false);
	const { theme, setTheme } = useThemeStore();

	useEffect(() => {
		setMounted(true);
		const savedTheme = localStorage.getItem('theme-storage') as
			| 'light'
			| 'dark'
			| null;
		if (savedTheme) {
			setTheme(JSON.parse(savedTheme).state.theme);
		} else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
			setTheme('dark');
		}
	}, [setTheme]);

	useEffect(() => {
		if (theme === 'dark') {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}
	}, [theme]);

	if (!mounted) {
		return null;
	}

	return <>{children}</>;
}
