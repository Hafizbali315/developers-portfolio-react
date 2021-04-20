import { motion } from 'framer-motion'
import Bar from '../components/Bar'
import { languages, tools } from '../data'
import { fadeInUp, routeFade } from '../animations'

const Resume = () => {
	return (
		<motion.div className="px-6 py-2" variants={routeFade} initial="hidden" animate="visible" exit="exit">
			{/* <Head>
				<title>M Bilal | Web Developer</title>
			</Head> */}

			<div className="grid gap-6 md:grid-cols-2">
				<motion.div variants={fadeInUp} initial="initial" animate="animate">
					<h5 className="my-3 text-2xl font-bold">Education</h5>
					<div className="">
						<h5 className="my-2 text-xl font-bold">Computer Science Engineering</h5>

						<p className="font-semibold">University of Engineering and Technology Taxila, Pakistan (2018-2022)</p>

						<p className="my-3">I am currently pursuing Computer Science Engineering from UET Taxila</p>
					</div>
				</motion.div>
				<motion.div variants={fadeInUp} initial="initial" animate="animate">
					<h5 className="my-3 text-2xl font-bold">Experience</h5>
					<div>
						<h5 className="my-2 text-xl font-bold">Web Developer</h5>
						<p className="font-semibold">1 year.</p>
						<p className="my-3">
							I have build some awesome application. You can see demo in <strong>Projects</strong> page.
						</p>
					</div>
				</motion.div>
			</div>

			{/*Languages & Tools */}
			<div className="grid gap-9 md:grid-cols-2 ">
				<div>
					<h5 className="my-3 text-2xl font-bold">Language & Framework</h5>
					<div className="pr-1 my-2 overflow-y-scroll" style={{ height: '30vh' }}>
						{languages.map((language, i) => (
							<Bar value={language} key={i} />
						))}
					</div>
				</div>

				<div>
					<h5 className="my-3 text-2xl font-bold">Tools & Softwares</h5>
					<div className="pr-1 my-2 overflow-y-scroll" style={{ height: '30vh' }}>
						{tools.map((tool, i) => (
							<Bar value={tool} key={i} />
						))}
					</div>
				</div>
			</div>
		</motion.div>
	)
}

export default Resume
