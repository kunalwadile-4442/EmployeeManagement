import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import TableLayout from "../../../layout/TableLayout";
import FilterForm from "../../../components/FilterForm";
import FilterToggle from "../../../components/FilterHideShow";
import {
  setFilteredData,
  openModal,
  closeModal,
} from "../../../redux/reducers/hrReducer";
import Modal from "../../../Popups/Modal";

const CancelledLeave = () => {
  const dispatch = useDispatch();
  const { attendanceData, filteredData, isModalOpen, modalData } = useSelector(
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

  const handleClickWhoCheckLate = () => {
    console.log("handleWhoNotSent clicked");
    const tableData = [
      ["John Doe", "2025-01-01"],
      ["Jane Smith", "2025-01-02"],
      ["Mark Lee", "2025-01-03"],
      ["Alice Brown", "2025-01-04"],
      ["Robert White", "2025-01-05"],
    ];
    dispatch(
      openModal({
        title: "Late CheckIn",
        tableHeaders: ["Full Name", "In Date"],
        tableData: tableData,
      })
    );
  };
  const handleCloseModal = () => {
    dispatch(closeModal());
  };
  const handleReset = () => {
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
          LeaveType={[
            { value: "Present", label: "Present" },
            { value: "Absent", label: "Absent" },
            { value: "Late", label: "Late" },
          ]}
          LeaveStatus={[
            { value: "Pending", label: "Pending" },
            { value: "Accepted", label: "Accepted" },
            { value: "Cancelled", label: "Cancelled" },
          ]}
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
        callViewClick={callViewClick}
        // style={{ height: `${showFilters ? 'calc( 100vh - 250px)' : 'calc( 100vh - 180px)'}`}} // without buttons 20px
        style={{
            height: `${
              showFilters ? "calc( 100vh - 125px)" : "calc( 100vh - 0px)"
            }`,
          }}
        links={{}}
      />

      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        title={modalData?.title}
        tableHeaders={modalData?.tableHeaders || []}
        tableData={modalData?.tableData || []}
      />
    </div>
  );
};

export default CancelledLeave;
