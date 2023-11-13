import Button from "./Button";
import LeftHero from "../assets/left-hero.svg";
import RightHero from "../assets/right-hero.svg";

export default function Hero() {
  return (
    <section className="min-h-[90vh]">
      <div className="container max-w-screen-lg mx-auto items-center justify-center">
        <h1 className="text-center text-4xl font-semibold text-title-color pt-20 leading-normal">
          No more Worries <br /> with Confidential User&apos;s Data!
        </h1>
        <p className="text-center text-base text-detail-color mt-4">
          Check and protect confidential user data transactions <br />
          with easy to use yet powerful tools!
        </p>
        <div className="block text-center mt-10">
          <Button className="" name="Try Now" callback="/checker" size="lg" />
        </div>
        <div className="flex items-center mt-4">
          <div className="flex-auto">
            <img src={LeftHero} alt="" className="ml-4 mt-2" />
          </div>
          <div className="flex-auto content-end">
            <img src={RightHero} alt="" className="ml-auto mr-8" />
          </div>
        </div>
      </div>
    </section>
  );
}
