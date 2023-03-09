import { Alert } from "flowbite-react"
import { fontType } from "../Text/text"
const AlertCustom = ({ setError, errorMessage }) => {
    return (
        <Alert color="failure"
            onDismiss={() => { setError(false) }}
            className="fixed w-[26rem] bottom-10">
                <p className={`${fontType["p1"]} font-extrabold text-center`} >
                    {errorMessage}
                </p>
        </Alert>
    )
}

export default AlertCustom