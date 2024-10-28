import ContactCollaboration from "@/components/ContactCollaboration";
import GallerySection from "@/components/GallerySection";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import ProfilOsi from "@/components/ProfilOsi";
import TeamSection from "@/components/TeamSection";
import TechStack from "@/components/TechStack";
import WeareHiring from "@/components/WeareHiring";

const Page = () => {
  return (
    <>
      <Navbar />
      <Header />
      <ProfilOsi />
      <TeamSection/>
      <GallerySection/>
      <TechStack/>
      <WeareHiring/>
      <ContactCollaboration/>
    </>
  );
};

export default Page;
