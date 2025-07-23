import { winnerSectionProps } from "./winnerSectionProps";
import Image from "next/image";

export default function WinnerSectionCard(winner: winnerSectionProps) {
  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="mb-6">
        <h2 className="text-xl md:text-2xl font-semibold text-gray-800">
          {winner.route} ｜ 第{winner.groupNumber}組
        </h2>
      </div>

      <div className="flex flex-col lg:flex-row lg:items-stretch lg:space-x-12">
        <div className="w-full lg:w-1/3 flex justify-center lg:justify-start mb-8 lg:mb-0">
          <Image
            src={winner.img}
            alt="Solarlytics Logo"
            width={300}
            height={100}
          />
        </div>

        <div className="w-full lg:w-2/3 flex flex-col justify-between">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            {winner.title}
          </h3>

          <div className="mb-8 flex-grow">
            <p className="text-lg font-semibold text-gray-700 mb-2">
              / 專案簡介 /
            </p>
            <p className="text-base text-gray-600 leading-relaxed">
              {winner.content}
            </p>
          </div>

          <div>
            <p className="text-lg font-semibold text-gray-700 mb-2">
              / 專案成員 /
            </p>
            <p className="text-lg font-semibold text-gray-700 mb-2">
              {winner.groupMember}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
