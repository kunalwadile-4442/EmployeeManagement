// // import React from "react";
// // import TableLayout from "../../../layout/TableLayout";
// // import { useNavigate } from "react-router-dom";
// // import * as XLSX from "xlsx"; // Importing the xlsx library

// // const HolidayCalender = () => {
// //   const navigate = useNavigate();

// //   const dummyData = [
// //     {
// //       id: 1,
// //       "Date": "14-Jan-2025",
// //       Day: "Tuesday",
// //       Holiday: "Makar Sankrant",
// //       Type: "Festival"
// //     },
// //     {
// //       id: 2,
// //       "Date": "14-Jan-2025",
// //       Day: "Tuesday",
// //       Holiday: "Makar Sankrant",
// //       Type: "Festival"
// //     },
// //     {
// //       id: 3,
// //       "Date": "14-Jan-2025",
// //       Day: "Tuesday",
// //       Holiday: "Makar Sankrant",
// //       Type: "Festival"
// //     },
// //     {
// //       id: 4,
// //       "Date": "14-Jan-2025",
// //       Day: "Tuesday",
// //       Holiday: "Makar Sankrant",
// //       Type: "Festival"
// //     },
// //     {
// //       id: 5,
// //       "Date": "14-Jan-2025",
// //       Day: "Tuesday",
// //       Holiday: "Makar Sankrant",
// //       Type: "Festival"
// //     },
// //   ];

// //   const columnKey = ["Date", "Day", "Holiday", "Type"];

// //   const renderBody = (item) => (
// //     <>
// //       <td>{item.Date}</td>
// //       <td>{item.Day}</td>
// //       <td>{item.Holiday}</td>
// //       <td>{item.Type}</td>
// //     </>
// //   );

// //   const addNewDesignation = () => {
// //     console.log("addNewDesignation");
// //     navigate("/organization/holiday-calender/create");
// //   };

// //   const callEditClick = (item) => {
// //     // navigate(`/designation/${item.id}/edit`);
// //   };

// //   const callDeleteClick = (item) => {
// //     console.log("Delete attendance:", item);
// //   };

// //   // Function to export data to Excel (XLS)
// //   const handleClickXls = () => {
// //     // Convert dummyData to a worksheet
// //     const ws = XLSX.utils.json_to_sheet(dummyData);

// //     // Create a new workbook and append the sheet
// //     const wb = XLSX.utils.book_new();
// //     XLSX.utils.book_append_sheet(wb, ws, "Holiday Calendar");

// //     // Write and trigger the download of the Excel file
// //     XLSX.writeFile(wb, "Holiday_Calendar.xlsx");
// //   };

// //   return (
// //     <div>
// //       <TableLayout
// //         columnKey={columnKey}
// //         dataItem={dummyData}
// //         renderBody={renderBody}
// //         serial_no={true}
// //         edit={true}
// //         isAdd={true}
// //         isDelete={true}
// //         title="+ Add Holiday"
// //         customBtn
// //         customBtnTitle="Settings"
// //         PDF
// //         XLS
// //         handleClickPdf={() => console.log("PDF")}
// //         handleClickXls={handleClickXls} // Pass the handleClickXls function here
// //         handleCustomBtnTitle={() => console.log("Modal")}
// //         handleOpen={addNewDesignation}
// //         callEditClick={callEditClick}
// //         callDeleteClick={callDeleteClick}
// //         style={{
// //           height: 600,
// //         }}
// //         links={{}}
// //       />
// //     </div>
// //   );
// // };

// // export default HolidayCalender;

// import React from "react";
// import TableLayout from "../../../layout/TableLayout";
// import { useNavigate } from "react-router-dom";
// import * as XLSX from "xlsx"; // Importing the xlsx library
// import { jsPDF } from "jspdf"; // Importing the jsPDF library

// const HolidayCalender = () => {
//   const navigate = useNavigate();

