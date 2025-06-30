import React, { useState, useEffect } from "react";
import { leadershipActivities } from "../../constants";

const LeadershipAndActivities = () => {
  const [selectedActivity, setSelectedActivity] = useState(null);

  // Lock scroll when modal open, unlock when closed
  useEffect(() => {
    if (selectedActivity) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    // Clean up when component unmounts
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedActivity]);

  const openModal = (activity) => {
    setSelectedActivity(activity);
  };

  const closeModal = () => {
    setSelectedActivity(null);
  };

  return (
    <section
      id="LeadershipAndActivities"
      className="py-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans relative"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">LEADERSHIP & ACTIVITIES</h2>
        <div className="w-32 h-1 bg-[#00BFFF] mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          Highlights of my leadership roles and community involvement
        </p>
      </div>

      {/* Activities Grid */}
      <div className="grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {leadershipActivities.map((activity) => (
          <div
            key={activity.id}
            onClick={() => openModal(activity)}
            className="border border-[#00BFFF] bg-gray-900 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden cursor-pointer hover:shadow-[#00FFFF] hover:-translate-y-2 transition-transform duration-300"
          >
            <div className="p-4 flex justify-center bg-gray-800">
              <img
                src={activity.image}
                alt={activity.title}
                className="w-full max-h-48 object-contain rounded-xl"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-white mb-2">{activity.title}</h3>
              <p className="text-gray-400 mb-2">{activity.organization}</p>
             
              <span className="text-xs text-[#00BFFF] bg-gray-800 px-3 py-1 rounded-full">
                {activity.date}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedActivity && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4">
          <div className="bg-gray-900 rounded-xl shadow-2xl lg:w-[70%] w-[70%] max-w-xl max-h-[96vh] overflow-y-auto relative py-4 border border-[#00BFFF]">
            <div className="flex justify-end p-4">
              <button
                onClick={closeModal}
                className="text-white text-3xl font-bold hover:text-[#00FFFF]"
                aria-label="Close Modal"
              >
                &times;
              </button>
            </div>

            <div className="flex flex-col">
              <div className="w-full flex justify-center bg-gray-900 px-4 mb-6">
                <img
                  src={selectedActivity.image}
                  alt={selectedActivity.title}
                  className="lg:w-full w-[95%] object-contain rounded-xl shadow-2xl"
                />
              </div>
              <div className="lg:p-8 p-6">
                <h3 className="lg:text-3xl font-bold text-white mb-4 text-md">
                  {selectedActivity.title}
                </h3>
                <p className="text-gray-400 mb-4 lg:text-base text-sm">
                  <strong>Organization:</strong> {selectedActivity.organization}
                </p>
                <p className="text-gray-400 mb-4 lg:text-base text-sm">
                  <strong>Duration:</strong> {selectedActivity.date}
                </p>
                {selectedActivity.role && (
                  <p className="text-gray-400 mb-4 lg:text-base text-sm">
                    <strong>Role:</strong> {selectedActivity.role}
                  </p>
                )}
                {selectedActivity.description && (
                  <p className="text-gray-400 mb-6 lg:text-base text-sm">
                    {selectedActivity.description}
                  </p>
                )}
                {selectedActivity.skills && (
                  <p className="text-gray-400 mb-6 lg:text-base text-sm">
                    <strong>Skills Demonstrated:</strong> {selectedActivity.skills}
                  </p>
                )}
                {selectedActivity.tags && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {selectedActivity.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="bg-[#251f38] text-xs font-semibold text-[#00BFFF] rounded-full px-3 py-1"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default LeadershipAndActivities;
