"use client";
import WavingText from "@/components/WavingText";
import { motion } from "motion/react";
import Image from "next/image";

export const Hero = () => {
  return (
    <section className=" w-full h-full mt-6 ">
      <div className="relative flex flex-row items-center justify-center gap-15">
        <div className=" mt-20 lg:ml-20 mx-4">
          <div className=" lg:relative lg:items-start flex flex-col items-center w-full gap-5 ">
            <div className=" text-center flex flex-col gap-2 items-center lg:text-left lg:items-start">
              <h1 className="font-bold text-4xl lg:max-w-[520px]">
                <WavingText
                  text={"Transform the Speech in your video into Text."}
                  delay={0.1}
                  duration={0.2}
                  className="pb-1"
                />
              </h1>
              <motion.p
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.5,
                  ease: "easeInOut",
                  delay: 1.8,
                }}
                className="font-light text-[#667085] font-poppins ml-1 "
              >
                Upload or paste a video link to get started with transcription.
              </motion.p>
            </div>
            <div className="flex flex-row gap-5 font-poppins">
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 70,
                  damping: 10,
                  ease: "easeInOut",
                  duration: 0.6,
                  delay: 2,
                }}
              >
                <motion.button
                  whileHover={{
                    scale: 0.9,
                    transition: { duration: 0.2, ease: "easeInOut" },
                  }}
                  className="cursor-pointer px-7 py-3 rounded-md font-bold bg-violet-500 hover:brightness-110 shadow-md text-white shadow-gray-300"
                >
                  Free Trial
                </motion.button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 70,
                  damping: 10,
                  duration: 0.6,
                  ease: "easeInOut",
                  delay: 2.5,
                }}
              >
                <motion.button
                  whileHover={{
                    scale: 0.9,
                    transition: { duration: 0.2, ease: "easeInOut" },
                  }}
                  className="cursor-pointer px-7 py-3 rounded-md bg-transparent text-black/75 shadow-lg font-bold  hover:drop-shadow-lg hover:shadow-gray-300"
                >
                  Prices
                </motion.button>
              </motion.div>
            </div>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, x: 1000 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 1,
            ease: "easeInOut",
            delay: 0.5,
          }}
          className="border bg-[#EEF4FF] hidden lg:block shadow-md rounded-lg w-[375px] h-[285px] col-span-3 row-span-4 pt-4 mr-4"
        >
          <div className=" grid grid-cols-3 grid-rows-3 items-center -space-y-2 h-full w-full">
            <motion.div
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                ease: "easeInOut",
                delay: 1.2,
              }}
              className="col-span-3 w-full flex justify-center"
            >
              <Image
                src="/assets/notebook-upload.png"
                alt=""
                width={120}
                height={120}
              />
            </motion.div>
            <div className="col-span-3 row-span-2 w-full flex justify-center gap-5 mb-6">
              <motion.div
                initial={{ opacity: 0, y: 150 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  ease: "easeInOut",
                  delay: 1.5,
                }}
                className="mt-10"
              >
                <Image src="/assets/chat.png" alt="" width={100} height={100} />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.5,
                  ease: "easeInOut",
                  delay: 1.8,
                }}
                className=" "
              >
                <Image
                  className=""
                  src="/assets/language.png"
                  alt=""
                  width={120}
                  height={120}
                />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1.5,
          ease: "easeInOut",
          delay: 3,
        }}
        className="absolute bottom-0 py-7 px-3 drop-shadow-xl  bg-gradient-to-tr from-violet-500/75 via-violet-600/75 to-violet-600/85  w-full h-[45%]"
      >
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.5,
            ease: "easeInOut",
            delay: 3.5,
          }}
          className="flex flex-col items-center gap-4"
        >
          <h1 className="text-4xl font-bold font-Poppins text-white">
            How it works
          </h1>
          <div className="w-full h-full flex justify-center items-center">
            <Image
              className="rounded-md w-[400px] lg:w-[500px]"
              src={"/assets/how-it-works.png"}
              alt=""
              width={500}
              height={500}
              priority
              quality={95}
            />
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 4.5,
              duration: 0.5,
              ease: "easeInOut",
            }}
            className="text-center"
          >
            <span className="text-lg lg:text-2xl text-green-500 font-roboto-mono font-semibold">
              It&apos;s simple and fast, give a test and considare subscribe if
              you like it!!
              <span className="text-3xl">🙇🏻‍♂️</span>
            </span>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};
