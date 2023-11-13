// import React from 'react'
import ReviewImg from "../assets/review.svg";

export default function ContactUs() {
  return (
    <section className="min-h-[90vh]">
      <div className="h-16" id="contact-us"></div>
      <div className="max-w-screen-lg mx-auto items-center justify-center px-8 sm:px-10 text-center sm:text-left">
        <h1 className="text-center font-semibold text-3xl text-title-color pt-5">
          Share your thoughts
        </h1>
        <div className="flex flex-col sm:flex-row mt-10">
          <div className="desc w-full sm:w-2/5 pl-0 sm:pl-10 items-center justify-center">
            <h2 className="text-lg font-semibold text-subtitle-color">
              Help our apps better through your review
            </h2>
            <p className="text-base text-detail-color ">
              Dont like forms? send an{" "}
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=ikhsanadi300@gmail.com"
                className="underline hover:text-[#F33C36]"
                rel="noreferrer"
                target="_blank"
              >
                email
              </a>
            </p>
            <img src={ReviewImg} alt="" className="m-auto mt-10" />
          </div>
          <div className="form w-full sm:w-3/5 pl-0 sm:pl-10 mt-10 sm:mt-0">
            <form
              method="POST"
              // action="https://getform.io/f/8b4a998c-3766-464c-90f4-c42fe9263083"
            >
              <input
                name="name"
                type="text"
                className="shadow appearance-none border rounded-2xl w-full py-4 px-6 mb-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Insert your name"
                required
              />
              <input
                name="email"
                type="text"
                className="shadow appearance-none border rounded-2xl w-full py-4 px-6 mb-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Insert your name"
                required
              />
              <textarea
                name="content"
                cols="10"
                rows="10"
                className="shadow appearance-none border rounded-2xl w-full py-6 px-6 mb-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Write your messages"
                required
              ></textarea>
              <button
                className="text-white bg-gradient-to-t from-[#8778FF]  hover:bg-gradient-to-t hover:from-[#5f80e4] hover:to-[#b1c0ff] hover:drop-shadow-[0px_10px_10px_rgba(177,192,255,0.25)] to-[#A799FC] focus:ring-4 focus:ring-blue-300 
        font-medium rounded-lg  focus:outline-none  text-sm px-10 py-3"
              >
                Send
              </button>
              {/* <Button className="" name='send' size='sm'></Button> */}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
