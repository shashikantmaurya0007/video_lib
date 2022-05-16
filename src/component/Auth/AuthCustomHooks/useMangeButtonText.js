import { useSelector } from "react-redux";
const useManageButtonText = () => {
  const loading = useSelector((state) => state.signup.loading);

  if (loading)
    return (
      <img
        className="button_loader_gif"
        src="https://wpamelia.com/wp-content/uploads/2018/11/ezgif-2-6d0b072c3d3f.gif"
        alt="loading"
      ></img>
    );
  return "signup";
};

export { useManageButtonText };
