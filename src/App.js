import React from "react";

function App() {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="max-w-sm rounded overflow-hidden shadow-lg p-4">
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">
            {" "}
            Safety Critical Systems{" "}
          </div>
          <div className="font-bold text-xl mb-2"> Corona Statista App </div>
          <p className="text-gray-700 text-base">Susheel</p>
          <p className="text-gray-700 text-base">Rakshita</p>
          <p className="text-gray-700 text-base">Nischay</p>
          <p className="text-gray-700 text-base">Shilpa</p>
          <p className="text-gray-700 text-base">Rony</p>
        </div>
        <div className="px-6 py-4">
          {["SCS", "Corona", "Stats", "Info"].map((tag) => (
            <span
              key={tag}
              className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mt-2"
            >
              {"#" + tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
