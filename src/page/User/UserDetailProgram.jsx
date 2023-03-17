import { fontType } from "../../components/Text/text"
import { useLocation } from "react-router-dom"
import { listCompany } from "../../container/LandingPage/Section4/listCompany"
import { useEffect, useState } from "react"
import UploadCV from "../../components/PopUp/UploadCV"


const UserDetailProgram = () => {
	const item = useLocation().state
	const [showCvForm, setShowCvForm] = useState(false)
	useEffect(() => {
		console.log(item)
	})
	return (
		<div className="flex justify-center items-center min-h-screen">
			<div key={item.id} className="bg-white w-10/12 lg:w-7/12 xl:w-5/12 rounded-3xl px-7 py-9 flex flex-col gap-6 shadow-[5px_5px_10px_rgba(0,0,0,0.05)] ">
				<div className="flex 1 ">
					<img src={item.url} />
					<p className={`${fontType["h1"]} ml-5`}>{item.company}</p>
				</div>
				<div className="flex flex-col justify-between gap-3">
					<div>
						<p className={`${fontType["h4"]}`}>{item.title}</p>
						<p className={`${fontType["p1"]} text-neutral30`}>{`${item.city}, ${item.region}`}</p>
					</div>
					<div className="flex gap-8">
						<div>
							<p className={`${fontType["h4"]}`}>Pendidikan Terakhir</p>
							<div className="flex gap-2 mt-4">
								{item.education.map((tag) => {
									return (
										<p key={tag} className="w-max bg-warning10 text-warning90 py-1 px-5 rounded-full  h-max">
											{tag}
										</p>
									);
								})}
							</div>
						</div>
						<div >
							<p className={`${fontType["h4"]}`}>Tingkatan</p>
							<div className="flex -gap-2 mt-4">
								<p className="w-max bg-primary10 text-info70 py-1 px-5 rounded-full  h-max">
									{item.level}
								</p>
							</div>
						</div>
					</div>
				</div>
				<p className={`${fontType["h4"]}`}>Deskripsi</p>
				<p className={`${fontType["p1"]} text-neutral50 text-justify`}>{item.desc}</p>
				<p className={`${fontType["h4"]}`}>Skill</p>
				<p className={`${fontType["p1"]}`}>{item.skill}</p>
				<div>
					<p className={`${fontType["h4"]}`}>Jurusan</p>
					<div className="flex gap-2 mt-4">
						<p className="w-max bg-success10 text-success90 py-1 px-2 rounded-full  h-max">
							Fakultas Ilmu Komputer
						</p>
						<p className="w-max bg-success10 text-success90 py-1 px-2 rounded-full  h-max">
							Fakultas Pertanian
						</p>
					</div>
				</div>
				<p className={`${fontType["h4"]}`}>Kegiatan Wajib Diikuti</p>
				<ul className={`${fontType["p1"]} text-neutral50 text-justify list-disc pl-5`}>
					<li>Sertifikasi</li>
					<li>Mengikuti Bootcamp</li>
					<li>Magang</li>
				</ul>
				<p className={`${fontType["link"]} text-center bg-primary50 py-3 text-white rounded-full cursor-pointer`}
					onClick={() => {
						setShowCvForm(true)
					}}>Daftar</ p>
			</div>
			{showCvForm && <UploadCV setShowCvForm={setShowCvForm} />}
		</div>
	)
}

export default UserDetailProgram