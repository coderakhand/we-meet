export default function Create() {
  return (
    <div className="relative bg-[#0A0A0A] min-h-screen min-w-screen overflow-hidden">
      <div className="absolute inset-0 bg-[repeating-linear-gradient(0deg,transparent,transparent_19px,#222_20px),repeating-linear-gradient(90deg,transparent,transparent_19px,#222_20px)] " />

      <div className="relative flex justify-center items-center min-w-screen min-h-screen">
        <div className="relative grid grid-cols-2 w-[900px] bg-gradient-to-r from-[#FF1D56] via-[#8657A6] to-[#0096FE] h-[550px] rounded-2xl">
          <div className="pl-10 text-white text-xl font-semibold flex flex-col justify-center gap-10 rounded-l-2xl">
            <div className="text-4xl">Create Meeting </div>
            <div className="flex flex-col gap-5 justify-center items-start">
              <button className="mt-[35px] mx-[30px] bg-white w-[150px] h-[45px] text-black text-2xl rounded-full">
                + Create
              </button>
            </div>
          </div>
          <img
            src="/sample.jpg"
            alt="rotated"
            className="absolute -top-[201px] left-1/2 -translate-x-1/2 w-[500px] [clip-path:polygon(50%_20%,100%_20%,50%_100%,0%_20%)]"
          />
          <div className="pr-10 flex flex-col justify-center items-end gap-10 text-white text-xl font-semibold rounded-r-2xl">
            <div className="text-4xl">Attend Meeting</div>
            <div className="flex flex-col gap-5 justify-center items-center">
              <input
                type="text"
                className="bg-gray-400 outline-none px-2 rounded-sm"
                placeholder="Enter a code or link"
              />
              <button className="bg-white w-[150px] h-[45px] text-black text-2xl rounded-full">
                Join
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
