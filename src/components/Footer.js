import { Link } from "react-scroll"

function Footer() {
	let date = new Date()
	return (
		<div
			className="flex flex-col items-center main-container  pt-10 pb-12 px-10 sm:px-16"
			id="contact"
		>
			<div className="bg-white bg-opacity-10 flex flex-col items-center lg:flex-row w-full px-6 py-8 sm:px-10 sm:py-8 rounded-[40px] justify-between space-y-6 lg:space-y-0 shadow-lg">
				<Link
					to="heroSection"
					smooth={true}
					offset={-110}
					duration={200}
					className="flex items-center space-x-3 cursor-pointer"
				>
					<img
						src="/static/images/logo.svg"
						alt="Suraj Rauda"
						className="w-14"
					/>
					<h3 className="text-2xl text-white font-light hidden md:flex">
						SURAJ<span className="font-semibold">RAUDA</span>
					</h3>
				</Link>

				<span className="hidden md:flex text-white text-base lg:text-lg font-light">
					© {date.getFullYear()} All right reserved - Design by SurajRauda
				</span>
				<span className="flex flex-col items-center md:hidden text-white text-sm space-y-2 font-normal">
					<span className="text-xs text-nik-lightGray">
						© {date.getFullYear()} All right reserved
					</span>
					<span>Design by SurajRauda</span>
				</span>
			</div>
		</div>
	)
}

export default Footer
