function HeroSection() {
	return (
		<div className="flex items-center justify-center py-[100px] px-8 sm:px-16 w-full" id="heroSection">
			{/* <Nav /> */}
			<div className="w-full main-container flex flex-col-reverse md:flex-row items-center justify-between pt-8 pb-16">
				<div className="flex flex-col space-y-3 sm:space-y-6 items-start text-white xl:border-l-[5px] xl:pl-16 xl:border-gray-200 py-12">
					<p className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-normal">
						Howdy,
					</p>
					<h4 className="md:hidden text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold">
						I'm Suraj Rauda
					</h4>
					<h4 className="hidden md:flex text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold">
						I am Suraj Rauda
					</h4>
					<h6 className="text-base text- md:text-lg lg:text-xl xl:text-2xl font-light">
						JavaScript | Front End Developer
					</h6>

					<div className="flex space-x-5 pt-5">
						<a
							href="https://twitter.com/surajrauda1122"
							target="_blank"
							className="socialLink"
						>
							<img src="/static/images/twitter.svg" alt="Suraj Rauda" />
						</a>
						<a
							href="https://www.instagram.com/su_raj_14/"
							target="_blank"
							className="socialLink"
						>
							<img
								src="/static/images/instagram.svg"
								alt="Suraj Rauda"
								className=""
							/>
						</a>
						<a
							href="https://www.linkedin.com/in/surajrauda/"
							target="_blank"
							className="socialLink"
						>
							<img
								src="/static/images/linkedin.svg"
								alt="Suraj Rauda"
								className=""
							/>
						</a>
						<a
							href="https://github.com/Rsuraj143"
							target="_blank"
							className="socialLink"
						>
							<img
								src="/static/images/github2.svg"
								alt="Suraj Rauda"
								className=""
							/>
						</a>
					</div>
				</div>
				<div>
					<img
						src="/static/images/heroImg.svg"
						alt="Suraj Rauda"
						className="md:w-[360px] lg:w-[400px] xl:w-[500px]"
					/>
				</div>
			</div>
		</div>
	)
}

export default HeroSection
