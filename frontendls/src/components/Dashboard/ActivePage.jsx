import React from "react";
import {  FaPlay } from "react-icons/fa";
import {  BsPlayBtn,BsCheckCircle } from "react-icons/bs";
import { SlBookOpen } from "react-icons/sl";
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
                <div className="flex justify-center items-center border border-blue-600 w-14 h-14 rounded-full">
                  <SlBookOpen className="text-3xl text-blue-600" />
                </div>
                <div className="text-start">
                  <span className="text-3xl font-extrabold text-start">0</span>
                  <p className="capitalize  text-start">enroll courses</p>
                </div>
              </div>
            </div>

            <div className="shadow bg-white rounded-lg p-6">
              <div className="flex justify-start space-x-8 items-center">
                <div className="flex justify-center items-center border border-yellow-400 w-14 h-14 rounded-full">
                  <BsPlayBtn className="text-3xl text-yellow-400" />
                </div>
                <div className="text-start">
                  <span className="text-3xl font-extrabold">0</span>
                  <p className="capitalize">active courses</p>
                </div>
              </div>
            </div>

            <div className="shadow bg-white rounded-lg p-6">
              <div className="flex justify-start space-x-8 items-center">
                <div className="flex justify-center items-center border border-green-600 w-14 h-14 rounded-full">
                  <BsCheckCircle className="text-3xl text-green-600" />
                </div>
                <div className="text-start">
                  <span className="text-3xl font-extrabold">0</span>
                  <p className="capitalize">active courses</p>
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
