import React, { useState } from "react";
import {cfiImage} from "F:/Sem2-Project/CrowdFunding-Web3/Components/Images/cfi.png";

const Hero = ({ titleData, createCampaign }) => {
  const [campaign, setCampaign] = useState({
    title: "",
    description: "",
    amount: "",
    deadline: "",
  });

  const createNewCampaign = async (e) => {
    e.preventDefault();
    try {
      const data = await createCampaign(campaign);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
    className="relative min-h-screen flex items-center justify-center"
    style={{ backgroundColor: 'rgba(234, 243, 250, 255)' }}
  >
      <div className="relative mx-auto max-w-screen-xl px-4 lg:px-8 py-8 lg:py-16 w-full text-black">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Campaign Info Section */}
          <div
            id="campaigninfo"
            className="w-full max-w-lg text-white mb-8 lg:mb-0 lg:pr-8 lg:w-1/2 text-black"
          >
            <h2 className="text-2xl sm:text-4xl font-bold mb-4 text-black">
              Crowdfunding Platform
            </h2>
            <p className="text-base sm:text-lg mb-6 leading-relaxed text-black">
              Empower your ideas with our blockchain-based crowdfunding
              platform. Start your campaign, gather support, and turn your
              vision into reality.
            </p>
            <img
  src="https://img.freepik.com/free-vector/people-with-smartphones-using-mobile-banking-app_74855-5917.jpg?t=st=1732728356~exp=1732731956~hmac=e451eb7a64b6997abc075a55d807fa03904713af88423932c15da14e082998a3&w=826"
  className="object-cover w-full h-64 rounded"
  alt="Campaign Thumbnail"
/>

            <a
              href="/"
              className="inline-flex items-center text-teal-accent-400 hover:text-teal-accent-700 font-semibold text-black"
            >
              Learn more
              <svg
                className="inline-block w-4 ml-2"
                fill="currentColor"
                viewBox="0 0 12 12"
              >
                <path d="M9.707 5.293l-5-5a1 1 0 00-1.414 1.414L7.586 6 3.293 10.293a1 1 0 101.414 1.414l5-5a1 1 0 000-1.414z" />
              </svg>
            </a>
          </div>

          {/* Campaign Form Section */}
          <div
            id="campaignform"
            className="w-full max-w-lg bg-white rounded-lg shadow-lg p-6 lg:p-8 "
          >
            <h3 className="text-xl font-semibold mb-4 text-center">
              Start Your Campaign
            </h3>
            <form>
              <div className="mb-4">
                <label
                  htmlFor="title"
                  className="block text-sm font-medium mb-2"
                >
                  Title
                </label>
                <input
                  onChange={(e) =>
                    setCampaign({ ...campaign, title: e.target.value })
                  }
                  placeholder="Enter your campaign title"
                  required
                  type="text"
                  className="w-full h-10 px-4 border border-gray-300 rounded focus:ring-2 focus:ring-purple-500"
                  id="title"
                  name="title"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="description"
                  className="block text-sm font-medium mb-2"
                >
                  Description
                </label>
                <input
                  onChange={(e) =>
                    setCampaign({
                      ...campaign,
                      description: e.target.value,
                    })
                  }
                  placeholder="Briefly describe your campaign"
                  required
                  type="text"
                  className="w-full h-10 px-4 border border-gray-300 rounded focus:ring-2 focus:ring-purple-500"
                  id="description"
                  name="description"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="amount"
                  className="block text-sm font-medium mb-2"
                >
                  Target Amount (ETH)
                </label>
                <input
                  onChange={(e) =>
                    setCampaign({ ...campaign, amount: e.target.value })
                  }
                  placeholder="Enter target amount in ETH"
                  required
                  type="text"
                  className="w-full h-10 px-4 border border-gray-300 rounded focus:ring-2 focus:ring-purple-500"
                  id="amount"
                  name="amount"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="deadline"
                  className="block text-sm font-medium mb-2"
                >
                  Deadline
                </label>
                <input
                  onChange={(e) =>
                    setCampaign({ ...campaign, deadline: e.target.value })
                  }
                  placeholder="Select a deadline"
                  required
                  type="date"
                  className="w-full h-10 px-4 border border-gray-300 rounded focus:ring-2 focus:ring-purple-500"
                  id="deadline"
                  name="deadline"
                />
              </div>
              <div className="text-center">
                <button
                  onClick={(e) => createNewCampaign(e)}
                  type="submit"
                  className="w-full h-10 bg-blue-500 text-white rounded font-medium hover:bg-purple-700 transition"
                >
                  Create Campaign
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
