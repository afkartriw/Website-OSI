import ContactCollaboration from "@/components/ContactCollaboration"
import FactCard from "@/components/FactCard"
import Header from "@/components/Header"
import Navbar from "@/components/Navbar"
import WeareHiring from "@/components/WeareHiring"

const Page = () => {
  return (
    <>
      <Navbar />
      <Header />
      <FactCard />
      <WeareHiring/>
      {/* Contact and Collaboration Section */}
      <ContactCollaboration />
    </>
  )
}

export default Page
