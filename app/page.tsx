"use client";

import { useEffect } from "react";
import ScrollSpy from "react-ui-scrollspy";
import HomeHero from "./HomeHero/HomeHero";
import HomeIntroduction from "./HomeIntroduction/HomeIntroduction";
import HomeInformation from "./HomeInformation/HomeInformation";
import HomeSignUp from "./HomeSignUp/HomeSignUp";
import HomeSponsor from "./HomeSponsor/HomeSponsor";
import HomeNotice from "./HomeNotice/HomeNotice";
import HomeScoringCriteria from "./HomeScoringCriteria/HomeScoringCriteria";
import HomeEventHighlights from "./HomeEventHighlights/HomeEventHighlights";
import HomeWinnerCarousel from "./HomeWinnerCarousel/HomeWinnerCarousel";

export default function Home() {
  // Smooth scrolling for anchor links
  useEffect(() => {
    const anchors = document.querySelectorAll('a[href^="#"]');
    const handleClick = function (this: HTMLAnchorElement, e: Event) {
      e.preventDefault();

      const href = this.getAttribute("href");
      if (!href) return;

      const element = document.querySelector<HTMLElement>(href);
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
        });
      }
    };

    anchors.forEach((anchor) => {
      anchor.addEventListener("click", handleClick);
    });

    return () => {
      anchors.forEach((anchor) => {
        anchor.removeEventListener("click", handleClick);
      });
    };
  }, []);

  return (
    <ScrollSpy scrollThrottle={100}>
      <HomeHero />
      <HomeIntroduction />
      <HomeInformation />
      <HomeScoringCriteria />
      <HomeSignUp />
      <HomeEventHighlights />
      <HomeWinnerCarousel />
      <HomeSponsor />
      <HomeNotice />
    </ScrollSpy>
  );
}
