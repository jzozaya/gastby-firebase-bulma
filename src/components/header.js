import React from 'react';
import './style.scss';
//import gatsbyLogo from '../images/gatsby-icon.png';
import Navbar from './navbar';

const Header = ({ siteTitle }) => (
	<section className="hero gradientBg is-small">
		<Navbar />
		<div className="hero-body">
			<div className="container center">
				<article className="media">
					<div className="media-content">
						<div className="content">
							<h2 className="content__title content__title--multiline">
								<span className="content__title-row">I'll take U</span>
								<span className="content__title-row">Into this @<em>Journey</em></span>
								<span className="content__title-row"><span className="month">Apr —</span> <span className="year">2020</span></span>
							</h2>
						</div>
					</div>
				</article>
			</div>
		</div>
	</section>
);

export default Header;
