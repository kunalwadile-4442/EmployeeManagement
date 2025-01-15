

import React from "react";
import TableLayout from "../../../layout/TableLayout";
import { useNavigate } from "react-router-dom";

const Designations = () => {
  const navigate = useNavigate();

  const dummyData = [
    {
      id: 1,
      "Designation Name": "Warehouse",
      Department: "Warehouse Location",
    },
    {
      id: 2,
      "Designation Name": "Warehouse",
      Department: "Warehouse Location",
    },
    {
      id: 3,
      "Designation Name": "Warehouse",
      Department: "Warehouse Location",
    },
    {
      id: 4,
      "Designation Name": "Warehouse",
      Department: "Warehouse Location",
    },
    {
      id: 5,
      "Designation Name": "Warehouse",
      Department: "Warehouse Location",
    
    },
  ];

  const columnKey = [" Designation Name",	"Department"];

  const renderBody = (item) => (
    <>
      <td>{item["Designation Name"]}</td>
      <td>{item.Department}</td>
    </>
  );

  const addNewDesignation = () => {
    console.log("addNewDesignation");
    navigate("/organization/designations/create");
  };

  const callEditClick = (item) => {
    navigate(`/organization/designations/edit/${item.id}`);
  };

  const callDeleteClick = (item) => {
    console.log("Delete attendance:", item);
  };

  return (
    <div>
      <TableLayout
        columnKey={columnKey}
        dataItem={dummyData} 
        renderBody={renderBody}
        serial_no={true}
        edit={true}
        isAdd={true}
        isDelete={true}
        title="+ Add New Designation"
        handleOpen={addNewDesignation}
        callEditClick={callEditClick}
        callDeleteClick={callDeleteClick}
        style={{
          height: "calc(100vh - 10px)", 
        }}
        links={{}}
      />
    </div>
  );
};

export default Designations;
