import axios from "axios";
import React, { useEffect, useState } from "react";
import styles from "./SinglePlayListPage.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Loader from "../../GeneralComponent/Loader/Loader";
import { NoVideoExplore } from "../../GeneralComponent/NoVideoExplore/NoVideoExplore";
import { TitleVideoCount } from "../../GeneralComponent/TitleViedoCount/TitleVideoCount";
import { HorizontalVideoCard } from "../../component/HorizontalVideoCard/HorizontalVideoCard";
import { removeVideoFromPlayList } from "../../store/PlayList/removevideofromplaylist-action";
import { useDebounce } from "../../customHooks/useDebounce";

const SinglePlayListPage = () => {
  const { playListId } = useParams();
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(null);
  const [videoOfCurrentPlayList, setVideoOfCurrentPlayList] = useState({});
  const playlist = useSelector((state) => state.playlist.playlists_);
  const encodedToken = useSelector((state) => state.login.encodedToken);
  const dispatch = useDispatch();
  useEffect(() => {
    (async () => {
      setLoader(true);
      try {
        const {
          data: { playlist },
        } = await axios.get(`/api/user/playlists/${playListId}`, {
          headers: {
            authorization: encodedToken,
          },
        });
        setVideoOfCurrentPlayList(playlist);
        setLoader(false);
        setError(null);
      } catch (error) {
        setVideoOfCurrentPlayList([]);
        setLoader(false);
        setError("something went wrong");
      }
    })();
  }, [playListId, encodedToken, playlist]);

  const deleteVideo = async (video) => {
    dispatch(removeVideoFromPlayList(playListId, video, encodedToken));
  };

  const deleteVideoDebounce = useDebounce(deleteVideo, 300);

  return (
    <main>
      {loader && <Loader />}

      {!loader && !error && (
        <>
          <TitleVideoCount
            title={videoOfCurrentPlayList?.title}
            count={videoOfCurrentPlayList?.videos?.length}
          />
          {videoOfCurrentPlayList?.videos?.length === 0 && <NoVideoExplore />}
          {videoOfCurrentPlayList?.videos?.length !== 0 && (
            <main className={`${styles.horizonatal_video_container}`}>
              {videoOfCurrentPlayList?.videos?.map((ele) => (
                <HorizontalVideoCard
                  key={ele?._id}
                  video={ele}
                  deleteVideo={deleteVideoDebounce}
                />
              ))}
            </main>
          )}
        </>
      )}
    </main>
  );
};

export { SinglePlayListPage };
