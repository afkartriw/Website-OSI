"use client";

import { useEffect, useState } from 'react'
import Image from 'next/image'
import axios from 'axios'

const CustomImageGrid = () => {
  const [images, setImages] = useState([])

  // Fetch data from the API using Axios
  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/galleries')  // Sesuaikan dengan API Anda
        const data = response.data
        
        if (data.length > 0) {
          const gallery = data[0]  // Ambil galeri pertama untuk ditampilkan
          setImages([
            gallery.image_activity1,
            gallery.image_activity2,
            gallery.image_activity3,
            gallery.image_activity4,
            gallery.image_activity5,
            gallery.image_activity6,
            gallery.image_activity7,
          ])
        }
      } catch (error) {
        console.error('Error fetching images:', error)
      }
    }

    fetchImages()
  }, [])

  return (
    <div className="grid grid-cols-3 grid-rows-3 gap-4 px-32">
      {images.length > 0 && (
        <>
          <div className="col-span-1 row-span-1 relative w-full h-72">
            <Image src={images[0]} alt="Image 1" layout="fill" objectFit="cover" />
          </div>
          <div className="col-span-2 row-span-1 relative w-full h-72">
            <Image src={images[1]} alt="Image 2" layout="fill" objectFit="cover" />
          </div>
          <div className="col-span-2 row-span-1 relative w-full h-72">
            <Image src={images[2]} alt="Image 3" layout="fill" objectFit="cover" />
          </div>
          <div className="col-span-1 row-span-1 relative w-full h-72">
            <Image src={images[3]} alt="Image 4" layout="fill" objectFit="cover" />
          </div>
          <div className="col-span-1 row-span-1 relative w-full h-36">
            <Image src={images[4]} alt="Image 5" layout="fill" objectFit="cover" />
          </div>
          <div className="col-span-1 row-span-1/2 relative w-full h-36">
            <Image src={images[5]} alt="Image 6" layout="fill" objectFit="cover" />
          </div>
          <div className="col-span-1 row-span-0,5 relative w-full h-36">
            <Image src={images[6]} alt="Image 7" layout="fill" objectFit="cover" />
          </div>
        </>
      )}
    </div>
  )
}

export default CustomImageGrid;
