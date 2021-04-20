import { RiComputerLine } from 'react-icons/ri'
import { FaServer } from 'react-icons/fa'
import { AiOutlineAntDesign, AiOutlineApi } from 'react-icons/ai'
import { MdDeveloperMode } from 'react-icons/md'
import { BsCircleFill } from 'react-icons/bs'

export const services = [
	{
		Icon: RiComputerLine,
		title: 'Frontend Development',
		about: 'I can build a beautiful and scalable SPA using <b> HTML</b>,<b>CSS</b>   and <b>React.js</b> ',
	},
	{
		Icon: FaServer,
		title: 'Backend  Development',
		about: 'handle database, server, api using <b>Express </b> & other popular frameworks',
	},
	{
		Icon: AiOutlineApi,
		title: 'API Development',
		about: 'I can develop robust  REST API using <b>django-rest-api</b>  & <b>Node API</b> ',
	},
	{
		Icon: MdDeveloperMode,
		title: 'Competitive Coder',
		about: 'I am ambitious, hard working and have a never give up attitudewhich enables me to overcome any obstacle that I can ever face.',
	},
	{
		Icon: AiOutlineAntDesign,
		title: 'UI/UX designer',
		about: 'stunning user interface designer using <b>Figma</b>  and  <b>Framer</b> ',
	},
	{
		Icon: RiComputerLine,
		title: 'Whatever',
		about: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quis minima autem!',
	},
]

export const languages = [
	{
		Icon: BsCircleFill,
		name: 'JavaScript',
		level: '60',
	},

	{
		Icon: BsCircleFill,
		name: 'React',
		level: '90',
	},
	{
		Icon: BsCircleFill,
		name: 'Node & Express.js',
		level: '80',
	},
	{
		Icon: BsCircleFill,
		name: 'Bootstrap',
		level: '80',
	},
	{
		Icon: BsCircleFill,
		name: 'Python',
		level: '45',
	},
	{
		Icon: BsCircleFill,
		name: 'MongoDB',
		level: '65',
	},
	{
		Icon: BsCircleFill,
		name: 'Tailwind',
		level: '45',
	},
]

export const tools = [
	{
		Icon: BsCircleFill,
		name: 'VS Code',
		level: '85',
	},
	{
		Icon: BsCircleFill,
		name: 'Postman',
		level: '65',
	},
	{
		Icon: BsCircleFill,
		name: 'Git & GitHub',
		level: '60',
	},
	{
		Icon: BsCircleFill,
		name: 'Framer',
		level: '45',
	},
]

export const projects = [
	{
		id: 0,
		name: 'BT-Network',
		description: 'This is a social media website just like instagram.',
		image_path: '/images/bt-network.png',
		deployed_url: 'https://bt-network.herokuapp.com/',
		github_url: 'https://github.com/Hafizbali315/B-Network-YT',
		category: ['react', 'mongo', 'express', 'node', 'redux', 'bootstrap'],
		key_techs: ['React', 'MongoDB', 'Redux', 'Express', 'Node.js', 'Bootstrap'],
	},

	{
		id: 1,
		name: 'Developers Portfolio',
		image_path: '/images/portfolio.png',
		deployed_url: 'https://developers-portfolio-react.herokuapp.com/',
		github_url: 'https://github.com/Hafizbali315/developers-portfolio-react',
		description: 'This is a developers portfolio website',
		category: ['react'],
		key_techs: ['React', 'tailwind', 'Framer Motion'],
	},

	{
		id: 2,
		name: 'Pagination',
		image_path: '/images/pagination.png',
		deployed_url: 'https://mern-pagination.herokuapp.com/',
		github_url: 'https://github.com/Hafizbali315/MERN-Pagination',
		description: 'This is an advanced pagination website',
		category: ['react', 'bootstrap', 'mongo', 'node', 'express'],
		key_techs: ['React', 'Bootstrap', 'MongoDB', 'Node', 'Express'],
	},
]