//   const dummyData = [
//     {
//       id: 1,
//       "Date": "14-Jan-2025",
//       Day: "Tuesday",
//       Holiday: "Makar Sankrant",
//       Type: "Festival"
//     },
//     {
//       id: 2,
//       "Date": "14-Jan-2025",
//       Day: "Tuesday",
//       Holiday: "Makar Sankrant",
//       Type: "Festival"
//     },
//     {
//       id: 3,
//       "Date": "14-Jan-2025",
//       Day: "Tuesday",
//       Holiday: "Makar Sankrant",
//       Type: "Festival"
//     },
//     {
//       id: 4,
//       "Date": "14-Jan-2025",
//       Day: "Tuesday",
//       Holiday: "Makar Sankrant",
//       Type: "Festival"
//     },
//     {
//       id: 5,
//       "Date": "14-Jan-2025",
//       Day: "Tuesday",
//       Holiday: "Makar Sankrant",
//       Type: "Festival"
//     },
//   ];

//   const columnKey = ["Date", "Day", "Holiday", "Type"];

//   const renderBody = (item) => (
//     <>
//       <td>{item.Date}</td>
//       <td>{item.Day}</td>
//       <td>{item.Holiday}</td>
//       <td>{item.Type}</td>
//     </>
//   );

//   const addNewDesignation = () => {
//     console.log("addNewDesignation");
//     navigate("/organization/holiday-calender/create");
//   };

//   const callEditClick = (item) => {
//     // navigate(`/designation/${item.id}/edit`);
//   };

//   const callDeleteClick = (item) => {
//     console.log("Delete attendance:", item);
//   };

//   // Function to export data to Excel (XLS)
//   const handleClickXls = () => {
//     const ws = XLSX.utils.json_to_sheet(dummyData);
//     const wb = XLSX.utils.book_new();
//     XLSX.utils.book_append_sheet(wb, ws, "Holiday Calendar");
//     XLSX.writeFile(wb, "Holiday_Calendar.xlsx");
//   };

//   const handleClickPdf = () => {
//     const doc = new jsPDF();

//     doc.setFontSize(12);
//     doc.text("Holiday Calendar", 20, 20);

//     // Table header
//     doc.text("Date", 20, 30);
//     doc.text("Day", 60, 30);
//     doc.text("Holiday", 100, 30);
//     doc.text("Type", 150, 30);

//     let y = 40;

//     dummyData.forEach((item) => {
//       doc.text(item.Date, 20, y);
//       doc.text(item.Day, 60, y);
//       doc.text(item.Holiday, 100, y);
//       doc.text(item.Type, 150, y);
//       y += 10;
//     });

//     doc.save("Holiday_Calendar.pdf");
//   };

//   return (
//     <div>
//       <TableLayout
//         columnKey={columnKey}
//         dataItem={dummyData}
//         renderBody={renderBody}
//         serial_no={true}
//         edit={true}
//         isAdd={true}
//         isDelete={true}
//         title="+ Add Holiday"
//         customBtn
//         customBtnTitle="Settings"
//         PDF
//         XLS
//         handleClickPdf={handleClickPdf}
//         handleClickXls={handleClickXls}
//         handleCustomBtnTitle={() => console.log("Modal")}
//         handleOpen={addNewDesignation}
//         callEditClick={callEditClick}
//         callDeleteClick={callDeleteClick}
//         style={{
//           height: 600,
//         }}
//         links={{}}
//       />
//     </div>
//   );
// };

// export default HolidayCalender;

import React, { useState } from "react";
import TableLayout from "../../../layout/TableLayout";
import { useNavigate } from "react-router-dom";
import * as XLSX from "xlsx";
import { jsPDF } from "jspdf";
import SettingModal from "../../../components/SettingModal";
import FilterForm from "../../../components/FilterForm";
import FilterToggle from "../../../components/FilterHideShow";
import { openModal, closeModal } from "../../../redux/reducers/hrReducer";
import { showSuccessToast } from "../../../Utils/ToastsUtils";
import ConfirmModalPopup from "../../../Popups/ConfirmModalPopup";
import { useDispatch, useSelector } from "react-redux";

