import React from "react";
import { useDispatch, useSelector } from "react-redux";
import TableLayout from "../../../layout/TableLayout";
import FilterForm from "../../../components/FilterForm";
import FilterToggle from "../../../components/FilterHideShow";
import { setFilteredData,openModal, closeModal } from "../../../redux/reducers/hrReducer";
import { useNavigate } from "react-router-dom";
// import {  } from "../../../redux/reducers/hrReducer";
import { showSuccessToast } from "../../../Utils/ToastsUtils";
import ConfirmModalPopup from "../../../Popups/ConfirmModalPopup";

const EmployeeInfo = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { attendanceData, filteredData, isModalOpen } = useSelector((state) => state.hrApp);
  const [deleteItem, setDeleteItem] = React.useState(null);
  const [showFilters, setShowFilters] = React.useState(false);

  const locationOption = [
    { value: "New York", label: "New York" },
    { value: "San Francisco", label: "San Francisco" },
    { value: "Los Angeles", label: "Los Angeles" },
    { value: "Chicago", label: "Chicago" },
  ];

  const departmentOption = [
    { value: "HR", label: "HR" },
    { value: "Engineering", label: "Engineering" },
    { value: "Marketing", label: "Marketing" },
    { value: "Finance", label: "Finance" },
  ];

  const designationOption = [
    { value: "Manager", label: "Manager" },
    { value: "Developer", label: "Developer" },
    { value: "Designer", label: "Designer" },
    { value: "Analyst", label: "Analyst" },
  ];

  const employeeStatusOption = [
    { value: "Active", label: "Active" },
    { value: "Terminated", label: "Terminated" },
    { value: "Deceased", label: "Deceased" },
    { value: "Resigned", label: "Resigned" },
  ];

  const handleSearch = (filters) => {
    let filtered = attendanceData;

    if (filters.emp_first_name) {
      filtered = filtered.filter((item) =>
        item.name.toLowerCase().includes(filters.emp_first_name.toLowerCase())
      );
    }

    // if (filters.location) {
    //   filtered = filtered.filter((item) => item.location === filters.location);
    // }

    // if (filters.dept_name) {
    //   filtered = filtered.filter(
    //     (item) => item.department === filters.dept_name
    //   );
    // }

    // if (filters.desi_name) {
    //   filtered = filtered.filter(
    //     (item) => item.designation === filters.desi_name
    //   );
    // }

    // if (filters.emp_status) {
    //   filtered = filtered.filter((item) => item.status === filters.emp_status);
    // }

    dispatch(setFilteredData(filtered));
  };

  const handleReset = () => {
    dispatch(setFilteredData(attendanceData));
  };

  const callEditClick = (item) => {
    console.log("Edit attendance:", item);
    navigate(`/employee/edit/${item.id}`);
  };

  const callDeleteClick = (item) => {
    setDeleteItem(item);
    dispatch(openModal());
  };

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

  const addNewEmp = () => {
    console.log("addNewEmp");
    navigate("/employee/info/create");
  };

  const columnKey = ["Name", "Date", "Status"];

  const renderBody = (item) => (
    <>
      <td>{item.name}</td>
      <td>{item.date}</td>
      <td>{item.status}</td>
    </>
  );

  return (
    <div>
      <FilterToggle showFilters={showFilters} setShowFilters={setShowFilters} />

      {showFilters && (
        <FilterForm
          EmployeeName={attendanceData.map((item) => ({
            value: item.name,
            label: item.name,
          }))}
          Locations={locationOption}
          Department={departmentOption}
          Designation={designationOption}
          EmpStatus={employeeStatusOption}
          handleSearch={handleSearch}
          handleReset={handleReset}
        />
      )}

      <TableLayout
        columnKey={columnKey}
        dataItem={filteredData.length > 0 ? filteredData : attendanceData}
        renderBody={renderBody}
        serial_no={true}
        edit={true}
        isAdd={true}
        isDelete={true}
        title="+ Add New Employee"
        handleOpen={addNewEmp}
        callEditClick={callEditClick}
        callDeleteClick={callDeleteClick}
        style={{
          height: `${
            showFilters ? "calc( 100vh - 160px)" : "calc( 100vh - 20px)"
          }`,
        }}
        links={{}}
      />

      <ConfirmModalPopup
        isOpen={isModalOpen}
        message={
          <>
            Are you sure you want to delete <strong>{deleteItem?.name}</strong> ?
          </>
        }
        onSubmit={handleDeleteConfirm}
        onCancel={handleDeleteCancel}
      />
    </div>
  );
};

export default EmployeeInfo;
