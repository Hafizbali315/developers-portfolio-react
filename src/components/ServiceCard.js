// import { motion } from 'framer-motion'

const ServiceCard = ({ service: { Icon, title, about } }) => {
	//XSS attack :(  as an alternate use npm i dom purify. Will use it later
	function createMarkup() {
		return {
			__html: about,
		}
	}

	return (
		<div className="flex items-center p-2 space-x-4 ">
			<Icon className="w-12 h-12 text-green" />
			<div className="">
				<h5 className="font-bold">{title}</h5>
				<p dangerouslySetInnerHTML={createMarkup()} />
			</div>
		</div>
	)
}

export default ServiceCard
