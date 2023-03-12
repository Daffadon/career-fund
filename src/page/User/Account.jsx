import { useRef, useState } from "react";
import foto from "../../assets/Account/foto.svg";
import changePic from "../../assets/Account/changePic.svg";
import { fontType } from "../../components/Text/text";
import dana from "../../assets/LandingPage/Dana.svg";
import DropdownCustom from "../../components/Dropdown/DropdownCustom";
import { countries } from "../../container/account/account";
import { school } from "../../container/account/account";
import ConfirmChangeBio from "../../components/PopUp/ConfirmChangeBio";
import DropdownCountries from "../../components/Dropdown/DropdownCountries";
import LayoutUser from "../../components/Layout/LayoutUser";
const Account = () => {
	const [country,] = useState("Indonesia");
	const [isShow, setIsShow] = useState(false);
	const fotoUploading = useRef()
	const [user, setUser] = useState({
		namaDepan: "",
		namaBelakang: "",
		pendidikan: "SMA",
		email: "",
		telepon: "",
		kota: "Jakarta",
		pos: "",
		negara: country,
	});
	const saveBio = e => {
		e.preventDefault()
	}
	const uploadFoto = () => {
		fotoUploading.current.click()
	}
	const handleChange = e => {
		const fotoToUpload = e.target.files[0];
		uploadFotoToDatabase(fotoToUpload)
	}
	const uploadFotoToDatabase = fotoToUpload => {
		// api upload foto
	}
	return (
		<LayoutUser>
			<div className="flex flex-col xl:flex-row items-center justify-center xl:justify-evenly gap-5 xl-gap-0 mt-24 mb-20">
				<div className="w-11/12 lg:w-8/12 xl:w-3/12 rounded-xl flex justify-center items-start h-11/12 ">
					<div className="w-3/4 md:w-1/2 xl:w-11/12 bg-white flex flex-col justify-start items-center gap-12 rounded-2xl py-10 ">
						<div className="relative">
							<img src={foto} />
							<img src={changePic} className="absolute left-12 -bottom-4 cursor-pointer" onClick={uploadFoto} />
							<input
								type="file"
								accept="image/*"
								className="hidden"
								onChange={handleChange}
								ref={fotoUploading} />
						</div>
						<div>
							<p className={`${fontType["h1"]} text-center`}>
								Rina Doe
							</p>
							<p className={`${fontType["p1"]} text-center text-neutral50`}>
								Malang, Indonesia</p>
						</div>
						<div className="w-9/12 h-[0.1rem] bg-neutral10"></div>
						<div className="flex gap-3 justify-center items-center">
							<img src={dana} />
							<div className="flex flex-col w-10/12 ml-3 ">
								<p className={`${fontType["p1"]}`}>Saldo</p>
								<p className={`${fontType["h3"]} w-8/12`} > RP3.000.000 </p>
							</div>
						</div>
					</div>
				</div>
				<form onSubmit={saveBio} className="w-full md:w-10/12 xl:w-3/5 bg-white rounded-3xl flex justify-center h-max pt-7 pb-24">
					<div className={`${fontType["h4"]} w-1/2 flex flex-col gap-10 ml-12 lg:ml-24 mt-5`}>
						<div>
							<p>Nama Depan</p>
							<input
								type="text"
								value={user.namaDepan}
								placeholder="Nama Depan"
								className="w-10/12 rounded-full border-none bg-[#F9F9F9] px-4 py-3 mt-4"
								onChange={(e) => {
									setUser({ ...user, namaDepan: e.target.value })
								}}
							/>
						</div>
						<div>
							<p>Pendidikan</p>
							<DropdownCustom
								options={school}
								selectedOption={user.pendidikan}
								setUser={setUser} user={user}
							/>
						</div>
						<div>
							<p>No. Telepon</p>
							<input
								type="text"
								placeholder="0821-xxxx-xxxx"
								value={user.telepon}
								className="w-10/12  rounded-full  border-none bg-[#F9F9F9] px-4 py-3 mt-4"
								onChange={(e) => {
									setUser({ ...user, telepon: e.target.value })
								}}
							/>
						</div>
						<div>
							<p>Kode Pos</p>
							<input
								type="text"
								value={user.pos}
								placeholder="432412"
								className="w-10/12 rounded-full  border-none bg-[#F9F9F9] px-4 py-3 mt-4"
								onChange={(e) => {
									setUser({ ...user, pos: e.target.value })
								}}
							/>
						</div>
					</div>
					<div className={`${fontType["h4"]} w-1/2 flex flex-col gap-10 mt-5`}>
						<div>
							<p>Nama Belakang</p>
							<input
								type="text"
								value={user.namaBelakang}
								placeholder="Nama Belakang"
								className="w-10/12 rounded-full  border-none bg-[#F9F9F9] px-4 py-3 mt-4"
								onChange={(e) => {
									setUser({ ...user, namaBelakang: e.target.value })
								}}
							/>
						</div>
						<div>
							<p>Email</p>
							<input
								type="text"
								value={user.email}
								placeholder="Email"
								className="w-10/12 rounded-full  border-none bg-[#F9F9F9] px-4 py-3 mt-4"
								onChange={(e) => {
									setUser({ ...user, email: e.target.value })
								}}
							/>
						</div>
						<div>
							<p>Kota</p>
							<input
								type="text"
								value={user.kota}
								placeholder="Jakarta"
								className="w-10/12 rounded-full  border-none bg-[#F9F9F9] px-4 py-3 mt-4"
								onChange={(e) => {
									setUser({ ...user, kota: e.target.value })
								}}
							/>
						</div>
						<div>
							<p>Negara </p>
							<DropdownCountries options={countries} selectedOption={user.negara} setUser={setUser} user={user} />
							{isShow && (
								<ConfirmChangeBio user={user} setIsShow={setIsShow} />
							)}
						</div>
						<button type="submit" className={`${fontType["button"]} bg-primary50 w-[12rem] self-end mr-24 text-center text-white py-2 rounded-full cursor-pointer`}>
							Simpan
						</button>
					</div>
				</form>
			</div>
		</LayoutUser>
	);
};

export default Account;
