import Sidebar from "./seller-dashboard/components/shared/Sidebar";


const DashboardLayout = ({ children }) => {
    return (
        <main className="flex">
            <div className="w-2/12 h-screen sticky top-0">
                <Sidebar />
            </div>
            <div className="flex-1 min-h-screen">
                {children}
            </div>
        </main>
    );
};


export default DashboardLayout;