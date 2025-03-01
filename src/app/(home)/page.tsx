import HomeHero from "@/app/(home)/HomeHero/HomeHero";
import HomeIntroduction from "@/app/(home)/HomeIntroduction/HomeIntroduction";
import HomeSignUp from "@/app/(home)/HomeSignUp/HomeSignUp";
import HomeSponsor from "@/app/(home)/HomeSponsor/HomeSponsor ";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <HomeHero />
      <HomeIntroduction />
      <HomeSignUp />
      <HomeSponsor />
    </div>
  );
}
