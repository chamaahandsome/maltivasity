import { onSignUpUser } from "@/actions/auth"
import { currentUser } from "@clerk/nextjs/server"
import { redirect } from "next/navigation"

const CompleteOAuthAfterCallback = async () => {
  const user = await currentUser()
  if (!user) redirect("/sign-up")
  const complete = await onSignUpUser({
    firstname: user.firstName as string,
    lastname: user.lastName as string,
    image: user.imageUrl,
    clerkId: user.id,
  })

  if (complete.status == 200) {
    redirect(`/group/create`)
  }

  if (complete.status !== 200) {
    redirect("/sign-in")
  }
}

export default CompleteOAuthAfterCallback



// import { onSignUpUser } from "@/actions/auth";
// import { currentUser } from "@clerk/nextjs/server";
// import { redirect } from "next/navigation";

// const CompleteOAuthAfterCallback = async () => {
//   try {
//     const user = await currentUser();
    
//     // If user is not found, redirect to sign-in
//     if (!user) {
//       redirect("/sign-in");
//       return;
//     }

//     // Attempt to complete the sign-up process
//     const complete = await onSignUpUser({
//       firstname: user.firstName ?? "", // Ensure firstName and lastName are always strings
//       lastname: user.lastName ?? "",
//       image: user.imageUrl ?? "", // Set image to empty string if null
//       clerkId: user.id,
//     });

//     // Redirect based on the result of the sign-up action
//     if (complete.status === 200) {
//       redirect(`/group/create`);
//     } else {
//       redirect("/sign-in");
//     }
//   } catch (error) {
//     console.error("Error completing OAuth sign-up:", error);
//     redirect("/sign-in"); // Redirect to sign-in on error
//   }
// };

// export default CompleteOAuthAfterCallback;
