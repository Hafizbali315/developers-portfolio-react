import { AiFillGithub, AiFillInstagram, AiFillFacebook } from 'react-icons/ai'
import { GiTie } from 'react-icons/gi'
import { GoLocation } from 'react-icons/go'
import useDarkMode from '../hooks/useDarkMode'

const Sidebar = () => {
	const [colorTheme, setTheme] = useDarkMode()
	return (
		<>
			<img
				className="mx-auto border rounded-full"
				src="/images/profilePic.jpg"
				alt="profilePic"
				style={{ width: '128px', height: '128px' }}
			/>

			<h3 className="my-4 text-3xl font-medium tracking-wider font-kaushan">
				<span className="text-green ">Muhammad </span>Bilal
			</h3>
			<p className="px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-black-200">Web Developer</p>

			<a
				href="/assets/Resume.pdf"
				download="Resume.pdf"
				className="flex items-center justify-center px-2 py-1 my-2 bg-gray-200 rounded-full cursor-pointer dark:bg-black-200"
			>
				<GiTie className="w-6 h-6" />
				<span>Download Resume</span>
			</a>

			<div className="flex justify-around w-9/12 mx-auto my-5 text-green md:w-full ">
				<a
					href="https://web.facebook.com/profile.php?id=100015561037136&_rdc=1&_rdr"
					target="_blank"
					rel="noreferrer"
					aria-label="Facebook"
				>
					<AiFillFacebook className="w-8 h-8 cursor-pointer" />
				</a>
				<a href="https://github.com/Hafizbali315" target="_blank" rel="noreferrer" aria-label="Github">
					<AiFillGithub className="w-8 h-8 cursor-pointer" />
				</a>
				<a href="https://www.instagram.com/muhammad_bilal_bali/" rel="noreferrer" target="_blank" aria-label="GitHub">
					<AiFillInstagram className="w-8 h-8 cursor-pointer" />
				</a>
			</div>

			<div className="py-4 my-5 bg-gray-200 dark:bg-black-200" style={{ marginLeft: '-1rem', marginRight: '-1rem' }}>
				<div className="flex items-center justify-center">
					<GoLocation className="mr-2" /> <span>Talagang, Pakistan</span>
				</div>
				<p className="my-2 "> hafizbali315@gmail.com </p>
				<p className="my-2"> +92-3168849904</p>
			</div>

			<button
				className="w-8/12 px-5 py-2 text-white bg-black rounded-full cursor-pointer bg-gradient-to-r from-green to-blue-500 hover:scale-105 focus:outline-none"
				onClick={() => window.open('mailto:code.hafizbali315@gmail.com')}
			>
				Email me
			</button>
			
			
			
			
			<button
				onClick={() => setTheme(colorTheme)}
				className="w-8/12 px-5 py-2 my-4 text-white bg-black rounded-full cursor-pointer bg-gradient-to-r from-green to-blue-500 focus:outline-none hover:scale-105 "
			>
				Change Theme
			</button>
		</>
	)
}

export default Sidebar
