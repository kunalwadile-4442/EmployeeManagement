import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import AuthenticatedLayout from "../../../layout/AuthenticatedLayout";
import BasicInfo from "./BasicInfo";
// import CurrentWorkingInfo from "./CurrentWorkingInfo";
import PreviousWorkingInfo from "./PreviousWorkingInfo";
import EduDetails from "./EduDetails";
// import PersonalInfo from "./PersonalInfo";
import UploadDocs from "./UploadDocs";


// TabButton component to avoid redundancy
const TabButton = ({ tab, activeTab, handleTabClick, label }) => (
  <button
    onClick={() => handleTabClick(tab)}
    className={`px-2 py-1 text-md font-semibold transition-all duration-300 ${
      activeTab === tab
        ? "border-b-2 border-purple-500 text-black"
        : "text-gray-500 hover:text-black"
    }`}
  >
    {label}
  </button>
);

function EditLayout() {
  const { id } = useParams(); 
  const [activeTab, setActiveTab] = useState("basic");
  const navigate  = useNavigate();

  const handleTabClick = (tab) => setActiveTab(tab);

  const tabs = [
    { tab: "basic", label: "Basic Details" },
    // { tab: "current", label: "Current Working Details" },
    { tab: "previous", label: "Previous Working Details" },
    { tab: "education", label: "Education Details" },
    // { tab: "personal", label: "Personal Info" },
    { tab: "upload_docs", label: "Upload Documents" },
  ];

  return (
    <AuthenticatedLayout top_heading={"Edit Employee Details"} back={"Back"} handleBackClick={() => navigate(-1)}>
      <div className="flex gap-3 px-3">
        {tabs.map(({ tab, label }) => (
          <TabButton
            key={tab}
            tab={tab}
            activeTab={activeTab}
            handleTabClick={handleTabClick}
            label={label}
          />
        ))}
      </div>

      <div className="mt-2">
        {activeTab === "basic" && <BasicInfo id={id} />}
        {/* {activeTab === "current" && <CurrentWorkingInfo id={id} />} */}
        {activeTab === "previous" && <PreviousWorkingInfo id={id} />}
        {activeTab === "education" && <EduDetails id={id} />}
        {/* {activeTab === "personal" && <PersonalInfo id={id} />} */}
        {activeTab === "upload_docs" && <UploadDocs id={id} />}
      </div>
    </AuthenticatedLayout>
  );
}

export default EditLayout;
