"use client";
import { useState, CSSProperties } from "react";
import myLoveVideo from "./assets/myLove.mp4";

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const [noButtonPosition, setNoButtonPosition] = useState<CSSProperties>({});

  const handleNoClick = () => {
    setNoCount(noCount + 1);
    const x = Math.random() * (window.innerWidth - 100);
    const y = Math.random() * (window.innerHeight - 50);
    setNoButtonPosition({
      position: "absolute",
      left: `${x}px`,
      top: `${y}px`,
      transition: "all 0.5s ease",
    });
  };

  const phrases = [
    "No",
    "Are you sure?",
    "Yes bolo, nahole tumi pochaa",
    "Pretty please",
    "tumi emn koroo knn",
    "swarnaaa",
    "PLEASE POOKIE",
    "ufff :*(",
    "I am going to die",
    "Yep im dead",
    "Mairr dboo kintuuu :(((( ",
    "oi swarnaaa naa please",
    "tumi etto nisthur kivabe hote paro :((",
    "Allah tumk Pap Dibe",
    "ektu tw valobashoo amk  :(",
    "Ami kintu sotti sotti e more jabo :(",
  ];

  const getNoButtonText = () => {
    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    <div className="-mt-16 flex h-screen flex-col items-center justify-center">
      {yesPressed ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
          <video
            src={myLoveVideo}
            autoPlay
            controls
            className="h-full w-full object-contain"
          />
        </div>
      ) : (
        <>
          <img
            className="h-[200px]"
            src="https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.gif"
          />
          <h1 className="my-4 text-4xl">Swarnaa Will you be my Valentine?</h1>
          <div className="flex items-center">
            <button
              className={`mr-4 rounded bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-700`}
              style={{ fontSize: 16 }}
              onClick={() => setYesPressed(true)}
            >
              Yes
            </button>
            {noCount >= phrases.length ? (
              <button
                className="rounded bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-700"
                onClick={() => setYesPressed(true)}
              >
                Yes
              </button>
            ) : (
              <button
                onClick={handleNoClick}
                className="rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-700"
                style={noButtonPosition}
              >
                {noCount === 0 ? "No" : getNoButtonText()}
              </button>
            )}
          </div>
        </>
      )}
    </div>
  );
}
