
import AdminOnly from "@/private/AdminOnly";
import Sidebar from "./components/shared/Sidebar";

const AdminLayout = ({children}) => {
   
    return (
    <AdminOnly>
        <main className="flex">
            <div className="w-2/12 h-screen sticky top-0">
                <Sidebar />
            </div>
            <div className="flex-1 min-h-screen">
                {children}
            </div>
        </main>
    </AdminOnly>
    );
};

export default AdminLayout;