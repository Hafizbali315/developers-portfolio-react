import Bar from '../components/Bar'
import { languages, tools } from '../data'

const Resume = () => {
	return (
		<div className="px-6 py-2">
			{/* <Head>
				<title>M Bilal | Web Developer</title>
			</Head> */}

			<div className="grid gap-6 md:grid-cols-2">
				<div>
					<h5 className="my-3 text-2xl font-bold">Education</h5>
					<div className="">
						<h5 className="my-2 text-xl font-bold">Computer Science Engineering</h5>
						<p className="font-semibold">University of Engineering and Technology Taxila, Pakistan (2018-2022)</p>
						<p className="my-3">I am currently pursuing Computer Science Engineering from UET Taxila</p>
					</div>
				</div>
				<div>
					<h5 className="my-3 text-2xl font-bold">Experience</h5>
					<div>
						<h5 className="my-2 text-xl font-bold">Web Developer</h5>
						<p className="font-semibold">Baon Sara ay.</p>
						<p className="my-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
					</div>
				</div>
			</div>

			{/*Languages & Tools */}
			<div className="grid gap-9 md:grid-cols-2">
				<div>
					<h5 className="my-3 text-2xl font-bold">Language & Framework</h5>
					<div className="my-2">
						{languages.map((language, i) => (
							<Bar value={language} key={i} />
						))}
					</div>
				</div>

				<div>
					<h5 className="my-3 text-2xl font-bold">Tools & Softwares</h5>
					<div className="my-2">
						{tools.map((tool, i) => (
							<Bar value={tool} key={i} />
						))}
					</div>
				</div>
			</div>
		</div>
	)
}

export default Resume
