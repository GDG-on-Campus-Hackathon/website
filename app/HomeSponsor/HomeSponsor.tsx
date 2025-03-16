import Image from "next/image";
import image_nccu from "./assets/gdg_on_campus_nccu.svg";
import image_nthu from "./assets/gdg_on_campus_nthu.svg";

export default function HomeSponsor() {
  return (
    <div
      className="text-center pt-20 md:px-10 max-w-[1440px] mx-auto"
      id="home-sponso"
    >
      <h1 className="text-5xl text-title text-center md:text-left md:px-10">
        贊助單位
      </h1>
      <div className="py-2 px-4 md:px-6 lg:px-8 text-left leading-10">
        <div className="pt-10">
          <h2 className="text-title text-left">/主辦單位/</h2>
          <div className="justify-center items-center pt-10 flex flex-col md:flex-row">
            <Image
              src={image_nccu.src}
              alt={"GDG on Campus NCCU"}
              width={360}
              height={60}
            />
            <Image
              src={image_nthu.src}
              alt={"GDG on Campus NTHU"}
              width={360}
              height={60}
            />
            <Image
              src={image_nthu.src}
              alt={"GDG on Campus NTUST"}
              width={360}
              height={60}
            />
          </div>
        </div>
        <div className="pt-10">
          <h2 className="text-title text-left">/協辦單位/</h2>
          <div>
            <p className="text-[18px] leading-[44px] py-10">
              全台 GDG On Campus（共23間學校）
            </p>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
}
