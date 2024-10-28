import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr"; 
import Image from "next/image"; 

const WeareHiring = () => { 
  return ( 
    <section className="relative h-[500px] bg-color-dark text-color-accent flex items-center justify-center"> 
      <div className="absolute inset-0 opacity-70"> 
        {/* Background image */} 
        <Image 
          src="/images/weare.png" // replace with actual image path 
          alt="Hiring Background" 
          layout="fill" 
          objectFit="cover" 
          priority 
        /> 
      </div> 
      <div className="relative text-center text-color-bright"> 
        <h1 className="text-5xl font-bold">WE ARE HIRING!</h1> 
        <p className="mt-4 text-xl"> 
          We invite the best talents to collaborate with us in challenging projects from all around the world. 
        </p> 
        <div className="mt-6 flex justify-center"> {/* Flex container for centering the button */}
          <button className="text-color-bright font-medium px-6 py-3 rounded-full border-2 border-color-bright flex items-center"> 
            <a href="/careers" className="flex items-center"> 
              Explore Careers 
              <ArrowUpRight size={20} className="ml-2" /> 
            </a> 
          </button> 
        </div>
      </div> 
    </section> 
  ); 
}; 

export default WeareHiring;
