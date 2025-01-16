import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import Icon from "./Icon";
import { sidebarList } from "../Utils/constants/Common";
import { App_url } from "../Utils/constants/Static";
import Scrollbar from "./Scrollbar";
import { logout } from "../redux/reducers/userReducer";

const Sidebar = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  const isActive = (route) => {
    const pathRout = pathname?.split("/")[1];
    const sideBarRout = route?.split("/")[1];
    return pathRout === sideBarRout;
  };

  return (
    <div
      id="panel-sidebar"
      className="hidden bg-[#fff] text-sm text-slate-700 h-full fixed lg:block lg:relative lg:w-[220px] w-[220px] sidebar-container z-10"
    >
      <div className="flex justify-center items-center px-2 py-2 mt-[10px]">
        <Link to="/">
          <img
            src={App_url.image.logo}
            alt="Logo"
            className="w-[145px] h-[80px]"
          />
        </Link>
      </div>
      <section className="bg-white rounded-lg bottom-0 overflow-y-auto pt-5 pb-5">
        <Scrollbar style={{ height: `calc(100vh - 0px)` }}>
          
          {sidebarList.map((item, index) => {
            const itemRoute = item.route;
            const active = isActive(itemRoute);

            return (
              <div
                key={index}
                className={`flex items-center sidebar-item justify-between   sidebar-content 
                                rounded-lg ml-2 mr-2 cursor-pointer px-1 py-2 mb-2 
                                ${
                                  active
                                    ? "text-logo-text-color bg-[#fcf2fe] border-primary"
                                    : "hover:bg-[#fcf2fe]"
                                } 
                                transition duration-200`}
                onClick={() => navigate(itemRoute)}
              >
                <Link to={itemRoute}>
                  <div className="flex items-center gap-2">
                    <Icon
                      attrIcon={item.icon}
                      className={`${
                        active ? "text-logo-text-color" : "text-gray-300"
                      } sidebar-icon font-bold`}
                      size="md"
                    />
                    <span
                      className={`text-sm ${
                        active ? "text-logo-text-color" : "text-gray-500"
                      } sidebar-text font-semibold`}
                    >
                      {item.name}
                    </span>
                  </div>
                </Link>
              </div>
            );
          })}
          <div
            className={`flex bottom-0 items-center sidebar-item justify-between sidebar-content 
                            rounded-lg ml-2 mr-2 hover:bg-[#fef2f2] hover:font-semibold cursor-pointer px-1 py-2 mt-5 
                            `}
            onClick={handleLogout}
          >
            <div className="flex items-center gap-2">
              <Icon
                attrIcon={App_url.image.logout}
                className="text-gray-500 sidebar-icon font-bold"
                size="md"
              />
              <span className="text-sm text-red-500 sidebar-text-logout hover:font-semibold">
                Logout
              </span>
            </div>
          </div>
        </Scrollbar>
      </section>
    </div>
  );
};

export default Sidebar;
