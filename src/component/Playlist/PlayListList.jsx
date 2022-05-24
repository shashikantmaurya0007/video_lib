import React from "react";
import { useSelector } from "react-redux";
import { IndividualPlayList } from "./IndividualPlayList";

const PlayListList = () => {
  const playlists = useSelector((state) => state.playlist.playlists_);
  return (
    <div>
      {playlists?.map((ele) => (
        <IndividualPlayList
          key={ele?._id}
          videos={ele?.videos}
          playlistId={ele?._id}
          playlistitle={ele?.title}
        />
      ))}
    </div>
  );
};

export { PlayListList };
