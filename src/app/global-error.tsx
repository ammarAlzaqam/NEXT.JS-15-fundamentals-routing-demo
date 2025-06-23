"use client";
import "./global.css";

export default function GlobalError() {
  return (
    <html>
      <body>
        <div className="flex flex-col gap-3 justify-center items-center min-h-screen">
          <h1 className="font-bold text-2xl">Something went wrong!</h1>
          <button
            onClick={() => window.location.reload()}
            className="py-2 px-3 bg-blue-500 hover:bg-blue-700 text-white rounded-sm  "
          >
            Refresh
          </button>
        </div>
      </body>
    </html>
  );
}
