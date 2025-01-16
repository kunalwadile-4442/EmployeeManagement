export const App_url = {
    link: {
      INITIAL_URL: "/",
      ADD_EMPLOYEE_URL:"/employees/add",
  
      // ENDPOINT_LINKS: {
      //   SIGN_IN: "/api/auth/login",
      //   PDF_PREVIEW: "/api/document/order-download",
      //   FORGET_PASSWORD: "/api/auth/forgotpassword",
      //   RESET_PASSWORD: "/api/auth/resetpassword",
      //   LOG_OUT: "/api/auth/logout",
      //   INTUIT_AUTH: "/api/intuit/auth",
      //   UPLOAD_FILE: "/api/users/upload",
      //   GET_USER_DETAILS: "/api/users/me",
      //   INVOICE_DOWNLOAD: "/api/document/invoice-download",
      //   BIL_OF_LOADING_DOWNLOAD: "/api/document/download",
      //   INVOICE_SEND: "/api/document/invoice-send",
      //   INTUIT_DOWNLOAD: "/api/document/invoice-download",
      //   DISTRIBUTION_INTUIT_RESEND: "/api/users/invoice-send/distribution",
      //   FABRICATION_INTUIT_RESEND: "/api/users/invoice-send/fabrication",
      //   STOCK_INTUIT_RESEND: "/api/users/invoice-send/stock",
      //   GOOGLE_MAP: "/api/users/gmap",
      //   PREVIEW_ORDER: "/api/document/order-view",
      // },
    },
    image: {
      dashboard:`${window.location.origin}/assets/icons/dashboard.svg`,
      setup:`${window.location.origin}/assets/icons/setup.svg`,
      employeeManagement:`${window.location.origin}/assets/icons/employeeManagement.svg`,
      star:`${window.location.origin}/assets/icons/star.svg`,
      employee:`${window.location.origin}/assets/icons/hr-employee.svg`,
      salary_slip:`${window.location.origin}/assets/icons/hr-salary-slip.svg`,
      logo:`${window.location.origin}/assets/icons/logo-dark-appristine.svg`,
      edit:`${window.location.origin}/assets/icons/edit.svg`,
      filter:`${window.location.origin}/assets/icons/filter.svg`,
      logout:`${window.location.origin}/assets/icons/logout-red.svg`,
      office:`${window.location.origin}/assets/icons/office.svg`,
      time_track:`${window.location.origin}/assets/icons/time-track.svg`,
      leave_icon:`${window.location.origin}/assets/icons/leaveicon.svg`,
      report:`${window.location.origin}/assets/icons/report.svg`,
      delete:`${window.location.origin}/assets/icons/delete.svg`,
      view:`${window.location.origin}/assets/icons/view.svg`,
      search:`${window.location.origin}/assets/icons/search.svg`,
      personImg:`${window.location.origin}/assets/icons/personImg.svg`,
      personImg2:`${window.location.origin}/assets/icons/personImg2.svg`,
      bell:`${window.location.origin}/assets/icons/bell.svg`,
      upload:`${window.location.origin}/assets/icons/upload.svg`,
      down:`${window.location.origin}/assets/icons/down.svg`,
      popupLogo:`${window.location.origin}/assets/icons/logo2.svg`,
      checkinimg:`${window.location.origin}/assets/images/checkin.png`,
      profileImg:`${window.location.origin}/assets/images/lightmode_favicon.png`,
      bannerImg:`${window.location.origin}/assets/images/banner.jpg`,

    },
    loginRegister:{
      login_bg:`${window.location.origin}/assets/images/login_bg.webp`
    }

    
  };
  export const initialState = {
    items: [],
    totalCount: 0,
    optionList: [],
  };
  
  export const initialUserData = {
    status: "",
    user: {
      id: "",
      email: "",
      active: false,
      password: "",
      is_admin: false,
      role_permissions: "",
      api_permissions: "",
      name: "",
      emp_id: "",
      user_type: "",
      role: "",
    },
    access_token: "",
  };
  export const monthOptions = [
    { value: 1, label: 'January' },
    { value: 2, label: 'February' },
    { value: 3, label: 'March' },
    { value: 4, label: 'April' },
    { value: 5, label: 'May' },
    { value: 6, label: 'June' },
    { value: 7, label: 'July' },
    { value: 8, label: 'August' },
    { value: 9, label: 'September' },
    { value: 10, label: 'October' },
    { value: 11, label: 'November' },
    { value: 12, label: 'December' },
];