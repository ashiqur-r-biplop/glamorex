import Link from "next/link";
import EditButton from "../components/account/EditButton";

const User = {
  id: "123",
  displayName: "Agun",
  email: "test@gmail.com",
  photoURL: "https://i.ibb.co/37cdWvc/images.jpg",
};

const AccountPage = () => {
  return (
    <div className="container mx-auto px-5 py-[100px] min-h-[70vh]">
      <div className="section-title mb-8">
        <h2 className="text-2xl font-semibold text-center">My Profile</h2>
      </div>
      <div className="border-2 border-gray-100 px-5 py-10 flex flex-col xl:flex-row gap-12 xl:gap-20 md:w-fit mx-auto">
        <div>
          <img
            className="w-[200px] h-[200px] rounded-full mx-auto"
            src={User?.photoURL}
            alt={User?.displayName}
          />
        </div>
        <div className="my-profile">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-10">
            <div>
              <p className="font-semibold text-lg mb-1">Name</p>
              <h4>{User?.displayName}</h4>
            </div>
            <div>
              <p className="font-semibold text-lg mb-1">Email</p>
              <h4>{User?.email}</h4>
            </div>
            <div>
              <p className="font-semibold text-lg mb-1">Mobile</p>
              <h4>
                {User?.birthday ? User?.birthday : "mobile not available"}
              </h4>
            </div>
            <div>
              <p className="font-semibold text-lg mb-1">Birthday</p>
              <h4>{User?.mobile ? User?.mobile : "birthday not available"}</h4>
            </div>
            <div>
              <p className="font-semibold text-lg mb-1">Gender</p>
              <h4>{User?.gender ? User?.gender : "gender not available"}</h4>
            </div>
          </div>
          <div className="mt-5">
            <Link href={`/account/${User?.id}`}>
              <EditButton>Edit Profile</EditButton>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountPage;
