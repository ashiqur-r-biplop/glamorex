import Sidebar from "./components/shared/Sidebar";


const DashboardLayout = ({children}) => {
    return (
        <main>
            <Sidebar/>
            {children}
        </main>
    );
};

export default DashboardLayout;