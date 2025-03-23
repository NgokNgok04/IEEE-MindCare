// import { addUser, fetchUsers, fetchUser,deleteUser } from "../db/userService";

// const testUserService = async () => {

//     console.log("\n🔹 Fetching all users...");
//     const users = await fetchUsers();
//     users.forEach((doc) => console.log(doc.id, "=>", doc.data()));

//     console.log("\n🔹 Fetching a specific user...");
//     const userId = users.docs[0].id;  // Get the first user's ID
//     const user = await fetchUser(userId);
//     console.log(user.id, "=>", user.data());

//     // console.log("\n🔹 Deleting the user...");
//     // await deleteUser(userId);
//     // console.log("✅ User deleted.");
// }

// testUserService();