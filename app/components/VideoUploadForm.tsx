'use client'
import { useState } from "react";

export const ViedeoUpload = () => {
  const [file, setFile] = useState<File | null>(null);
  const [transcription, setTranscription] = useState("");

  const handleSubmit = async () => {
    if (!file) return;
    const formData = new FormData();
    formData.append("file", file);

    const res = await fetch("http://localhost:8000/transcribe", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();
    setTranscription(data.transcription);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Whispra - Transcrever Vídeo</h1>
      <input type="file" accept="video/*" onChange={(e) => setFile(e.target.files?.[0] || null)} />
      <button onClick={handleSubmit} className="mt-4 bg-blue-600 text-white px-4 py-2 rounded">
        Enviar
      </button>
      <pre className="mt-6 whitespace-pre-wrap">{transcription}</pre>
    </div>
  );
}
