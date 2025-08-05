import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'Lucas Jacquemin - Software Developer',
	description:
		'Passionate computer science student at 42 Luxembourg. Explore a collection of projects from my learning journey.',
	keywords: [
		'Software Developer',
		'Clean Code',
		'Minimal Design',
		'Modern Development',
		'Web Development',
		'User Experience',
		'Design Systems',
		'JavaScript',
		'TypeScript',
		'React',
		'Next.js',
		'Performance',
		'Accessibility',
		'Minimalist Portfolio',
		'Lucas Jacquemin',
	],
	authors: [{ name: 'Lucas Jacquemin' }],
	creator: 'Lucas Jacquemin',
	openGraph: {
		title: 'Lucas Jacquemin - Software Developer Portfolio',
		description: 'Passionate computer science student at 42 Luxembourg. Explore a collection of projects from my learning journey.',
		url: 'https://ljacquem.dev',
		siteName: 'Lucas Jacquemin - Portfolio',
		images: [
			{
				url: 'https://ljacquem.dev/PortfolioPreview.png',
				width: 1200,
				height: 630,
				alt: 'Lucas Jacquemin - Modern Minimal Portfolio',
			},
		],
		locale: 'en_US',
		type: 'website',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Lucas Jacquemin - Software Developer',
		description: 'Passionate computer science student at 42 Luxembourg. Explore a collection of projects from my learning journey.',
		creator: '@yourusername',
		images: ['https://ljacquem.dev/PortfolioPreview.png'],
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
		</html>
	);
}
