import React from 'react';

import './style.scss';
import Helmet from './helmet';
import Header from './header';
import Midsection from './midsection';
import Footer from './footer';
import Features from './features';

const Layout = ({ children }) => (
	<div>
		<Helmet />
		<Header />
		<Features />
		{/* <Calendar /> */}
		<Midsection />
		<Footer />
	</div>
);

export default Layout;
