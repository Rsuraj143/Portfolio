import ReactTooltip from "react-tooltip"

function SkillCard({ img, title }) {
	return (
		<div style={{aspectRatio: "1/1"}} className="w-full bg-white bg-opacity-5 p-4 md:p-10 flex items-center justify-center rounded-3xl border border-transparent hover:border-gray-300 cursor-pointer hover:shadow-xl hover:border-opacity-20 transition-all">
			<img
				src={img}
				alt={title}
				className="w-auto object-contain"
				data-tip={title}
			/>
			<ReactTooltip />
		</div>
	)
}

export default SkillCard
