import LoginForm from "@/components/LoginForm";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { motion } from "motion/react";
import Image from "next/image";
export function Login() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <motion.button
          whileHover={{
            scale: 0.9,
            transition: { duration: 0.2, ease: "easeInOut" },
          }}
          className="border rounded-md bg-green-500 text-white/95 px-2 py-2 sm:px-5 sm:py-2 lg:px-8 lg:py-3 cursor-pointer hover:brightness-110"
        >
          Sing In
        </motion.button>
      </DialogTrigger>
      <DialogContent className=" min-h-[75%] sm:max-w-[425px] pb-4 ">
        <DialogHeader className="flex flex-col items-center ">
          <DialogTitle className=" flex flex-row text-green-500 justify-center first-letter:text-xl  text-lg font-roboto-mono font-semibold">
            <Image
              className="w-[24px] h-[24px]"
              src={"/assets/logo.svg"}
              alt=""
              width={32}
              height={32}
              priority
              quality={75}
            />
            <span className="mt-1">
              SpeakSync_
              <span className="text-violet-500">AI</span>
            </span>
          </DialogTitle>
          <DialogDescription className="font-poppins text-md font-normal text-center">
            Make login to acess you account and save yours
            <span className="text-sky-600 font-roboto-mono text-sm font-semibold">
              Transcriptions
            </span>
          </DialogDescription>
        </DialogHeader>
        <div className="w-full flex flex-col">
          <ul className=" px-4 w-full flex flex-col gap-2 ">
            <li className="hover:scale-95 transition-all duration-300 ease-in-out hover:cursor-pointer hover:brightness-125 flex flex-row gap-2 justify-center items-center  shadow-sm bg-gray-950/10 shadow-gray-400  border w-full border-black rounded-md py-2 px-2 ">
              <Image src={"/assets/google.svg"} alt="" width={24} height={24} />
              <span className="">Google</span>
            </li>
            <li className="hover:scale-95 transition-all duration-300 ease-in-out hover:cursor-pointer hover:brightness-125 flex flex-row gap-2 justify-center items-center  shadow-sm bg-red-500/95 text-white shadow-gray-400  border border-black w-full rounded-md py-2 px-2 ">
              <Image src={"/assets/mail.svg"} alt="" width={24} height={24} />
              <span className="">Email</span>
            </li>
            <li className="hover:scale-95 transition-all duration-300 ease-in-out hover:cursor-pointer hover:brightness-125 flex flex-row gap-2 justify-center items-center  shadow-sm bg-slate-900/85 text-white shadow-gray-400  border border-black w-full rounded-md py-2 px-2">
              <Image src={"/assets/github.svg"} alt="" width={24} height={24} />
              <span className=" ">Github</span>
            </li>
            <li className="hover:scale-95 transition-all duration-300 ease-in-out hover:cursor-pointer hover:brightness-125 flex flex-row gap-2 justify-center items-center  shadow-sm bg-slate-950 text-white shadow-gray-400  border border-black w-full rounded-md py-2 px-2">
              <Image src={"/assets/x.svg"} alt="" width={28} height={28} />
              <span className=" ">Twitter</span>
            </li>
          </ul>
          <div className="flex flex-col w-full items-center mt-3">
            <div className=" w-full h-[1px] drop-shadow-lg drop-shadow-gray-500 rounded-md bg-black" />
            <span className="text-md text-red-400 font-bold"> OR </span>
          </div>
          <LoginForm />
        </div>
      </DialogContent>
    </Dialog>
  );
}
