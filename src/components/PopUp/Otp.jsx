import { useEffect, useState } from "react";
import exit from "../../assets/icons/exit.svg";
import otpImage from "../../assets/SignUp-Login/otpImage.svg"
import { otpVerification } from "../../authentication/AuthService";
import { fontType } from "../Text/text";
const Otp = ({ user, setShowOtp }) => {
	const [otp, setOtp] = useState(new Array(6).fill(""))

	const handleChangeData = async (element, index) => {
		if (isNaN(element.value)) return false

		setOtp([...otp.map((data, idx) => (idx === index) ? element.value : data)])
		if (element.nextSibling) {
			element.nextSibling.focus();
		}
	}
	useEffect(() => {
		if (otp[5] !== "") {
			const validating = async () => {
				try {
					const otpVerify = otp.join("")
					const response = await otpVerification(user, otpVerify )
					setTimeout(()=>{
						location.reload()
					},1000)
				} catch (error) {
					console.log(error.message)
				}
			}
			validating()
		}
	}, [otp])
	return (
		<form>
			<div className="fixed left-0 right-0 bottom-0 top-0 flex items-center justify-center bg-[rgba(0,0,0,0.5)] z-50">
				<div className="bg-white rounded-2xl w-[22rem] sm:w-[26rem] py-10 flex flex-col">
					<img src={exit} className="w-5 self-end mr-10 cursor-pointer" onClick={() => {
						setShowOtp(false)
					}} />
					<div className="flex justify-center items-center flex-col gap-4 pt ">
						<img src={otpImage} className="w-8/12" />
						<p className={`${fontType["h3"]} sm:text-4xl`}>
							Verifikasi OTP
						</p>
						<p className={`${fontType["p1"]} text-neutral50 text-center w-9/12 sm:w-8/12`}>
							Masukkan kode OTP dari email yang telah kami kirimkan
						</p>
						<div className="flex justify-center items-center gap-5">
							{otp.map((data, index) => {
								return (
									<input type="text"
										className="w-[2.5rem] rounded-lg border-none bg-neutral10"
										name="otp"
										maxLength={1}
										key={index}
										value={data}
										onChange={e => handleChangeData(e.target, index)}
										onFocus={e => e.target.select()}
									/>
								)
							})}
						</div>
					</div>
				</div>
			</div>
		</form>
	)
}

export default Otp