import { InputOTP, InputOTPSlot } from "@/components/ui/input-otp"
import React from "react"

type Props = {
  otp: string
  setOtp: React.Dispatch<React.SetStateAction<string>>
}

const OTPInput = ({ otp, setOtp }: Props) => {
  return (
    <InputOTP maxLength={6} value={otp} onChange={(otp) => setOtp(otp)}>
      <div className="flex gap-3">
        <div>
          <InputOTPSlot index={0} />
        </div>
        <div>
          <InputOTPSlot index={1} />
        </div>
        <div>
          <InputOTPSlot index={2} />
        </div>
        <div>
          <InputOTPSlot index={3} />
        </div>
        <div>
          <InputOTPSlot index={4} />
        </div>
        <div>
          <InputOTPSlot index={5} />
        </div>
      </div>
    </InputOTP>
  )
}

export default OTPInput

// import { InputOTP, InputOTPSlot } from "@/components/ui/input-otp"
// import React from "react"

// type Props = {
//   otp: string
//   setOtp: React.Dispatch<React.SetStateAction<string>>
// }

// const OTPInput = ({ otp, setOtp }: Props) => {
//   const slots = Array.from({ length: 6 }, (_, index) => (
//     <div key={index}>
//       <InputOTPSlot index={index} />
//     </div>
//   ));

//   return (
//     <InputOTP maxLength={6} value={otp} onChange={(otp) => setOtp(otp)}>
//       <div className="flex gap-3">
//         {slots}
//       </div>
//     </InputOTP>
//   )
// }

// export default OTPInput
