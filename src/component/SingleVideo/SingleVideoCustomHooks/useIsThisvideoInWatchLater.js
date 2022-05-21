import { useSelector } from "react-redux";

const useIsThisVideoInWatchLater = () => {
  const watchlatervideo = useSelector(
    (state) => state.watchlater.watchlatervideo
  );

  return function () {
    const video = arguments[0];

    const find = watchlatervideo?.some((el) => el?._id === video?._id);
    return find;
  };
};
export { useIsThisVideoInWatchLater };
