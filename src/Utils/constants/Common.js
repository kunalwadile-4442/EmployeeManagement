import { App_url } from "./Static";

// Updated sidebarList
export const sidebarList = [
    { name: "Dashboard", route: "/dashboard", icon: App_url.image.dashboard },
    { name: "Setup Organization", route: "/organization/company", icon: App_url.image.dashboard },
    { name: "Time Tracking", route: "/time-tracking/attendance", icon: App_url.image.time_track }, // Update route to `/attendance`
    { name: "Leave Management", route: "/leave/pending", icon: App_url.image.leave_icon },
    { name: "Project", route: "/project/dashboard", icon: App_url.image.report },
    { name: "Employee Management", route: "/employee/info", icon: App_url.image.report }
];

document.addEventListener("DOMContentLoaded", () => {
    const forms = document.querySelectorAll("form");
    forms.forEach((form) => {
      form.addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
          handleEnterKey(event);
        }
      });
    });
  });
  
  function handleEnterKey(event) {
    const currentElement = event.target;
  
    if (
      currentElement.tagName === "BUTTON" ||
      currentElement.tagName === "TEXTAREA" ||
      currentElement.tagName === "FORM"
    ) {
      return;
    }
  
    event.preventDefault(); 
  
    const form = currentElement.closest("form");
    if (!form) return;
  
    const focusableElements = Array.from(
      form.querySelectorAll(
        'input, select, textarea, button, [tabindex]:not([tabindex="-1"])'
      )
    ).filter((el) => !el.disabled && !el.readOnly);
  
    const currentIndex = focusableElements.indexOf(currentElement);
    const nextElement = focusableElements[currentIndex + 1];
  
    if (nextElement) {
      nextElement.focus();
    }
  }
  