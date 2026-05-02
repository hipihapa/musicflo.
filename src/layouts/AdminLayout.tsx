import { Outlet } from "react-router-dom";
import AdminSidebar from "@/components/admin/AdminSidebar";
import { adminMainColumn, adminShell } from "@/lib/admin-ui";

const AdminLayout = () => {
  return (
    <div className={adminShell}>
      <div className="flex min-h-screen">
        <AdminSidebar />
        <div className={adminMainColumn}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
