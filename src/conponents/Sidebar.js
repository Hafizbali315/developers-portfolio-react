import { AiFillGithub, AiFillInstagram, AiFillFacebook } from 'react-icons/ai'
import { GiTie } from 'react-icons/gi'
import { GoLocation } from 'react-icons/go'

const Sidebar = () => {
	return (
		<div className="sidebar">
			<img className="sidebar__image" src="/images/profilePic.jpg" alt="profilePic" />
			<div className="sidebar__info">
				<h3 className="info__name">
					<span>Muhammad </span>Bilal
				</h3>
				<p>Web Developer</p>
				<a href="/assets/Resume.pdf" download="Resume.pdf">
					<GiTie className="w-6 h-6" />
					<span>Download Resume</span>
				</a>
			</div>

			<div className="sidebar__socials">
				<a
					href="https://web.facebook.com/profile.php?id=100015561037136&_rdc=1&_rdr"
					target="_blank"
					rel="noreferrer"
					aria-label="Facebook"
				>
					<AiFillFacebook className="" />
				</a>
				<a href="https://github.com/Hafizbali315" target="_blank" rel="noreferrer" aria-label="Github">
					<AiFillGithub className="" />
				</a>
				<a href="https://www.instagram.com/muhammad_bilal_bali/" rel="noreferrer" target="_blank" aria-label="GitHub">
					<AiFillInstagram className="" />
				</a>
			</div>

			<div className="sidebar__contacts" style={{ marginLeft: '-1rem', marginRight: '-1rem' }}>
				<div className="contact__address">
					<GoLocation className="" style={{ marginRight: '5px' }} /> <span>Talagang, Pakistan</span>
				</div>
				<p className=""> hafizbali315@gmail.com </p>
				<p className=""> +92-3168849904</p>
			</div>

			<button className="sidebar__btn" onClick={() => window.open('mailto:hafizbali315@gmail.com')}>
				Email me
			</button>
			<button className="sidebar__btn">Change Theme</button>
		</div>
	)
}

export default Sidebar
