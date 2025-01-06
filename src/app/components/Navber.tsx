import Image from "next/image";

const Navber = () => {
  return (
    <div className="navbar  pt-0 ml-3">
      <div className="flex-1">
        <a className="btn btn-ghost text-2xl">Dua Page</a>
      </div>
      <div className="flex-none gap-2">
        <div className="form-control">
          <label className="input input-bordered input-success w-80 flex items-center gap-2">
            <input
              type="text"
              className="grow"
              placeholder="Search by Dua Name"
            />
            <div className="bg-[#EBEEF2] cursor-pointer w-12 h-10 flex justify-center items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-6 w-6 opacity-70"
              >
                <path
                  fillRule="evenodd"
                  d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </label>
        </div>
        <div className="dropdown mr-5 ml-24 dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-12 rounded-full">
              <Image
                width={45}
                height={45}
                alt="Tailwind CSS Navbar component"
                src="/profile.png"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>

        <div className="drawer  drawer-end">
          <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">
            {/* Page content here */}
            <label htmlFor="my-drawer-4" className="drawer-button">
              <Image src="/setting.png" width={30} height={30} alt="setting" />
            </label>
          </div>
          <div className="drawer-side ">
            <label
              htmlFor="my-drawer-4"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <ul className="menu rounded-l-3xl space-y-5 bg-white text-base-content min-h-full w-80 p-6">
              {/* Sidebar content here */}

              <h2 className="my-5 text-xl text-center font-semibold">
                Settings
              </h2>

              <div className="flex gap-2 bg-base-200 p-3 h-12 rounded-md items-center">
                <div className="w-9 h-9 bg-[#E8F0F5] rounded-full flex items-center justify-center">
                  <Image src="/1.png" width={24} height={24} alt="icon" />
                </div>
                <p>Language Settings</p>
              </div>
              <div className="flex gap-2 bg-base-200 p-3 h-12 rounded-md items-center">
                <div className="w-9 h-9 bg-[#E8F0F5] rounded-full flex items-center justify-center">
                  <Image src="/2.png" width={24} height={24} alt="icon" />
                </div>
                <p>General Settings</p>
              </div>
              <div className="flex gap-2 bg-base-200 p-3 h-12 rounded-md items-center">
                <div className="w-9 h-9 bg-[#E8F0F5] rounded-full flex items-center justify-center">
                  <Image src="/3.png" width={24} height={24} alt="icon" />
                </div>{" "}
                <p>Font Settings</p>
              </div>
              <div className="flex gap-2 bg-base-200 p-3 h-12 rounded-md items-center">
                <div className="w-9 h-9 bg-[#E8F0F5] rounded-full flex items-center justify-center">
                  <Image src="/3.png" width={24} height={24} alt="icon" />
                </div>
                <p>Appearance Settings</p>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navber;
