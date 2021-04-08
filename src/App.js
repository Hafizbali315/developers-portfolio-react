import Sidebar from './conponents/Sidebar'

function App() {
	return (
		<div className="grid grid-cols-12 gap-6 px-5 my-14 lg:mb-0 md:mb-16 sm:px-20 md:px-32 lg:px-36 xl:px-48 ">
			<div className="h-full col-span-12 p-4 text-base text-center bg-white lg:col-span-3 rounded-2xl dark:bg-black-500 shadow-custom-light dark:shadow-custom-dark">
				<Sidebar />
			</div>

			<div className="app__body"></div>
		</div>
	)
}

export default App
