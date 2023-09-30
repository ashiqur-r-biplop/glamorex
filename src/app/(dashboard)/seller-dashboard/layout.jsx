import Sidebar from "@/components/seller/shared/Sidebar";
import SellerOnly from "@/private/SellerOnly";

const layout = ({ children }) => {

  return (
    <SellerOnly>
      <main className="flex">
        <div className="w-2/12 h-screen sticky top-0">
          <Sidebar />
        </div>
        <div className="flex-1 min-h-screen">{children}</div>
      </main>
    </SellerOnly>
  );
};

export default layout;
