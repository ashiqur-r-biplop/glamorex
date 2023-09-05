"use client"

import { useRouter } from "next/navigation";

const ProductHome = () => {
    const router = useRouter()
    return router.push("/g-admin/product-management/all_products")
    
};

export default ProductHome;