import { AnimatePresence } from 'framer-motion'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import About from './pages/about'
import Resume from './pages/resume'
import Projects from './pages/projects'

import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'

function App() {
	return (
		<Router>
			<div className="grid grid-cols-12 gap-6 px-5 my-14 lg:mb-0 md:mb-16 sm:px-20 md:px-32 lg:px-36 xl:px-48 ">
				<div className="h-full col-span-12 p-4 text-base text-center bg-white lg:col-span-3 rounded-2xl dark:bg-black-500 shadow-custom-light dark:shadow-custom-dark">
					<Sidebar />
				</div>
				<div className="flex flex-col col-span-12 overflow-hidden bg-white rounded-2xl dark:bg-black-500 dark:text-white lg:col-span-9 shadow-custom-light dark:shadow-custom-dark">
					<Navbar />
					<AnimatePresence exitBeforeEnter>
						<Switch>
							<Route exact path="/" component={About} />
							<Route exact path="/resume" component={Resume} />
							<Route exact path="/projects" component={Projects} />
						</Switch>
					</AnimatePresence>
				</div>
			</div>
		</Router>
	)
}

export default App
