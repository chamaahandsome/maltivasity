// import { GoogleAuthButton } from "@/components/global/google-oauth-button"


import SignInForm from "@/components/forms/sign-in/index"
import { GoogleAuthButton } from "@/components/global/google-oauth-button"
import { Separator } from "@/components/ui/separator"

const SignInPage = () => {
  return (
    <>
      {/* <h5 className="font-bold text-base text-themeTextWhite">Welcome Back to the Maltivas</h5> */}
      <h5 className="font-bold text-base text-themeTextWhite">
        Welcome Back to the <span className="text-themePurple">Maltivas</span>
        </h5>
      <p className="text-themeTextGray leading-tight pt-4">
        Connect with creatives from around the world, join a univas, create your own,
        take classes and become the best in your field.
      </p>
      <SignInForm />
      <div className="my-10 w-full relative">
        <div className="bg-black p-3 absolute text-themeTextGray text-xs top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-themeGray">
          OR CONTINUE WITH
        </div>
        <Separator orientation="horizontal" className="bg-themePurple" />
      </div>
      <GoogleAuthButton method="signin" />
    </>
  )
}

export default SignInPage