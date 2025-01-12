import React from 'react';

function ProjectDashboardCard({ projectName, totalHours, totalDays, lastReportedDate, projectId,viewProject }) {
    return (
        
        <div className="bg-[#f7e7ff71] p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow text-sm mb-2">
            <div className="flex justify-between items-center mb-4">
                <div className="text-xl font-semibold text-gray-800">{projectName}</div>
                <span className="text-xs text-gray-500"># {projectId}</span>
            </div>

            <div className="space-y-2">
                <p className="text-sm text-gray-600">Total Hours: {totalHours.toFixed(2)} hrs</p>
                <p className="text-sm text-gray-600">Total Days: {totalDays} days</p>
                <p className="text-sm text-gray-600">Last Reported: {lastReportedDate}</p>
            </div>

            <div className="mt-4 flex justify-between items-center text-sm">
                <button className="px-4 py-1 bg-logo-text-color text-white rounded-md hover:bg-light-logo-color transition-colors" onClick={viewProject}>
                    View All
                </button>
            </div>
        </div>
    );
}

export default ProjectDashboardCard;
