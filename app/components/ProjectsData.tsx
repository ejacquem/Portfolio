
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

const shaderDescription = (
	<p className="text-sm text-gray-400">
		ShaderPixel is a real-time GPU graphics project developed using Rust, Vulkan, and GLSL.
		It features advanced 3D shaders that render complex fractals, volumetric raymarching effects,
		and dynamic lighting entirely on the GPU. The project offers an interactive 3D environment to explore
		a variety of shader-based visual effects such as translucent materials, volumetric clouds with shadows,
		and detailed fractal objects like mandelboxes. Some of the shader I made are visible on {' '}
		<a
			href="https://www.shadertoy.com/user/ejacquem"
			target="_blank"
			rel="noopener noreferrer"
			className="underline text-blue-400 hover:text-blue-300"
		>
			my ShaderToy account
		</a>.
	</p>
)

enum ProjectType {
	School = '42 Project',
	Personal = 'Personal Project',
}

export type Project = {
	title: string;
	type: ProjectType;
	description: string;
	descriptionLong: string;
	slides: string[];
	link: string;
	tech: string[];
	teamSize: number;
	descriptionComponent?: React.ReactNode;
};

export const projects: Project[] = [
	{
		title: 'Transcendance',
		type: ProjectType.School,
		description: 'Full-Stack Online Multiplayer Web Game',
		descriptionLong: 'Transcendance is a multiplayer Pong game featuring real-time client-server communication via WebSockets to ensure synchronized gameplay. \
		The frontend is made with JavaScript and Three.js for immersive 3D rendering, while the backend is made with Python and Django to manage real-time game logic and user authentication seamlessly.',
		slides: ['Pong.gif', 'Pong_Home.png', 'Pong_Games.png', 'Pong_Customize.png', 'Pong_Dashboard.png', 'Pong_Inverted_Blue.png', 'Pong_Red.png'],
		link: '',
		tech: ['Python', 'Django', 'HTML', 'CSS', 'JS', 'Bootstrap', 'Three.js', 'SQL'],
		teamSize: 3,
	},
	{
		title: 'Aimcore',
		type: ProjectType.Personal,
		description: 'Multiplayer Survival Arena Shooter',
		descriptionLong: 'Aimcore is a fast-paced multiplayer game about surviving waves of enemies with increasing difficulty.\
		The game is built with the Unity engine and implements various AI algorithms for the enemies, a main menu, visual and sound effects and a highscore system.\
		We used Fusion 2 for the networking wich helped us implement lag compensation methdods to ensure smooth gameplay.',
		slides: ['Aimcore_Menu.png', 'Aimcore_Game.png', 'Aimcore_GameOver.png'],
		link: 'https://siul008.itch.io/aimcore',
		tech: ['C#', 'Unity', 'Blender', 'Audacity', 'Photon', 'Fusion 2'],
		teamSize: 2,
	},
	{
		title: '42 Luxembourg Leaderboard',
		type: ProjectType.Personal,
		description: 'Student Ranking Web Application',
		descriptionLong: '42 Luxembourg Leaderboard is a web-based application that \
		fetches real-time student data from the 42 school API and dynamically ranks users based on criteria \
		such as experience level, total logtime, or evaluation points. The project provides an \
		interactive interface for exploring and comparing student data.',
		slides: ['42LeaderboardAnon.png'],
		link: '',
		tech: ['HTML', 'CSS', 'JS', 'API'],
		teamSize: 2,
	},
	{
		title: 'Exolegend',
		type: ProjectType.Personal,
		description: 'AI Bot for Real-Time Maze Arena in Hackathon',
		descriptionLong: 'Exolegend was developed during a 72-hour hackathon where we programmed autonomous bots in C++ \
		to navigate a shrinking maze, collect bombs, and engage in combat. I focused on pathfinding algorithms, \
		heuristic-based decisions, and real-time strategy planning. We ranked 8th out of 50 teams.',
		slides: ['Exolegend.gif', 'Exolegend_Robot.jpg', 'Exolegend_Arena.png'],
		link: 'https://github.com/ejacquem/exolegend',
		tech: ['C++'],
		teamSize: 3,
	},
	{
		title: 'Webserv',
		type: ProjectType.School,
		description: 'HTTP Server in C++98 with CGI Support',
		descriptionLong: 'Webserv is a fully functioning HTTP server written in C++98. \
		It supports multiple concurrent client connections using poll(), serves static files, \
		and executes dynamic content using CGI for scripts (e.g. Python, PHP).',
		slides: ['Webserv_Home.png', 'Webserv_Dirlist.png', 'Webserv_Terminal.png'],
		link: '',
		tech: ['C++', 'HTTP', 'CGI'],
		teamSize: 2,
	},
	// {
	// 	title: 'Push Swap',
	// 	type: ProjectType.School,
	// 	description: 'Sorting Algorithm Challenge with Limited Instructions',
	// 	descriptionLong: 'Push Swap is a challenge that requires sorting a list of integers using a limited set of stack operations (like push, swap, rotate). \
	// 	It uses a sorting algorithm that minimizes the number of operations needed.',
	// 	slides: [],
	// 	link: '',
	// 	tech: ['C'],
	// 	teamSize: 1,
	// },
	{
		title: '42 Seconds',
		type: ProjectType.Personal,
		description: 'Puzzle Game Made in 2 Week for LGX Game Jam',
		descriptionLong: '42 Seconds is a fast-paced puzzle game developed for the LGX game jam in under one week. \
		The player must solve short puzzles under a strict 42-second time limit. Built with Unity, it emphasizes intuitive design, accessibility, and polished user experience.',
		slides: ['42Seconds.png'],
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
		slides: ['EK_Menu.png', 'EK_Game.png', 'EK_Craft.png',],
		link: 'https://ejacquem.itch.io/elements-keeper',
		tech: ['C#', 'Unity', 'Krita', 'Audacity', 'FL Studio'],
		teamSize: 3,
	},
	{
		title: 'Shaderpixel',
		type: ProjectType.School,
		description: 'Real-time 3D shaders and procedural effects.',
		descriptionLong: 'ShaderPixel is a real-time GPU graphics project developed using Rust, Vulkan, and GLSL. \
		It features advanced 3D shaders that render complex fractals, volumetric raymarching effects, \
		and dynamic lighting entirely on the GPU. The project offers an interactive 3D environment to explore \
		a variety of shader-based visual effects such as translucent materials, volumetric clouds with shadows, \
		and detailed fractal objects like mandelboxes',
		slides: ['Shader_Truchet.gif', 'Shader_Gem.png', 'Shader_Mozaic.png'],
		link: '',
		tech: ['Rust', 'Vulkan', 'GLSL', 'Makefile'],
		teamSize: 2,
		descriptionComponent: shaderDescription,
	},
	{
		title: 'Fractol',
		type: ProjectType.School,
		description: 'Fractal Rendering in C with MiniLibX',
		descriptionLong: 'Fractol is a graphical tool for rendering fractals using C \
		and the MiniLibX library. The project focuses on generating and displaying complex \
		mathematical structures like the Mandelbrot and Julia sets. It features real-time zooming, \
		mouse and keyboard interactions, and custom parameter inputs to explore different fractal variants.',
		slides: ['Fractol_BudhaColor.png', 'Fractol_1.png', 'Fractol_2.png', 'Fractol_3.png', 'Fractol_4.png', 'Fractol_BudhaBrot.png'],
		link: '',
		tech: ['C', 'MiniLibX', 'Makefile'],
		teamSize: 1,
	},
	{
		title: 'Malloc',
		type: ProjectType.School,
		description: 'Dynamic Memory Allocation Algorithm',
		descriptionLong: 'Malloc is a low-level memory management project implemented in C. \
		It involves designing and building a custom dynamic memory allocator that efficiently \
		handles allocation, deallocation, and fragmentation. The project focuses on implementing \
		malloc, free, and realloc functions, focusing on memory efficiency and performance optimization.',
		slides: ['Malloc_Terminal.png'],
		link: 'https://github.com/ejacquem/malloc',
		tech: ['C', 'Makefile'],
		teamSize: 1,
	},
	{
		title: 'Cub3D',
		type: ProjectType.School,
		description: 'MultiThreading Raycasting-Based 3D Engine',
		descriptionLong: 'Cub3D is a project to create a simple 3D engine in C using raycasting. It transforms a 2D map into a 3D perspective from a first-person view. \
		The goal is to navigate a maze-like map and find the exit while avoiding enemies.',
		slides: ['Cub3d.gif', 'Cub3d.png', 'Cub3d_Menu.png'],
		link: '',
		tech: ['C', 'Minilibx'],
		teamSize: 2,
	},
	{
		title: 'Printf Tester',
		type: ProjectType.Personal,
		description: 'Tester For The 42 Project ft_printf ',
		descriptionLong: 'The project ft_print requires the recreation of the C function prtinf(). The tester will take the output of the custom printf funcition\
		and compare the result with the real function. It will print in the terminal the result of the comparison in a clean and readable format.',
		slides: ['Printf_Tester.png'],
		link: 'https://github.com/ejacquem/printfBetterTester',
		tech: ['C', 'Makefile', 'Unit Test'],
		teamSize: 1,
	},
	{
		title: 'Minishell',
		type: ProjectType.School,
		description: 'Unix Shell Clone Built From Scratch in C',
		descriptionLong: 'Minishell is a minimal shell implemented in C, mimicking core behavior of Bash. \
		It supports command execution, redirections, piping, environment variable handling, and signal management. \
		My work included the lexer/parser logic, built-in command implementations, and memory management.',
		slides: [],
		link: '',
		tech: ['C', 'Makefile', 'Linux', 'Unix', 'Bash'],
		teamSize: 2,
	},
	{
		title: 'Expert System',
		type: ProjectType.School,
		description: 'Propositionnal Logic Solver',
		descriptionLong: 'Logic engine that parses a custom rule syntax and applies propositional calculus with backward \
		chaining to determine the truth values of queries. Supports AND, OR, XOR, NOT, parentheses, and biconditionals. \
		The input file is tokenized and an abstract syntax tree is used to solve the expressions.',
		slides: ['Expert_System.png'],
		link: '',
		tech: ['C++', 'Makefile'],
		teamSize: 2,
	},
	{
		title: 'Fractal Generator',
		type: ProjectType.Personal,
		description: 'Interactive Fractal Rendering in Java',
		descriptionLong: 'Fractal Generator is a Java application for creating and exploring 1.x dimension fractals through \
		three methods: Koch, Tree (simple and advanced), and L-System. It offers presets, random generation, saving/loading, \
		animation, and extensive customization of fractal parameters. Users can generate trees, spirals, and geometric patterns, \
		zoom, adjust angles, and render high-resolution PNG outputs for artistic or mathematical exploration.',
		slides: ['FG_Presentation.png', 'FG_Koch_CurveEnhanced.png', 'FG_Classic.png', 'FG_Beech.png', 'FG_Fern.png', 'FG_Flower.png', 'FG_Spiral.png'],
		link: 'https://github.com/ejacquem/Fractal-Generator',
		tech: ['Java', 'Java Swing', 'Eclipse'],
		teamSize: 1,
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
		teamSize: 1,
		descriptionComponent: portfolioDescription,
	},
];