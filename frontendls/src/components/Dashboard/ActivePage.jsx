import React from "react";
import { FaCheck, FaPlay } from "react-icons/fa";
import { BsBook } from "react-icons/bs";
import DashboardHeader from "./DashboardHeader";

const ActivePage = () => {
  return (
    <div className="space-y-6 mt-3">
      <DashboardHeader />

      <div className="bg-[#F8F8F8] h-screen">
        <div className="space-y-4 mt-6 ">
          <h3 className="capitalize font-extrabold text-2xl text-left pl-8">
            Dashboard
          </h3>

          <div className="grid lg:grid-cols-3 gap-6 mx-8">
            <div className="shadow bg-white rounded-lg p-6">
              <div className="flex justify-start space-x-8 items-center">
                <div className="flex justify-center items-center border border-green-600 w-14 h-14 rounded-full">
                  <BsBook className="text-3xl text-green-600" />
                </div>
                <div>
                  <span className="text-xl font-extrabold">0</span>
                  <p className="capitalize font-semibold">enroll courses</p>
                </div>
              </div>
            </div>

            <div className="shadow bg-white rounded-lg p-6">
              <div className="flex justify-start space-x-8 items-center">
                <div className="flex justify-center items-center border border-red-600 w-14 h-14 rounded-full">
                  <FaPlay className="text-3xl text-red-600" />
                </div>
                <div>
                  <span className="text-xl font-extrabold">0</span>
                  <p className="capitalize font-semibold">enroll courses</p>
                </div>
              </div>
            </div>

            <div className="shadow bg-white rounded-lg p-6">
              <div className="flex justify-start space-x-8 items-center">
                <div className="flex justify-center items-center border border-blue-600 w-14 h-14 rounded-full">
                  <FaCheck className="text-3xl text-blue-600" />
                </div>
                <div>
                  <span className="text-xl font-extrabold">0</span>
                  <p className="capitalize font-semibold">enroll courses</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivePage;
