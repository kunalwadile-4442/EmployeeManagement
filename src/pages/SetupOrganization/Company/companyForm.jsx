// import React from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { toggleEdit, updateCompanyDetails, updateImage } from "../../../redux/reducers/orgCompanyReducer";
// import Scrollbar from "../../../components/Scrollbar";
// import FormLayout from "../../../layout/FormLayout";
// import TextInput from "../../../components/TextInput";
// import TextArea from "../../../components/TextArea";
// import InputLabel from "../../../components/InputLabel";
// import { useNavigate } from "react-router-dom";
// import AuthenticatedLayout from "../../../layout/AuthenticatedLayout";

// function CompanyAdmin() {
//   const dispatch = useDispatch();
//   const { companyDetails } = useSelector((state) => state.orgCompany);
//   const navigate = useNavigate();

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     dispatch(updateCompanyDetails({ [name]: value }));
//   };

//   const handleImageChange = (e, key) => {
//     if (e.target.files && e.target.files[0]) {
//       const file = e.target.files[0];
//       const reader = new FileReader();
//       reader.onload = () => {
//         dispatch(updateImage({ key, value: reader.result }));
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   const handleSaveChanges = (e) => {
//     e.preventDefault();
//     dispatch(toggleEdit());
//     navigate("/company/:id");
//   };

//   return (
//     <AuthenticatedLayout>

   
//     <Scrollbar style={{ height: "100vh" }}>
//       <FormLayout
//         content={{ submit: "Save" }}
//         className="px-4 py-2 bg-white rounded-md"
//         style={{ height: 500 }}
//         onSubmit={handleSaveChanges}
//       >
//         <div className="p-4 bg-white rounded-lg">
//           <h2 className="text-lg font-semibold mb-4">Edit Company Details</h2>
//           <div className="grid grid-cols-3 gap-4">
//             <div>
//               <InputLabel htmlFor="company_name" value="Company Name" />
//               <TextInput
//                 name="name"
//                 value={companyDetails.name}
//                 onChange={handleInputChange}
//                 className="mt-1 block w-full px-3 py-1.5 border border-gray-300 rounded-md shadow-sm focus:outline-none"
//               />
//             </div>

//             <div>
//               <InputLabel htmlFor="tagline" value="Tagline" />
//               <TextInput
//                 name="tagline"
//                 value={companyDetails.tagline}
//                 onChange={handleInputChange}
//                 className="mt-1 block w-full px-3 py-1.5 border border-gray-300 rounded-md shadow-sm focus:outline-none"
//               />
//             </div>

//             <div>
//               <InputLabel htmlFor="person_contact" value="Contact Person" />
//               <TextInput
//                 name="contactPerson"
//                 value={companyDetails.contactPerson}
//                 onChange={handleInputChange}
//                 className="mt-1 block w-full px-3 py-1.5 border border-gray-300 rounded-md shadow-sm focus:outline-none"
//               />
//             </div>

//             <div>
//               <InputLabel htmlFor="phone" value="Phone Number" />
//               <TextInput
//                 name="phone"
//                 value={companyDetails.phone}
//                 onChange={handleInputChange}
//                 className="mt-1 block w-full px-3 py-1.5 border border-gray-300 rounded-md shadow-sm focus:outline-none"
//               />
//             </div>

//             <div>
//               <InputLabel htmlFor="email" value="Email" />
//               <TextInput
//                 name="email"
//                 value={companyDetails.email}
//                 onChange={handleInputChange}
//                 className="mt-1 block w-full px-3 py-1.5 border border-gray-300 rounded-md shadow-sm focus:outline-none"
//               />
//             </div>

//             <div>
//               <InputLabel htmlFor="company_address" value="Company Address" />
//               <TextArea
//                 name="address"
//                 rows={1}
//                 value={companyDetails.address}
//                 onChange={handleInputChange}
//                 className="mt-1 block w-full px-3 py-1.5 border border-gray-300 rounded-md shadow-sm focus:outline-none"
//               />
//             </div>
//           </div>
//         </div>
//       </FormLayout>
//     </Scrollbar>
//     </AuthenticatedLayout>
//   );
// }

// export default CompanyAdmin;

import React from 'react'

function companyForm() {
  return (
    <div>companyForm</div>
  )
}

export default companyForm