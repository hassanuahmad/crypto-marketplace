const Button = ({
	text,
	onClick,
	className = "",
	outline = false,
	type = "",
}) => {
	const outlineClasses = () => {
		if (outline) {
			return "px-4 py-1.5 border-2 border-cmp-black text-cmp-black hover:border-cmp-primary hover:bg-cmp-primary hover:text-white";
		}
		return "bg-cmp-primary text-white boldBody-text px-6 py-3 shadow-xl hover:bg-cmp-primary-dark";
	};

	let classNames = "rounded-lg transition-color duration-150";
	return (
		<button
			className={`${className} ${classNames} ${outlineClasses()}`}
			onClick={onClick}
			type={type}
		>
			{text}
		</button>
	);
};

export default Button;
