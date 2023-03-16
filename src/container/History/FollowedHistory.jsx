import { listCompany } from "../LandingPage/Section4/listCompany";
import { fontType } from "../../components/Text/text";
import { useRef } from "react";
import { Link } from "react-router-dom";
import cvIcon from "../../assets/icons/cvicon.svg"
const FollowedHistory = () => {
	const kontrakUpload = useRef()
	const handlechange = e => {
		const file = e.target.files[0]
		// uploadcv to database
	}
	const registrarUploadKontrakKerja = () => {
		kontrakUpload.current.click()
	}
	return (
		<>
			{listCompany.map(item => {
				return (
					<div key={item.name} className="bg-white w-10/12 lg:w-6/12 xl:w-5/12 2xl:w-5/12 min-h-[20vh] rounded-3xl px-7 py-9 flex flex-col gap-8 shadow-[5px_5px_10px_rgba(0,0,0,0.05)]" >
						<div className="flex 1 ">
							<img src={item.logo} />
							<p className={`${fontType["h1"]} ml-5`}>{item.name}</p>
						</div>
						<div className="flex">
							<div className="w-6/12 flex flex-col gap-5">
								<div className="flex flex-col xl:flex-row justify-between">
									<div>
										<p className={`${fontType["h4"]}`}>{item.job}</p>
										<p className={`${fontType["p1"]} text-neutral30`}>{item.loc}</p>
									</div>
								</div>
								<div>
									<p className={`${fontType["h4"]}`}>Kontrak Kerja</p>
									<div className="flex gap-3 items-center mt-3">
										<img src={cvIcon} />
										<Link to="/src/assets/File/kontrak.pdf" download className={`${fontType["p1"]}`} target="_blank">
											Kontrak Kerja.pdf
										</Link>
									</div>
								</div>
								<p className={`${fontType["h4"]}`}>Unggah Kontrak Kerja</p>
								<div className="h-[15vh] w-10/12 rounded-lg border-2 border-[#D1D5DC] border-dashed flex flex-col justify-center items-center">
									<p className={`${fontType["p1"]} text-neutral50`}>Unggah disini</p>
									<p className={`${fontType["button"]} bg-primary50 text-white mt-3 px-4 py-1 rounded-lg cursor-pointer`} onClick={
										registrarUploadKontrakKerja
									}>Choose File</p>
									<input type="file"
										className="hidden"
										onChange={handlechange}
										accept="application/pdf"
										ref={kontrakUpload} />
								</div>
							</div>
							<div className="w-6/12 flex flex-col">
								{item.semester.map(preList => {
									return (
										<>
											<p key={preList.name} className={`${fontType["h3"]} mt-1`}>{preList.name}</p>
											{preList.prequisite.map((pre) => {
												return <p key={pre} className={`${fontType["p1"]} ml-10 mt-4 text-neutral50`}>{pre}</p>
											})}
										</>
									)
								})}
							</div>
						</div>
						<p className={`${fontType["button"]} self-end text-white bg-primary50 w-4/12 text-center px-1 py-2 rounded-full`}>Simpan</p>
					</div>
				)
			})}
		</>
	)
}

export default FollowedHistory