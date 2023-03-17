import Section1 from "../../container/LandingPage/Section1/Section1"
import Section2 from "../../container/LandingPage/Section2/Section2"
import Section3 from "../../container/LandingPage/Section3/Section3"
import Section4 from "../../container/LandingPage/Section4/Section4"
import Section5 from "../../container/LandingPage/Section5/Section5"
import Layout from "../../components/Layout/Layout"
import { getUser } from "../../api/api"
import { useEffect,useContext } from "react"
import { userContext } from "../../context/AuthContext"

const Home = () => {
    const {setUser} = useContext(userContext)
    useEffect(()=>{
        const getUserProfile = async()=>{
            try {
                const response = await getUser()
                setUser(response)
            } catch (error) {
                console.log(error)
            }
        }
        getUserProfile()
    },[])
    return (
        <Layout>
            <Section1/>
            <Section2/>
            <Section3/>
            <Section4/>
            <Section5/>
        </Layout>
    )
}

export default Home