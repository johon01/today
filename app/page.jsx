import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className=" pt-10 relative overflow-hidden">
      <HeroComponent />
      <div className="flex justify-between">
        <Image
          src="/home_left_hero.svg"
          alt="Vercel Logo"
          className="-mt-48 -ml-48"
          width={600}
          height={1100}
        />
        <Image
          src="/home_right_hero.svg"
          alt="Vercel Logo"
          className="-mt-48 -mr-32"
          width={600}
          height={1100}
        />
      </div>
    </div>
  );
}

function HeroComponent() {
  return (
    <div className=" flex items-center flex-col justify-center">
      <h1 className="text-6xl font-bold text-indigo-600">
        Siz tegishli bo'lgan klan
      </h1>
      <p className="my-8 text-lg font-semibold text-slate-700 max-w-2xl text-center">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam harum
        eaque illum dolor id dignissimos perferendis eius quia eum quaerat.
      </p>
      <button className="bg-indigo-600 text-white px-6 py-2 rounded-full text-xl font-bold ">
        Tasvsiyangiz bormi?
      </button>
    </div>
  );
}
