import { Button, Image } from "@chakra-ui/react";
import { opacity, theme } from "../common/core";
const ListeningPage = ({ onClick, src }) => {
  return (
    <div
      style={{
        position: "fixed",
        width: "100vw",
        height: "100vh",
        backgroundColor: theme.bg,
        zIndex: "3",
      }}
    >
      <div>
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <Button
            onClick={onClick}
            backgroundColor={`rgba(176, 168, 185, ${opacity.heavy})`}
          >
            X
          </Button>
        </div>
        <Image src={src} width="320px" borderRadius="10px" margin="auto" />
      </div>
    </div>
  );
};

export default ListeningPage;
