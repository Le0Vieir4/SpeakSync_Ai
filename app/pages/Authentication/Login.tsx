import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
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
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Login in your account</DialogTitle>
          <DialogDescription className="text-left">
            Make Login to your accout here.
          </DialogDescription>
        </DialogHeader>
        <div >
          <ul className=" w-full h-full flex flex-col justify-center items-center gap-2">
            <li className="hover:cursor-pointer hover:brightness-125 flex flex-row gap-2 justify-center items-center  shadow-sm bg-gray-950/10 shadow-gray-400  border w-full border-black rounded-md py-2 px-2 ">
              <Image src={"/assets/google.svg"} alt="" width={24} height={24}/>
              <span className="">Google</span>
            </li>
            <li className="hover:cursor-pointer hover:brightness-125 flex flex-row gap-2 justify-center items-center  shadow-sm bg-red-500/95 text-white shadow-gray-400  border border-black w-full rounded-md py-2 px-2 ">
              <Image src={"/assets/mail.svg"} alt="" width={24} height={24}/>
              <span className="">Email</span>
            </li>
            <li className="hover:cursor-pointer hover:brightness-125 flex flex-row gap-2 justify-center items-center  shadow-sm bg-slate-900/85 text-white shadow-gray-400  border border-black w-full rounded-md py-2 px-2">
              <Image src={"/assets/github.svg"} alt="" width={24} height={24}/>
              <span className=" ">Github</span>
            </li>
            <li className="hover:cursor-pointer hover:brightness-125 flex flex-row gap-2 justify-center items-center  shadow-sm bg-slate-950 text-white shadow-gray-400  border border-black w-full rounded-md py-2 px-2">
              <Image src={"/assets/x.svg"} alt="" width={28} height={28}/>
              <span className=" ">Twitter</span>
            </li>
          </ul>
        </div>
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
