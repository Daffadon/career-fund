import { useEffect, useState } from "react"
import { getLanding } from "../../api/api"
import Layout from "../../components/Layout/Layout"
import Loading from "../../components/Loading/Loading"
import Section1 from "../../container/LandingPage/Section1/Section1"
import Section2 from "../../container/LandingPage/Section2/Section2"
import Section3 from "../../container/LandingPage/Section3/Section3"
import Section4 from "../../container/LandingPage/Section4/Section4"
import Section5 from "../../container/LandingPage/Section5/Section5"
import Advertisement from "../../container/LandingPage/Section6/Advertisement"
import { imageList } from "../../container/LandingPage/Section2/image"
import { listCompany } from "../../container/LandingPage/Section4/listCompany"
import { comments } from "../../container/LandingPage/Section5/comment"
const LandingPage = () => {
    const [data, setData] = useState({
        partner: imageList,
        program: listCompany,
        comments: comments
    });
    // useEffect(() => {
    //     const getContent = async () => {
    //         try {
    //             const response = await getLanding();
    //             setData(response);
    //         } catch (error) {
    //         }
    //     }
    //     getContent()
    // }, [])
    return (
        <Layout>
            <Section1 />
            {/* < Section2 data={data.partner} /> */}
            {data ? < Section2 data={data.partner} /> : <Loading />}
            <Section3 />
            {/* < Section4 data={data.program} /> */}
            {data ? < Section4 data={data.program} /> : <Loading />}
            {/* < Section5 data={data.comments} /> */}
            {data ? < Section5 data={data.comments} /> : <Loading />}
            <Advertisement />
        </Layout>
    )
}

export default LandingPage