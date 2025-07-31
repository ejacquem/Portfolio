'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import EmblaCarousel from './EmblaCarousel';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { div } from 'framer-motion/client';

const projects = [
	{
		id: 1,
		title: 'Transcendance',
		description: 'Full-Stack Online Multiplayer Web Game',
		descriptionLong: 'Transcendance is a multiplayer Pong game featuring real-time client-server communication via WebSockets to ensure synchronized gameplay. \
		The frontend is made with JavaScript and Three.js for immersive 3D rendering, while the backend is made with Python and Django to manage real-time game logic and user authentication seamlessly.',
		type: '42 Project',
		image: `code.jpg`,
		link: '',
		tech: ['Python','Django','HTML','CSS','JS','Bootstrap','Three.js','SQL'],
		teamSize: 3,
		slides: ['https://picsum.photos/600', 'https://picsum.photos/600'],
	},
	{
		id: 2,
		title: 'Printf Tester',
		description: 'Tester For The 42 Project ft_printf ',
		descriptionLong: 'This program',
		type: 'Personnal Project',
		image: `laptop.jpg`,
		link: 'https://github.com/ejacquem/printfBetterTester',
		tech: ['C','Makefile','Unit Test'],
		teamSize: 1,
		slides: ['https://picsum.photos/600', 'https://picsum.photos/600'],
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
				{projects.map((project) => {
					const { icon, label } = getTeamIcon(project.teamSize);

					return (

						<motion.div
							key={project.id}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.6, delay: project.id * 0.1 }}
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
										<p className="text-sm sm:text-base text-gray-200">{project.descriptionLong}</p>
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
									<div className="flex items-center justify-center h-full">
										<EmblaCarousel slides={[0, 1, 2]} options={{loop: true}}/>
									</div>

									{/* <Image src={project.image} alt={project.title} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" /> */}
									{/* <div className="pointer-events-none absolute inset-0 bg-gradient-to-b lg:bg-gradient-to-r from-[#070810] via-transparent to-transparent lg:via-[#070810]/20 lg:to-[#070810]/40"></div> */}
									<div className="pointer-events-none absolute inset-0 bg-gradient-to-b lg:bg-gradient-to-r from-[#070810] via-transparent to-transparent lg:via-[#070810]/20 lg:to-[#070810]/40"></div>
									{/* <div className="absolute bottom-4 right-4">
										<Link href={project.link} className="text-sm px-4 py-2 border hover:bg-white/20 rounded-full transition-colors">
											View Project <i className="fa-solid fa-arrow-right"></i>
										</Link>
									</div> */}
								</div>
							</div>
						</div>
					</motion.div>
					)})}
				</div>
		</section>
	);
}
