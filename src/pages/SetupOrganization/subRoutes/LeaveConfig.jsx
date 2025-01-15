import React, { useState } from "react";
import TableLayout from "../../../layout/TableLayout";
import SimpleModal from "../../../Popups/SimpleModal";

const LeaveConfig = () => {

  const dummyData = [
    {
      id: 1,
      LeaveType: "Sick",
      Days: 12,
    },
  ];

  const columnKey = ["Leave Type", " Days Count for year"];

  const renderBody = (item) => (
    <>
      <td>{item["LeaveType"]}</td>
      <td>{item.Days}</td>
    </>
  );

 

  const callDeleteClick = (item) => {
    console.log("Delete attendance:", item);
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openSettingsModal = () => {
    setIsModalOpen(true);
  };

  const closeSettingsModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <TableLayout
        columnKey={columnKey}
        dataItem={dummyData}
        renderBody={renderBody}
        serial_no={true}
        isDelete={true}
        customBtn
        customBtnTitle="+ Add Leave"
        handleCustomBtnTitle={openSettingsModal}
        callDeleteClick={callDeleteClick}
        style={{
          height: "calc(100vh - 10px)", 
        }}
        links={{}}
      />
      <SimpleModal
        isOpen={isModalOpen}
        onClose={closeSettingsModal}
        title="Leave Settings"
      />
    </div>
  );
};

export default LeaveConfig;
