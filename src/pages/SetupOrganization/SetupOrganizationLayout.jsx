// import React, { useState, useEffect } from "react";
// import { Link, useLocation, Outlet } from "react-router-dom";
// import AuthenticatedLayout from "../../layout/AuthenticatedLayout";

// const SetupOrganizationLayout = () => {
//   const { pathname } = useLocation();

//   const getActiveTab = (currentUrl) => {
//     if (currentUrl.includes("/organization/company")) return "company";
//     if (currentUrl.includes("/organization/locations")) return "locations";
//     if (currentUrl.includes("/organization/departments")) return "departments";
//     if (currentUrl.includes("/organization/designations")) return "designations";
//     if (currentUrl.includes("/organization/leave-config")) return "leave-config";
//     if (currentUrl.includes("/organization/holiday-calender")) return "holiday-calender";
    
//     return "company";
//   };

//   const [activeTab, setActiveTab] = useState(getActiveTab(pathname));

//   useEffect(() => {
//     setActiveTab(getActiveTab(pathname));
//   }, [pathname]);

//   return (
//     <AuthenticatedLayout>
//       <div className="flex gap-3 px-3">
//         {[
//           { key: "company", label: "Company Profile" },
//           { key: "locations", label: "Location" },
//           { key: "departments", label: "Departments" },
//           { key: "designations", label: "Designations" },
//           { key: "leave-config", label: "Leave Config" },
//           { key: "holiday-calender", label: "Holiday Calendar" },
//         ].map(({ key, label }) => (
//           <Link
//             key={key}
//             to={`/organization/${key}`}
//             onClick={() => setActiveTab(key)}
//             className={`px-2 py-1 text-md font-semibold transition-all duration-300 ${
//               activeTab === key
//                 ? "border-b-2 border-purple-500 text-black"
//                 : "text-gray-500 hover:text-black"
//             }`}
//           >
//             {label}
//           </Link>
//         ))}
//       </div>

//       <div className="mt-2">
//         <Outlet />
//       </div>
//     </AuthenticatedLayout>
//   );
// };

// export default SetupOrganizationLayout;
import React, { useState, useEffect } from "react";
import { Link, useLocation, Outlet } from "react-router-dom";
import AuthenticatedLayout from "../../layout/AuthenticatedLayout";

const SetupOrganizationLayout = () => {
  const { pathname } = useLocation();

  // Function to determine the active tab based on the current URL
  const getActiveTab = (currentUrl) => {
    if (currentUrl.includes("/organization/company/add")) return "company/list";
    if (currentUrl.includes("/organization/company/edit")) return "company/list";
    if (currentUrl.includes("/organization/company/list")) return "company/list";
    if (currentUrl.includes("/organization/company")) return "company";
    if (currentUrl.includes("/organization/locations")) return "locations";
    if (currentUrl.includes("/organization/departments")) return "departments";
    if (currentUrl.includes("/organization/designations")) return "designations";
    if (currentUrl.includes("/organization/leave-config")) return "leave-config";
    if (currentUrl.includes("/organization/holiday-calender")) return "holiday-calender";

    return "company"; // Default active tab
  };

  const [activeTab, setActiveTab] = useState(getActiveTab(pathname));

  // Update active tab whenever the pathname changes
  useEffect(() => {
    setActiveTab(getActiveTab(pathname));
  }, [pathname]);

  return (
    <AuthenticatedLayout>
      <div className="flex gap-3 px-3">
        {[
          { key: "company", label: "Company Profile" },
          { key: "locations", label: "Location" },
          { key: "departments", label: "Departments" },
          { key: "designations", label: "Designations" },
          { key: "leave-config", label: "Leave Config" },
          { key: "holiday-calender", label: "Holiday Calendar" },
          { key: "company/list", label: "Company List" },
        ].map(({ key, label }) => (
          <Link
            key={key}
            to={`/organization/${key}`}
            onClick={() => setActiveTab(key)}
            className={`px-2 py-1 text-md font-semibold transition-all duration-300 ${
              activeTab === key
                ? "border-b-2 border-purple-500 text-black"
                : "text-gray-500 hover:text-black"
            }`}
          >
            {label}
          </Link>
        ))}
      </div>

      <div className="mt-2">
        <Outlet />
      </div>
    </AuthenticatedLayout>
  );
};

export default SetupOrganizationLayout;
