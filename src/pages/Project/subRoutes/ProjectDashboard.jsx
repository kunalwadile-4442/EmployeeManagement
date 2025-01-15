import React from "react";
import ProjectCard from "../../../components/ProjectDashboardCard";
import Scrollbar from "../../../components/Scrollbar";
import { useNavigate } from "react-router-dom";

export default function ProjectDashboard() {
  const navigate = useNavigate();

  const dashboard2 = {
    projects: [
      {
        id: 1,
        data: { name: "Project Alpha" },
        date: "2024-12-01",
        total_hr: 120.5,
      },
      {
        id: 2,
        data: { name: "Project Beta" },
        date: "2024-12-10",
        total_hr: 98.75,
      },
      {
        id: 3,
        data: { name: "Project Gamma" },
        date: "2024-12-15",
        total_hr: 150.3,
      },
      {
        id: 4,
        data: { name: "Project Delta" },
        date: "2024-12-18",
        total_hr: 115.2,
      },
      {
        id: 5,
        data: { name: "Project Epsilon" },
        date: "2024-12-20",
        total_hr: 132.1,
      },
      {
        id: 6,
        data: { name: "Project Zeta" },
        date: "2024-12-22",
        total_hr: 110.6,
      },
      {
        id: 7,
        data: { name: "Project Eta" },
        date: "2024-12-25",
        total_hr: 95.4,
      },
    ],
    user_role: "Admin",
    logged_user: {
      name: "John Doe",
      avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    },
  };

  const calculateTotalDays = (lastReportDate) => {
    const today = new Date();
    const lastReport = new Date(lastReportDate);
    const diffTime = today - lastReport;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  const addReport = () => {
    console.log("add Project clicked");
    navigate("/project/dashboard/add-project");
  };
  return (
    <>
      <div className="container mx-auto px-4 py-2">
        <div className="flex justify-end items-center mb-2">
          <button
            className="px-4 py-1 bg-logo-text-color text-white rounded-md hover:bg-light-logo-color text-sm transition-colors"
            onClick={addReport}
          >
           + Add New Project
          </button>
        </div>

        <Scrollbar
       style={{ height: `calc(100vh - 120px)` }}
          autoHide={true}
          autoHideTimeout={1000}
          autoHideDuration={200}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mr-3">
            {dashboard2.projects.map((project) => {
              const totalDays = calculateTotalDays(project.date);
              return (
                <ProjectCard
                  key={project.id}
                  projectName={project.data.name}
                  totalHours={project.total_hr}
                  totalDays={totalDays}
                  lastReportedDate={project.date}
                  projectId={project.id}
                  viewProject={() => console.log("viewProject clicked")}
                />
              );
            })}
          </div>
        </Scrollbar>
      </div>
    </>
  );
}
