import React, { useState, useEffect } from "react"
import Head from "next/head"
import About from "../components/About"
import Contact from "../components/Contact"
import Footer from "../components/Footer"
import HeroSection from "../components/HeroSection"
import Loading from "../components/Loading"
import Nav from "../components/Nav"
import Projects from "../components/Projects"
import Resume from "../components/Resume"

export default function Home() {
	const [spinner, setSpinner] = useState(true)

	useEffect(() => {
		setTimeout(() => setSpinner(false), 3000)
	}, [])

	return (
		<div className="flex flex-col">
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta charSet="utf-8" />
				<meta
					name="description"
					content="This is Suraj Rauda. I am Front End Developer || JavaScript - React Developer || Self Taught Programmer. I design & develop a Modern Responsive Websites. You can check my work on my portfolio."
				/>
				{/* Open Graph Meta Tags*/}
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:site" content="@surajrauda1122" />
				<meta name="twitter:creator" content="@surajrauda1122" />
				<meta
					name="twitter:title"
					content="Suraj Rauda - JavaScript / ReactJS / NextJS / GraphQL / Front End Developer"
				/>
				<meta
					name="twitter:description"
					content="I Design and Develop a modern stylish websites using modern tools like React, NextJS, Tailwind CSS etc."
				/>
				{/* <meta
					name="twitter:image"
					content="/static/images/twittercardimg.png"
				/> */}
				<meta
					name="twitter:title"
					content="Suraj Rauda - JavaScript / ReactJS / NextJS / GraphQL / Front End Developer"
				/>
				<meta
					name="twitter:description"
					content="I Design and Develop a modern stylish websites using modern tools like React, NextJS, Tailwind CSS etc."
				/>
				{/* <meta name="twitter:image" content="/static/images/portfolio.png" /> */}
				<meta property="og:url" content="https://surajrauda.vercel.app/" />
				<meta
					property="article:author"
					content="https://surajrauda.vercel.app/"
				/>
				<meta property="og:type" content="website" />
				<meta property="fb:app_id" content="482063489741872" />
				<meta name="author" content="Suraj Rauda"></meta>
				{/* <meta
					property="og:image"
					content="/static/images/portfolio.png"
					key="ogimage"
				/> */}
				<meta
					property="og:site_name"
					content="Suraj Rauda"
					key="ogsitename"
				/>
				<meta
					property="og:title"
					content="Suraj Rauda - JavaScript / ReactJS / NextJS / GraphQL / Front End Developer"
					key="ogtitle"
				/>
				<meta
					property="og:description"
					content="This is Suraj Rauda. I am Front End Developer || JavaScript - React Developer || Self Taught Programmer. I design & develop a Modern Responsive Websites. You can check my work on my portfolio."
					key="ogdesc"
				/>
				<title>Suraj Rauda - JavaScript / ReactJS / NextJS / Tailwindic CSS / Front End Developer</title>
				<link rel="icon" href="/static/images/logo.svg" />
			</Head>
			{spinner ? (
				<Loading />
			) : (
				<div className="flex flex-col bg-gradient-radial">
					<Nav />
						<HeroSection />
						<div className="main-container">
							<About />
						</div>
						<div className="w-full ">
							<Resume />
						</div>
						<div className="w-full">
							<Projects />
						</div>
						<div className="w-full bg-gradient-radial">
							<Contact />
						</div>
						<div className="w-full bg-gradient-radial">
							<Footer />
						</div>
				</div>
			)}
		</div>
	)
}
