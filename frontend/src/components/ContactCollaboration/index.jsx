"use client";

import { useEffect, useState } from "react";
import {
  ArrowRight,
  EnvelopeSimpleOpen,
  Headset,
} from "@phosphor-icons/react/dist/ssr";

const ContactCollaboration = () => {
  const [settings, setSettings] = useState(null); // State untuk menyimpan data settings

  useEffect(() => {
    const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

    const fetchSettings = async () => {
      try {
        const response = await fetch(`${backendUrl}/api/settings`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        if (data.length > 0) {
          setSettings(data[0]); // Set data settings dari API response
        }
      } catch (error) {
        console.error("Error fetching settings:", error);
      }
    };

    fetchSettings();
  }, []);

  return (
    <>
      <section
        className="bg-color-primary text-color-bright px-20 pt-16 bg-custom2"
        id="contact"
      >
        <div className="container mx-auto grid md:grid-cols-2 gap-12">
          {/* Get in Touch Section */}
          <div>
            <h2 className="text-3xl font-semibold mb-6">Get in Touch</h2>
            {/* Tombol untuk menghubungi nomor WhatsApp */}
            {settings && (
              <div className="flex mt-8 relative group">
                <button
                  onClick={() =>
                    window.open(`https://wa.me/${settings.phone}`, "_blank")
                  }
                  className="inline-flex items-center py-3 pl-6 mb-2 text-color-primary text-lg font-bold bg-color-bright rounded-lg transition-all duration-300 ease-in-out group-hover:px-8 hover:bg-color-secondary"
                >
                  <Headset
                    size={28}
                    color="#164875"
                    className="mr-2 transition-transform duration-300 group-hover:scale-100"
                  />
                  <span className="inline-block">{settings.phone}</span>

                  <span className="inline-block opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100 transform group-hover:translate-x-2">
                    <ArrowRight size={20} color="#164875" />
                  </span>
                </button>
              </div>
            )}

            {/* Tombol untuk mengirim email */}
            {settings && (
              <div className="flex mb-8 relative group">
                <button
                  onClick={() =>
                    window.open(
                      `https://mail.google.com/mail/?view=cm&fs=1&to=${settings.email}`,
                      "_blank"
                    )
                  }
                  className="inline-flex items-center py-3 pl-6 mb-2 text-color-primary text-lg font-bold bg-color-bright rounded-lg transition-all duration-300 ease-in-out group-hover:px-8 hover:bg-color-secondary"
                >
                  <EnvelopeSimpleOpen
                    size={28}
                    color="#164875"
                    className="mr-2 transition-transform duration-300 group-hover:scale-100"
                  />
                  <span className="inline-block">{settings.email}</span>

                  <span className="inline-block opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100 transform group-hover:translate-x-2 ml-2">
                    <ArrowRight
                      className="opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                      size={20}
                      color="#164875"
                    />
                  </span>
                </button>
              </div>
            )}

            <div className="mb-2">
              <p className="text-color-primary text-sm font-bold bg-color-bright rounded-lg p-3 inline-block">
                Yogyakarta Office
              </p>
            </div>
            <p className="text-sm">
              Ruko DTA (Down Town Area) Square, <br />
              Jl. Seturan Raya No. 9, Kledokan, Caturtunggal, Kec. Depok, <br />
              Kabupaten Sleman, Daerah Istimewa Yogyakarta 55281
            </p>

            {/* Icon Sosial Media */}
            {settings && (
              <div className="flex mt-28 space-x-4">
                {/* Link ke Facebook */}
                <a
                  href={settings.facebook}
                  className="rounded"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/images/footer/fb.png"
                    alt="Facebook"
                    className="w-12 h-12"
                  />
                </a>
                {/* Link ke Instagram */}
                <a
                  href={settings.instagram}
                  className="rounded"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/images/footer/ig.png"
                    alt="Instagram"
                    className="w-12 h-12"
                  />
                </a>
                {/* Link ke LinkedIn */}
                <a
                  href={settings.linkedln}
                  className=" rounded"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/images/footer/in.png"
                    alt="LinkedIn"
                    className="w-12 h-12"
                  />
                </a>
                {/* Link ke WhatsApp */}
                <a
                  href={`https://wa.me/${settings.phone}`}
                  className="rounded"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/images/footer/wa.png"
                    alt="WhatsApp"
                    className="w-12 h-12"
                  />
                </a>
              </div>
            )}

            <div className="mt-8">
              <p>
                Copyright ©{" "}
                {settings ? settings.year : new Date().getFullYear()} All rights
                reserved. PT.
              </p>
            </div>
          </div>

          {/* Let's Collaborate Section */}
          <div>
            <h2 className="text-3xl font-semibold">Let's Collaborate with Us</h2>
            <p className="my-4 text-sm">
              Every great work is started from a nice conversation and a cup of
              coffee. Share your business goals with us, and let us be part of the
              solution because we are Oemah Solution. Feel free to meet us in our
              office.
            </p>
            <button className="px-4 py-3 my-6 bg-color-secondary text-color-primary font-medium rounded-lg flex items-center justify-between">
              <a
                href="https://www.google.com/maps/place/OEMAH+SOLUTION+INDONESIA/@-7.7742798,110.406656,17z/data=!3m1!4b1!4m6!3m5!1s0x2e7a59f21acfe64b:0x18afbcc417b9f332!8m2!3d-7.7742851!4d110.4092309!16s%2Fg%2F11jsqp6gh5?hl=en&entry=ttu&g_ep=EgoyMDI0MTAwMS4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
              >
                Show Map
              </a>
              <ArrowRight
                size={20}
                color="#164875" className="ml-4"
              />
            </button>
            <div className="mt-6">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31521.48285755745!2d110.40923006310287!3d-7.7742771533738315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a7c2b45c191b9%3A0x87d420d0cb5c0e12!2sLocation!5e0!3m2!1sen!2sid!4v1633619696315"
                width={500}
                height={250}
                className="rounded-lg"
              ></iframe>
            </div>
            {/* Footer */}
            <footer className="mt-8 text-center text-sm">
              <div className="flex justify-center space-x-4">
                <a href="#" className="text-color-bright p-2">
                  Career
                </a>
                <a
                  href="#"
                  className="text-color-bright bg-red-700 p-2 rounded-lg"
                >
                  We’re Hiring!
                </a>
                <a href="#" className="text-color-bright p-2">
                  Privacy Policy
                </a>
                <a href="#" className="text-color-bright p-2">
                  Terms and Conditions
                </a>
              </div>
            </footer>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactCollaboration;
