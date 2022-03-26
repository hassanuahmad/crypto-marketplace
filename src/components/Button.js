const Button = ({text, onClick, className="", outline=false}) => {

	const outlineClasses = () => {
		if (outline) {
			return "border-2 border-black text-black hover:border-cmp-primary hover:bg-cmp-primary hover:text-white";
		}
		return "bg-cmp-primary";
	}

	let classNames = "px-4 py-1.5 rounded-lg transition-color duration-100";
	return (
		<button className={`${className} ${classNames} ${outlineClasses()}`} onClick={onClick}>
			{text}
		</button>
	)
}

export default Button;
