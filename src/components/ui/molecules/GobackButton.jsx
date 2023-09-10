import { STitle } from "../../common/style";
import { useNavigate } from "react-router-dom";

const GobackButton = () => {
  const navigate = useNavigate();
  return (
    <button
      style={{
        width: "40px",
        height: "40px",
        borderRadius: "50px",
        backgroundColor: "rgba(176, 168, 185, 0.3)",
        zIndex: "10",
        position: "relative",
      }}
      onClick={() => navigate(-1)}
    >
      <STitle style={{ marginLeft: "-2px" }}>〈</STitle>
    </button>
  );
};

export default GobackButton;
