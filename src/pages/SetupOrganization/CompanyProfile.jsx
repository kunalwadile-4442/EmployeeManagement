import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  toggleEdit,
  updateCompanyDetails,
  updateImage,
} from "../../redux/reducers/orgCompanyReducer";
import { App_url } from "../../Utils/constants/Static";
import Scrollbar from "../../components/Scrollbar";
import FormLayout from "../../layout/FormLayout";
import TextInput from "../../components/TextInput";
import TextArea from "../../components/TextArea";
import InputLabel from "../../components/InputLabel";

import { FaUpload, FaUser, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function CompanyProfile() {
  const dispatch = useDispatch();
  const { isEditing, companyDetails } = useSelector(
    (state) => state.orgCompany
  );
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    dispatch(updateCompanyDetails({ [name]: value }));
  };

  const handleImageChange = (e, key) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onload = () => {
        dispatch(updateImage({ key, value: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSaveChanges = (e) => {
    e.preventDefault();
    dispatch(toggleEdit());
  };

  return (
    <Scrollbar style={{ height: "100vh" }}>
      <div className="w-full h-full">
        {/* Banner Section */}
        <div className="relative">
          <img
            // src={companyDetails.bannerImg}
            src={App_url.image.bannerImg}
            alt="Company Banner"
            className="w-full h-60 object-cover"
          />

          {isEditing && (
            <label
              htmlFor="bannerImg"
              className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 cursor-pointer"
            >
              <input
                id="bannerImg"
                type="file"
                accept="image/*"
                onChange={(e) => handleImageChange(e, "bannerImg")}
                className="hidden"
              />
              <span className="flex flex-col items-center text-white text-sm font-semibold">
                <FaUpload className="mb-1" /> <small>Upload Background</small>
              </span>
            </label>
          )}

          <div className="absolute top-16 left-8 flex items-center space-x-4">
            <div className="relative">
              <img
                // src={companyDetails.profileImg}
                src={App_url.image.profileImg}
                alt="Company Logo"
                className="w-32 h-32 rounded-full border-2 border-[#000]"
              />

              {isEditing && (
                <label
                  htmlFor="profileImg"
                  className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 rounded-full cursor-pointer"
                >
                  <input
                    id="profileImg"
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleImageChange(e, "profileImg")}
                    className="hidden"
                  />
                  <span className="flex flex-col items-center text-white text-sm font-semibold">
                    <FaUpload className="mb-1" />{" "}
                    <small>Upload Profile Pic</small>
                  </span>
                </label>
              )}
            </div>

            {!isEditing && (
              <div className="text-white">
                <h1 className="text-3xl font-semibold flex items-center space-x-2">
                  <span>{companyDetails.name}</span>
                </h1>
                <p className="text-lg flex items-center space-x-2">
                  <span>{companyDetails.tagline}</span>
                </p>
                <div className="mt-4 space-y-1 text-sm">
                  <p className="flex items-center space-x-2">
                    <i className="text-logo-color">
                      <FaUser />
                    </i>
                    <span>{companyDetails.contactPerson}</span>
                  </p>
                  <p className="flex items-center space-x-2">
                    <i className="text-logo-color">
                      <FaPhoneAlt />
                    </i>
                    <span>{companyDetails.phone}</span>
                  </p>
                  <p className="flex items-center space-x-2">
                    <i className="text-logo-color">
                      <FaEnvelope />
                    </i>
                    <span>{companyDetails.email}</span>
                  </p>
                </div>
              </div>
            )}
          </div>

          <div className="absolute bottom-4 right-8">
            <button
              onClick={() => dispatch(toggleEdit())}
              className="bg-logo-text-color text-white py-1 px-3 rounded-lg shadow-md hover:bg-light-logo-color"
            >
              {isEditing ? "Cancel" : "Edit"}
             {/* { navigate("/company/:id/edit")} */}
            </button>
          </div>
        </div>

        {!isEditing && (
          <div className="p-4">
            <h2 className="text-lg font-semibold mb-2">Company Address</h2>
            <p>{companyDetails.address}</p>
            <hr className="mt-2 border-gray-300" />
          </div>
        )}

        {isEditing && (
          <FormLayout
            content={{ submit: "Save" }}
            className="px-4 py-2 bg-white rounded-md"
            style={{ height: 500 }}
            onSubmit={handleSaveChanges}
          >
            <div className="p-4 bg-white rounded-lg">
              <h2 className="text-lg font-semibold mb-4">
                Edit Company Details
              </h2>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <InputLabel htmlFor="company_name" value="Company Name" />
                  <TextInput
                    name="name"
                    value={companyDetails.name}
                    onChange={handleInputChange}
                    placeholder="Enter Company Name"
                    className="mt-1 block w-full px-3 py-1.5 border border-gray-300 rounded-md shadow-sm focus:outline-none"
                  />
                </div>

                <div>
                  <InputLabel htmlFor="tagline" value="Tagline" />
                  <TextInput
                    name="tagline"
                    value={companyDetails.tagline}
                    onChange={handleInputChange}
                    placeholder="Enter Tagline/Subtitle"
                    className="mt-1 block w-full px-3 py-1.5 border border-gray-300 rounded-md shadow-sm focus:outline-none"
                  />
                </div>

                <div>
                  <InputLabel htmlFor="person_contact" value="Contact Person" />
                  <TextInput
                    name="contactPerson"
                    value={companyDetails.contactPerson}
                    onChange={handleInputChange}
                    placeholder="Enter Person Contact"
                    className="mt-1 block w-full px-3 py-1.5 border border-gray-300 rounded-md shadow-sm focus:outline-none"
                  />
                </div>

                <div>
                  <InputLabel htmlFor="phone" value="Phone Number" />
                  <TextInput
                    name="phone"
                    value={companyDetails.phone}
                    onChange={handleInputChange}
                    placeholder="Enter Phone Number"
                    className="mt-1 block w-full px-3 py-1.5 border border-gray-300 rounded-md shadow-sm focus:outline-none"
                  />
                </div>

                <div>
                  <InputLabel htmlFor="email" value="Email" />
                  <TextInput
                    name="email"
                    value={companyDetails.email}
                    onChange={handleInputChange}
                    placeholder="Enter Email"
                    className="mt-1 block w-full px-3 py-1.5 border border-gray-300 rounded-md shadow-sm focus:outline-none"
                  />
                </div>

                <div>
                  <InputLabel
                    htmlFor="company_address"
                    value="Company Address"
                  />
                  <TextArea
                    name="address"
                    rows={1}
                    value={companyDetails.address}
                    placeholder="Enter Address"
                    onChange={handleInputChange}
                    className="mt-1 block w-full px-3 py-1.5 border border-gray-300 rounded-md shadow-sm focus:outline-none"
                  />
                </div>
              </div>
            </div>
          </FormLayout>
        )}
      </div>
    </Scrollbar>
  );
}

export default CompanyProfile;
