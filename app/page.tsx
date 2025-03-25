"use client";

import HomeHero from "./HomeHero/HomeHero";
import HomeIntroduction from "./HomeIntroduction/HomeIntroduction";
import HomeInformation from "./HomeInformation/HomeInformation";
import HomeSignUp from "./HomeSignUp/HomeSignUp";
import HomeSponsor from "./HomeSponsor/HomeSponsor";
import HomeNotice from "./HomeNotice/HomeNotice";
import ScrollSpy from "react-ui-scrollspy";

export default function Home() {
  return (
    <ScrollSpy scrollThrottle={100}>
      <HomeHero />
      <HomeIntroduction />
      <HomeInformation />
      <HomeSignUp />
      <HomeSponsor />
      <HomeNotice />
    </ScrollSpy>
  );
}
