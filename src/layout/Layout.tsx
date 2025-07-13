import { Outlet } from "react-router-dom";
import { HomeSidebar } from "../components/HomeSidebar";
import { SidebarProvider } from "../components/ui/sidebar";

const Layout = () => {
  return (
    <>
      <div className="min-h-screen bg-primary text-white">
        <SidebarProvider>
          <HomeSidebar />
          <div className="p-10 w-full">
            <Outlet />
          </div>
        </SidebarProvider>
      </div>
    </>
  );
};

export default Layout;
