import { useSelector } from "react-redux";

const useIsThisVideoLiked = () => {
  const likedvideo = useSelector((state) => state.like.likedvideo);

  return function () {
    const video = arguments[0];

    const find = likedvideo.some((el) => el._id === video._id);
    return find;
  };
};
export { useIsThisVideoLiked };
