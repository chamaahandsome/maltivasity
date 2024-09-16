import { RefreshCcw } from "lucide-react"
import {
  Buisness,
  Fitness,
  LifeStyle,
  Music,
  PersonalDevelopment,
  SocialMedia,
  Tech,
} from "../icons"
import { ComicBook } from "@/icons/comicbook"
import { GameDev } from "@/icons/gamedev"
import { Writing } from "@/icons/writing"
import { FaceMask } from "@/icons/mask"

export type GroupListProps = {
  id: string
  label: string
  icon: JSX.Element
  path: string
}

export const GROUP_LIST: GroupListProps[] = [
  {
    id: "0",
    label: "All",
    icon: <RefreshCcw />,
    path: "",
  },
  {
    id: "1",
    label: "ComicBooks",
    icon: <ComicBook />,
    path: "fitness",
  },
  {
    id: "2",
    label: "Music",
    icon: <Music />,
    path: "music",
  },
  {
    id: "3",
    label: "Animation",
    icon: <Buisness />,
    path: "buisness",
  },
  {
    id: "4",
    label: "Game Development",
    icon: <GameDev />,
    path: "lifestyle",
  },
  {
    id: "5",
    label: "Writing",
    icon: <Writing />,
    path: "personal-development",
  },
  {
    id: "6",
    label: "Film",
    icon: <SocialMedia />,
    path: "social-media",
  },
  {
    id: "7",
    label: "Crafty",
    icon: <FaceMask />,
    path: "tech",
  },
]