import HomeHero from "@/app/(home)/HomeHero/HomeHero";
import HomeIntroduction from "@/app/(home)/HomeIntroduction/HomeIntroduction";
import HomeSignUp from "@/app/(home)/HomeSignUp/HomeSignUp";
import HomeSponsor from "@/app/(home)/HomeSponsor/HomeSponsor";

export default function Home() {
  return (
    <div className="bg-[#EDEAE5]">
      <HomeHero />
      <HomeIntroduction />
      <HomeSignUp />
      <HomeSponsor />
    </div>
  );
}
