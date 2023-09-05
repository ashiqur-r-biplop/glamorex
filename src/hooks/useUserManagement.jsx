const { useState } = require("react");
const useUserManagement = () => {
  const [userCategory, setUserCategory] = useState("All Users");

  return { userCategory, setUserCategory };
};

export default useUserManagement;
