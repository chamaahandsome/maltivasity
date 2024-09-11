import Menu from "./menu"

type Props = {}

const LandingPageNavBar = (props: Props) => {
    return (
        <div className="w-full flex justify-between sticky top-0 items-center py-5 z-50">
            <p className="text-2xl font-bold">Maltivas.</p>
            <Menu orientation="desktop" />
        </div>
    )
}

export default LandingPageNavBar
