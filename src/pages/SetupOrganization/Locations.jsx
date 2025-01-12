import React from "react";
import TableLayout from "../../layout/TableLayout";
import { useNavigate } from "react-router-dom";

const Location = () => {
  const navigate = useNavigate();

  const dummyData = [
    {
      id: 1,
      Location: "Headquarters",
      Name: "Main Office",
      Address: "123 Main St",
      City: "New York",
      "Zip Code": "10001",
      Date: "2025-01-01",
    },
    {
      id: 2,
      Location: "Branch 1",
      Name: "Branch Office 1",
      Address: "456 Oak St",
      City: "Los Angeles",
      "Zip Code": "90001",
      Date: "2024-12-15",
    },
    {
      id: 3,
      Location: "Branch 2",
      Name: "Branch Office 2",
      Address: "789 Pine St",
      City: "Chicago",
      "Zip Code": "60601",
      Date: "2024-11-20",
    },
    {
      id: 4,
      Location: "Satellite",
      Name: "Remote Office",
      Address: "101 Maple Ave",
      City: "San Francisco",
      "Zip Code": "94105",
      Date: "2025-01-05",
    },
    {
      id: 5,
      Location: "Warehouse",
      Name: "Warehouse Location",
      Address: "202 Birch Rd",
      City: "Dallas",
      "Zip Code": "75201",
      Date: "2024-10-30",
    },
  ];

  const columnKey = ["Location", "Name", "Address", "City", "Zip Code", "Date"];

  const renderBody = (item) => (
    <>
      <td>{item.Location}</td>
      <td>{item.Name}</td>
      <td>{item.Address}</td>
      <td>{item.City}</td>
      <td>{item["Zip Code"]}</td>
      <td>{item.Date}</td>
    </>
  );

  const addNewLocation = () => {
    console.log("addNewLocation");
    navigate("/location/create");
  };

  const callEditClick = (item) => {
    navigate(`/location/${item.id}/edit`);
  };

  const callDeleteClick = (item) => {
    console.log("Delete attendance:", item);
  };

  return (
    <div>
      <TableLayout
        columnKey={columnKey}
        dataItem={dummyData} // Pass the static dummy data here
        renderBody={renderBody}
        serial_no={true}
        edit={true}
        isAdd={true}
        isDelete={true}
        title="+ Add New Location"
        handleOpen={addNewLocation}
        callEditClick={callEditClick}
        callDeleteClick={callDeleteClick}
        style={{
          height: 600,
        }}
        links={{}}
      />
    </div>
  );
};

export default Location;
