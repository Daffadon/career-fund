import { DualRing } from "react-awesome-spinners"
const Loading = () => {
    return (
        <div className="fixed left-0 right-0 bottom-0 top-0 flex items-center justify-center bg-[rgba(1,1,1,1) z-10">
            <DualRing color={"#6B8DE0"} size={100}/>
        </div>
    )
}

export default Loading