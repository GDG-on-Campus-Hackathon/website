import type { winnerSectionProps } from "./winnerSectionProps";
import H2 from "../../components/H2";
import P from "../../components/P";

export default function WinnerSectionCard(winner: winnerSectionProps) {
  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-800">
          {winner.route} ｜ 第{winner.groupNumber}組
        </h2>
      </div>

      <div className="flex flex-col">
        <div className="w-full flex flex-col justify-between">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            {winner.title}
          </h3>

          <div className="mb-8 flex-grow">
            <H2 className="text-lg font-semibold text-gray-700 mb-2">
              專案簡介
            </H2>
            <P>{winner.content}</P>
          </div>

          <div>
            <H2 className="text-lg font-semibold text-gray-700 mb-2">
              專案成員
            </H2>
            <P className="text-lg font-semibold text-gray-700 mb-2">
              {winner.groupMember}
            </P>
          </div>
        </div>
      </div>
    </div>
  );
}
