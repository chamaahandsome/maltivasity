import BackdropGradient from "@/components/global/backdrop-gradient"
import GradientText from "@/components/global/gradient-text"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardTitle } from "@/components/ui/card"
import { Check } from "@/icons"
import Link from "next/link"

type Props = {}

export const PricingSection = (props: Props) => {
  return (
    <div className="w-full pt-20 flex flex-col items-center gap-3" id="pricing">
      <BackdropGradient className="w-8/12 h-full opacity-40 flex flex-col items-center">
        <GradientText
          className="text-4xl font-semibold text-center"
          element="H2"
        >
         Each community is unique in pricing
        </GradientText>
        <p className="text-sm md:text-center text-left text-muted-foreground pt-3">
        Explore our Maltivas, select your teacher and join their Creative <br className="hidden md:block" /> Univas at the Prices that <br className='md:hidden' /> best suits you
        </p>
      </BackdropGradient>
      <Card className="p-7 mt-10 md:w-auto w-full bg-themeBlack border-themeGray">
        <div className="flex flex-col gap-2">
          <CardTitle>Free/m</CardTitle>
          <CardDescription className="text-[#B4B0AE]">
            Great if you’re just getting started
          </CardDescription>
          <Link href="#" className="w-full mt-3">
            <Button
              variant="default"
              className="bg-[#333337] w-full rounded-2xl text-white hover:text-[#333337]"
            >
              Explore for free
            </Button>
          </Link>
        </div>
        <div className="flex flex-col gap-2 text-[#B4B0AE] mt-5">
          <p>Features</p>
          <span className="flex gap-2 mt-3 items-center">
            <Check />
            Learn from the best in their field
          </span>
          <span className="flex gap-2 items-center">
            <Check />
            Choose the community you want
          </span>
          <span className="flex gap-2 items-center">
            <Check />
            Set goals and track your progress
          </span>
          <span className="flex gap-2 items-center">
            <Check />
            Rank up on the leaderboard
          </span>
          <span className="flex gap-2 items-center">
            <Check />
            Chat with your fellow creative learners
          </span>
          <span className="flex gap-2 items-center">
            <Check />
            Set Zoom calls with your sensei
          </span>
        </div>
      </Card>
    </div>
  )
}