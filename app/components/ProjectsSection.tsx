'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import EmblaCarousel from './EmblaCarousel';
import '@fortawesome/fontawesome-free/css/all.min.css';

const portfolioDescription = (
	<p className="text-sm text-gray-400">
	  This portfolio showcases the most significant projects I&apos;ve completed during my learning journey. I&apos;ve used and modified a template from{' '}
	  <a
		href="https://www.devportfoliotemplates.com/"
		target="_blank"
		rel="noopener noreferrer"
		className="underline text-blue-400 hover:text-blue-300"
	  >
		Dev Portfolio Templates
	  </a>.
	</p>
  )

enum ProjectType {
	School = '42 Project',
	Personal = 'Personal Project',
}

// type Project = {
// 	title: string;
// 	type: ProjectType;
// 	description: string;
// 	descriptionLong: string;
// 	slides: string[];
// 	link: string;
// 	tech: string[];
// 	teamSize: number;
// };

const projects = [
	{
		title: 'Transcendance',
		type: ProjectType.School,
		description: 'Full-Stack Online Multiplayer Web Game',
		descriptionLong: 'Transcendance is a multiplayer Pong game featuring real-time client-server communication via WebSockets to ensure synchronized gameplay. \
		The frontend is made with JavaScript and Three.js for immersive 3D rendering, while the backend is made with Python and Django to manage real-time game logic and user authentication seamlessly.',
		slides: ['Pong.gif', 'Pong_Home.png', 'Pong_Games.png', 'Pong_Customize.png', 'Pong_Dashboard.png', 'Pong_Inverted_Blue.png', 'Pong_Red.png'],
		link: '',
		tech: ['Python','Django','HTML','CSS','JS','Bootstrap','Three.js','SQL'],
		teamSize: 3,
	},
	{
		title: 'Printf Tester',
		type: ProjectType.Personal,
		description: 'Tester For The 42 Project ft_printf ',
		descriptionLong: 'The project ft_print requires the recreation of the C function prtinf(). The tester will take the output of the custom printf funcition\
		and compare the result with the real function. It will print in the terminal the result of the comparison in a clean and readable format.',
		slides: ['code.jpg'],
		link: 'https://github.com/ejacquem/printfBetterTester',
		tech: ['C','Makefile','Unit Test'],
		teamSize: 1,
	},
	{
		title: 'Cub3D',
		type: ProjectType.School,
		description: 'Raycasting-Based 3D Engine Inspired by Wolfenstein',
		descriptionLong: 'Cub3D is a project to create a simple 3D engine in C using raycasting. It transforms a 2D map into a 3D perspective from a first-person view. \
		The goal is to navigate a maze-like map and find the exit before running out of oxygen.',
		slides: ['pong.gif'],
		link: '',
		tech: ['C', 'Minilibx'],
		teamSize: 2,
	},
	{
		title: 'Push Swap',
		type: ProjectType.School,
		description: 'Sorting Algorithm Challenge with Limited Instructions',
		descriptionLong: 'Push Swap is a challenge that requires sorting a list of integers using a limited set of stack operations (like push, swap, rotate). \
		We developed a sorting algorithm that minimizes the number of operations needed. I implemented several sorting strategies and optimization passes.',
		slides: ['https://picsum.photos/600/350?random=12'],
		link: 'https://github.com/siul008/PushSwap',
		tech: ['C'],
		teamSize: 1,
	},
	{
		title: '42 Seconds',
		type: ProjectType.Personal,
		description: 'Puzzle Game Made in 2 Week for LGX Game Jam',
		descriptionLong: '42 Seconds is a fast-paced puzzle game developed for the LGX game jam in under one week. \
		The player must solve short puzzles under a strict 42-second time limit. Built with Unity, it emphasizes intuitive design, accessibility, and polished user experience.',
		slides: ['https://picsum.photos/600/350?random=13'],
		link: 'https://ejacquem.itch.io/42seconds',
		tech: ['C#', 'Unity', 'Blender', 'Audacity'],
		teamSize: 6,
	},
	{
		title: 'Elements Keeper',
		type: ProjectType.Personal,
		description: 'Tower Defense Game About Combining Elements',
		descriptionLong: 'Elements Keeper was built during a 72-hour game jam with the theme "Shadow and Alchemy". \
		It\'s a tower defense game where players mix elements to create towers that defend against waves of enemies. \
		The game won #1 in Playability.',
		slides: ['https://picsum.photos/600/350?random=14'],
		link: 'https://ejacquem.itch.io/elements-keeper',
		tech: ['C#', 'Unity', 'Krita', 'Audacity', 'FL Studio'],
		teamSize: 3,
	},
	{
		title: 'Exolegend',
		type: ProjectType.Personal,
		description: 'AI Bot for Real-Time Maze Arena in Hackathon',
		descriptionLong: 'Exolegend was developed during a 72-hour hackathon where we programmed autonomous bots in C++ \
		to navigate a shrinking maze, collect bombs, and engage in combat. I focused on pathfinding algorithms, \
		heuristic-based decisions, and real-time strategy planning. We ranked 8th out of 50 teams.',
		slides: ['https://picsum.photos/600/350?random=15'],
		link: 'https://github.com/ejacquem/exolegend',
		tech: ['C++'],
		teamSize: 3,
	},
	{
		title: 'Minishell',
		type: ProjectType.School,
		description: 'Unix Shell Clone Built From Scratch in C',
		descriptionLong: 'Minishell is a minimal shell implemented in C, mimicking core behavior of Bash. \
		It supports command execution, redirections, piping, environment variable handling, and signal management. \
		My work included the lexer/parser logic, built-in command implementations, and memory management.',
		slides: ['https://picsum.photos/600/350?random=16'],
		link: '',
		tech: ['C', 'Linux', 'Unix', 'Bash'],
		teamSize: 2,
	},
	{
		title: 'Webserv',
		type: ProjectType.School,
		description: 'HTTP Server in C++98 with CGI Support',
		descriptionLong: 'Webserv is a fully functioning HTTP server written in C++98. \
		It supports multiple concurrent client connections using poll(), serves static files, \
		and executes dynamic content using CGI for scripts (e.g. Python, PHP).',
		slides: ['https://picsum.photos/600/350?random=17'],
		link: '',
		tech: ['C++', 'HTTP', 'CGI'],
		teamSize: 2,
	},
	{
		title: 'Portfolio',
		type: ProjectType.Personal,
		description: 'A personal website featuring my key projects.',
		descriptionLong: 'This portfolio showcases the most significant projects I\'ve completed during my learning journey. \
		I\'ve used and modify a template from https://www.devportfoliotemplates.com/',
		slides: ['PortfolioPreview.png'],
		link: 'https://ljacquem.dev',
		tech: ['Next.js', 'Tailwind CSS', 'Typescript', 'React'],
		teamSize: 2,
		descriptionComponent: portfolioDescription,
	},
];

