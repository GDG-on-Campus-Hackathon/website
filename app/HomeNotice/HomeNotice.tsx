import Article from "../components/Article";
import H1 from "../components/H1";
import { NoticeContent } from "../components/NoticeContent";

export default function HomeNotice() {
  return (
    <Article id="notice">
      <H1>注意事項</H1>
      <NoticeContent />
    </Article>
  );
}
