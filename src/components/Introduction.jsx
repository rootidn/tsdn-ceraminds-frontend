// import React from 'react'
import AppIntro from "../assets/app-intro.svg";

export default function Introduction() {
  return (
    <section className="min-h-[90vh]">
      <div className="h-16"  id="introduction"></div>
      <div className="max-w-screen-lg mx-auto items-center justify-center">
        <h1 className="text-center font-semibold text-3xl text-title-color pt-10">
          How Our App Works?
        </h1>
        <p className="text-center text-base text-subtitle-color mt-4">
          Learn how to use our app and how it works
        </p>
        <div className="flex flex-col-reverse sm:flex-row items-center mt-10">
          <div className="w-full p-10 sm:w-3/5">
            <div className="relative pb-4 pl-[1.125rem] before:content-[''] before:w-[1px] before:h-[100%] before:absolute before:left-0 before:top-1.5 before:bg-[#B6B5C0]">
              <span className="h-4 w-4 bg-primary-color rounded-[50%] inline-block absolute left-[-0.5rem] top-1.5 px-[0.2375rem] py-0"></span>
              <h3 className="text-xl text-subtitle-color">Upload</h3>
              <p className="text-base text-detail-color mt-1">
                User upload their image to a form in your websites
              </p>
            </div>
            <div className="relative pb-4 pl-[1.125rem] before:content-[''] before:w-[1px] before:h-[100%] before:absolute before:left-0 before:top-1.5 before:bg-[#B6B5C0]">
              <span className="h-4 w-4 bg-primary-color rounded-[50%] inline-block absolute left-[-0.5rem] top-1.5 px-[0.2375rem] py-0"></span>
              <h3 className="text-xl text-subtitle-color">Analyze Text</h3>
              <p className="text-base text-detail-color mt-1">
                Our app will check what text contain in the image
              </p>
            </div>
            <div className="relative pb-4 pl-[1.125rem] before:content-[''] before:w-[1px] before:h-[100%] before:absolute before:left-0 before:top-1.5 before:bg-[#B6B5C0]">
              <span className="h-4 w-4 bg-primary-color rounded-[50%] inline-block absolute left-[-0.5rem] top-1.5 px-[0.2375rem] py-0"></span>
              <h3 className="text-xl text-subtitle-color">
                Analyze Important Data
              </h3>
              <p className="text-base text-detail-color mt-1">
                And then the app categorize whether the text is contain
                confidential data or not
              </p>
            </div>
            <div className="relative pb-4 pl-[1.125rem]">
              <span className="h-4 w-4 bg-primary-color rounded-[50%] inline-block absolute left-[-0.5rem] top-1.5 px-[0.2375rem] py-0"></span>
              <h3 className="text-xl text-subtitle-color">Warnings</h3>
              <p className="text-base text-detail-color mt-1">
                We inform the user if image is contain confidential data and
                give them another options
              </p>
            </div>
          </div>
          <div className="w-full p-0 sm:p-5 sm:w-2/5 content-center items-center">
            <img src={AppIntro} alt="" className="m-auto" />
          </div>
        </div>
      </div>
    </section>
  );
}
