import React from "react";
import TableLayout from "../../../layout/TableLayout";
import { useNavigate } from "react-router-dom";

const CompanyAdmin = () => {
  const navigate = useNavigate();

  const dummyData = [
    {
      id: 1,
      "Company Name": "Appristine Technology Pvt. Ltd.",
      website: "www.appristine.com",
      "Team Size": 83,
    },
    {
      id: 2,
      "Company Name": "Appristine Technology Pvt. Ltd.",
      website: "www.appristine.com",
      "Team Size": 28,
    },
    {
      id: 3,
      "Company Name": "Appristine Technology Pvt. Ltd.",
      website: "www.appristine.com",
      "Team Size": 49,
    },
    {
      id: 4,
      "Company Name": "Appristine Technology Pvt. Ltd.",
      website: "www.appristine.com",
      "Team Size": 28,
    },
    {
      id: 5,
      "Company Name": "Appristine Technology Pvt. Ltd.",
      website: "www.appristine.com",
      "Team Size": 5,
    },
  ];

  const columnKey = [" Company Name", "Company Website", "Team Size"];

  const renderBody = (item) => (
    <>
      <td>{item["Company Name"]}</td>
      <td>
        <a
        className="text-light-logo-color  hover:underline"
          href={`https://${item.website}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          {item.website}
        </a>
      </td>

      <td>{item["Team Size"]}</td>
    </>
  );

  const addNewDepartment = () => {
    console.log("addNewDepartment");
    navigate("/organization/company/add");
  };

  const callEditClick = (item) => {
    navigate(`/organization/company/edit/${item.id}`);
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
        title="+ Add Company"
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

export default CompanyAdmin;
