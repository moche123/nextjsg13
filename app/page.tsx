import setupimage from "@/public/setup.jpg";
import Image from "next/image";
import { imageBlur } from "./utils/blur-data";
import Banner from "@/components/Banner";
import { Suspense } from "react";
import Loading from "@/components/Loading";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
      <h1>Hello NextJs</h1>

      <Image
        src="https://jashtechperu.com.pe/wp-content/uploads/2023/10/setup-gamer-pc-gaming.jpg"
        alt="Setup Image"
        blurDataURL={imageBlur}
        width={960}
        height={640}
        placeholder="blur"
      />
      <Suspense fallback={<Loading />}>
        <Banner id={1} />
      </Suspense>
    </main>
  );
}
