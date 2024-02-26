import React from "react";

const ExperienceCard = ({ logo, year, post, company, info }) => {
	return (
		<div className="flex flex-col w-full lg:w-auto items-start bg-white bg-opacity-5 py-5 px-6 sm:py-8 sm:px-10 rounded-2xl space-y-4 border border-transparent hover:border-gray-300 hover:shadow-lg cursor-pointer">
			<div className="flex flex-col items-start space-y-6">
				<div className="flex items-center space-x-3 lg:space-x-5">
					<span className=" overflow-hidden bg-nik-white w-12 h-12 sm:w-14 sm:h-14 md:w-14 md:h-14 lg:w-14 lg:h-14 xl:w-16 xl:h-16 rounded-xl flex items-center justify-center border border-gray-200">
						<img src={logo} alt="Suraj Rauda Certificate" />
					</span>
					<span className="py-4 px-5 bg-white text-[#0C141C] rounded-2xl text-xs sm:text-sm lg:text-base xl:text-lg font-medium">
						{company}
					</span>
				</div>

				<h3 className="font-bold text-base sm:text-lg md:text-lg lg:text-xl xl:text-2xl text-white line-clamp-3">
					{post}
				</h3>
			</div>
			<span className="px-4 py-3 bg-white bg-opacity-10 text-white rounded-lg text-xs sm:text-sm font-medium ">
				{year}
			</span>
			<p className="text-white text-sm">{info}</p>
		</div>
	);
};

export default ExperienceCard;
