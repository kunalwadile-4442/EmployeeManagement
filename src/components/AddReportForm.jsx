import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import InputError from '../components/InputError'; 
import InputLabel from '../components/InputLabel';
import TextInput from '../components/TextInput'; 
import DropdownSelect from '../components/DropdownSelect'; 
import FormLayout from '../layout/FormLayout'; 

function AddReportForm() {
  const { register, handleSubmit, formState: { errors }, setValue, getValues } = useForm();
  const [leaveDays, setLeaveDays] = useState(0);

  const ProjectName = [
    { label: 'TriSteel', value: 'TriSteel' },
    { label: 'HR_APP', value: 'HR_APP' },
    { label: 'V99', value: 'V99' },
    { label: 'Pcorp', value: 'Pcorp' },
  ];

  const calculateLeaveDays = () => {
    const fromDate = getValues('leave_from_date');
    const toDate = getValues('leave_to_date');
    
    if (fromDate && toDate) {
      const diffTime = Math.abs(new Date(toDate) - new Date(fromDate));
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) + 1; 
      setLeaveDays(diffDays);
    }
  };

  useEffect(() => {
    calculateLeaveDays();
  }, [getValues('leave_from_date'), getValues('leave_to_date')]);

  const onSubmit = (data) => {
    console.log("Leave Application Data: ", data);
  };

  return (
    <FormLayout formTitle="Add Report" content={{ submit: "Add Report", cancel: "Cancel" }}>
      <div className="leave-apply-form">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="grid grid-cols-2 gap-4 pb-2">
            <div>
              <InputLabel htmlFor="project_name" value="Project Name" />
              <DropdownSelect
                className="mt-1 w-full"
                name="project_name"
                placeholder="Select Project..."
                options={ProjectName}
                onSelect={(selectedOption) => setValue('project_name', selectedOption?.value)}
              />
              <InputError message={errors.project_name?.message} className="mt-2" />
            </div>
            <div>
              <InputLabel htmlFor="select_date" value="Select Date" />
              <TextInput
                id="select_date"
                type="date"
                name="select_date"
                className="mt-1 block w-full"
                {...register("select_date", { required: "Please Select Date..." })}
              />
              <InputError message={errors.select_date?.message} className="mt-2" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 pb-2">
            <div>
              <InputLabel htmlFor="time_in-hr" value="Time In hours" />
              <TextInput
                id="time_in-hr"
                type="text"
                name="time_in-hr"
                placeholder="Enter Working Hours"
                className="mt-1 block w-full"
                {...register("time_in-hr", { required: "Working hours are required" })}
              />
              <InputError message={errors.time_in_hr?.message} className="mt-2" />
            </div>
            <div>
              <InputLabel htmlFor="main_sent_to" value="Send Mail To" />
              <TextInput
                id="main_sent_to"
                type="email"
                name="main_sent_to"
                placeholder="Enter Mail"
                className="mt-1 block w-full"
                {...register("main_sent_to", { required: "Mail To is required", pattern: { value: /\S+@\S+\.\S+/, message: "Invalid email" } })}
              />
              <InputError message={errors.main_sent_to?.message} className="mt-2" />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 pb-2">
            <div>
              <InputLabel htmlFor="project_desc" value="Description" />
              <TextInput
                id="project_desc"
                type="textarea"
                name="project_desc"
                placeholder="Enter Project Description"
                className="mt-1 block w-full"
                {...register("project_desc", { required: "Project description is required" })}
              />
              <InputError message={errors.project_desc?.message} className="mt-2" />
            </div>
          </div>
        </form>
      </div>
    </FormLayout>
  );
}

export default AddReportForm;
