

const NavItem = ({ value, active, handleFilterCategory }) => {
	var className = 'capitalize cursor-pointer hover:text-green'
	if (active === value) className += ' text-green'

	return (
		<li className={className} onClick={() => handleFilterCategory(value)}>
			{value}
		</li>
	)
}

const ProjectNavbar = (props) => {
	return (
		<nav className="flex px-3 py-2 space-x-3 overflow-x-auto list-none">
			<NavItem value="all" {...props} />
			<NavItem value="react" {...props} />
			<NavItem value="mongo" {...props} />
			<NavItem value="firebase" {...props} />
			<NavItem value="express" {...props} />
			<NavItem value="node" {...props} />
			<NavItem value="django" {...props} />
		</nav>
	)
}

export default ProjectNavbar
