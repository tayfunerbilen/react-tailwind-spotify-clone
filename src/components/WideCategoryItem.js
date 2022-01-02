function WideCategory({category}) {
	return (
		<div
			style={{'background': category.color}}
			className="rounded-lg flex-shrink-0 relative w-[27.375rem] h-[13.75rem]"
		>
			<div className="absolute inset-0 overflow-hidden">
				<h3 className="p-4 text-[2.5rem]	tracking-tighter font-semibold">
					{category.title}
				</h3>
				<img src={category.cover}
				     className="shadow-spotify w-32 h-32 rotate-[25deg] translate-x-[18%] translate-y-[5%] absolute bottom-0 right-0"/>
			</div>
		</div>
	)
}

export default WideCategory
