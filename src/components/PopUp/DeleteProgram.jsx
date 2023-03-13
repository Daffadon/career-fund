import remove from "../../assets/Program/Hands Phone.svg"
import { fontType } from "../Text/text"

const DeleteProgram = ({ setIsRemove, itemToDelete }) => {
	const hapus = () => {
		// delete itemToDelete()
		location.reload()
	}
	return (
		<div className="fixed left-0 right-0 bottom-0 top-0 flex items-center justify-center bg-[rgba(0,0,0,0.1)]">
			<div className="bg-white rounded-2xl w-9/12 sm:w-7/12 md:w-6/12 lg:w-5/12 xl:w-4/12 2xl:w-3/12 py-10">
				<div className="flex justify-center items-center flex-col gap-4 pt ">
					<img src={remove} className="w-5/12" />
					<p className={`${fontType["h1"]}`}>
						Hapus List
					</p>
					<p className={`${fontType["p1"]} text-neutral50 text-center w-6/12`}>
						Apakah Anda yakin ingin melanjutkan untuk menghapus ini?
					</p>
					<p className={`${fontType["button"]} w-6/12 bg-white text-primary50 border-primary50 border-2 py-2 px-4 rounded-full text-center cursor-pointer`}
						onClick={() => {
							hapus()}}>
						Hapus
					</p>
					<p className={`${fontType["button"]} w-6/12 bg-primary50 text-white py-2 px-4 rounded-full text-center cursor-pointer`}
						onClick={() => {
							setIsRemove(false)
						}}>
						Batal
					</p>
				</div>
			</div>
		</div>
	)
}

export default DeleteProgram