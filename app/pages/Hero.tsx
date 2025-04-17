import { Button } from "@/components/ui/button";
import Image from "next/image";

export const Hero = () => {
  return (
    <section className="w-full h-full mt-6 px-20">
      <div className="relative flex flex-row gap-15">
        <div className="mt-20 ml-20">
          <div className="absolute lg:relative lg:items-start flex flex-col items-center w-full gap-5 ">
            <div className="text-center flex flex-col gap-2 items-center lg:text-left lg:items-start">
              <h1 className="font-bold text-4xl max-w-[500px] ">
                Transform the <span className="text-green-400">Speech</span> from your <span className="text-red-500">Video</span> into <span className="text-blue-500">Text</span>
              </h1>
              <p className="font-light text-[#667085] font-poppins ml-1 ">
                Upload or paste a video link to get started with transcription.
              </p>
            </div>
            <div className="flex flex-row gap-5 font-poppins">
              <Button className="w-[150px] h-[50px] font-bold bg-violet-500 shadow-md shadow-gray-300">Free Trial</Button>
              <Button className="w-[150px] h-[50px] bg-transparent text-black shadow-lg font-bold">Prices</Button>
            </div>

          </div>

        </div>
        <div className="border bg-[#EEF4FF] hidden lg:block shadow-md rounded-lg w-[375px] h-[285px] col-span-3 row-span-4 pt-4">
          <div className=" grid grid-cols-3 grid-rows-3 items-center -space-y-2 h-full w-full">
            <div className="col-span-3 w-full flex justify-center">
              <Image
                src="/assets/notebook-upload.png"
                alt=""
                width={120}
                height={120}
              />
            </div>
            <div className="col-span-3 row-span-2 w-full flex justify-center gap-5 mb-6">
              <div className="mt-10">
                <Image src="/assets/chat.png" alt="" width={100} height={100} />
              </div>
              <div className=" ">
                <Image
                  className=""
                  src="/assets/language.png"
                  alt=""
                  width={120}
                  height={120}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
