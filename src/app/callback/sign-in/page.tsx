import { onSignInUser } from "@/actions/auth"
import { currentUser } from "@clerk/nextjs/server"
import { redirect } from "next/navigation"

const CompleteSigIn = async () => {
  const user = await currentUser()
  if (!user) return redirect("/sign-in")

  const authenticated = await onSignInUser(user.id)

  if (authenticated.status === 200) return redirect(`/group/create`)

  if (authenticated.status === 207)
    return redirect(
      `/group/${authenticated.groupId}/channel/${authenticated.channelId}`,
    )

  if (authenticated.status !== 200) {
    redirect("/sign-in")
  }
}

export default CompleteSigIn



// import { onSignInUser } from "@/actions/auth";
// import { currentUser } from "@clerk/nextjs/server";
// import { redirect } from "next/navigation";

// const CompleteSignIn = async () => {
//   try {
//     const user = await currentUser();
    
//     // If user is not found, redirect to sign-in
//     if (!user) {
//       return redirect("/sign-in");
//     }

//     // Attempt to authenticate the user
//     const authenticated = await onSignInUser(user.id);

//     // Handle different authentication statuses
//     if (authenticated.status === 200) {
//       return redirect(`/group/create`);
//     }

//     if (authenticated.status === 207) {
//       return redirect(
//         `/group/${authenticated.groupId}/channel/${authenticated.channelId}`
//       );
//     }

//     // Redirect to sign-in for any other status codes
//     return redirect("/sign-in");
//   } catch (error) {
//     console.error("Error during sign-in process:", error);
//     redirect("/sign-in"); // Fallback redirect on error
//   }
// };

// export default CompleteSignIn;
