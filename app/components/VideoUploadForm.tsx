"use client";
import { Input } from "@/components/ui/input";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { useTranscription } from "@/context/transcriptionContext";
import { useRef, useState } from "react";
import { Transcriptions } from "./Transcriptions";
import { UploadButton } from "@/components/ui/uploadButton";
import { motion } from "motion/react";

export const VideoUploadForm = () => {
  const [file, setFile] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const { transcription, setTranscription, fileName, setFileName } =
    useTranscription();
  const inputRef = useRef<HTMLInputElement>(null);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0] || null;
    setFile(selectedFile);
    if (selectedFile) {
      setFileName(selectedFile.name);
      if (progress == 100) {
        setFileName("");
      }
    }
  };

  const handleSubmit = async () => {
    if (!file) return;

    setIsLoading(true);
    const formData = new FormData();
    formData.append("file", file);

    try {
      const fakeProgress = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 90) {
            clearInterval(fakeProgress);
            return 90;
          }
          return prev + 10;
        });
      }, 300);

      const res = await fetch("http://localhost:8000/transcribe", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      setTranscription(data.transcription);
      setFile(data.file);
      localStorage.setItem("fileName", setFile.name);
      clearInterval(fakeProgress);
      setProgress(100);
    } catch (error) {
      console.error("Error uploading file:", error);
    } finally {
      setTimeout(() => {
        setIsLoading(false);
        setProgress(0);
        if (inputRef.current) {
          inputRef.current.value = "";
        }
      }, 500);
    }
  };

  return (
    <div className="w-full h-full py-20 px-10 md:py-10">
      <form onSubmit={(e) => e.preventDefault()}>
        <motion.div
          animate={{ opacity: [0, 1], y: [-10, 0] }}
          transition={{
            delay: 1,
            duration: 2,
            ease: "easeInOut",
            type: "spring",
          }}
          className="w-full h-full flex flex-col gap-3"
        >
          <div className="w-[90%] flex flex-row items-center justify-center gap-2">
            {isLoading && <ProgressBar progress={progress} />}
          </div>

          {!isLoading ? (
            <div className="flex flex-col items-start justify-start">
              <label htmlFor="video">
                <span className="text-md md:text-lg font-poppins-mono font-bold text-pretty ">
                  Select you video:
                </span>
              </label>
              <Input
                ref={inputRef}
                className="my-2 w-full hover:cursor-pointer "
                id="video"
                type="file"
                accept="video/*"
                onChange={handleChange}
              />
            </div>
          ) : (
            <motion.div
              animate={{ opacity: [0, 1], y: [-10, 0] }}
              transition={{ duration: 1.5, ease: "easeInOut", type: "spring" }}
              className="text-green-400 text-sm"
            >
              Uploading...
            </motion.div>
          )}
          {transcription && (
            <div className="flex flex-col items-start mb-2">
              <motion.span
                animate={{ opacity: [0, 1], y: [-10, 0] }}
                transition={{
                  delay: 1.5,
                  duration: 1.5,
                  ease: "easeInOut",
                  type: "spring",
                }}
                className="text-green-400 text-sm"
              >
                Actual Transcription:
              </motion.span>
              <motion.p
                animate={{ opacity: [0, 1], y: [-10, 0] }}
                transition={{
                  delay: 1,
                  duration: 1.5,
                  ease: "easeInOut",
                  type: "spring",
                }}
                className="ml-2 font-extralight text-xs"
              >
                {fileName}
              </motion.p>
            </div>
          )}

          <motion.div
            animate={{ opacity: [0, 1] }}
            transition={{ delay: 1 }}
            className="sm:px-10 px-7 flex justify-center items-center gap-2"
          >
            {isLoading ? "" : <UploadButton onClick={handleSubmit} />}

            <div className="w-full md:hidden "><Transcriptions /></div>
          </motion.div>
        </motion.div>
      </form>
    </div>
  );
};
