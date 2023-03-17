import { useContext, useEffect, useRef, useState } from "react";
import changePic from "../../assets/Account/changePic.svg";
import { fontType } from "../../components/Text/text";
import DropdownPendidikan from "../../components/Dropdown/DropdownPendidikan";
import { countries } from "../../container/account/account";
import { school } from "../../container/account/account";
import ConfirmChangeBio from "../../components/PopUp/ConfirmChangeBio";
import DropdownCountries from "../../components/Dropdown/DropdownCountries";
import Layout from "../../components/Layout/Layout";
import { userContext } from "../../context/AuthContext";
import { getUser, updatePayment } from "../../api/api";
import { useNavigate } from "react-router-dom";
const Account = () => {
	const navigate = useNavigate()
	const [isShow, setIsShow] = useState(false);
	const { user, setUser } = useContext(userContext);
	const fotoUploading = useRef()
	const [userAccount, setUserAccount] = useState({
		id: user.data.user.user_id !== null ? user.data.user.user_id : "",
		foto: user.data.user.url_icon !== null ? user.data.user.url_icon : "",
		namaDepan: user.data.user.name !== null ? user.data.user.name : "",
		namaBelakang: user.data.user.second_name !== null ? user.data.user.second_name : "",
		pendidikan: user.data.user.education !== null ? user.data.user.education : "",
		email: user.data.user.email !== null ? user.data.user.email : "",
		telepon: user.data.user.telephone !== null ? user.data.user.telephone : "",
		kota: user.data.user.city !== null ? user.data.user.city : "",
		pos: user.data.user.postal !== null ? user.data.user.postal : "",
		negara: user.data.user.region !== null ? user.data.user.region : "Indonesia",
		rekening: user.data.user.credit_number !== null ? user.data.user.credit_number : "",
		metodePembayaran: user.data.user.payment !== null ? user.data.user.payment : "",
	});
	useEffect(() => {
		const getProfileContent = async () => {
			try {
				const response = await getUser()
				setUser(response)
			} catch (error) { }
		}
		getProfileContent()
	}, [])
	
	const saveRekening = async e => {
		e.preventDefault()
		try {
			await updatePayment(userAccount)
			navigate('/home')
		} catch (error) {
		}
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
		<Layout>
			<div className="flex flex-col xl:flex-row items-center justify-center xl:justify-evenly gap-5 xl-gap-0 mt-24 mb-20">
				<div className="w-11/12 lg:w-8/12 xl:w-3/12 rounded-xl flex justify-center items-start h-11/12 ">
					<div className="w-3/4 md:w-1/2 xl:w-11/12 bg-white flex flex-col justify-start items-center gap-12 rounded-2xl py-10 ">
						<div className="relative">
							{userAccount.foto ?
								<img src={userAccount.foto} />
								:
								<div className="w-36 h-36 rounded-full bg-neutral50"></div>
							}
							<img src={userAccount.foto} />
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
								{`${userAccount.namaDepan} ${userAccount.namaBelakang}`}
							</p>
							<p className={`${fontType["p1"]} text-center text-neutral50`}>
								{`${userAccount.kota}, ${userAccount.negara}`}</p>
						</div>
						<div className="w-9/12 h-[0.1rem] bg-neutral10"></div>
						<form onSubmit={saveRekening} className={`${fontType["h4"]} w-10/12 flex flex-col`}>
							<p className="">Metode Pengiriman Uang</p>
							<input
								type="text"
								value={userAccount.metodePembayaran}
								placeholder="BCA"
								className="w-11/12 rounded-full border-none bg-[#F9F9F9] px-4 py-3 mt-4"
								onChange={(e) => {
									setUserAccount({ ...userAccount, metodePembayaran: e.target.value })
								}}
							/>
							<p className="mt-4">Nomor Rekening</p>
							<input
								type="text"
								value={userAccount.rekening}
								placeholder="xxx xxx xxx"
								className="w-11/12 rounded-full border-none bg-[#F9F9F9] px-4 py-3 mt-4"
								onChange={(e) => {
									setUserAccount({ ...userAccount, rekening: e.target.value })
								}}
							/>
							<button type="submit" className={`${fontType["button"]} mt-5 bg-primary50 text-center text-white py-2 rounded-full cursor-pointer`}>Simpan</button>
						</form>
					</div>
				</div>
				<div className="w-full md:w-10/12 xl:w-3/5 bg-white rounded-3xl flex justify-center h-max pt-7 pb-24">
					<div className={`${fontType["h4"]} w-1/2 flex flex-col gap-10 ml-12 lg:ml-24 mt-5`}>
						<div>
							<p>Nama Depan</p>
							<input
								type="text"
								value={userAccount.namaDepan}
								placeholder="Nama Depan"
								className="w-10/12 rounded-full border-none bg-[#F9F9F9] px-4 py-3 mt-4"
								onChange={(e) => {
									setUserAccount({ ...userAccount, namaDepan: e.target.value })
								}}
							/>
						</div>
						<div>
							<p>Pendidikan</p>
							<DropdownPendidikan
								options={school}
								selectedOption={"SMA"}
								setUser={setUserAccount}
							/>
						</div>
						<div>
							<p>No. Telepon</p>
							<input
								type="text"
								placeholder="0821-xxxx-xxxx"
								value={userAccount.telepon}
								className="w-10/12  rounded-full  border-none bg-[#F9F9F9] px-4 py-3 mt-4"
								onChange={(e) => {
									setUserAccount({ ...userAccount, telepon: e.target.value })
								}}
							/>
						</div>
						<div>
							<p>Kode Pos</p>
							<input
								type="text"
								value={userAccount.pos}
								placeholder="432412"
								className="w-10/12 rounded-full  border-none bg-[#F9F9F9] px-4 py-3 mt-4"
								onChange={(e) => {
									setUserAccount({ ...userAccount, pos: e.target.value })
								}}
							/>
						</div>
					</div>
					<div className={`${fontType["h4"]} w-1/2 flex flex-col gap-10 mt-5`}>
						<div>
							<p>Nama Belakang</p>
							<input
								type="text"
								value={userAccount.namaBelakang}
								placeholder="Nama Belakang"
								className="w-10/12 rounded-full  border-none bg-[#F9F9F9] px-4 py-3 mt-4"
								onChange={(e) => {
									setUserAccount({ ...userAccount, namaBelakang: e.target.value })
								}}
							/>
						</div>
						<div>
							<p>Email</p>
							<input
								type="text"
								value={userAccount.email}
								placeholder="Email"
								className="w-10/12 rounded-full  border-none bg-[#F9F9F9] px-4 py-3 mt-4"
								onChange={(e) => {
									setUserAccount({ ...userAccount, email: e.target.value })
								}}
								disabled
							/>
						</div>
						<div>
							<p>Kota</p>
							<input
								type="text"
								value={userAccount.kota}
								placeholder="Jakarta"
								className="w-10/12 rounded-full  border-none bg-[#F9F9F9] px-4 py-3 mt-4"
								onChange={(e) => {
									setUserAccount({ ...userAccount, kota: e.target.value })
								}}
							/>
						</div>
						<div>
							<p>Negara </p>
							<DropdownCountries options={countries} selectedOption={"Indonesia"} setUser={setUserAccount} />
						</div>
						<p className={`${fontType["button"]} bg-primary50 w-[12rem] self-end mr-24 text-center text-white py-2 rounded-full cursor-pointer`}
							onClick={() => {
								setIsShow(true)
							}}>
							Simpan
						</p>
						{isShow && (
							<ConfirmChangeBio user={userAccount} setIsShow={setIsShow} />
						)}

					</div>
				</div>
			</div>
		</Layout>
	);
};

export default Account;
