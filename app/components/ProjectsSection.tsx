'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import EmblaCarousel from './EmblaCarousel';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { projects, Project } from './ProjectsData';

const getTeamIcon = (teamSize: number) => {
	if (teamSize === 1)
		return { icon: 'fa-user', label: 'Solo Project' };
	if (teamSize === 2)
		return { icon: 'fa-user-group', label: 'Team Project (2)' };
	return { icon: 'fa-users', label: `Team Project (${teamSize})` };
};

// right side of the Project card
function ProjectMedia({ slides, title }: { slides: string[]; title: string }) {
	if (slides.length > 1)
		return (
			<div className="relative h-full min-h-[300px] lg:min-h-full">
				<div className="flex items-center justify-center h-full">
					<EmblaCarousel slides={slides} options={{ loop: true }} />
					<div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,_#0a0d18_0%,_transparent_10%,_transparent_90%,_#0a0d18_100%)] lg:bg-[linear-gradient(to_right,_#0a0d18_0%,_transparent_10%,_transparent_90%,_#0a0d18_100%)]"></div>
				</div>
			</div>
		);
	if (slides.length == 1)
		return (
			<div className="flex items-center justify-center m-4">
				<Image
					src={slides[0]}
					alt={title}
					width={800}
					height={600}
					className="object-contain max-w-full max-h-full rounded-lg"
				/>
			</div>
			// <Image src={slides[0]} alt={title} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
		);
	return <div className="embla__slide"></div>;
	{/* <div className="pointer-events-none absolute inset-0 bg-gradient-to-b lg:bg-gradient-to-r from-[#0a0d18] via-transparent to-transparent lg:via-[#0a0d18]/20 lg:to-[#0a0d18]/40"></div> */ }
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
	const { icon, label } = getTeamIcon(project.teamSize);
	return (

		<motion.div
			key={index}
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true }}
			transition={{ duration: 0.6, delay: index * 0.05 }}
		// whileHover={{ scale: 1.02 }}
		// className="group relative aspect-video bg-gradient-to-br from-purple-900/50 to-blue-900/50 rounded-xl overflow-hidden"
		>
			<div key={project.title} className="bg-[#0a0d18] rounded-lg overflow-hidden">

				<div className="grid grid-cols-1 lg:grid-cols-2">
					<div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
						<div>
							<div className="flex flex-wrap gap-2">
								<h3 className="text-xl sm:text-2xl font-bold">{project.title}</h3>
								<span title={label} className="text-sm px-3 py-1 bg-white/5 hover:bg-white/10 rounded-full text-gray-200 inline-flex items-center"><i className={`fa-solid ${icon}`} /></span>
								<span className="text-sm px-3 py-1 bg-white/5 hover:bg-white/10 rounded-full text-gray-200 inline-flex items-center">{project.type}</span>
							</div>
							<p className="mt-1 text-sm sm:text-base text-gray-400">{project.description}</p>
						</div>
						<div>
							<h4 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3">What is it?</h4>
							{project.descriptionComponent ?? (
								<p className="text-sm sm:text-base text-gray-200">{project.descriptionLong}</p>
							)}
							{/* <p className="text-sm sm:text-base text-gray-200">{project.descriptionLong}</p> */}
						</div>
						<div>
							<h4 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3">Technology used</h4>
							<div className="flex flex-wrap gap-2">
								{project.tech.map((tech: string, i: number) => (
									<span key={i} className="text-sm px-3 py-1 bg-white/10 hover:bg-white/20 rounded-full">
										{tech}
									</span>
								))}
							</div>
						</div>
						{project.link && (
							<div>
								<Link href={project.link} className="text-sm px-4 py-2 border hover:bg-white/20 rounded-full transition-colors">
									View Project <i className="fa-solid fa-arrow-right"></i>
								</Link>
							</div>
						)}
					</div>
					<ProjectMedia slides={project.slides} title={project.title} />

				</div>
			</div>
		</motion.div>
	)
}

const techCategories = [
	{ label: 'All', value: 'all' },
	{ label: 'C/C++', value: 'c-cpp' },
	{ label: 'C#', value: 'csharp' },
	{ label: 'Java', value: 'java' },
	{ label: 'Python', value: 'python' },
	{ label: 'Rust', value: 'rust' },
	{ label: 'Web', value: 'web' },
];

export default function ProjectsSection() {
	const [selectedTech, setSelectedTech] = useState('all');

	const techMap: Record<string, string[]> = {
		'c-cpp': ['c', 'c++'],
		'csharp': ['c#'],
		'java': ['java'],
		'python': ['python'],
		'rust': ['rust'],
		'web': ['html', 'css', 'js', 'javascript', 'typescript'],
	};

	const filteredProjects = projects.filter(project => {
		if (selectedTech === 'all') return true;
		return project.tech?.some(t =>
			techMap[selectedTech]?.some(keyword =>
				t.toLowerCase() === keyword
			)
		);
	});

	return (
		<section className="py-12 md:py-20 px-4 max-w-7xl mx-auto">

			<motion.h2
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.6 }}
				className="text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-center"
			>
				Featured Projects
			</motion.h2>

			<div className="mb-8">
				{/* Filter pills */}
				<div className="flex flex-wrap gap-3 justify-center">
					{techCategories.map(cat => (
						<label
							key={cat.value}
							className="cursor-pointer"
						>
							<input
								type="radio"
								name="tech"
								className="peer hidden"
								checked={selectedTech === cat.value}
								onChange={() => setSelectedTech(cat.value)}
							/>
							<span className="
								px-4 py-1 rounded-full text-white bg-white/10
								peer-checked:bg-white peer-checked:text-black
								transition-colors duration-200
							">
								{cat.label}
							</span>
						</label>
					))}
				</div>
			</div>

			<div className="space-y-8 sm:space-y-12">
				{filteredProjects.map((project, index) => (
					<ProjectCard key={index} project={project} index={index} />
				))}
			</div>
		</section>
	);
}

