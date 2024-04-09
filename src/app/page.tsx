import Image from "next/image";
import { Reveal } from "./components/reveal";

export default function Home() {
  return (
    <>
      <Reveal>
        <section
          className="flex lg:flex-row flex-col items-center space-y-4 p-8 py-24 lg:mx-12"
          id="Sobre"
        >
          <div className="flex-1 items-center">
            <Image
              className="rounded-[20%] w-[270px] md:w-[270px] m-auto flex hover:shadow-sky-600 shadow-[10px_-2px_10px_0px] shadow-zinc-800 transition-all duration-1000 "
              src="/Blessed_logo.jpeg"
              alt="blessed logo"
              width={250}
              height={100}
            />
          </div>
          <div className="flex-1 text-left space-y-4">
            <h1 className="font-bold text-2xl text-black">
              Sobre Nós
            </h1>
            <p className="font-medium">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi
              harum tenetur nesciunt cupiditate porro sed assumenda iste odio,
              soluta quas odit unde, voluptas rerum sapiente alias reprehenderit
              commodi fugiat impedit?
            </p>
          </div>
        </section>
      </Reveal>
    </>
  );
}
