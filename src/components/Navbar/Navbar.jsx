import React from 'react'
import './Navbar.css'
import logo from '../../assets/netflix_yt_assets/logo.png'
import search_icon from '../../assets/netflix_yt_assets/search_icon.svg'
import bell_icon from '../../assets/netflix_yt_assets/bell_icon.svg'
import profile_img from '../../assets/netflix_yt_assets/profile_img.png'
import caret_icon from '../../assets/netflix_yt_assets/caret_icon.svg'

function Navbar() {
  return (
	<div className='navbar'>
		<div className="navbar-left">
			<img src={logo} alt=''/>
			<ul>
				<li>Home</li>
				<li>TV Shows</li>
				<li>Movies</li>
				<li>New & Popular</li>
				<li>My List</li>
				<li>Browse By Language</li>
			</ul>
		</div>
		<div className="navbar-right">
			<img src={search_icon} alt='' className='icons'/>
			<p>Children</p>
			<img src={bell_icon} alt='' className='icons'/>
			<div className="navbar-profile">
				<img src={profile_img} alt='' className='profile'/>
				<img src={caret_icon} alt=''/>
			</div>
		</div>
	</div>
  )
}

export default Navbar