import { Outlet } from "react-router-dom";
import AdminSidebar from "@/components/admin/AdminSidebar";

const AdminLayout = () => {
  return (
    <div className="dark min-h-screen bg-background text-foreground font-poppins">
      <div className="flex min-h-screen">
        <AdminSidebar />
        <div className="flex min-w-0 flex-1 flex-col">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
