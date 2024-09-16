import BackdropGradient from "@/components/global/backdrop-gradient"
import GlassCard from "@/components/global/glass-card"
import GradientText from "@/components/global/gradient-text"
import { MALTIVASITY_CONSTANTS } from "@/constants"
import Image from "next/image"

type Props = {
  children: React.ReactNode
}

const CreateGroupLayout = ({ children }: Props) => {
  return (
    <div className="container h-screen grid grid-cols-1 lg:grid-cols-2 content-center">
      <div className="flex items-center">
        <BackdropGradient className="w-8/12 h-2/6 opacity-50">
        <Image
              src="/MaltivasityHLogo.png"
              alt="Maltivasity Logo"
              width={344}
              height={60}
              priority
              />
          {/* <h5 className="text-2xl font-bold text-themeTextWhite">MALTIVASITY</h5> */}
          <GradientText element="H2" className="text-4xl font-semibold py-4">
            Create Your UNIVAS
          </GradientText>
          <p className="text-themeTextGray">
            Welcome to the Maltivas, where each Group created is a Univas and you the Master of that Univas. Have your students join your Univas to learn from you and engage with each other. Cancel anytime.All features.
            Unlimited everything. No hidden fees.
          </p>
          <div className="flex flex-col gap-3 mt-10 pl-5">
            {MALTIVASITY_CONSTANTS.createGroupPlaceholder.map((placeholder) => (
              <div className="flex gap-3" key={placeholder.id}>
                {placeholder.icon}
                <p className="text-themeTextGray">{placeholder.label}</p>
              </div>
            ))}
          </div>
        </BackdropGradient>
      </div>
      <div>
        <BackdropGradient
          className="w-6/12 h-3/6 opacity-40"
          container="lg:items-center"
        >
          <GlassCard className="xs:w-full lg:w-10/12 xl:w-8/12 mt-16 py-7">
            {children}
          </GlassCard>
        </BackdropGradient>
      </div>
    </div>
  )
}

export default CreateGroupLayout