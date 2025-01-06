import { getduas } from "@/api/api";
import Image from "next/image";

export default async function Home() {
  const duas = await getduas();

  return (
    <div className="flex-1 h-[80vh] overflow-y-auto">
      <div className="w-full rounded-xl p-4 bg-white">
        <h2>
          <span className="text-success">Section: </span> How the Prophet (ﷺ)
          and his Companions made duas
        </h2>
      </div>
      <div className="mt-4 flex flex-col gap-5">
        {duas.map((dua) => (
          <div
            key={dua._id}
            className="w-full rounded-xl flex flex-col gap-7 p-5 text-justify font-semibold bg-white"
          >
            <div className="flex gap-3 text-success text-md items-center">
              <Image width={40} height={40} alt="icon" src="/allah.png" />
              <h2>
                {dua.dua_id}. {dua.dua_name_en}
              </h2>
            </div>
            <div>
              <p>{dua.transliteration_en}</p>
            </div>
            <div>
              <h2 className="text-success">Refference:</h2>
              <p>{dua.refference_en}</p>
            </div>
            <div className="flex justify-between items-center">
              <div>
                {dua.audio && (
                  <Image alt="audio" width={44} height={44} src="/audio.png" />
                )}
              </div>

              <div>
                <Image alt="icon" width={276} height={24} src="/icon.png" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
