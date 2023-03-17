import { Alert } from "flowbite-react"
import { fontType } from "../Text/text"
const AlertCustom = ({ setError, errorMessage }) => {
    return (
            <Alert color="failure"
                onDismiss={() => { setError(false) }}
                className="fixed w-max bottom-10 z-50">
                <p className={`${fontType["p1"]} font-extrabold text-center`} >
                    {errorMessage}
                </p>
            </Alert>
    )
}

export default AlertCustom