import React from "react";
import TableLayout from "../../../layout/TableLayout";
import { openModal, closeModal } from "../../../redux/reducers/hrReducer";
import { useNavigate } from "react-router-dom";
import { showSuccessToast } from "../../../Utils/ToastsUtils";
import ConfirmModalPopup from "../../../Popups/ConfirmModalPopup";
import { useDispatch, useSelector } from "react-redux";

const Departments = () => {
 const navigate = useNavigate();
  const dispatch = useDispatch();

  const { isModalOpen } = useSelector((state) => state.hrApp);
  const [deleteItem, setDeleteItem] = React.useState(null);

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
      setDeleteItem(item);
      dispatch(openModal());
    };
  
    const handleDeleteConfirm = () => {
      if (deleteItem) {
        setDeleteItem(null);
        dispatch(closeModal());
        showSuccessToast("Department deleted successfully!");
      }
    };
  
    const handleDeleteCancel = () => {
      setDeleteItem(null);
      dispatch(closeModal());
    };
  // const callDeleteClick = (item) => {
  //   console.log("Delete attendance:", item);
  // };

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
      <ConfirmModalPopup
        isOpen={isModalOpen}
        message={"Are you sure you want to delete this item ?"}
        onSubmit={handleDeleteConfirm}
        onCancel={handleDeleteCancel}
      />
    </div>
  );
};

export default Departments;
