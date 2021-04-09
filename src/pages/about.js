import ServiceCard from '../components/ServiceCard'
import { services } from '../data'

const About = () => {
	return (
		<div className="flex flex-col flex-grow px-6 pt-1 ">
			{/* <Head>
				<title>M Bilal | Web Developer</title>
			</Head> */}
			<h4 className="my-3">
				I am currently doing Computer Engineering (Final year) from University of Engineering and Technology, Taxila. And I don't know why i
				am doing this.
			</h4>
			<div className="flex-grow p-4 mt-5 bg-gray-400 dark:bg-black-100" style={{ marginLeft: '-1.5rem', marginRight: '-1.5rem' }}>
				<h4 className="my-3 text-xl font-semibold tracking-wide text-gray-900">What I am doing</h4>

				<div className="grid gap-6 my-3 md:grid-cols-2">
					{/* children's initial and animate property should be same as the parent during a stagger effect  */}
					{services.map((service) => (
						<div
							className="col-span-2 p-2 bg-gray-200 rounded-lg dark:bg-black-200 md:col-span-1 "
							key={service.title}
							// variants={fadeInUp}
							// animate="animate"
							// initial="initial"
						>
							<ServiceCard service={service} />
						</div>
					))}
				</div>
			</div>
		</div>
	)
}

export default About
