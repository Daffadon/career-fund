import { useState } from "react";
const DropdownJurusan = ({ options, selectedOption, setJurusan}) => {
    const [selected, setSelected] = useState(selectedOption);
    return (
        <select
            value={selected}
            onChange={(e) => {
                setSelected(e.target.value)
                setJurusan(e.target.value )
            }}
            className="w-full border-none bg-[#F5F5F5] rounded-full px-4 py-3 mt-4"
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
    )
}

export default DropdownJurusan