const getTeamIcon = (teamSize: number) => {
	if (teamSize === 1)
		return { icon: 'fa-user', label: 'Solo Project' };
	if (teamSize === 2)
		return { icon: 'fa-user-group', label: 'Team Project (2)' };
	return { icon: 'fa-users', label: `Team Project (${teamSize})` };
};

export default function ProjectsSection() {
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

			<div className="space-y-8 sm:space-y-12">
				{projects.map((project, index) => {
					const { icon, label } = getTeamIcon(project.teamSize);

					return (

						<motion.div
							key={index}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.6, delay: index * 0.1 }}
							// whileHover={{ scale: 1.02 }}
							// className="group relative aspect-video bg-gradient-to-br from-purple-900/50 to-blue-900/50 rounded-xl overflow-hidden"
						>
						<div key={project.title} className="bg-[#070810] rounded-lg overflow-hidden">

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
											{project.tech.map((tech, i) => (
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

								<div className="relative h-full min-h-[300px] lg:min-h-full">
									{project.slides.length > 1 ? (
										<div className="flex items-center justify-center h-full">
											<EmblaCarousel slides={project.slides} options={{loop: true}}/>
										</div>
									) : (
										<Image src={project.slides[0]} alt={project.title} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
									)}
								{/* <div className="pointer-events-none absolute inset-0 bg-gradient-to-b lg:bg-gradient-to-r from-[#070810] via-transparent to-transparent lg:via-[#070810]/20 lg:to-[#070810]/40"></div> */}
								<div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,_#070810_0%,_transparent_10%,_transparent_90%,_#070810_100%)] lg:bg-[linear-gradient(to_right,_#070810_0%,_transparent_10%,_transparent_90%,_#070810_100%)]"></div>
								</div>
							</div>
						</div>
					</motion.div>
					)})}
				</div>
		</section>
	);
}
