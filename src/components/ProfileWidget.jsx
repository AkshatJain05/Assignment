import { useState } from "react";
import { FaArrowLeft, FaArrowRight, FaPlus } from "react-icons/fa";
import mernImage from "../assets/MERN.png";

export default function ProfileWidgets() {
  const [activeTab, setActiveTab] = useState("about");
  const [images, setImages] = useState([mernImage, mernImage, mernImage]);

  // Handle image upload from local gallery
  const handleAddImage = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImages((prev) => [...prev, imageUrl]);
    }
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case "about":
        return (
          <p className="text-gray-300 leading-relaxed text-sm md:text-base">
            Hello! I’m Dave, your sales rep here from Salesforce. I’ve been
            working at this awesome company for 3 years now.
            <br />
            <br />I was born and raised in Albany, NY& have been living in Santa
            Carla for the past 10 years my wife Tiffany and my 4 year old twin
            daughters- Emma and Ella. Both of them are just starting school, so
            my calender is usually blocked between 9-10 AM. This is a...
          </p>
        );
      case "experiences":
        return (
          <p className="text-gray-300 leading-relaxed text-sm md:text-base">
            Hello! I’m Dave, your sales rep here from Salesforce. I’ve been
            working at this awesome company for 3 years now.
            <br />
            <br />I was born and raised in Albany, NY& have been living in Santa
            Carla for the past 10 years my wife Tiffany and my 4 year old twin
            daughters- Emma and Ella. Both of them are just starting school, so
            my calender is usually blocked between 9-10 AM. This is a...
          </p>
        );
      case "recommended":
        return (
          <p className="text-gray-300 leading-relaxed text-sm md:text-base">
            Hello! I’m Dave, your sales rep here from Salesforce. I’ve been
            working at this awesome company for 3 years now.
            <br />
            <br />I was born and raised in Albany, NY& have been living in Santa
            Carla for the past 10 years my wife Tiffany and my 4 year old twin
            daughters- Emma and Ella. Both of them are just starting school, so
            my calender is usually blocked between 9-10 AM. This is a...
          </p>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-[#0e141b] flex justify-end pr-10 pt-10 text-white">
      {/* Right Section */}
      <div className="w-[45%] flex flex-col gap-6">
        {/* Tabs Widget */}
        <div className="bg-[#1a222b] rounded-3xl shadow-xl p-6">
          <div className="flex space-x-4 bg-[#0e0e0e] rounded-2xl p-1 mb-4">
            {["about", "experiences", "recommended"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex-1 text-sm md:text-base py-2 rounded-2xl hover:bg-[#262631e6] border-black transition-all duration-200 ${
                  activeTab === tab
                    ? "bg-[#262631e6] shadow-lg shadow-black text-white "
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>

          <div className="overflow-y-auto max-h-40 scrollbar-thin scrollbar-thumb-gray-600 pr-2">
            {renderTabContent()}
          </div>
        </div>

        {/* Gallery Widget */}
        <div className="bg-[#1a222b] rounded-3xl shadow-lg p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold bg-[#0e0e0e] py-3 px-5 rounded-2xl">
              Gallery
            </h2>
            <div className="flex items-center gap-3">
              <label
                htmlFor="fileInput"
                className="flex items-center gap-2 bg-[#2b3440] hover:bg-[#364250] cursor-pointer text-sm font-medium px-4 py-2 rounded-full transition-all shadow-md hover:shadow-lg"
              >
                <FaPlus /> ADD IMAGE
              </label>
              <input
                id="fileInput"
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleAddImage}
              />

              <div className="flex gap-2">
                <button className="p-2 bg-[#2b3440] hover:bg-[#364250] rounded-full transition-all shadow-md hover:shadow-lg">
                  <FaArrowLeft />
                </button>
                <button className="p-2 bg-[#2b3440] hover:bg-[#364250] rounded-full transition-all shadow-md hover:shadow-lg">
                  <FaArrowRight />
                </button>
              </div>
            </div>
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-3 gap-4">
            {images.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt="gallery"
                className="rounded-xl object-cover w-full h-36 shadow-md hover:scale-[1.03] hover:shadow-lg transition-transform duration-200"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
