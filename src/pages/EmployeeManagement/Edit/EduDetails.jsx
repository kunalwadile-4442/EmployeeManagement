import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addNewEduRow,
  deleteEduRow,
  updateEduRow,
  resetEduDetails,
} from "../../../redux/reducers/eduDetails";
import TableLayout from "../../../layout/TableLayout";
import ReactDatePicker from "react-datepicker";
import { useForm } from "react-hook-form";
import InputField from "../../../components/InputField";
import { format } from "date-fns";
import { showSuccessToast, showErrorToast } from "../../../Utils/ToastsUtils";
import Icon from "../../../components/Icon";
import { App_url } from "../../../Utils/constants/Static";

const EduDetails = () => {
  const dispatch = useDispatch();
  const eduDetails = useSelector((state) => state.eduDetails.eduDetails);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: { eduDetails },
  });

  const onSubmit = (data) => {
    try {
      const transformedData = eduDetails.map((row) => ({
        ...row,
        dateOfCompletion:
          data[row.id]?.dateOfCompletion || row.dateOfCompletion,
        additionalNotes: data[row.id]?.additionalNotes || row.additionalNotes,
        interests: data[row.id]?.interests || row.interests,
        fieldOfStudy: data[row.id]?.fieldOfStudy || row.fieldOfStudy,
        schoolName: data[row.id]?.schoolName || row.schoolName,
        degree: data[row.id]?.degree || row.degree,
      }));

      // Dispatch updated data to Redux
      transformedData.forEach((row) => {
        dispatch(updateEduRow({ id: row.id, updatedRow: row }));
      });

      console.log("Saved Date::", transformedData);
      showSuccessToast("Educational details saved successfully!");
    } catch (error) {
      console.error("Error saving Educational details:", error);
      showErrorToast("An error occurred while saving Educational details.");
    }
  };

  const handleAddNewRow = () => {
    dispatch(addNewEduRow());
  };

  const handleDateChange = (date, id) => {
    const formattedDate = date ? format(date, "yyyy/MM/dd") : "";
    setValue(`${id}.dateOfCompletion`, formattedDate);
    dispatch(
      updateEduRow({ id, updatedRow: { dateOfCompletion: formattedDate } })
    );
  };

  const handleDelete = (id) => {
    dispatch(deleteEduRow(id));
  };

  const columnKey = [
    "School Name",
    "Degree/Diploma",
    "Field(s) of Study",
    "Date of Completion",
    "Additional Notes",
    "Interests",
    "Actions",
  ];

  const renderBody = (item) => (
    <>
      <td>
        <InputField
          placeholder="School Name"
          className="mt-1"
          inputClassName="h-9 rounded-md"
          register={register(`${item.id}.schoolName`, {
            required: "School Name is required", 
          })}
          onBlur={(e) =>
            dispatch(
              updateEduRow({
                id: item.id,
                updatedRow: { schoolName: e.target.value },
              })
            )
          }
          error={errors?.[item.id]?.schoolName}
          required
        />
      </td>
      <td>
        <InputField
          placeholder="Degree/Diploma"
          className="mt-1"
          inputClassName="h-9 rounded-md"
          register={register(`${item.id}.degree`)}
          onBlur={(e) =>
            dispatch(
              updateEduRow({
                id: item.id,
                updatedRow: { degree: e.target.value },
              })
            )
          }
        />
      </td>
      <td>
        <InputField
          placeholder="Field(s) of Study"
          className="mt-1"
          inputClassName="h-9 rounded-md"
          register={register(`${item.id}.fieldOfStudy`)}
          onBlur={(e) =>
            dispatch(
              updateEduRow({
                id: item.id,
                updatedRow: { fieldOfStudy: e.target.value },
              })
            )
          }
        />
      </td>
      <td>
        <ReactDatePicker
          selected={
            watch(`${item.id}.dateOfCompletion`)
              ? new Date(watch(`${item.id}.dateOfCompletion`))
              : null
          }
          onChange={(date) => handleDateChange(date, item.id)}
          dateFormat="yyyy/MM/dd"
          placeholderText="Date of Completion"
          className="mt-1 block w-full border border-gray-300 rounded-md px-2 py-1.5"
        />
      </td>
      <td>
        <InputField
          control_name={`${item.id}.additionalNotes`}
          placeholder="Add Notes"
          className="mt-1"
          useFor="textarea"
          control={control}
          rows={1}
          inputClassName="h-9 rounded-md"
          register={register(`${item.id}.additionalNotes`)}
          onBlur={(e) =>
            dispatch(
              updateEduRow({
                id: item.id,
                updatedRow: { additionalNotes: e.target.value },
              })
            )
          }
        />
      </td>
      <td>
        <InputField
          placeholder="Interests"
          className="mt-1"
          useFor="textarea"
          control={control}
          control_name={`${item.id}.interests`}
          rows={1}
          inputClassName="h-9 rounded-md"
          register={register(`${item.id}.interests`)}
          onBlur={(e) =>
            dispatch(
              updateEduRow({
                id: item.id,
                updatedRow: { interests: e.target.value },
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
          className="w-6 h-6" 
        />
      </td>
    </>
  );

  return (
    <div>
      <TableLayout
        columnKey={columnKey}
        dataItem={eduDetails}
        renderBody={renderBody}
        isAdd={true}
        title="+ Add New Row"
        handleOpen={handleAddNewRow}
        style={{
          height: "calc(100vh - 10px)",
        }}
        customBtn={true}
        handleCustomBtnTitle={handleSubmit(onSubmit)}
        customBtnTitle="Save"
      />
    </div>
  );
};

export default EduDetails;
