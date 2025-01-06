import Image from "next/image";

const Iconbar = () => {
  return (
    <div className="w-24 flex py-5  items-center overflow-y-scroll  flex-col rounded-l-3xl bg-white">
      <div>
        <Image width={73} alt="logo" height={73} src="/logo.png" />
      </div>
      <div>
        <Image
          className="my-16"
          width={38}
          alt="logo"
          height={428}
          src="/tools.png"
        />
      </div>
      <div>
        <Image width={57} alt="logo" height={56} src="/support.png" />
      </div>
    </div>
  );
};

export default Iconbar;
