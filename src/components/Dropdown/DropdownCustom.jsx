import { useEffect, useState } from "react";
const DropdownCustom = ({ options, selectedOption, onOptionSelect }) => {
        const [selected, setSelected] = useState(selectedOption);

        const handleOptionChange = (event) => {
                const option = event.target.value;
                setSelected(option);
                onOptionSelect()
                onOptionSelect(option);
        };
        return (
                <select value={selected} onChange={handleOptionChange} className="w-10/12 border-none bg-[#F5F5F5] rounded-full px-4 py-3 mt-4">
                        {options.map((option) => (
                                <option key={option} value={option} className="font-bold ">
                                        {option}
                                </option>
                        ))}
                </select>
        );
};

export default DropdownCustom;
