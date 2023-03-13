import { useState } from "react";
const DropdownCustom = ({ options, selectedOption, setUser }) => {
	const [selected, setSelected] = useState(selectedOption);
	return (
		<select
			value={selected}
			onChange={(e) => {
				setSelected(e.target.value)
				setUser(prev => ({ ...prev, pendidikan: e.target.value }))
			}}
			className="w-10/12 border-none bg-[#F5F5F5] rounded-full px-4 py-3 mt-4"
		>
			{options.map((option) => (
				<option
					key={option}
					value={option}
					className="font-bold "
				>
					{option}
				</option>
			))}
		</select>
	);
};

export default DropdownCustom;
