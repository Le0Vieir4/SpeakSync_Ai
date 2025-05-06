"use client"
import { createContext, useContext, useState } from "react";

// Create a interface for the context
interface TranscriptionContextType {
  transcription: string;
  setTranscription: (text: string) => void;
  fileName: string;
  setFileName: (name: string) => void;
}

// Create the context
// This context will be used to share the transcription state across the app
const TranscriptionContext = createContext<TranscriptionContextType | undefined >(undefined);

// Create a provider component
// This provider will be used to wrap the app and provide the transcription state
export function TranscriptionProvider({children}: {children: React.ReactNode}) {
  const [transcription, setTranscription] = useState<string>("");
  const [fileName, setFileName] = useState<string>("");
  
  return (
    <TranscriptionContext.Provider value={{ transcription, setTranscription, fileName, setFileName }}>
      {children}
    </TranscriptionContext.Provider>
  )
}
// Create a custom hook to use the context
// This hook will be used to access the transcription state from any component
export function useTranscription() {
  const context = useContext(TranscriptionContext)
  if (!context){
    throw new Error('useTranscription must be used within a TranscriptionProvider');
  }
  return context;
}
