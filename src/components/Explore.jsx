// import React from "react";
import ExploreImg from "../assets/explore.svg";
import Button from "./Button";

export default function Explore() {
  return (
    <section className="min-h-[40vh] mt-16 p-5">
      <div className="flex flex-col gap-5 sm:gap-0 sm:flex-row max-w-screen-lg mx-auto items-center justify-center  text-center sm:text-left bg-[#F0EEFE] rounded-2xl p-8">
        <div className="flex-auto items-center justify-center">
          <img
            src={ExploreImg}
            alt=""
            className="mx-auto items-center justify-center"
          />
        </div>
        <div className="flex-auto items-center justify-center">
          <div className="flex flex-col pl-0 sm:pl-10">
            <h1 className="text-center sm:text-left font-semibold text-3xl text-title-color">
              Let&apos;s Jump In!
            </h1>
            <p className="mb-4 sm:mb-10 mt-2 text-center sm:text-left text-base text-subtitle-color">
              Explore the app and let us know <br /> your suggestions!
            </p>
            <div className="my-6 sm:my-0">
              <Button
                className=""
                name="Try Now"
                callback="/checker"
                size="lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
