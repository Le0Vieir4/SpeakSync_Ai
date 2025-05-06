import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { ViewButton } from "@/components/ui/ViewButton";
import {
  TranscriptionProvider,
  useTranscription,
} from "@/context/transcriptionContext";
import { motion } from "motion/react";

export const Transcriptions = () => {
  const { transcription, fileName } = useTranscription();

  return (
    <TranscriptionProvider>
      {transcription && (
        <AlertDialog>
          <AlertDialogTrigger asChild className="relative w-full ">
            <motion.div
              animate={{ opacity: [0, 1], scale: [0.8, 1] }}
              transition={{ delay: 0.8, duration: 0.5, ease: "easeInOut" }}
              className="w-full"
            >
            <button className="w-full">
              <ViewButton />
            </button>
            </motion.div>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>
                <span className="text-sm md:text-lg">{fileName}</span>
              </AlertDialogTitle>
            </AlertDialogHeader>
            <div className="flex flex-col w-full h-full">
              <h1 className="text-md font-bold ml-4">Your Transcription</h1>
              <p className="text-sm text-gray-500 ml-4">
                Transcription will be displayed here once the video is
                processed.
              </p>
              <div className="overflow-y-auto max-h-[400px] mt-2">
                  <p className="text-sm text-gray-700 ml-4">{transcription}</p>
              </div>
            </div>
            <AlertDialogFooter>
              <AlertDialogCancel className="bg-red-500 text-white hover:bg-red-600">
                exit
              </AlertDialogCancel>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      )}
    </TranscriptionProvider>
  );
};
