import { useEffect, useState } from "react"

const radioStyle = {
    true: ""
}



export const Radio = () => {
    const [isChecked, SetIsChecked] = useState(false);
    useEffect(() => {
        console.log(isChecked)
    })
    return (
        <label htmlFor="daffa">
            <input
                className="invisible"
                id="daffa"
                type="radio"
                value="daffa"
                onChange={e => {
                    SetIsChecked(!isChecked);
                }} />
            {isChecked ?
                <span className="inline-block w-6 h-6 rounded-full border-[1px] bg-black border-[#CECECE]" />
                :
                <span className="inline-block w-6 h-6 rounded-full border-[1px] border-[#CECECE]" />}
            daffa
        </label>
    )
}
