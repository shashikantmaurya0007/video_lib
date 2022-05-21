import React from "react";
import { useSelector } from "react-redux";
import { WatchLater } from "../../component/WatchLater/WatchLater";
import { NoVideoExplore } from "../../GeneralComponent/NoVideoExplore/NoVideoExplore";
import { TitleVideoCount } from "../../GeneralComponent/TitleViedoCount/TitleVideoCount";

const WatchLaterPage = () => {
  const watchlatervideo = useSelector(
    (state) => state.watchlater.watchlatervideo
  );
  const isWatchLaterEmpty = watchlatervideo?.length === 0;
  return (
    <>
      <TitleVideoCount
        title={"WatchLater Videos"}
        count={watchlatervideo.length}
      />
      {!isWatchLaterEmpty && <WatchLater />}
      {isWatchLaterEmpty && <NoVideoExplore />}
    </>
  );
};

export { WatchLaterPage };
