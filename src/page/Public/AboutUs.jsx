import Layout from "../../components/Layout/Layout"
import { fontType } from "../../components/Text/text"
import addIn from "../../assets/About/addinfoto.svg"
import { useEffect, useState } from "react"
import { getAbout } from "../../api/api"
import Loading from "../../components/Loading/Loading"

const AboutUs = () => {
	const [data, setData] = useState(null)
	useEffect(() => {
		const getAboutContent = async () => {
			const response = await getAbout()
			setData(response)
		}
		getAboutContent()
	}, [])
	return (
		<Layout>
			<div className="flex flex-col justify-evenly my-[10em]">
				<div className="flex justify-center items-center mb-[5em]">
					<div className=" flex flex-col md:flex-row justify-around items-center gap-10 mb-[2em] md:gap-0">
						<p className={`${fontType["h2"]} w-10/12 md:w-4/12 lg:w-3/12 text-center md:text-left`}>Menumbuhkan Harapan, Memberi Kesempatan Untuk Masa Depan</p>
						<p className="w-10/12 lg:w-4/12 md:w-4/12 text-neutral50 text-center md:text-left">Memberikan solusi keuangan bagi generasi muda yang memiliki keinginan untuk meraih cita-cita dan melanjutkan pendidikan ke jenjang yang lebih tinggi. Kami memahami bahwa biaya pendidikan yang tinggi dapat menjadi hambatan bagi banyak orang untuk mencapai impian mereka, itulah mengapa kami hadir untuk memberikan pinjaman dana dengan syarat-syarat yang mudah</p>
					</div>
				</div>
				<div className="flex justify-center items-center">
					<div className="w-10/12 justify-center items-center h-[0.05em] bg-neutral50"></div>
				</div>
				<div className="flex justify-around items-end h-[25vh] md:h-[20vh]">
					<div className="w-3/12 md:w-2/12">
						<p className={`${fontType["h5"]} text-neutral50 mb-5`}>Mahasiswa yang sudah terdaftar dan bergabung dengan CareerFund</p>
						{data ?
							<p className={`${fontType["h1"]} `}>{data.usercount}</p>
							:
							<Loading />}
					</div>
					<div className="w-3/12 md:w-2/12">
						<p className={`${fontType["h5"]} text-neutral50 mb-5`}>Perusahaan telah bergabung menjadi mitra CareerFund</p>
						{data ?
							<p className={`${fontType["h1"]} `}>{data.usercount}</p>
							:
							<Loading />}</div>
					<div className="w-3/12 md:w-2/12">
						<p className={`${fontType["h5"]} text-neutral50 mb-5`}>Mahasiswa maupun siswa yang sudah mengikuti program dari CareerFund  </p>
						{data ?
							<p className={`${fontType["h1"]} `}>{data.usercount}</p>
							:
							<Loading />}</div>
				</div>
			</div>
			<img src={addIn} className="w-full" />
		</Layout>
	)
}

export default AboutUs