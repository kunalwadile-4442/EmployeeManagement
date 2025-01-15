import Icon from "../components/Icon";
// import PaginationNew from "../components/PaginationNew";
import Pagination from "../components/PaginationStatic"
import Scrollbar from "../components/Scrollbar";
import { App_url } from "../Utils/constants/Static";
import React, { useState, useEffect } from "react";

const TableLayout = ({
  columnKey,
  dataItem,
  renderBody,
  serial_no,
  who_is,
  who_not,
  edit,
  view,
  isDelete,
  viewButton,
  isAdd,
  CheckLeave,
  tableTitle,
  title,
  handleOpen,
  WhoIsReported,
  callEditClick,
  callDeleteClick,
  callViewClick,
  callViewButtonClick,
  WhoNotSent,
  handleWhoNotSent,
  links,
  filterData,
  handleCheckLeaves,
  handleClickWhoIs,
  ClickTimeButton,
  handleClickWhoNot,
  ClickHandleCheckIn,
  handleClickWhoCheckLate,
  handleWhoIsReported,
  CheckIn,
  TimeCount,
  mainTitle,
  PDF,
  XLS,
  handleClickXls,
  handleClickPdf,
  who_check_in_late,
  customBtn,
  handleCustomBtnTitle,
  customBtnTitle,
  style,
}) => {
  // Removed the usePage hook from Inertia.js as it's no longer necessary
  const [currentTime, setCurrentTime] = useState(
    new Date().toLocaleTimeString()
  );

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = dataItem?.slice(indexOfFirstItem, indexOfLastItem);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(()=>{
    setCurrentPage(1);
  },[dataItem])

  const renderHeader = () => {
    return (
      <div className="flex justify-between items-center gap-3 mb-2">
        <div className="flex ml-4 gap-3">
          {/* {isAdd && (
            <button
              onClick={handleOpen}
              className="px-4 h-[30px] text-white gap-0 rounded-lg bg-logo-text-color hover:bg-light-logo-color"
            >
              {title}
            </button>
          )} */}
          {who_is && (
            <button
              onClick={handleClickWhoIs}
              className="px-4 h-[30px] text-white gap-0 rounded-lg bg-logo-text-color hover:bg-light-logo-color"
            >
              Who Is In
            </button>
          )}
          {who_not && (
            <button
              onClick={handleClickWhoNot}
              className="px-4 h-[30px] text-white gap-0 rounded-lg bg-logo-text-color hover:bg-light-logo-color"
            >
              Who Is Not Yet
            </button>
          )}
          {who_check_in_late && (
            <button
              onClick={handleClickWhoCheckLate}
              className="px-4 h-[30px] text-white gap-0 rounded-lg bg-logo-text-color hover:bg-light-logo-color"
            >
              Who Check In Late
            </button>
          )}
          {WhoIsReported && (
            <button
              onClick={handleWhoIsReported}
              className="px-4 h-[30px] text-white gap-0 rounded-lg bg-logo-text-color hover:bg-light-logo-color"
            >
              Who is Reported
            </button>
          )}
          {WhoNotSent && (
            <button
              onClick={handleWhoNotSent}
              className="px-4 h-[30px] text-white gap-0 rounded-lg bg-logo-text-color hover:bg-light-logo-color"
            >
              Who not Sent
            </button>
          )}
        </div>
        {/* right side  */}
        <div className="flex mr-4 gap-3">
          {TimeCount && (
            <button
              onClick={ClickTimeButton}
              className="w-[100px] h-[30px] text-white gap-0 rounded-lg bg-logo-text-color hover:bg-light-logo-color"
            >
              {currentTime}
            </button>
          )}
          {CheckIn && (
            <button
              onClick={ClickHandleCheckIn}
              className="px-4 h-[30px] text-white gap-0 rounded-lg bg-logo-text-color hover:bg-light-logo-color"
            >
              Check In
            </button>
          )}
          {CheckLeave && (
            <button
              onClick={handleCheckLeaves}
              className="px-4 h-[30px] text-white gap-0 rounded-lg bg-logo-text-color hover:bg-light-logo-color"
            >
              Check Leave
            </button>
          )}
           {PDF && (
            <button
              onClick={handleClickPdf}
              className="px-4 h-[30px] text-white gap-0 rounded-lg bg-logo-text-color hover:bg-light-logo-color"
            >
              PDF
            </button>
          )}
           {XLS && (
            <button
              onClick={handleClickXls}
              className="px-4 h-[30px] text-white gap-0 rounded-lg bg-logo-text-color hover:bg-light-logo-color"
            >
              XLS
            </button>
          )}

           {isAdd && (
            <button
              onClick={handleOpen}
              className="px-4 h-[30px] text-white gap-0 rounded-lg bg-logo-text-color hover:bg-light-logo-color"
            >
              {title}
            </button>
          )}
          {customBtn && (
            <button
              onClick={handleCustomBtnTitle}
              className="px-4 h-[30px] text-white gap-0 rounded-lg bg-logo-text-color hover:bg-light-logo-color"
            >
              {customBtnTitle}
            </button>
          )}
        </div>
      </div>
    );
  };

  const renderTableHeaders = () => {
    return (
      <thead className="opacity-100 rounded-lg">
        <tr className="text-left text-gray-700 text-[14px]">
          {serial_no && <th className=" top-0 py-2 px-2 ">Sr.no</th>}
          {columnKey?.map((key, index) => (
            <th key={index} className=" top-0 py-2 px-2  ">
              {key}
            </th>
          ))}
          {(edit || view || isDelete) && (
            <th className=" top-0 py-2 px-2 ">
              Actions
            </th>
          )}
          {viewButton && (
            <th className=" top-0 py-2 px-2">Actions</th>
          )}
        </tr>
      </thead>
    );
  };

  const renderTableBody = () => {
    return (
      <tbody className="text-sm">
        {currentItems && currentItems.length > 0 ? (
          currentItems.map((item, index) => (
            <tr key={index} className="border-b hover:bg-gray-50 my-2">
              {serial_no && (
                <td className="py-1 px-4">{index + 1 + indexOfFirstItem}</td>
              )}
              {renderBody(item)}
              {(edit || view || isDelete) && (
                <td className="flex justify-center items-center w-28 h-10">
                {edit && (
                  <Icon
                    image
                    attrIcon={App_url.image.edit}
                    button
                    size="md"
                    onClick={() => callEditClick(item)}
                    className="w-5 h-5" // Fixed size
                  />
                )}
                {view && (
                  <Icon
                    image
                    attrIcon={App_url.image.view}
                    button
                    size="md"
                    onClick={() => callViewClick(item)}
                    className="w-6 h-6" // Fixed size
                  />
                )}
                {isDelete && (
                  <Icon
                    image
                    attrIcon={App_url.image.delete}
                    button
                    size="md"
                    onClick={() => callDeleteClick({...item,index})}
                    className="w-6 h-6" // Fixed size
                  />
                )}
              </td>
              
              )}

              {viewButton && (
                <td className="flex justify-center items-center">
                  <button
                    type="button"
                    className="px-3 py-1 rounded-[4px] bg-[#d088f171] text-[#3C932F]"
                    onClick={() => callViewButtonClick(item)}
                  >
                    View
                  </button>
                </td>
              )}
            </tr>
          ))
        ) : (
          <tr>
            <td
              colSpan={
                columnKey.length +
                (serial_no ? 1 : 0) +
                (edit ? 1 : 0) +
                (isAdd ? 1 : 0)
              }
              className="py-4 px-4 text-center text-gray-500"
            >
              No Data Found
            </td>
          </tr>
        )}
      </tbody>
    );
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // const renderMainHeader = () => {
  //   return (
  //     <div className="flex justify-between items-center px-3 pb-2">
  //       <h1 className="font-poppins text-[22px] font-medium leading-[45px] text-left">
  //         {mainTitle}
  //       </h1>
  //     </div>
  //   );
  // };

  const renderTableBottomContent = () => {
    return (
      <div className="absolute bottom-0 z-20 right-0 flex justify-between items-center p-2 bg-white left-2 lg:left-[230px]">
        <p className="text-[#7D7D7D]">© 2024 HR_App</p>
        <Pagination
          totalItems={dataItem?.length || 0}
          itemsPerPage={itemsPerPage}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </div>
    );
  };

//   return (
//     <>
//       <div className="w-full text-sm">
//         {/* {renderMainHeader()} */}
//         <div
//           className="bg-transparent pb-4 rounded-lg shadow-md pt-2"
//           style={{
//             borderRadius: "40px 0px 0px 0px",
//             height: "100vh",
//           }}
//         >
//           {renderHeader()}
//           {/* <div className="px-2 mb-2 text-[15px]">
//             <strong> {tableTitle} </strong>
//           </div> */}
//           <Scrollbar style={style}>
//             <table className="w-full border-collapse">
//               {renderTableHeaders()}
//               {renderTableBody()}
//             </table>
//           </Scrollbar>
//         </div>
//         {renderTableBottomContent()}
//       </div>
//     </>
//   );
// };

return (
  <>
    <div className="w-full text-sm">
      {/* {renderMainHeader()} */}
      <Scrollbar style={style}>

      <div
        className="bg-transparent pb-4 rounded-lg  pt-2 mr-3"
        style={{
          borderRadius: "40px 0px 0px 0px",
          height: "100vh",
        }}
      >
        {renderHeader()}
        {/* <div className="px-2 mb-2 text-[15px]">
          <strong> {tableTitle} </strong>
        </div> */}
          <table className="w-full border-collapse">
            {renderTableHeaders()}
            {renderTableBody()}
          </table>
      </div>
        </Scrollbar>
      {renderTableBottomContent()}
    </div>
  </>
);
};

export default TableLayout;
