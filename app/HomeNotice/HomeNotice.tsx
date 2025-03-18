import H1 from "../components/H1";

function ListItem({ children }: { children: React.ReactNode }) {
  return <li className="text-left text-xs mb-6 pl-1">{children}</li>;
}

export default function HomeNotice() {
  return (
    <article id="notice" className="max-w-3xl mx-auto p-8">
      <H1>注意事項</H1>

      <ol className="list-decimal list-outside ml-6">
        <ListItem>
          主辦單位得於本活動及其他相關活動中，公開展示所有參賽作品。
        </ListItem>
        <ListItem>
          參賽團隊成員資料若查有不實者，主辦單位可隨時取消其競賽資格。參賽團隊成員經提報後若有變更，須送交書面資料經主辦單位審查同意。
        </ListItem>
        <ListItem>
          入圍作品如有仿冒抄襲或違反本競賽相關規定等，經查證屬實者，將追回資格與獎勵，並由參賽者自負法律責任，主辦單位不負任何法律責任。
        </ListItem>
        <ListItem>
          違反相關規範者，可能導致扣分、取消參賽資格、入圍或得獎資格，並追回其已領取之獎座、獎金及自活動網頁移除其作品。
        </ListItem>
        <ListItem>
          主辦單位保留修改本辦法之權利，參加活動者一旦參加本活動，則表示同意接受本辦法之拘束，如有未盡事宜，主辦單位保留各項競賽辦法解釋及變更之權利。
        </ListItem>
      </ol>
    </article>
  );
}
