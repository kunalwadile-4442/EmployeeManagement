 


// Checkin.js
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import TableLayout from "../../../layout/TableLayout";
import FilterForm from "../../../components/FilterForm";
import FilterToggle from "../../../components/FilterHideShow";
import {setFilteredData,openModal,closeModal} from "../../../redux/reducers/hrReducer";
// import ConfirmModalPopup from "../../../Popups/ConfirmModalPopup";
// import { showSuccessToast } from "../../../Utils/ToastsUtils";

const Checkin = () => {
  const dispatch = useDispatch();
  const { attendanceData, filteredData,isModalOpen } = useSelector(
    (state) => state.hrApp
  );

    // const [deleteItem, setDeleteItem] = React.useState(null); // State to store the item to delete
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

  // const callEditClick = (item) => {
  //   console.log("Edit attendance:", item);
  // };
  // const callDeleteClick = (item) => {
  //   setDeleteItem(item);
  //   dispatch(openModal());
  // };

  // const handleDeleteConfirm = () => {
  //   if (deleteItem) {
  //     const updatedData = attendanceData.filter(
  //       (item) => item.id !== deleteItem.id
  //     );
  //     dispatch(setFilteredData(updatedData)); 
  //     setDeleteItem(null); 
  //     dispatch(closeModal()); 
  //     showSuccessToast("Employee deleted successfully!");
  //   }
  // };

  // const handleDeleteCancel = () => {
  //   setDeleteItem(null); 
  //   dispatch(closeModal()); 
  // };

  // const callViewClick = (item) => {
  //   console.log("View attendance:", item);
  // };

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
            <td >{item.name}</td>
            <td>{item.date}</td>
            <td>{item.status}</td>
          </>
        )}
        serial_no={true}
        // edit={true}
        // view={true}
      
        TimeCount={true}
        CheckIn
        ClickHandleCheckIn={()=> console.log("ClickHandleCheckIn clicked")}
        
       
        title="Add Attendance"
        handleOpen={() => console.log("Opening form to add new attendance")}
        // callEditClick={callEditClick}
        // callDeleteClick={callDeleteClick}
        // callViewClick={callViewClick}
       
        style={{
          height: `${
            showFilters ? "calc( 100vh - 90px)" : "calc( 100vh - 20px)"
          }`,
        }}
        links={{}}
      />
       {/* <ConfirmModalPopup
        isOpen={isModalOpen}
        message={
          <>
            Are you sure you want to delete this item ?
          </>
        }
        onSubmit={handleDeleteConfirm}
        onCancel={handleDeleteCancel}
      /> */}

     
    </div>
  );
};

export default Checkin;
