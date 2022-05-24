import React from "react";
import { useSelector } from "react-redux";
import { TitleVideoCount } from "../../GeneralComponent/TitleViedoCount/TitleVideoCount";
import { NoVideoExplore } from "../../GeneralComponent/NoVideoExplore/NoVideoExplore";
import { PlayListPageList } from "../../component/Playlist/PlayListPageList";
const PlayListPage = () => {
  const playlist = useSelector((state) => state.playlist.playlists_);
  const isPlayListEmpty = playlist.length === 0;
  return (
    <>
      <TitleVideoCount title={"PlayListCount"} count={playlist?.length} />
      {!isPlayListEmpty && <PlayListPageList />}
      {isPlayListEmpty && <NoVideoExplore />}
    </>
  );
}; 

export { PlayListPage };
