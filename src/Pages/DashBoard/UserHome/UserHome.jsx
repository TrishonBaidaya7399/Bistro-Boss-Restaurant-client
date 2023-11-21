// import PropTypes from 'prop-types';

import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";

const UserHome = () => {
    const {user} = useContext(AuthContext);
  return (
    <div className="lg:m-10">
      <h1 className="text-3xl font-bold">
        Hi! Welcome Back <span>{user?.displayName}</span>
      </h1>
    </div>
  );
};

UserHome.propTypes = {};

export default UserHome;
