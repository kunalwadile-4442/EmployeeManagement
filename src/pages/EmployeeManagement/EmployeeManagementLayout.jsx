
import React, { useState, useEffect } from "react";
import { Link, useLocation, Outlet } from "react-router-dom";
import AuthenticatedLayout from "../../layout/AuthenticatedLayout";

const EmployeeManagementLayout = () => {
  const { pathname } = useLocation();

  const getActiveTab = (currentUrl) => {
    if (currentUrl.includes("/employee/info")) return "info";
    return "info";
  };

  const [activeTab, setActiveTab] = useState(getActiveTab(pathname));

  useEffect(() => {
    setActiveTab(getActiveTab(pathname));
  }, [pathname]);

  return (
    <AuthenticatedLayout top_heading="">
      <div className="flex gap-3 px-3">
        {["info"].map((key) => (
          <Link
            key={key}
            to={`/employee/${key}`}
            onClick={() => setActiveTab(key)}
            className={`px-2 py-1 text-md font-semibold transition-all duration-300 ${
              activeTab === key
                ? "border-b-2 border-purple-500 text-black"
                : "text-gray-500 hover:text-black"
            }`}
          >
            {key === "info" && "Employee Info"}
          </Link>
        ))}
      </div>

      <div className="mt-2">
        <Outlet />
      </div>
    </AuthenticatedLayout>
  );
};

export default EmployeeManagementLayout;
