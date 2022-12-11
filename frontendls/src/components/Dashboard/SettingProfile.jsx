import React from "react";

const SettingProfile = () => {
  return (
    <div>
      <div className="grid lg:grid-cols-2 gap-6 mx-8">
        <div className="shadow bg-white rounded-lg p-6">
          <div className="flex justify-start space-x-8 items-center">
            <div>
              <h1 className="text-xl font-semibold text-black">
                Contact information
              </h1>
              <p className="capitalize font-semibold">
                Provide your details below to create your account profile
              </p>
            </div>
          </div>
          <div className="grid lg:grid-cols-2 gap-6 mt-3">
            <div className="flex justify-start space-x-8 items-center">
              <div>
                <label className="text-black font-semibold">First Name</label>
                <input
                  type="text"
                  className="bg-[#EFEFEF] border-0 rounded w-auto"
                />
              </div>
            </div>

            <div className="flex justify-start space-x-8 items-center">
              <div>
                <label className="text-black font-semibold">Last Name</label>
                <input
                  type="text"
                  className="bg-[#EFEFEF] border-0 rounded w-auto"
                />
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-6 mt-3">
            <div className="flex justify-start space-x-8 items-center">
              <div>
                <label className="text-black font-semibold">Job Title</label>
                <input
                  type="text"
                  className="bg-[#EFEFEF] border-0 rounded w-auto"
                />
              </div>
            </div>

            <div className="flex justify-start space-x-8 items-center">
              <div>
                <label className="text-black font-semibold">Phone Number</label>
                <input
                  type="text"
                  className="bg-[#EFEFEF] border-0 rounded w-auto"
                />
              </div>
            </div>
          </div>

          <div className=" gap-6 mt-3">
            <label className="text-black font-semibold">Bio</label>
            <div>
              <textarea
                type="text"
                className="bg-[#EFEFEF] border-0 rounded w-full"
              />
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-6 mt-3">
            <div className="flex justify-start space-x-8 items-center">
              <div>
                <label className="text-black font-semibold">Facebook</label>
                <input
                  type="text"
                  className="bg-[#EFEFEF] border-0 rounded w-auto"
                />
              </div>
            </div>

            <div className="flex justify-start space-x-8 items-center">
              <div>
                <label className="text-black font-semibold">Twitter</label>
                <input
                  type="text"
                  className="bg-[#EFEFEF] border-0 rounded w-auto"
                />
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-6 mt-3">
            <div className="flex justify-start space-x-8 items-center">
              <div>
                <label className="text-black font-semibold">Instagram</label>
                <input
                  type="text"
                  className="bg-[#EFEFEF] border-0 rounded w-auto"
                />
              </div>
            </div>

            <div className="flex justify-start space-x-8 items-center">
              <div>
                <label className="text-black font-semibold">Linkedin</label>
                <input
                  type="text"
                  className="bg-[#EFEFEF] border-0 rounded w-auto"
                />
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-6 mt-3">
            <div className="flex justify-start space-x-8 items-center">
              <div>
                <label className="text-black font-semibold">Pinterest</label>
                <input
                  type="text"
                  className="bg-[#EFEFEF] border-0 rounded w-auto"
                />
              </div>
            </div>

            <div className="flex justify-start space-x-8 items-center">
              <div>
                <label className="text-black font-semibold">Youtube</label>
                <input
                  type="text"
                  className="bg-[#EFEFEF] border-0 rounded w-auto"
                />
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-6 mt-3">
            <div className="flex justify-start space-x-8 items-center">
              <div>
                <label className="text-black font-semibold">Github</label>
                <input
                  type="text"
                  className="bg-[#EFEFEF] border-0 rounded w-auto"
                />
              </div>
            </div>
          </div>
        </div>

        {/* 2nd col */}
        <div className="shadow bg-white rounded-lg p-6">
          <div className=" justify-start items-center">
            <div>
              <h1 className="text-xl font-semibold text-black">Photo</h1>
              <p className="capitalize font-semibold">
                Upload your profile photo.
              </p>
            </div>
            <div className=" mt-3">
              <label className="text-black font-semibold">
                Display name publicly as
              </label>
              <div>
                <select className="w-full">
                  <option value="name">name</option>
                </select>
                <p className="text-[#696981]">
                  The display name is shown in all public fields, such as the
                  author name, instructor name, student name, and name that will
                  be printed on the certificate.
                </p>
              </div>
            </div>
          </div>
        </div>
        <button className="btn bg-[#256F46] text-white rounded-md w-1/2 px-5 py-3 hover:bg-[#74C13B] hover:text-black">
          Update Profile
        </button>
      </div>
    </div>
  );
};

export default SettingProfile;
