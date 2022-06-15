import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { filterAction } from "../store/Explore/filtervideo-slice";
import { useDebounce } from "./useDebounce";

const useSearch = () => {
  const [validSearch, setValidSearch] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const ref = useRef("");
  const search = (e) => {
    if (Boolean(e.target.value.trim())) {
      setValidSearch((prev) => true);
      dispatch(filterAction.setSearchFilter(e.target.value));

      if (Boolean(ref.current.trim().length > e.target.value.trim().length)) {
        ref.current = e.target.value;
        return;
      } else {
        ref.current = e.target.value;
        navigate("/explore");
      }
    } else {
      dispatch(filterAction.setResetSearchFilter());
      ref.current = "";
      setValidSearch((prev) => false);
    }
  };

  const debounceSearch = useDebounce(search, 300);

  return { validSearch, debounceSearch, setValidSearch };
};

export { useSearch };
