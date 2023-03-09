import remove from "../../assets/Program/Hands Phone.svg"
import { fontType } from "../Text/text"

const DeleteProgram = () => {
	return (
		<div className="fixed left-0 right-0 bottom-0 top-0 flex items-center justify-center bg-[rgba(0,0,0,0.5)]">
			<div className="bg-white rounded-2xl w-4/12 py-10">
				<div className="flex justify-center items-center flex-col gap-4 pt ">
					<img src={remove} className="w-8/12" />
					<p className={`${fontType["h1"]}`}>
						Hapus List
					</p>
					<p className={`${fontType["p1"]} text-neutral50 text-center w-7/12`}>
						Apakah Anda yakin ingin melanjutkan untuk menghapus ini?
					</p>
					<p className={`${fontType["button"]} w-9/12 bg-white text-primary50 border-primary50 border-2 py-2 px-4 rounded-full text-center cursor-pointer`}>
						Hapus
					</p>
					<p className={`${fontType["button"]} w-9/12 bg-primary50 text-white py-2 px-4 rounded-full text-center cursor-pointer`}>
						Batal
					</p>
				</div>
			</div>
		</div>
	)
}

export default DeleteProgram