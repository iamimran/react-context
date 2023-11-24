import { useContext } from "react";
import UserContext from "../context/UserContext";

function Profile() {
  const { user } = useContext(UserContext);

  if (!user) return <h2>Please login first!!!</h2>;
  return (
    <>
      <h2>{user.userName}</h2>
      <h2>{user.password}</h2>
    </>
  );
}

export default Profile;
