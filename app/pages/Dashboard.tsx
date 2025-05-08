"use client";
import { VideoUploadForm } from "../components/VideoUploadForm";
import {
  Card,
  CardTitle,
  CardContent,
  CardDescription,
  CardHeader,
  CardFooter,
} from "@/components/ui/card";
import WavingText from "@/components/WavingText";
import { useTranscription } from "@/context/transcriptionContext";
import { motion, useInView } from "motion/react";
import Image from "next/image";
import { useRef } from "react";

export const Dashboard = () => {
  const { transcription } = useTranscription();
  const textRef = useRef(null);
  const isInView = useInView(textRef, { once: true });
  return (
    <motion.section
      animate={{ opacity: [0, 1], y: [-100, 0] }}
      transition={{ delay: 0.6, duration: 1, ease: "easeInOut" }}
      className="w-full h-full"
    >
      <Card className=" relative mx-2 mb-2 mt-14 h-full overflow-y-auto md:overflow-hidden">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <motion.div
              animate={{ opacity: [0, 1], x: [-20, 0] }}
              transition={{ duration: 1, ease: "easeInOut" }}
            >
              <Image
                src="/assets/video-posting.png"
                alt="video posting icon"
                width={28}
                height={28}
                className="w-fit"
              />
            </motion.div>
            <motion.div
              ref={textRef}
              animate={{ opacity: [0, 1] }}
              transition={{ delay: 1, duration: 1 }}
            >
              <WavingText
                className="text-2xl md:text-3xl font-bold"
                text="New Transcription"
                delay={0.15}
                duration={0.2}
                shouldAnimate={isInView}
              />
            </motion.div>
          </CardTitle>
          <CardDescription>
            <motion.p
              animate={{ opacity: [0, 1], x: [-50, 0] }}
              transition={{
                delay: 0.1,
                duration: 0.1,
                type: "spring",
                dumping: 10,
                stiffness: 10,
                ease: "easeInOut",
              }}
              className="text-sm md:text-lg text-gray-500 text-balanced"
            >
              Upload your video here and get the transcription.
            </motion.p>
          </CardDescription>
        <div className="relative left-1/2 -translate-x-1/2 w-[95%] h-[1px] mt-2 drop-shadow-lg drop-shadow-gray-400   rounded-md bg-black" />
        </CardHeader>
        <CardContent>
          <div className="px-2 py-3 w-full  md:grid gap-x-2 gap-y-5 grid-cols-6 grid-rows-1 ">
            <div className="border col-start-3  col-end-6 row-span-1 md:max-w-[500px]  flex items-center justify-center w-full h-full ">
              <motion.div
                animate={{ opacity: [0, 1], y: [-50, 0] }}
                transition={{
                  duration: 2,
                  delay: 0.3,
                  type: "spring",
                  dumping: 15,
                  stiffness: 20,
                  ease: "easeInOut",
                }}
                className="w-full px-3 border rounded-md border-black shadow-md shadow-gray-400 "
              >
                <VideoUploadForm />
              </motion.div>
            </div>
            {!transcription ? (
              ""
            ) : (
              <div className="px-2 py-3 max-h-[400px] col-span-3  hidden md:block border border-black shadow-md shadow-gray-400 rounded-md">
                <h1 className="font-bold text-green-500 font-poppins text-2xl text-start mb-2 ml-2">
                  Transcribe
                </h1>
                <div className="w-full max-h-[300px] px-2 overflow-y-auto">
                  <p className="text-balance text-lg text-shadow-sm font-noto-sans">
                    {transcription}
                  </p>
                </div>
              </div>
            )}

            {!transcription ? (
              ""
            ) : (
              <div className="px-2 py-3 max-h-[400px] col-span-3 hidden md:block border border-black shadow-md shadow-gray-400 rounded-md">
                <h1 className="font-bold text-blue-500 font-poppins text-2xl text-start mb-2 ml-2">
                  Translate
                </h1>
                <div className="w-full max-h-[300px] px-2 overflow-y-auto">
                  <p className="text-balance text-lg text-shadow-sm font-noto-sans">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Ullam sapiente natus dolore veniam incidunt. Fugiat
                    molestias distinctio tempore sequi, facilis ipsum provident
                    optio. Consectetur ducimus praesentium, suscipit quia vero
                    nemo?
                  </p>
                </div>
              </div>
            )}
          </div>
        </CardContent>
        <div className="relative left-1/2 -translate-x-1/2 w-[95%] h-[1px] mt-2 drop-shadow-lg drop-shadow-gray-400   rounded-md bg-black" />
        <CardFooter>
          <div className="flex flex-col gap-2 w-full h-full">
            <motion.span
              animate={{ opacity: [0, 1], y: [-50, 0] }}
              transition={{
                duration: 2,
                delay: 0.5,
                type: "spring",
                dumping: 15,
                stiffness: 20,
                ease: "easeInOut",
              }}
              className="text-xs text-red-500"
            >
              * This is the free plan, uploads are limited by minutes and the
              translations aren&apos;t saved in you account.
            </motion.span>
            <motion.span
              animate={{ opacity: [0, 1], y: [-50, 0] }}
              transition={{
                duration: 2,
                delay: 0.8,
                type: "spring",
                dumping: 15,
                stiffness: 20,
                ease: "easeInOut",
              }}
              className="text-sm text-balance text-green-500"
            >
              If you want upload videos without minutes restrinctions, or
              transcriptions get saved in your account.
            </motion.span>

            <motion.button
              whileInView={{ opacity: [0, 1], y: [-50, 0] }}
              variants={{
                initial: { scale: 1 },
                hover: { scale: 0.95 },
              }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              initial="initial"
              whileHover="hover"
              animate="initial"
              className="relative left-1/2 -translate-x-1/2 w-[75%]  overflow-hidden border border-green-500 rounded-sm mt-2 py-3  h-full hover:cursor-pointer hover:text-white transition duration-1000 "
            >
              <motion.div
                variants={{
                  initial: { width: "0%", left: "50%", x: "-50%" },
                  hover: { width: "100%", left: "50%", x: "-50%" },
                }}
                transition={{ delay: 0.2, duration: 0.5, ease: "easeInOut" }}
                className="absolute top-0 h-full bg-gradient-to-r from-green-300 to-green-400 z-0"
              />
              <span className="relative  z-10 text-sm uppercase font-poppins font-bold">
                try our plans
              </span>
            </motion.button>
          </div>
        </CardFooter>
      </Card>
    </motion.section>
  );
};
