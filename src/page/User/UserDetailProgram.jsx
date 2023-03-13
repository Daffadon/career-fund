import { fontType } from "../../components/Text/text"
import { useParams } from "react-router-dom"
import { listCompany } from "../../container/LandingPage/Section4/listCompany"
import { useState } from "react"
import UploadCV from "../../components/PopUp/UploadCV"


const UserDetailProgram = () => {
	const name = useParams().name
	const [showCvForm, setShowCvForm] = useState(false)
	const item = listCompany[0]
	return (
		<div className="flex justify-center items-center min-h-screen">
			<div key={item.name} className="bg-white w-10/12 lg:w-7/12 xl:w-5/12 rounded-3xl px-7 py-9 flex flex-col gap-6 shadow-[5px_5px_10px_rgba(0,0,0,0.05)] ">
				<div className="flex 1 ">
					<img src={item.logo} />
					<p className={`${fontType["h1"]} ml-5`}>{item.name}</p>
				</div>
				<div className="flex flex-col justify-between gap-3">
					<div>
						<p className={`${fontType["h4"]}`}>{item.job}</p>
						<p className={`${fontType["p1"]} text-neutral30`}>{item.loc}</p>
					</div>
					<div className="flex gap-8">
						<div>
							<p className={`${fontType["h4"]}`}>Pendidikan Terakhir</p>
							<div className="flex gap-2 mt-4">
								{item.tag.map((tag) => {
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
									SMK
								</p>
							</div>
						</div>
					</div>
				</div>
				<p className={`${fontType["h4"]}`}>Deskripsi</p>
				<p className={`${fontType["p1"]} text-neutral50 text-justify`}>Kami mencari Desainer Grafis untuk bergabung dengan tim kami yang terus berkembang. Kandidat yang ideal akan memiliki keterampilan kreatif yang kuat dan portofolio pekerjaan yang menunjukkan hasrat mereka terhadap desain dan pembuatan konten.</p>
				<p className={`${fontType["h4"]}`}>Skill</p>
				<ul className={`${fontType["p1"]} text-neutral50 text-justify list-disc pl-5`}>
					<li>Bekerja sama dengan tim Media Sosial untuk memahami metrik kinerja dan pertumbuhan</li>
					<li>Bekerja sama dengan tim Media Sosial untuk memahami metrik kinerja dan pertumbuhan</li>
					<li>Bekerja sama dengan tim Media Sosial untuk memahami metrik kinerja dan pertumbuhan</li>
				</ul>
				<div>
					<p className={`${fontType["h4"]}`}>Jurusan</p>
					<div className="flex gap-2 mt-4">
						<p className="w-max bg-success10 text-success90 py-1 px-2 rounded-full  h-max">
							Fakultas Ilmu Komputer
						</p>
						<p className="w-max bg-success10 text-success90 py-1 px-2 rounded-full  h-max">
							Fakultas Pertanian
						</p>
						{/* {item.tag.map((tag) => {
							return (
								<p key={tag} className="w-max bg-warning10 text-warning90 py-1 px-5 rounded-full  h-max">
									{tag}
								</p>
							);
						})} */}
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
			{showCvForm && <UploadCV setShowCvForm={setShowCvForm}/>}
		</div>
	)
}

export default UserDetailProgram