/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { ICategories } from "@/interface/interface";
import Image from "next/image";
import React, { useEffect, useState } from "react";

type CategoriesProps = {
  handleClick: (cat_name_en: string) => void;
};
const Categories: React.FC<CategoriesProps> = ({ handleClick }) => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  async function fetchData(url: string) {
    try {
      const response = await fetch(url);
      const result = await response.json();
      setCategories(result.data);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }
  useEffect(() => {
    fetchData("https://dua-server-ruddy.vercel.app/api/categories");
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <div className="md:w-[370px] h-14 justify-center flex items-center text-white text-center rounded-t-xl bg-[#1FA45B]">
        <h2>Categories</h2>
      </div>
      <div className="flex gap-4 py-4 flex-col justify-center items-center bg-white">
        <div className="form-control">
          <label className="input-bordered input input-success  md:w-[350px] flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-6 cursor-pointer w-6 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd"
              />
            </svg>
            <input
              type="text"
              className="grow"
              placeholder="Search Categories"
            />
          </label>
        </div>
        <div className="overflow-y-auto flex  flex-col  gap-4 max-h-[54vh] ">
          {categories.map((category: ICategories) => (
            <div
              onClick={() => handleClick(category.cat_id.toString())}
              key={category.id}
            >
              <div className="flex group p-3 h-20 rounded-xl items-center hover:bg-[#EBEEF2] w-[350px] ">
                <div className="object-cover mr-3 group-hover:bg-white bg-[#EBEEF2] object-center flex justify-center items-center w-14 h-14 rounded-xl">
                  <Image src="/fever.png" alt="icon" width={40} height={40} />
                </div>
                <div className="-space-y-1">
                  <h2 className="text-md font-semibold leading-none">
                    {category.cat_name_en}
                  </h2>
                  <span className="inline-block text-sm leading-none dark:text-gray-600">
                    Subcategory: {category.no_of_subcat}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
