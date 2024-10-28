import React from "react";

const WhyOSI = () => {
  return (
    <section className="bg-blue-100 py-16 px-32">
        <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-2 gap-6">
          <div className="col-span-1 row-span-2">
            <h2 className="text-4xl font-bold text-color-primary mb-2">Why OSI?</h2>
            <p className="text-color-primary mb-10 text-xl">
              Incididunt ut labore et dolore magna aliqua. ad minim veniam,
              quis.
            </p>
          </div>

          <div class="bg-white p-6">
            <div class="flex items-center space-x-4">
              <div class="bg-gray-300 h-12 w-12"></div>
              <div>
                <h2 class="text-base font-bold text-color-primary">
                  Deep Industry Experience
                </h2>
              </div>
            </div>
            <div class="ml-14">
              <p class="mt-4 text-color-primary text-xs">
                We tailor solutions to your specific needs, leveraging deep
                industry knowledge to address your sector's unique challenges.
              </p>
            </div>
          </div>

          <div class="bg-white p-6  ">
            <div class="flex items-center space-x-4">
              <div class="bg-gray-300 h-12 w-12 "></div>
              <div>
                <h2 class="text-base font-bold text-color-primary">
                  Rapid Value Creation
                </h2>
              </div>
            </div>
            <div class="ml-14">
              <p class="mt-4 text-color-primary text-xs">
                We leverage agile methods and efficient development to deliver
                solutions quickly, driving faster return on investment.
              </p>
            </div>
          </div>

          <div class="bg-white p-6  ">
            <div class="flex items-center space-x-4">
              <div class="bg-gray-300 h-12 w-12 "></div>
              <div>
                <h2 class="text-base font-bold text-color-primary">
                  Consulting Expertise
                </h2>
              </div>
            </div>
            <div class="ml-14">
              <p class="mt-4 text-color-primary text-xs">
                We don’t just develop solutions, we consult with you to
                understand your unique challenges and business goals.
              </p>
            </div>
          </div>

          <div class="bg-white p-6">
            <div class="flex items-center space-x-4">
              <div class="bg-gray-300 h-12 w-12 "></div>
              <div>
                <h2 class="text-base font-bold text-color-primary">
                  End-to-End Support
                </h2>
              </div>
            </div>
            <div class="ml-14">
              <p class="mt-4 text-color-primary text-xs">
                We provide comprehensive support throughout the entire project
                lifecycle, from ideation to implementation and ongoing
                maintenance.
              </p>
            </div>
          </div>
        </div>
    </section>
  );
};

export default WhyOSI;
