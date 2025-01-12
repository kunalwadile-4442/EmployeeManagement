import React, { useState, useEffect } from "react";
import { Link, useLocation, Outlet } from "react-router-dom";
import AuthenticatedLayout from "../../layout/AuthenticatedLayout";

const ProjectLayout = () => {
  const { pathname } = useLocation();

  const getActiveTab = (currentUrl) => {
    if (currentUrl.includes("/project/dashboard")) return "dashboard";
    if (currentUrl.includes("/project/list")) return "list";
    if (currentUrl.includes("/project/assign")) return "assign";
    if (currentUrl.includes("/project/reports")) return "reports";
    if (currentUrl.includes("/project/calendar")) return "calendar";
    return "dashboard"; 
  };

  const [activeTab, setActiveTab] = useState(getActiveTab(pathname));

  useEffect(() => {
    setActiveTab(getActiveTab(pathname));
  }, [pathname]);

  return (
    <AuthenticatedLayout top_heading="">
      <div className="flex gap-3 px-3">
        {["dashboard", "list", "assign", "reports", "calendar"].map((key) => (
          <Link
            key={key}
            to={`/project/${key}`}
            onClick={() => setActiveTab(key)}
            className={`px-2 py-1 text-md font-semibold transition-all duration-300 ${
              activeTab === key
                ? "border-b-2 border-purple-500 text-black"
                : "text-gray-500 hover:text-black"
            }`}
          >
            {key === "dashboard" && "Dashboard"}
            {key === "list" && "Project List"}
            {key === "assign" && "Assign Project"}
            {key === "reports" && "Reports"}
            {key === "calendar" && "Calendar"}
          </Link>
        ))}
      </div>

      <div className="mt-2">
        <Outlet />
      </div>
    </AuthenticatedLayout>
  );
};

export default ProjectLayout;
