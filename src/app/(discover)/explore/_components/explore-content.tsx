"use client"
import { useAppSelector } from "@/redux/store"
import dynamic from "next/dynamic"
import ExploreSlider from "./explore-slider"
import GroupList from "./group-list"

type Props = {
  layout: "SLIDER" | "LIST"
  category?: string
}

const SearchGroups = dynamic(
  () =>
    import("./searched-groups").then((components) => components.SearchGroups),
  {
    ssr: false,
  },
)

const ExplorePageContent = ({ layout, category }: Props) => {
  const { isSearching, data, status, debounce } = useAppSelector(
    (state) => state.searchReducer,
  )

  return (
    <div className="flex flex-col">
      {isSearching || debounce ? (
        <SearchGroups
          searching={isSearching as boolean}
          data={data!}
          query={debounce}
        />
      ) : (
        status !== 200 &&
        (layout === "SLIDER" ? (
          <>
            <ExploreSlider
              label="ComicBooks"
              text="Join top performing groups on Maltivasity."
              query="comicbooks"
            />
            <ExploreSlider
              label="Game Development"
              text="Join top performing groups on Maltivasity."
              query="gamedevelopment"
            />
            <ExploreSlider
              label="Music"
              text="Join top performing groups on Maltivasity."
              query="music"
            />
          </>
        ) : (
          <GroupList category={category as string} />
        ))
      )}
    </div>
  )
}

export default ExplorePageContent