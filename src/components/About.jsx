// import React from 'react'

import Avatar1 from "../assets/ava1.svg";
import Avatar2 from "../assets/ava2.svg";
import Avatar3 from "../assets/ava3.svg";
import Avatar4 from "../assets/ava4.svg";
import Avatar5 from "../assets/ava5.svg";

export default function About() {
  return (
    <section className="min-h-[90vh]">
      <div className="h-16"  id="about"></div>
      <div className="max-w-screen-lg mx-auto items-center justify-center">
        <h1 className="text-center font-semibold text-3xl text-title-color pt-10">
          Meet Our Team
        </h1>
        <div className="flex flex-col px-10 mt-16">
          <div className="flex flex-row">
            <div className="flex-1 items-center justify-center text-center">
              <img src={Avatar1} alt="" className="mx-auto" />
              <p className="mt-4 text-base font-medium text-subtitle-color">M. Destamal Junas</p>
            </div>
            <div className="flex-1"></div>

            <div className="flex-1 items-center justify-center text-center">
              <img src={Avatar2} alt="" className="mx-auto" />
              <p className="mt-4 text-base font-medium text-subtitle-color">Wilda Nurjannah</p>
            </div>
            <div className="flex-1"></div>

            <div className="flex-1 items-center justify-center text-center">
              <img src={Avatar3} alt="" className="mx-auto" />
              <p className="mt-4 text-base font-medium text-subtitle-color">Ikhsan Adi Putra</p>
            </div>
          </div>
          <div className="flex flex-row mt-10">
            <div className="flex-1"></div>
            <div className="flex-1 items-center justify-center text-center">
              <img src={Avatar4} alt="" className="mx-auto" />
              <p className="mt-4 text-base font-medium text-subtitle-color">Naufaldi Hafidhigral</p>
            </div>
            <div className="flex-1"></div>
            <div className="flex-1 items-center justify-center text-center">
              <img src={Avatar5} alt="" className="mx-auto" />
              <p className="mt-4 text-base font-medium text-subtitle-color">M. Hudzaifah Assyahid</p>
            </div>
            <div className="flex-1"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
