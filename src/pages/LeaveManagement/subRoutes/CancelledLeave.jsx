import React from "react";
import { useDispatch, useSelector } from "react-redux";
import TableLayout from "../../../layout/TableLayout";
import FilterForm from "../../../components/FilterForm";
import FilterToggle from "../../../components/FilterHideShow";
import {
  setFilteredData,
  openModal,
  closeModal,
} from "../../../redux/reducers/hrReducer";
import { useNavigate } from "react-router-dom";
import { showSuccessToast } from "../../../Utils/ToastsUtils";
import ConfirmModalPopup from "../../../Popups/ConfirmModalPopup";

const CancelledLeave = () => {
  const dispatch = useDispatch();
  const navigate  = useNavigate();
  const { attendanceData, filteredData, isModalOpen } = useSelector(
    (state) => state.hrApp
  );

  const [deleteItem, setDeleteItem] = React.useState(null);
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

  const handleReset = () => {
    dispatch(setFilteredData(attendanceData));
  };

  const callEditClick = (item) => {
    console.log("Edit attendance:", item);
  };

 
  const callDeleteClick = (item) => {
    setDeleteItem(item);
    dispatch(openModal());
  };

  const handleCustomBtnTitle = ()=>{
    navigate("/leave/create")
   }
  

  const handleDeleteConfirm = () => {
    if (deleteItem) {
      const updatedData = attendanceData.filter(
        (item) => item.id !== deleteItem.id
      );
      dispatch(setFilteredData(updatedData));
      setDeleteItem(null);
      dispatch(closeModal());
      showSuccessToast("Employee deleted successfully!");
    }
  };

  const handleDeleteCancel = () => {
    setDeleteItem(null);
    dispatch(closeModal());
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
          LeaveType={[
            { value: "Sick Leave", label: "Sick Leave" },
            { value: "Casual Leave", label: "Casual Leave" },
            { value: "Earned Leave", label: "Earned Leave" },
            { value: "Maternity Leave", label: "Maternity Leave" },
            { value: "Other", label: "Other" },
          ]}
          // LeaveStatus={[
          //   { value: "Pending", label: "Pending" },
          //   { value: "Accepted", label: "Accepted" },
          //   { value: "Cancelled", label: "Cancelled" },
          // ]}
          handleSearch={handleSearch}
          handleReset={handleReset}
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
        isDelete={true}
        handleOpen={() => console.log("Opening form to add new attendance")}
        callEditClick={callEditClick}
        callDeleteClick={callDeleteClick}
        style={{
          height: `${
            showFilters ? "calc( 100vh - 125px)" : "calc( 100vh - 0px)"
          }`,
        }}
        links={{}}
        customBtn
        customBtnTitle={"Add Attendance"}
        handleCustomBtnTitle={handleCustomBtnTitle}
      />
      <ConfirmModalPopup
        isOpen={isModalOpen}
        message={
          <>
            Are you sure you want to delete <strong>{deleteItem?.name}</strong>{" "}
            ?
          </>
        }
        onSubmit={handleDeleteConfirm}
        onCancel={handleDeleteCancel}
      />
    </div>
  );
};

export default CancelledLeave;
;
