import React from "react";

const Card = ({ allCampaigns, setOpenModel, setDonate, title }) => {
  // Helper function to calculate days left
  const daysLeft = (deadline) => {
    const difference = new Date(deadline).getTime() - Date.now();
    const remainingDays = difference / (1000 * 3600 * 24);
    return remainingDays > 0 ? remainingDays.toFixed(0) : "Expired"; // Show "Expired" if the deadline has passed
  };

  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      {/* Title Section */}
      <p className="py-16 text-2xl font-bold leading-5">{title}</p>

      {/* Campaigns Grid */}
      <div className="grid gap-5 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
        {allCampaigns?.map((campaign, index) => (
          <div
            key={index}
            onClick={() => {
              setDonate(campaign);
              setOpenModel(true);
            }}
            className="cursor-pointer border overflow-hidden transition-shadow duration-300 bg-white rounded"
          >
            {/* Campaign Image */}
            <img
            src="https://img.freepik.com/free-vector/investment-crowdfunding-concept_74855-7563.jpg?t=st=1732725283~exp=1732728883~hmac=941f7ebf90f26b7d60aa8449628a9fa0be02c2c1331d3cd6bb7595aba0cac80e&w=900"
              // src="https://images.pexels.com/photos/932638/pexels-photo-932638.jpeg?auto=compress&cs=tinyrgb&dpr=3&h=750&w=1260"
              className="object-cover w-full h-64 rounded"
              alt="Campaign Thumbnail"
            />

            {/* Campaign Details */}
            <div className="py-5 pl-2">
              <p className="mb-2 text-xs font-semibold text-gray-600 uppercase">
                Days Left: {daysLeft(campaign.deadline)}
              </p>
              <a
                href="#"
                aria-label="Campaign Details"
                className="inline-block mb-3 text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
              >
                <p className="text-2xl font-bold leading-5">{campaign.title}</p>
              </a>
              <p className="mb-4 text-gray-700">{campaign.description}</p>

              {/* Campaign Stats */}
              <div className="flex justify-between">
                <p className="font-semibold text-gray-800">
                  Target: {campaign.target} ETH
                </p>
                <p className="font-semibold text-gray-800">
                  Raised: {campaign.amountCollected} ETH
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
