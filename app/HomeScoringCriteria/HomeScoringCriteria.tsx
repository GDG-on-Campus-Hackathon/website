import Article from "../components/Article";
import H1 from "../components/H1";
import semiFinal from "./assets/semi-final.svg";
import mobileSemiFinal from "./assets/mobile-semi-final.svg";
import final from "./assets/final.svg";
import mobileFinal from "./assets/mobile-final.svg";
import ToggleBar from "./ToggleBar";

export default function HomeScoringCriteria() {
  return (
    <Article id="home-scoring-criteria">
      <H1>評分標準</H1>

      <ToggleBar
        title="複賽評分標準"
        image={semiFinal}
        mobileImage={mobileSemiFinal}
      />

      <ToggleBar title="決賽評分標準" image={final} mobileImage={mobileFinal} />
    </Article>
  );
}
