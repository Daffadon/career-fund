import Layout from "../components/Layout/Layout"
import { fontType } from "../components/Text/text"
import addIn from "../assets/About/addinfoto.svg"

const AboutUs = () => {
	return (
		<Layout>
			<div className="h-[75vh] flex flex-col justify-evenly">
				<div className="flex justify-center items-center ">
					<div className=" flex justify-around items-center">
						<p className={`${fontType["h1"]} w-3/12`}>Menumbuhkan Harapan, Memberi Kesempatan Untuk Masa Depan</p>
						<p className="w-4/12 text-neutral50">Memberikan solusi keuangan bagi generasi muda yang memiliki keinginan untuk meraih cita-cita dan melanjutkan pendidikan ke jenjang yang lebih tinggi. Kami memahami bahwa biaya pendidikan yang tinggi dapat menjadi hambatan bagi banyak orang untuk mencapai impian mereka, itulah mengapa kami hadir untuk memberikan pinjaman dana dengan syarat-syarat yang mudah</p>
					</div>
				</div>
				<div className="flex justify-center items-center">
					<div className="w-10/12 justify-center items-center h-[0.05em] bg-neutral50"></div>
				</div>
				<div className="flex justify-around center items-center">
					<div className="w-2/12">
						<p className={`${fontType["h5"]} text-neutral50 mb-5`}>Mahasiswa yang sudah terdaftar dan bergabung dengan CareerFund</p>
						<p className={`${fontType["h1"]} `}>12K+</p>
					</div>
					<div className="w-2/12">
						<p className={`${fontType["h5"]} text-neutral50 mb-5`}>Perusahaan telah bergabung menjadi mitra CareerFund</p>
						<p className={`${fontType["h1"]}`}>5K+</p>
					</div>
					<div className="w-2/12">
						<p className={`${fontType["h5"]} text-neutral50 mb-5`}>Mahasiswa maupun siswa yang sudah mengikuti program dari CareerFund  </p>
						<p className={`${fontType["h1"]}`}>12K+</p>
					</div>
				</div>
			</div>
			<img src={addIn} className="w-full" />
		</Layout>
	)
}

export default AboutUs