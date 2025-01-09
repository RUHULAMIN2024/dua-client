/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import Image from "next/image";
import Categories from "./components/Categories";
import { useEffect, useState } from "react";
import { IDuas } from "@/interface/interface";

const Home = () => {
  const [duas, setDuas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  async function fetchData(url: string) {
    try {
      const response = await fetch(url);
      const result = await response.json();
      setDuas(result.data);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }
  useEffect(() => {
    fetchData("https://dua-server-ruddy.vercel.app/api/duas");
  }, []);

  const handleClick = (cat_name_en: string) => {
    fetchData(
      `https://dua-server-ruddy.vercel.app/api/duas?filter=${cat_name_en}`
    );
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="flex-col flex md:flex-row gap-8 md:ml-8 mt-3">
      <div className=" lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          {/* Page content here */}
          <label
            htmlFor="my-drawer-2"
            className="btn btn-success drawer-button w-full lg:hidden"
          >
            Categories
          </label>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>

          {/* Sidebar content here */}
          <Categories handleClick={handleClick}></Categories>
        </div>
      </div>
      <div className="flex-1 md:h-[80vh] overflow-y-auto">
        <div className="w-full rounded-xl p-4 bg-white">
          <h2>
            <span className="text-success">Section: </span> How the Prophet (ﷺ)
            and his Companions made duas
          </h2>
        </div>
        <div className="mt-4 flex flex-col gap-5">
          {duas.map((dua: IDuas) => (
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
                <p>{dua.top_en}</p>
              </div>
              <div>
                <p>{dua.dua_arabic}</p>
              </div>

              <div>
                {dua.transliteration_en && (
                  <p>Transliteration: {dua.transliteration_en}</p>
                )}
              </div>

              <div>
                {dua.translation_en && <p>Translation: {dua.translation_en}</p>}
              </div>

              <div>
                <h2 className="text-success">Refference:</h2>
                <p>{dua.refference_en}</p>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  {dua.audio && (
                    <Image
                      alt="audio"
                      width={44}
                      height={44}
                      src="/audio.png"
                    />
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
    </div>
  );
};

export default Home;
