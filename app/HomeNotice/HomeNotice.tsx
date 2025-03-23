import Article from "../components/Article";
import H1 from "../components/H1";
import P from "../components/P";

function ListItem({ children }: { children: React.ReactNode }) {
  return <li className="text-left text-xs mb-6 pl-1">{children}</li>;
}

export default function HomeNotice() {
  return (
    <Article id="notice">
      <H1>注意事項</H1>

      <P>
        參賽者請務必詳閱以下競賽注意事項，違反規定可能影響比賽資格及獎勵發放。
      </P>

      <ol className="list-decimal list-outside ml-6">
        <ListItem>
          參賽者僅能加入一個隊伍，不得重複報名，若經發現重複報名，主辦單位將取消其參賽資格。
        </ListItem>
        <ListItem>
          所有報名資料須如實填寫，若查有不實，主辦單位得隨時取消該隊伍的參賽資格。
        </ListItem>
        <ListItem>
          獎項由評審委員決定，若無符合標準之隊伍，評審得以「從缺」方式處理，或視情況調整名額，但總獎金金額不變。
        </ListItem>
        <ListItem>
          若隊伍違反規定、技術審查不符、或未符合 Google
          生態技術應用標準，則可能被取消入圍或獎項資格，並回收獎座與獎金。
        </ListItem>
        <ListItem>
          主辦單位有權於本活動及相關推廣活動中，公開展示所有參賽作品，參賽者不得異議。
        </ListItem>
        <ListItem>
          入圍作品若涉及仿冒、抄襲、或違反競賽規範，經查證屬實者，將追回資格與獎勵，並由參賽者自行承擔法律責任，主辦單位不負任何法律責任。
        </ListItem>
        <ListItem>
          違反競賽規定者，可能導致扣分、取消參賽資格、撤銷入圍或得獎資格，並追回已領取之獎座、獎金，且主辦單位保留移除相關作品於競賽官方網站的權利。
        </ListItem>
        <ListItem>
          主辦單位保留修改本辦法之權利，如有變更將公告於官方平台，參賽者一旦參加競賽，即表示同意遵守本辦法之所有條款。
        </ListItem>
        <ListItem>
          如有未盡事宜，主辦單位保留競賽辦法解釋與變更之權利。
        </ListItem>
      </ol>
    </Article>
  );
}
