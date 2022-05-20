import { historyAction } from "../../../store/History/history-slice";

const manageHistory = (video, isLogin, historyvideos, dispatch) => {
  if (isLogin) {
    console.log("checking inside");
    const find = historyvideos?.some((el) => el?._id === video?._id);
    if (!find) {
      console.log("yeha pe aya");
      const newHistoryVideosList = historyvideos?.concat(video);

      dispatch(historyAction.setAddHistoryVideos(newHistoryVideosList));
    }
  }
};
export { manageHistory };
