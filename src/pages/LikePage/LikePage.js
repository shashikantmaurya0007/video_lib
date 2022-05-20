import React from "react";
import { useSelector } from "react-redux";
import { LikedVideos } from "../../component/Like/LikedVideos";
import { NoVideoExplore } from "../../GeneralComponent/NoVideoExplore/NoVideoExplore";
import { TitleVideoCount } from "../../GeneralComponent/TitleViedoCount/TitleVideoCount";

const LikePage = () => {
  const likedvideo = useSelector((state) => state.like.likedvideo);
  const isLikedListEmpty = likedvideo?.length === 0;
  return (
    <>
      <TitleVideoCount title={"Liked Videos"} count={likedvideo.length} />
      {!isLikedListEmpty && <LikedVideos />}
      {isLikedListEmpty && <NoVideoExplore />}
    </>
  );
};

export { LikePage };
