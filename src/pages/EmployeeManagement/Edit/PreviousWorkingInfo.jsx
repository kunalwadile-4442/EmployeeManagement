import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addNewRow,
  updateRow,
  deleteRow,
} from "../../../redux/reducers/previousWorkingInfo";
import TableLayout from "../../../layout/TableLayout";
import InputField from "../../../components/InputField";
import ReactDatePicker from "react-datepicker";
import { format } from "date-fns";
import { useForm } from "react-hook-form";
import { showSuccessToast, showErrorToast } from "../../../Utils/ToastsUtils";
import Icon from "../../../components/Icon";
import { App_url } from "../../../Utils/constants/Static";

const PreviousWorkingInfo = () => {
  const dispatch = useDispatch();
  const previousWorkingInfo = useSelector(
    (state) => state.previousWorkingInfo.previousWorkingInfo || []
  );

  const { register, handleSubmit, setValue,control, watch,formState: { errors }, } = useForm({
    defaultValues: { previousWorkingInfo },
  });

  const handleDateChange = (date, id, field) => {
    const formattedDate = date ? format(date, "yyyy/MM/dd") : null;
    setValue(`${id}.${field}`, formattedDate); 
    dispatch(updateRow({ id, updatedRow: { [field]: formattedDate } })); // Dispatch the action
  };

  const handleInputChange = (id, field, value) => {
    setValue(`${id}.${field}`, value); 
    dispatch(updateRow({ id, updatedRow: { [field]: value } })); 
  };

  const handleAddNewRow = () => {
    dispatch(addNewRow());
  };

  const handleDelete = (id) => {
    dispatch(deleteRow(id)); 
  };

   const handleSave = (data) => {
      try {
        const transformedData = previousWorkingInfo.map((row) => ({
          ...row,
          companyName: data[row.id]?.companyName || row.companyName,
          fromDate: data[row.id]?.fromDate || row.fromDate,
          jobDescription: data[row.id]?.jobDescription || row.jobDescription,
          jobTitle: data[row.id]?.jobTitle || row.jobTitle,
          toDate: data[row.id]?.toDate || row.toDate,
        }));
    
        // transformedData.forEach((row) => {
        //   dispatch(updateRow({ id: row.id, updatedRow: row }));
        // });
        
       console.log("Saved Data previousWorkingInfo::",transformedData)
        showSuccessToast("Previous working information saved successfully");
      } catch (error) {
        console.error("Error saving Educational details:", error);
        showErrorToast("An error occurred while saving. Please try again.");
      }
    };
    


  // const handleSave = (data) => {
  //   try {
  //     console.log("Saved Data:", previousWorkingInfo);
  //     showSuccessToast("!");
  //   } catch (error) {
  //     console.error("Error saving data:", error);
  //     showErrorToast("An error occurred while saving. Please try again.");
  //   }
  // };

  const columnKey = [
    "Company Name",
    "Job Title",
    "From Date",
    "To Date",
    "Job Description",
    "Actions",
  ];

  const renderBody = (item) => (
    <>
      <td>
      <InputField
  placeholder="Company Name"
  className="mt-1"
  inputClassName="h-9 rounded-md"
  register={register(`${item.id}.companyName`, {
    required: "Company Name is required", // Add the required validation rule
  })}
  onBlur={(e) =>
    dispatch(
      updateRow({
        id: item.id,
        updatedRow: { companyName: e.target.value },
      })
    )
  }
  error={errors?.[item.id]?.companyName} // Display error message if any
  required
/>

      </td>
      <td>
        <InputField
          placeholder="Job Title"
          className="mt-1"
          inputClassName="h-9 rounded-md"
          register={register(`${item.id}.jobTitle`)}
          onBlur={(e) =>
            dispatch(
              updateRow({
                id: item.id,
                updatedRow: { jobTitle: e.target.value },
              })
            )
          }
        />
      </td>
      <td>
        <ReactDatePicker
          selected={
            watch(`${item.id}.fromDate`)
              ? new Date(watch(`${item.id}.fromDate`))
              : null
          }
          onChange={(date) => handleDateChange(date, item.id, "fromDate")}
          dateFormat="yyyy/MM/dd"
          placeholderText="From Date"
          className="mt-1 block w-full border border-gray-300 rounded-md px-2 py-1.5"
        />
      </td>
      <td>
        <ReactDatePicker
          selected={
            watch(`${item.id}.toDate`)
              ? new Date(watch(`${item.id}.toDate`))
              : null
          }
          onChange={(date) => handleDateChange(date, item.id, "toDate")}
          dateFormat="yyyy/MM/dd"
          placeholderText="To Date"
          className="mt-1 block w-full border border-gray-300 rounded-md px-2 py-1.5"
        />
      </td>
      <td>
        <InputField
          placeholder="Job Description"
          className="mt-1"
          control_name={`${item.id}.jobDescription`}
          useFor="textarea"
          control={control}
          rows={1}
          inputClassName="h-9 rounded-md"
          register={register(`${item.id}.jobDescription`)}
          onBlur={(e) =>
            dispatch(
              updateRow({
                id: item.id,
                updatedRow: { jobDescription: e.target.value },
              })
            )
          }
        />
      </td>
      <td>
        <Icon
          image
          attrIcon={App_url.image.delete}
          button
          size="md"
          onClick={() => handleDelete(item.id)}
          className="w-6 h-6" // Fixed size
        />
      </td>
    </>
  );

  return (
    <div>
      <TableLayout
        columnKey={columnKey}
        dataItem={previousWorkingInfo}
        renderBody={renderBody}
        isAdd={true}
        title="+ Add New Row"
        handleOpen={handleAddNewRow}
        style={{
          height: "calc(100vh - 10px)", 
        }}
        isDelete={false}
        customBtn={true}
        handleCustomBtnTitle={handleSubmit(handleSave)}
        customBtnTitle="Save"
      />
    </div>
  );
};

export default PreviousWorkingInfo;
