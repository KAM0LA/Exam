import { Outlet } from "react-router-dom";

function AdminLayout() {
  return (
    <div>
      <div>Admin Header</div>
      <main>
        <Outlet />
      </main>
      <div>Admin Footer</div>
    </div>
  );
}

export default AdminLayout;
