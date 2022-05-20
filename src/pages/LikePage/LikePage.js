import React from "react";
import { useSelector } from "react-redux";
import { LikedVideos } from "../../component/Like/LikedVideos";
import { TitleVideoCount } from "../../GeneralComponent/TitleViedoCount/TitleVideoCount";

const LikePage = () => {
  const likedvideo = useSelector((state) => state.like.likedvideo);
  const isLikedListEmpty = likedvideo?.length;
  return (
    <>
      <TitleVideoCount title={"Liked Videos"} count={likedvideo.length} />
      <LikedVideos />
    </>
  );
};

export { LikePage };
