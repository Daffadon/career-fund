
import fotoDummy from "../../assets/Program/dummyFotoProfile.svg"

export const listRegistrar = [
    {
        foto: fotoDummy,
        nama: "Ahmad Bustomi1",
        alamat: "Malang,Indonesia",
        posisi: "Graphic Designer",
        status: "seleksi",
        scheduleTest: "besok",
        placeTest: "jambang",
        cv: "Ahmad Bustomi1 cv.pdf",
        semester: [
            {
                key: 1,
                nama: "Semester 1",
                biaya: "3000.000",
                prequisite: [
                    {
                        nama: "sertifikasi",
                        cv: "Ahmad Bustomi CV.pdf"
                    },
                    {
                        nama: "pelatihan",
                        cv: "Ahmad Bustomi CV.pdf"
                    },
                    {
                        nama: "Magang",
                        cv: "Ahmad Bustomi CV.pdf"
                    },

                ]
            },
            {
                key: 2,
                nama: "Semester 2",
                biaya: "2000.000",
                prequisite: [
                    {
                        nama: "sertifikasi",
                        cv: "Ahmad Bustomi CV.pdf"
                    },
                    {
                        nama: "pelatihan",
                        cv: "Ahmad Bustomi CV.pdf"
                    },
                    {
                        nama: "Magang",
                        cv: "Ahmad Bustomi CV.pdf"
                    },

                ]
            },
        ]
    }, {
        foto: fotoDummy,
        nama: "Ahmad Bustomi2",
        alamat: "Malang,Indonesia",
        posisi: "Graphic Designer",
        status: "seleksi",
        scheduleTest: "hari ini",
        placeTest: "disana",
        cv: "Ahmad Bustomi2 cv.pdf"
    }, {
        foto: fotoDummy,
        nama: "Ahmad Bustomi3",
        alamat: "Malang,Indonesia",
        posisi: "Graphic Designer",
        status: "seleksi",
        scheduleTest: "",
        placeTest: "",
        cv: "Ahmad Bustomi3 cv.pdf"
    }, {
        foto: fotoDummy,
        nama: "Ahmad Bustomi4",
        alamat: "Malang,Indonesia",
        posisi: "Graphic Designer",
        status: "seleksi",
        scheduleTest: "",
        placeTest: "",
    }, {
        foto: fotoDummy,
        nama: "Ahmad Bustomi5",
        alamat: "Malang,Indonesia",
        posisi: "Graphic Designer",
        status: "seleksi",
        scheduleTest: "",
        placeTest: "",
    },
]

export const liststatus = [
    "Seleksi", "Aktif", "Turu"
]