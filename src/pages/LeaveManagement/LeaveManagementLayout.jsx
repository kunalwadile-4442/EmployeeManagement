import React, { useState, useEffect } from "react";
import { Link, useLocation, Outlet } from "react-router-dom";
import AuthenticatedLayout from "../../layout/AuthenticatedLayout";

const LeaveManagementLayout = () => {
  const { pathname } = useLocation();

  // Determine the active tab based on the current URL
  const getActiveTab = (currentUrl) => {
    if (currentUrl.includes("/leave/pending")) return "pending";
    if (currentUrl.includes("/leave/approve")) return "approve";
    if (currentUrl.includes("/leave/cancelled")) return "cancelled";
    return "pending"; // Default tab
  };

  const [activeTab, setActiveTab] = useState(getActiveTab(pathname));

  useEffect(() => {
    setActiveTab(getActiveTab(pathname));
  }, [pathname]);

  return (
    <AuthenticatedLayout top_heading="">
      {/* Tab Links */}
      <div className="flex gap-3 px-3">
        {["pending", "approve", "cancelled"].map((key) => (
          <Link
            key={key}
            to={`/leave/${key}`}
            onClick={() => setActiveTab(key)}
            className={`px-2 py-1 text-md font-semibold transition-all duration-300 ${
              activeTab === key
                ? "border-b-2 border-purple-500 text-black"
                : "text-gray-500 hover:text-black"
            }`}
          >
            {key === "pending" && "Pending Leave"}
            {key === "cancelled" && "Cancelled Leave"}
            {key === "approve" && "Approved Leave"}
          </Link>
        ))}
      </div>

      <div className="mt-2">
        <Outlet />
      </div>
    </AuthenticatedLayout>
  );
};

export default LeaveManagementLayout;
