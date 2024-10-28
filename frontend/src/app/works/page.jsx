import Header from "@/components/Header"
import Navbar from "@/components/Navbar"
// import FilterButtons from "@/components/FilterButtons"
import ProjectCard from "@/components/ProjectCard"
import ContactCollaboration from "@/components/ContactCollaboration"
import WeareHiring from "@/components/WeareHiring"

const Page = () => {
  return (
    <>
      <Navbar />
      <Header />
      {/* <FilterButtons /> */}
      <ProjectCard/>
      <WeareHiring/>
      <ContactCollaboration/>
    </>
  )
}

export default Page
