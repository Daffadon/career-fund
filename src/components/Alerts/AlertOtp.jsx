import { Alert } from "flowbite-react"
import { fontType } from "../Text/text"

const AlertOtp = () => {
    return (
        <Alert color="failure"
            onDismiss={() => { setError(false) }}
            className="fixed w-[26rem] bottom-10 right-5 z-50">
            <p className={`${fontType["p1"]} font-extrabold text-center`} >
                {errorMessage}
            </p>
        </Alert>
    )
}

export default AlertOtp