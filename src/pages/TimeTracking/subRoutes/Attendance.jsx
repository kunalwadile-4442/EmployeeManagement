// Attendance.js
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
import Modal from "../../../Popups/Modal";
import ConfirmModalPopup from "../../../Popups/ConfirmModalPopup";
import { showSuccessToast } from "../../../Utils/ToastsUtils";
import LateMark from "../../../components/LateMark";
import AddAttendance from "../../../Popups/AddAttendance";

const Attendance = () => {
  const dispatch = useDispatch();
  const { timeTrackData, filteredData, isModalOpen, modalData } = useSelector(
    (state) => state.hrApp
  );

  const [openModalAttendance, setOpenModalAttendance] = React.useState(false);
  const [openModalConfirm, setOpenModalConfirm] = React.useState(false);
  const [deleteItem, setDeleteItem] = React.useState(null);
  const [showFilters, setShowFilters] = React.useState(false);

  const handleSearch = (filters) => {
    let filtered = timeTrackData;

    if (filters.emp_first_name) {
      filtered = filtered.filter((item) =>
        item.name.toLowerCase().includes(filters.emp_first_name.toLowerCase())
      );
    }

    console.log("selected Filters", filters);
    console.log("filtered Data", filtered);
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
    dispatch(setFilteredData(timeTrackData));
  };

  const callEditClick = (item) => {
    setOpenModalAttendance(true); 
    console.log("Edit attendance:", item);
  };
  const callDeleteClick = (item) => {
    setDeleteItem(item);
    setOpenModalConfirm(true); 
  };

  const handleDeleteConfirm = () => {
    if (deleteItem) {
      const updatedData = timeTrackData.filter(
        (item) => item.id !== deleteItem.id
      );
      dispatch(setFilteredData(updatedData));
      setDeleteItem(null);
      setOpenModalConfirm(false);
      showSuccessToast("Employee deleted successfully!");
    }
  };

  const handleDeleteCancel = () => {
    setDeleteItem(null);
    setOpenModalConfirm(false);
  };

  const calculateDuration = (checkInTime, checkOutTime) => {
    const parseTime = (time) => {
      const [hoursMinutes, modifier] = time.split(" ");
      let [hours, minutes] = hoursMinutes.split(":");
  
      // Convert to 24-hour format
      hours = parseInt(hours, 10);
      if (modifier === "PM" && hours !== 12) {
        hours += 12;
      }
      if (modifier === "AM" && hours === 12) {
        hours = 0;
      }
  
      return { hours, minutes: parseInt(minutes, 10) };
    };
  
    if (!checkInTime || !checkOutTime) return "--";
  
    const checkIn = parseTime(checkInTime);
    const checkOut = parseTime(checkOutTime);
  
    const checkInMinutes = checkIn.hours * 60 + checkIn.minutes;
    const checkOutMinutes = checkOut.hours * 60 + checkOut.minutes;
  
    const diffMinutes = checkOutMinutes - checkInMinutes;
    if (diffMinutes < 0) return "--"; 
  
    const hours = Math.floor(diffMinutes / 60);
    const minutes = diffMinutes % 60;
  
    return `${hours} hr ${minutes} min`;
  };
  
  const renderBody = (item) => (
    <>
      <td className="min-w-[230px]">
        {item ? (
          <LateMark
            status={item?.status}
            checkInTime={item?.firstCheckInTime}
          />
        ) : (
          "--"
        )}
      </td>
      <td>{item?.employee || "--"}</td>
      <td>{item?.firstCheckInTime || "--"}</td>
      <td>{item?.lastCheckOutTime || "--"}</td>
      <td>{item?.attendanceDate || "--"}</td>
      <td>{calculateDuration(item?.firstCheckInTime, item?.lastCheckOutTime)}</td>
      <td>{item?.status || "--"}</td>
    </>
  );

  const columnKey = [
    "Late Mark",
    "Employee",
    "First Check In Time",
    "Last Check Out Time",
    "Att. Date",
    "Duration",
    "Status",
  ];

  const handleCustomBtnTitle = () => {
    setOpenModalAttendance(true); // Open the modal
  };

  const closeModal = () => {
    setOpenModalAttendance(false); // Close the modal
  };

  return (
    <div>
      <FilterToggle showFilters={showFilters} setShowFilters={setShowFilters} />

      <div
        className={`transition-all duration-500 ease-in-out ${
          showFilters
            ? "opacity-100 translate-y-0"
            : " opacity-0 -translate-y-5"
        }`}
        style={{ transitionProperty: "max-height, opacity, transform" }}
      >
        {showFilters && (
          <FilterForm
            EmployeeName={timeTrackData.map((item) => ({
              value: item.name,
              label: item.name,
            }))}
            FormDate
            ToDate
            handleSearch={handleSearch}
            handleReset={handleReset}
          />
        )}
      </div>

      <TableLayout
        columnKey={columnKey}
        dataItem={filteredData.length > 0 ? filteredData : timeTrackData}
        renderBody={renderBody}
        serial_no={true}
        edit={true}
        // view={true}
        who_is
        handleClickWhoIs={() => console.log("who_is is click")}
        who_check_in_late
        handleClickWhoCheckLate={handleClickWhoCheckLate}
        who_not
        handleClickWhoNot={() => console.log("handleClickWhoNot clicked")}
        TimeCount={true}
        CheckIn
        ClickHandleCheckIn={() => console.log("ClickHandleCheckIn clicked")}
        CheckLeave
        handleCheckLeaves={() => console.log("handleCheckLeaves clicked")}
        isDelete={true}
        handleOpen={() => console.log("Opening form to add new attendance")}
        callEditClick={callEditClick}
        callDeleteClick={callDeleteClick}
        style={{
          height: `${
            showFilters ? "calc( 100vh - 90px)" : "calc( 100vh - 20px)"
          }`,
        }}
        links={{}}
        customBtn
        handleCustomBtnTitle={handleCustomBtnTitle}
        customBtnTitle="+ Add Attendance"
      />

      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        title={modalData?.title}
        tableHeaders={modalData?.tableHeaders || []}
        tableData={modalData?.tableData || []}
      />
      <ConfirmModalPopup
        isOpen={openModalConfirm}
        message={"Are you sure you want to delete this item?"}
        onSubmit={handleDeleteConfirm}
        onCancel={handleDeleteCancel}
      />
      <AddAttendance isOpen={openModalAttendance} onClose={closeModal} />
    </div>
  );
};

export default Attendance;
