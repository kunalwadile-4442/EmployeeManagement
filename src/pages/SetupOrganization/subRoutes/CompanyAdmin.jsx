import React from "react";
import TableLayout from "../../../layout/TableLayout";
import { useNavigate } from "react-router-dom";
import { openModal, closeModal } from "../../../redux/reducers/hrReducer";
import { showSuccessToast } from "../../../Utils/ToastsUtils";
import ConfirmModalPopup from "../../../Popups/ConfirmModalPopup";
import { useDispatch, useSelector } from "react-redux"

const CompanyAdmin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { isModalOpen } = useSelector((state) => state.hrApp);
  const [deleteItem, setDeleteItem] = React.useState(null);


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
          setDeleteItem(item);
          dispatch(openModal());
        };
      
        const handleDeleteConfirm = () => {
          if (deleteItem) {
            setDeleteItem(null);
            dispatch(closeModal());
            showSuccessToast("Item deleted successfully!");
            console.log("Delete successfully",deleteItem); 
          }
        };
      
        const handleDeleteCancel = () => {
          setDeleteItem(null);
          dispatch(closeModal());
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
       <ConfirmModalPopup
        isOpen={isModalOpen}
        message={"Are you sure you want to delete this item ?"}
        onSubmit={handleDeleteConfirm}
        onCancel={handleDeleteCancel}
      />

    </div>
  );
};

export default CompanyAdmin;
