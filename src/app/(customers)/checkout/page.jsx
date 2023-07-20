import CustomerOnly from "@/private/CustomerOnly";

const CheckoutPage = () => {
    return (
        <CustomerOnly>
            <div>
                CheckoutPage
            </div>
        </CustomerOnly>
        
    );
};

export default CheckoutPage;