// "use server"

// import { client } from "@/lib/prisma"
// import { currentUser } from "@clerk/nextjs/server"

// export const onAuthenticatedUser = async () => {
//   try {
//     const clerk = await currentUser()
//     if (!clerk) return { status: 404 }

//     const user = await client.user.findUnique({
//       where: {
//         clerkId: clerk.id,
//       },
//       select: {
//         id: true,
//         firstname: true,
//         lastname: true,
//       },
//     })
//     if (user)
//       return {
//         status: 200,
//         id: user.id,
//         image: clerk.imageUrl,
//         username: `${user.firstname} ${user.lastname}`,
//       }
//     return {
//       status: 404,
//     }
//   } catch (error) {
//     return {
//       status: 400,
//     }
//   }
// }

// export const onSignUpUser = async (data: {
//   firstname: string
//   lastname: string
//   image: string
//   clerkId: string
// }) => {
//   try {
//     const createdUser = await client.user.create({
//       data: {
//         ...data,
//       },
//     })

//     if (createdUser) {
//       return {
//         status: 200,
//         message: "User successfully created",
//         id: createdUser.id,
//       }
//     }

//     return {
//       status: 400,
//       message: "User could not be created! Try again",
//     }
//   } catch (error) {
//     return {
//       status: 400,
//       message: "Oops! something went wrong. Try again",
//     }
//   }
// }

// export const onSignInUser = async (clerkId: string) => {
//   try {
//     const loggedInUser = await client.user.findUnique({
//       where: {
//         clerkId,
//       },
//       select: {
//         id: true,
//         group: {
//           select: {
//             id: true,
//             channel: {
//               select: {
//                 id: true,
//               },
//               take: 1,
//               orderBy: {
//                 createdAt: "asc",
//               },
//             },
//           },
//         },
//       },
//     })

//     if (loggedInUser) {
//       if (loggedInUser.group.length > 0) {
//         return {
//           status: 207,
//           id: loggedInUser.id,
//           groupId: loggedInUser.group[0].id,
//           channelId: loggedInUser.group[0].channel[0].id,
//         }
//       }

//       return {
//         status: 200,
//         message: "User successfully logged in",
//         id: loggedInUser.id,
//       }
//     }

//     return {
//       status: 400,
//       message: "User could not be logged in! Try again",
//     }
//   } catch (error) {
//     return {
//       status: 400,
//       message: "Oops! something went wrong. Try again",
//     }
//   }
// }

"use server"

import { client } from "@/lib/prisma"
import { currentUser } from "@clerk/nextjs/server"

// Authenticate and retrieve the current user details
export const onAuthenticatedUser = async () => {
  try {
    const clerk = await currentUser()
    if (!clerk) return { status: 404, message: "User not found in Clerk" }

    // Find user in your database by their Clerk ID
    const user = await client.user.findUnique({
      where: { clerkId: clerk.id },
      select: {
        id: true,
        firstname: true,
        lastname: true,
      },
    })

    // Return user data if found
    if (user) {
      return {
        status: 200,
        id: user.id,
        image: clerk.imageUrl,
        username: `${user.firstname} ${user.lastname}`,
      }
    }

    // If user not found in your database
    return { status: 404, message: "User not found in the database" }
  } catch (error) {
    // Catch and return error for debugging
    return { status: 500, message: "Internal server error", error: error.message }
  }
}

// Handle user sign-up
export const onSignUpUser = async (data: { firstname: string; lastname: string; image: string; clerkId: string }) => {
  try {
    // Create a new user in your database
    const createdUser = await client.user.create({
      data: {
        ...data,
      },
    })

    // Return success if user is created
    if (createdUser) {
      return {
        status: 201,
        message: "User successfully created",
        id: createdUser.id,
      }
    }

    // Fallback if the user creation fails
    return { status: 400, message: "User could not be created! Try again" }
  } catch (error) {
    // Catch and return error for debugging
    return { status: 500, message: "Error creating user", error: error.message }
  }
}

// Handle user sign-in
export const onSignInUser = async (clerkId: string) => {
  try {
    // Find the user in your database by their Clerk ID
    const loggedInUser = await client.user.findUnique({
      where: { clerkId },
      select: {
        id: true,
        group: {
          select: {
            id: true,
            channel: {
              select: { id: true },
              take: 1,
              orderBy: { createdAt: "asc" },
            },
          },
        },
      },
    })

    // Check if user and their groups exist
    if (loggedInUser) {
      if (loggedInUser.group.length > 0) {
        return {
          status: 200, // Use 200 for successful login
          id: loggedInUser.id,
          groupId: loggedInUser.group[0].id,
          channelId: loggedInUser.group[0].channel[0]?.id || null, // Ensure channel exists
        }
      }

      // Return success if user exists but no groups are found
      return {
        status: 200,
        message: "User successfully logged in",
        id: loggedInUser.id,
      }
    }

    // If the user is not found in the database
    return { status: 404, message: "User could not be logged in! Try again" }
  } catch (error) {
    // Catch and return error for debugging
    return { status: 500, message: "Error logging in user", error: error.message }
  }
}
