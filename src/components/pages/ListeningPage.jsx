import { Button } from "@chakra-ui/react";
const ListeningPage = ({ onClick }) => {
  return (
    <div
      style={{
        position: "fixed",
        width: "100vw",
        height: "100vh",
        backgroundColor: "yellow",
        zIndex: "3",
      }}
    >
      Listening
      <Button onClick={onClick}>x</Button>
    </div>
  );
};

export default ListeningPage;
