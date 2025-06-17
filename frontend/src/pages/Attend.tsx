export default function Attend() {
  return (
    <div className="relative flex justify-center bg-[#0A0A0A] min-h-screen min-w-screen overflow-hidden">
      <div className="absolute inset-0 bg-[repeating-linear-gradient(0deg,transparent,transparent_19px,#222_20px),repeating-linear-gradient(90deg,transparent,transparent_19px,#222_20px)] " />
      <div className="relative flex flex-col gap-5 justify-center items-center min-h-screen min-w-screen">
        <div className="relative">
          <video
            src=""
            className="w-[900px] h-[600px] bg-white/40 rounded-xl"
          ></video>
          <video
            src=""
            className="absolute right-4 bottom-4 w-[180px] h-[100px] bg-white rounded-xl"
          ></video>
        </div>
        <div className="bg-gray-500 w-full h-[80px]">
          <button className="rounded-full bg-red-500 w-[60px] h-[60px]">
            hang up
          </button>
          <button className="rounded-full bg-blue-600 w-[120px] h-[30px]">
            share screen
          </button>
        </div>
      </div>
    </div>
  );
}
