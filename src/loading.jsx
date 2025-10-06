import React from "react";

function Body() {
  return (
    <>
      <div className="flex flex-col lg:flex-row gap-7">
        <div className="flex flex-col gap-7">
          <div className=" bg-[#282241] flex justify-center items-center   w-full h-[200px] sm:h-[300px] md:h-[250px]">
            <div className=" ">
              <div className="text-white text-sm sm:text-lg md:text-2xl font-bold ">
                loading.....
              </div>
            </div>
          </div>
          <div className="text-white flex flex-wrap gap-4">
            <div className="bg-[#282241] p-5 rounded-xl flex-1 min-w-[48%] sm:min-w-[200px]">
              <legend className="mb-3 text-lg">Feels Like</legend>
              <p className="text-4xl">-</p>
            </div>
            <div className="bg-[#282241] p-5 rounded-xl flex-1 min-w-[48%] sm:min-w-[200px]">
              <legend className="mb-3 text-lg">Humidity</legend>
              <p className="text-4xl">-</p>
            </div>
            <div className="bg-[#282241] p-5 rounded-xl flex-1 min-w-[48%] sm:min-w-[200px]">
              <legend className="mb-3 text-lg">Wind</legend>
              <p className="text-4xl">-</p>
            </div>
            <div className="bg-[#282241] p-5 rounded-xl flex-1 min-w-[48%] sm:min-w-[200px]">
              <legend className="mb-3 text-lg">Precipitation</legend>
              <p className="text-4xl">-</p>
            </div>
          </div>
          <div className="text-white">
            <legend className="font-bold ">Daily forecast</legend>
          </div>
          <div className="flex gap-4 flex-wrap  text-white">
            <div className="bg-[#282241] p-3 rounded-xl flex-1  flex flex-col   items-center ">
              <legend className="text-lg"></legend>-
              <div className="flex  w-full mt-2">
                <div className="mr-auto"></div>
                <div className="ml-auto"></div>
              </div>
            </div>
            <div className="bg-[#282241] p-3 rounded-xl flex-1  flex flex-col   items-center ">
              <legend className="text-lg"></legend>-
              <div className="flex  w-full mt-2">
                <div className="mr-auto"></div>
                <div className="ml-auto"></div>
              </div>
            </div>
            <div className="bg-[#282241] p-3 rounded-xl flex-1  flex flex-col   items-center ">
              <legend className="text-lg"></legend>-
              <div className="flex  w-full mt-2">
                <div className="mr-auto"></div>
                <div className="ml-auto"></div>
              </div>
            </div>
            <div className="bg-[#282241] p-3 rounded-xl flex-1  flex flex-col   items-center ">
              <legend className="text-lg"></legend>-
              <div className="flex  w-full mt-2">
                <div className="mr-auto"></div>
                <div className="ml-auto"></div>
              </div>
            </div>
            <div className="bg-[#282241] p-3 rounded-xl flex-1  flex flex-col   items-center ">
              <legend className="text-lg"></legend>-
              <div className="flex  w-full mt-2">
                <div className="mr-auto"></div>
                <div className="ml-auto"></div>
              </div>
            </div>
            <div className="bg-[#282241] p-3 rounded-xl flex-1  flex flex-col   items-center ">
              <legend className="text-lg"></legend>-
              <div className="flex  w-full mt-2">
                <div className="mr-auto"></div>
                <div className="ml-auto"></div>
              </div>
            </div>
            <div className="bg-[#282241] p-3 rounded-xl flex-1  flex flex-col   items-center ">
              <legend className="text-lg"></legend>-
              <div className="flex  w-full mt-2">
                <div className="mr-auto"></div>
                <div className="ml-auto"></div>
              </div>
            </div>
            <div className="bg-[#282241] p-3 rounded-xl flex-1  flex flex-col   items-center ">
              <legend className="text-lg"></legend>-
              <div className="flex  w-full mt-2">
                <div className="mr-auto"></div>
                <div className="ml-auto"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#3A3550] flex-1 rounded-xl p-3">
          <div className="flex  items-center mb-3 gap-10 ">
            <legend className="text-white text-xl font-bold ">
              Hourly forecast
            </legend>
            <div className="flex  items-center bg-[#52526b] rounded-sm gap-3 p-1  px-5 text-2xl text-white">
              -
            </div>
          </div>

          <div className=" h-full text-white">
            <div className=" h-[80%]  bg-[#282241]  px-2 p-2 rounded-lg"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Body;
