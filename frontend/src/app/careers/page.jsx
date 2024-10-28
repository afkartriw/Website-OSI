import Carousel from "@/components/Carousel"
import ContactCollaboration from "@/components/ContactCollaboration"
import Header from "@/components/Header"
import Navbar from "@/components/Navbar"
import VideoSection from "@/components/VideoSection"
import WhyOSI from "@/components/WhyOSI"


const Page = () => {

  return (
    <>
    <Navbar/>
    <Header/>
    <Carousel />
    <WhyOSI/>
    <VideoSection/>
    <ContactCollaboration/>
    </>
  )
}

export default Page