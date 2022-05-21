import { historyAction } from "../../../store/History/history-slice";

const manageHistory = (video, isLogin, historyvideos, dispatch) => {
  if (isLogin) {
    const find = historyvideos?.some((el) => el?._id === video?._id);
    if (!find) {
      const newHistoryVideosList = historyvideos?.concat(video);

      dispatch(historyAction.setAddHistoryVideos(newHistoryVideosList));
    }
  }
};
export { manageHistory };
