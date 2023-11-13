// import React from "react";
import ExploreImg from "../assets/explore.svg";
import Button from "./Button";

export default function Explore() {
  return (
    <section className="min-h-[40vh] mt-16">
      <div className="flex max-w-screen-lg mx-auto items-center justify-center bg-[#F0EEFE] rounded-2xl p-8">
        <div className="flex-1 items-center justify-center">
          <img src={ExploreImg} alt="" className="mx-auto items-center justify-center"/>
        </div>
        <div className="flex-1 items-center justify-center">
          <div className="flex flex-col pl-10">
            <h1 className="text-left font-semibold text-3xl text-title-color">Let&apos;s Jump In!</h1>
            <p className="mb-10 mt-2 text-left text-base text-subtitle-color">
              Explore the app and let us know <br /> your suggestions!
            </p>
            <Button className="" name="Try Now" callback="/checker" size="lg" />
          </div>
        </div>
      </div>
    </section>
  );
}