const HolidayCalender = () => {
  const navigate = useNavigate();
    const dispatch = useDispatch();
  
    const { isModalOpen } = useSelector((state) => state.hrApp);
    const [deleteItem, setDeleteItem] = React.useState(null);

  const [showFilters, setShowFilters] = React.useState(false);

  const dummyData = [
    {
      id: 1,
      Date: "14-Jan-2025",
      Day: "Tuesday",
      Holiday: "Makar Sankrant",
      Type: "Festival",
    },
    {
      id: 2,
      Date: "14-Jan-2025",
      Day: "Tuesday",
      Holiday: "Makar Sankrant",
      Type: "Festival",
    },
    {
      id: 3,
      Date: "14-Jan-2025",
      Day: "Tuesday",
      Holiday: "Makar Sankrant",
      Type: "Festival",
    },
    {
      id: 4,
      Date: "14-Jan-2025",
      Day: "Tuesday",
      Holiday: "Makar Sankrant",
      Type: "Festival",
    },
    {
      id: 5,
      Date: "14-Jan-2025",
      Day: "Tuesday",
      Holiday: "Makar Sankrant",
      Type: "Festival",
    },
  ];

  const columnKey = ["Date", "Day", "Holiday", "Type"];

  const renderBody = (item) => (
    <>
      <td>{item.Date}</td>
      <td>{item.Day}</td>
      <td>{item.Holiday}</td>
      <td>{item.Type}</td>
    </>
  );

  const addNewDesignation = () => {
    console.log("addNewDesignation");
    navigate("/organization/holiday-calender/create");
  };

  const callEditClick = (item) => {
    navigate(`/organization/holiday-calender/edit/${item.id}`);
  };
  
  const callDeleteClick = (item) => {
        setDeleteItem(item);
        dispatch(openModal());
      };
    
      const handleDeleteConfirm = () => {
        if (deleteItem) {
          setDeleteItem(null);
          dispatch(closeModal());
          showSuccessToast("Holiday deleted successfully!");
          console.log("Delete successfully",deleteItem); 
        }
      };
    
      const handleDeleteCancel = () => {
        setDeleteItem(null);
        dispatch(closeModal());
      };
  


  const handleClickXls = () => {
    const ws = XLSX.utils.json_to_sheet(dummyData);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Holiday Calendar");
    XLSX.writeFile(wb, "Holiday_Calendar.xlsx");
  };

  const handleClickPdf = () => {
    const doc = new jsPDF();

    doc.setFontSize(12);
    doc.text("Holiday Calendar", 20, 20);

    doc.text("Date", 20, 30);
    doc.text("Day", 60, 30);
    doc.text("Holiday", 100, 30);
    doc.text("Type", 150, 30);

    let y = 40;

    dummyData.forEach((item) => {
      doc.text(item.Date, 20, y);
      doc.text(item.Day, 60, y);
      doc.text(item.Holiday, 100, y);
      doc.text(item.Type, 150, y);
      y += 10;
    });

    doc.save("Holiday_Calendar.pdf");
  };

  const locationOptions = [
    { value: "pune", label: "Pune" },
    { value: "solapur", label: "Solapur" },
  ];
  const holidayTypeOptions = [
    { value: "National", label: "National" },
    { value: "Weekly", label: "Weekly" },
    { value: "Festivals", label: "Festivals" },
  ];
  const [isModalOpenSetting, setIsModalOpen] = useState(false);

  const handleSearch = (filters) => {};

  const handleReset = () => {};

  const openSettingsModal = () => {
    setIsModalOpen(true);
  };

  const closeSettingsModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <FilterToggle showFilters={showFilters} setShowFilters={setShowFilters} />

      <div
  className={`transition-all duration-500 ease-in-out overflow-hidden transform ${
    showFilters
      ? "opacity-100 translate-y-0"
      : "opacity-0 -translate-y-5"
  }`}
>
      {showFilters && (
        <FilterForm
          Locations={locationOptions}
          HolidayType={holidayTypeOptions}
          FormDate
          ToDate
          HolidayName
          handleSearch={handleSearch}
          handleReset={handleReset}
        />
      )}
</div>
      <TableLayout
        columnKey={columnKey}
        dataItem={dummyData}
        renderBody={renderBody}
        serial_no={true}
        edit={true}
        isAdd={true}
        isDelete={true}
        title="+ Add Holiday"
        customBtn
        customBtnTitle="Settings"
        PDF
        XLS
        handleClickPdf={handleClickPdf}
        handleClickXls={handleClickXls}
        handleCustomBtnTitle={openSettingsModal}
        handleOpen={addNewDesignation}
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

      <SettingModal isOpen={isModalOpenSetting} onClose={closeSettingsModal} />
    </div>
  );
};

export default HolidayCalender;
