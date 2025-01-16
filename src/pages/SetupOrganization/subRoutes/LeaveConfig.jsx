import React, { useState } from "react";
import TableLayout from "../../../layout/TableLayout";
import SimpleModal from "../../../Popups/SimpleModal";
import { openModal, closeModal } from "../../../redux/reducers/hrReducer";
import { showSuccessToast } from "../../../Utils/ToastsUtils";
import ConfirmModalPopup from "../../../Popups/ConfirmModalPopup";
import { useDispatch, useSelector } from "react-redux";

const LeaveConfig = () => {
  const dispatch = useDispatch();

  const { isModalOpen } = useSelector((state) => state.hrApp);
  const [deleteItem, setDeleteItem] = React.useState(null);
  const dummyData = [
    {
      id: 1,
      LeaveType: "Sick",
      Days: 12,
    },
  ];

  const columnKey = ["Leave Type", " Days Count for year"];

  const renderBody = (item) => (
    <>
      <td>{item["LeaveType"]}</td>
      <td>{item.Days}</td>
    </>
  );

 
const callDeleteClick = (item) => {
      setDeleteItem(item);
      dispatch(openModal());
    };
  
    const handleDeleteConfirm = () => {
      if (deleteItem) {
        setDeleteItem(null);
        dispatch(closeModal());
        showSuccessToast("Leave Config deleted successfully!");
        console.log("Deleted successfully",deleteItem);
        
      }
    };
  
    const handleDeleteCancel = () => {
      setDeleteItem(null);
      dispatch(closeModal());
    };

  const [isModalSimpleOpen, setIsModalOpen] = useState(false);

  const openSettingsModal = () => {
    setIsModalOpen(true);
  };

  const closeSettingsModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <TableLayout
        columnKey={columnKey}
        dataItem={dummyData}
        renderBody={renderBody}
        serial_no={true}
        isDelete={true}
        customBtn
        customBtnTitle="+ Add Leave"
        handleCustomBtnTitle={openSettingsModal}
        callDeleteClick={callDeleteClick}
        style={{
          height: "calc(100vh - 10px)", 
        }}
        links={{}}
      />
      <SimpleModal
        isOpen={isModalSimpleOpen}
        onClose={closeSettingsModal}
        title="Leave Settings"
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

export default LeaveConfig;
