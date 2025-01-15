import React from "react";
import TableLayout from "../../../layout/TableLayout";
import { useNavigate } from "react-router-dom";

const Departments = () => {
  const navigate = useNavigate();

  const dummyData = [
    {
      id: 1,
      "Department Name": "Test",
      Lead: "Dev",
    },
    {
      id: 2,
      "Department Name": "HR",
      Lead: "Ved",
    },
    {
      id: 3,
      "Department Name": "Sales",
      Lead: "Rudra",
    },
    {
      id: 4,
      "Department Name": "Backend",
      Lead: "Jasmin",
    },
    {
      id: 5,
      "Department Name": "Frontend",
      Lead: "Sam",
    
    },
  ];

  const columnKey = [" Department Name",	"Lead"];

  const renderBody = (item) => (
    <>
      <td>{item["Department Name"]}</td>
      <td>{item.Lead}</td>
    </>
  );

  const addNewDepartment = () => {
    console.log("addNewDepartment");
    navigate("/organization/departments/create");
  };

  const callEditClick = (item) => {
    navigate(`/organization/departments/edit/${item.id}`);
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
        title="+ Add New Department"
        handleOpen={addNewDepartment}
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

export default Departments;
