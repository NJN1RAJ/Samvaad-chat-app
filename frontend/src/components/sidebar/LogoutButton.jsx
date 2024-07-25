import React from "react";
import { BiLogOut } from "react-icons/bi";
import useLogout from "../../hooks/useLogout";

const LogoutButton = () => {
  const { logout, loading } = useLogout();
  return (
    <div className="mt-auto">
      {!loading ? (
        <BiLogOut
          onClick={logout}
          className="h-6 w-6 text-slate-500 cursor-pointer"
        />
      ) : (
        <span className="loading loading-spinner"></span>
      )}
    </div>
  );
};

export default LogoutButton;
