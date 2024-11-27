import React, { useEffect, useContext, useState } from "react";
import { CrowdFundingContext } from "../Context/CrowdFunding";
import { Hero, Card, PupUp } from "../Components/index";

const Index = () => {
  const {
    titleData,
    getCampaigns,
    createCampaign,
    donate,
    getUserCampaigns,
    getDonations,
  } = useContext(CrowdFundingContext);

  const [allCampaigns, setAllCampaigns] = useState([]);
  const [userCampaigns, setUserCampaigns] = useState([]);
  const [openModel, setOpenModel] = useState(false);
  const [donateCampaign, setDonateCampaign] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const allData = await getCampaigns();
        const userData = await getUserCampaigns();

        setAllCampaigns(allData);
        setUserCampaigns(userData);
      } catch (error) {
        console.error("Error fetching campaign data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Hero titleData={titleData} createCampaign={createCampaign} />

      <Card
        title="All Listed Campaign"
        allCampaigns={allCampaigns}
        setOpenModel={setOpenModel}
        setDonate={setDonateCampaign}
      />

      {openModel && (
        <PupUp
          setOpenModel={setOpenModel}
          getDonations={getDonations}
          donate={donateCampaign}
          donateFunction={donate}
        />
      )}
    </>
  );
};

export default Index;
