"use client";
import CustomerOnly from "@/private/CustomerOnly";

const WishListPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { axiosSecure } = useAxiosSecure();

  useEffect(() => {
    axiosSecure
      .get("/wishlists")
      .then((response) => {
        setProducts(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  console.log(products);

  if (loading) {
    return (
        <CustomerOnly>
            <div>
            
            </div>
        </CustomerOnly>        
    );
};

export default WishListPage;

{/* <CustomerOnly> */}
