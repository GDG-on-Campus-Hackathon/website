"use client";

import HomeHero from "@/app/(home)/HomeHero/HomeHero";
import HomeIntroduction from "@/app/(home)/HomeIntroduction/HomeIntroduction";
import HomeInformation from "./HomeInformation/HomeInformation";
import HomeSignUp from "@/app/(home)/HomeSignUp/HomeSignUp";
import HomeSponsor from "@/app/(home)/HomeSponsor/HomeSponsor";
import ScrollSpy from "react-ui-scrollspy";
import HomeNotice from "@/app/(home)/HomeNotice/HomeNotice";
//import HomeNotice from "@/app/(home)/HomeNotice/HomeNotice";

export default function Home() {
  return (
    <div className="bg-[#EDEAE5]">
      <ScrollSpy activeClass="border-b-[5px]" scrollThrottle={100}>
        <HomeHero />
        <HomeIntroduction />
        <HomeInformation />
        <HomeSignUp />
        <HomeSponsor />
        <HomeNotice />
      </ScrollSpy>
    </div>
  );
}
