
export const VerySmallPrimaryButton = ({children})=>{
    return(
        <div className="font-medium text-xs w-[4.5rem] h-[2.125rem] bg-[#1A1A1A] rounded-full text-white py-2 px-5">
            {children}
        </div>
    )
}
export const SmallPrimaryButton = ({children})=>{
    return(
        <div className="font-medium text-sm w-20 h-10 bg-[#1A1A1A] rounded-full text-white py-2.5 px-5">
            {children}
        </div>
    )
}
export const MediumPrimaryButton = ({children})=>{
    return(
        <div className="font-medium text-base w-[5.3125rem] h-11 bg-[#1A1A1A] rounded-full text-white py-2.5 px-[1.3rem]">
            {children}
        </div>
    )
}
export const LargePrimaryButton = ({children})=>{
    return(
        <div className=" font-medium text-lg w-[5.75rem] h-12 bg-[#1A1A1A] rounded-full text-white py-2.5 px-[1.3rem]">
            {children}
        </div>
    )
}

export const VerySmallSecondaryButton = ({children})=>{
    return(
        <div className="font-medium text-xs w-[4.5rem] h-[2.125rem] bg-white rounded-full text-black py-2 px-5 border-[#CECECE] border-[1px]">
            {children}
        </div>
    )
}
export const SmallSecondaryButton = ({children})=>{
    return(
        <div className="font-medium text-sm w-20 h-10 bg-white rounded-full text-black py-2.5 px-5 border-[#CECECE] border-[1px]">
        {children}
        </div>
    )
}
export const MediumSecondaryButton = ({children})=>{
    return(
        <div className="font-medium text-base w-[5.3125rem] h-11 bg-white rounded-full text-black py-2.5 px-[1.3rem] border-[#CECECE] border-[1px]">
            {children}
        </div>
    )
}
export const LargeSecondaryButton = ({children})=>{
    return(
        <div className="font-medium text-lg w-[5.75rem] h-12 bg-white rounded-full  text-black py-2.5 px-[1.3rem] border-[#CECECE] border-[1px]">
            {children}
        </div>
    )
}