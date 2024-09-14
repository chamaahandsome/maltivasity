import { onAuthenticatedUser } from "@/actions/auth"
import BackdropGradient from "@/components/global/backdrop-gradient"
import GlassCard from "@/components/global/glass-card"
import Image from "next/image"
import { redirect } from "next/navigation"

type Props = {
  children: React.ReactNode
}

const AuthLayout = async ({ children }: Props) => {
  const user = await onAuthenticatedUser()

  if (user.status === 200) redirect("/callback/sign-in")

  return (
    <div className="container h-screen flex justify-center items-center  bg-[#030014]">
      <div className="flex flex-col w-full items-center py-24">
      <Image
              src="/MaltivasityLogo.png"
              alt="Maltivasity Logo"
              width={124}
              height={124}
              priority
              />
        <h2 className="text-4xl font-bold text-themeTextWhite">Maltivasity.</h2>
        <BackdropGradient
          className="w-4/12 h-2/6 opacity-40"
          container="flex flex-col items-center"
        >
          <GlassCard className="xs:w-full md:w-7/12 lg:w-5/12 xl:w-4/12 p-7 mt-16">
            {children}
          </GlassCard>
        </BackdropGradient>
      </div>
    </div>
  )
}

export default AuthLayout

// import { onAuthenticatedUser } from "@/actions/auth"
// import BackdropGradient from "@/components/global/backdrop-gradient"
// import GlassCard from "@/components/global/glass-card"
// import { redirect } from "next/navigation"

// type Props = {
//   children: React.ReactNode
// }

// const AuthLayout = async ({ children }: Props) => {
//   const user = await onAuthenticatedUser()

//   // Redirect only if the user is not authenticated
//   if (!user) redirect("/callback/sign-in")

//   return (
//     <div className="container h-screen flex justify-center items-center">
//       <div className="flex flex-col w-full items-center py-24">
//         <h2 className="text-4xl font-bold text-themeTextWhite">Maltivasity.</h2>
        
//         {/* Responsive backdrop size */}
//         <BackdropGradient
//           className="w-full sm:w-8/12 md:w-6/12 lg:w-4/12 h-auto sm:h-2/6 opacity-40"
//           container="flex flex-col items-center"
//         >
//           {/* Responsive GlassCard */}
//           <GlassCard className="xs:w-full md:w-7/12 lg:w-5/12 xl:w-4/12 p-7 mt-16">
//             {children}
//           </GlassCard>
//         </BackdropGradient>
//       </div>
//     </div>
//   )
// }

// export default AuthLayout
