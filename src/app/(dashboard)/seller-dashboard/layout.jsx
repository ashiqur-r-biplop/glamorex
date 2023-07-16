import SellerOnly from "@/private/SellerOnly";
import Sidebar from "./components/shared/Sidebar";


const layout = ({children}) => {

    return (
    <SellerOnly>
        <main className="flex">
            <div className="w-2/12 h-screen sticky top-0">
                <Sidebar />
            </div>
            <div className="flex-1 min-h-screen">
                    {children}
            </div>
        </main>
    </SellerOnly>
    );
};

export default layout;