 


// Checkin.js
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import TableLayout from "../../../layout/TableLayout";
import FilterForm from "../../../components/FilterForm";
import FilterToggle from "../../../components/FilterHideShow";
import {setFilteredData} from "../../../redux/reducers/hrReducer";

const Checkin = () => {
  const dispatch = useDispatch();
  const { attendanceData, filteredData } = useSelector(
    (state) => state.hrApp
  );

  const [showFilters, setShowFilters] = React.useState(false);

  const handleSearch = (filters) => {
    let filtered = attendanceData;

    if (filters.emp_first_name) {
      filtered = filtered.filter((item) =>
        item.name.toLowerCase().includes(filters.emp_first_name.toLowerCase())
      );
    }

    if (filters.type_name) {
      filtered = filtered.filter(
        (item) => item.status.toLowerCase() === filters.type_name.toLowerCase()
      );
    }

    dispatch(setFilteredData(filtered));
  };

  const resetFilters = () => {
    dispatch(setFilteredData(attendanceData));
  };

  const callEditClick = (item) => {
    console.log("Edit attendance:", item);
  };

  const callDeleteClick = (item) => {
    console.log("Delete attendance:", item);
  };

  const callViewClick = (item) => {
    console.log("View attendance:", item);
  };

  const columnKey = ["Name", "Date", "Status"];

  return (
    <div>
      <FilterToggle showFilters={showFilters} setShowFilters={setShowFilters} />

      {showFilters && (
        <FilterForm
          EmployeeName={attendanceData.map((item) => ({
            value: item.name,
            label: item.name,
          }))}
         
          FormDate
          ToDate
          handleSearch={handleSearch}
        />
      )}

      <TableLayout
        columnKey={columnKey}
        dataItem={filteredData.length > 0 ? filteredData : attendanceData}
        renderBody={(item) => (
          <>
            <td>{item.name}</td>
            <td>{item.date}</td>
            <td>{item.status}</td>
          </>
        )}
        serial_no={true}
        edit={true}
        // view={true}
      
        TimeCount={true}
        CheckIn
        ClickHandleCheckIn={()=> console.log("ClickHandleCheckIn clicked")}
        
        isDelete={true}
        title="Add Attendance"
        handleOpen={() => console.log("Opening form to add new attendance")}
        callEditClick={callEditClick}
        callDeleteClick={callDeleteClick}
        callViewClick={callViewClick}
       
        style={{
          height: `${
            showFilters ? "calc( 100vh - 90px)" : "calc( 100vh - 20px)"
          }`,
        }}
        links={{}}
      />

     
    </div>
  );
};

export default Checkin;
