import React from "react";
import DashboardHeader from "./DashboardHeader";

const Profile = () => {
  return (
    <div className="space-y-6 mt-12">
      <DashboardHeader />

      <div className="bg-[#F8F8F8] h-screen">
        <div className="space-y-4 mt-6 pl-8">
          <h3 className="capitalize font-extrabold text-2xl text-left">
            My Profile
          </h3>
          <div className="flex flex-row text-start text-[#ABABAB]">
            <div className="basis-1/4">
              <p className="font-semibold my-2">Registration Date</p>
              <p className="font-semibold my-2">First Name</p>
              <p className="font-semibold my-2">Last Name</p>
              <p className="font-semibold my-2">Username</p>
              <p className="font-semibold my-2">Email</p>
              <p className="font-semibold my-2">Phone Number</p>
              <p className="font-semibold my-2">Job Title</p>
              <p className="font-semibold my-2">Bio</p>
            </div>
            <div className="basis-3/4">
              <p className="my-2">_____</p>
              <p className="my-2">_____</p>
              <p className="my-2">_____</p>
              <p className="my-2">_____</p>
              <p className="my-2">_____</p>
              <p className="my-2">_____</p>
              <p className="my-2">_____</p>
              <p className="my-2">_____</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
