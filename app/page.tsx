// import { getUsers } from "@/utils/getUsers";

import AuthStatus from "./components/AuthStatus";

const Home = async () => {
  // const users = await getUsers();
  // console.log("users: " + JSON.stringify(users));
  // const createUser = async () => {
  //   try {
  //     const res = await fetch("/api/users", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({ fullName: "John Doe", email: "achi@ac55asa" }),
  //     });
  //     console.log(res);
  //   } catch (error) {
  //     console.error("Error creating user:", error);
  //   }
  // };

  // createUser();

  return (
    <div>
      <h1>hello</h1>
      <AuthStatus />
      {/* {data && data.map((user) => <p key={user}>{JSON.stringify(user)}</p>)} */}
    </div>
  );
};

export default Home;
