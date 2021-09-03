import React, { useEffect, useRef, useState, useContext } from 'react';

import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import Nav from '../components/Nav/Nav';

export default function Layout({ children }) {
	return (
		<div>
			<Nav />
			<Header />
			{children}
			<Footer />
		</div>
	);
}
