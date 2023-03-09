import handsMail from "../../assets/SignUp-Login/Hands Mail.svg";
import { fontType } from "../Text/text";

const EmailSent = () => {
	const reload = () => {
		location.reload();
	};
	return (
		<div className="fixed left-0 right-0 bottom-0 top-0 flex items-center justify-center bg-[rgba(0,0,0,0.5)]">
			<div className="bg-white rounded-2xl w-4/12 py-10">
				<div className="flex justify-center items-center flex-col gap-4 pt ">
					<img src={handsMail} className="w-8/12" />
					<p className={`${fontType["h1"]}`}>
						Email Terkirim
					</p>
					<p
						className={`${fontType["p1"]} text-neutral50 text-center w-7/12`}
					>
						Masukkan email Anda dan jangan lewatkan
						kesempatan untuk mendapatkan update terbaru
						dari kami
					</p>
					<p
						className={`${fontType["button"]} w-9/12 bg-primary50 text-white py-2 px-4 rounded-full text-center cursor-pointer`}
						onClick={reload}
					>
						Kembali
					</p>
				</div>
			</div>
		</div>
	);
};

export default EmailSent;
