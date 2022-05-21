import React from "react";
import { useDispatch, useSelector } from "react-redux";
import HistoryVideos from "../../component/History/HistoryVideos";
import { NoVideoExplore } from "../../GeneralComponent/NoVideoExplore/NoVideoExplore";
import { TitleVideoCount } from "../../GeneralComponent/TitleViedoCount/TitleVideoCount";
import { historyAction } from "../../store/History/history-slice";
import { useDebounce } from "../../customHooks/useDebounce";
import { toast } from "react-toastify";
const HistoryPage = () => {
  const historyvideos = useSelector((state) => state.history.historyvideos);
  const isHistoryListEmty = historyvideos?.length === 0;
  const dispatch = useDispatch();
  const clearHistory = () => {
    dispatch(historyAction.setClearHistory());
    toast.success("History cleared!");
  };
  const clearHistoryDebounceFn = useDebounce(clearHistory, 400);
  return (
    <>
      <TitleVideoCount
        title={"History Videos"}
        count={historyvideos.length}
        displayButton={!isHistoryListEmty}
        buttonText={"clear history"}
        buttonAction={clearHistoryDebounceFn}
      />
      {!isHistoryListEmty && <HistoryVideos />}
      {isHistoryListEmty && <NoVideoExplore />}
    </>
  );
};

export { HistoryPage };
