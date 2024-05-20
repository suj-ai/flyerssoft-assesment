import { useEffect, useState } from "react";
import { LoadingOutlined } from "@ant-design/icons";
import { Navigate } from "react-router-dom";

/**
 * The Mapper component is responsible for fetching academic data,
 * dispatching the first academic data to the store,
 * and navigating to the appropriate route based on the presence of 'organizationCode' in the academic data.
 *
 * @returns A Spinner component while the academic data is being fetched.
 */
const Mapper = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a fake loading process
    const fakeLoader = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(fakeLoader); // Cleanup on unmount
  }, []);

  if (loading) {
    return (
      <div className="h-screen w-full flex items-center justify-center">
        <LoadingOutlined className="text-4xl" />
      </div>
    );
  }

  return <Navigate to="/orders_management/orders" />;
};

export default Mapper;
