import { substring } from "../common/core";
import SectionLayout from "../ui/molecules/SectionLayout";
import NomalSlid from "../ui/organisms/NomalSlid";
import WideListSlid from "../ui/organisms/WideListSlid";
import WideSlid from "../ui/organisms/WideSlid";

const IntroPage = ({ isLogin, onHeaderActive }) => {
  return (
    <SectionLayout
      title="Look! what's going on👀"
      onHeaderActive={onHeaderActive}
    >
      <WideSlid
        isLogin={isLogin}
        genre="hiphop"
        title="What's New"
        height="200"
        substring1={substring.s23}
        substring2={substring.s40}
      />
      <NomalSlid
        isLogin={isLogin}
        title="Here's pick"
        genre="hiphop"
        width="160px"
        substring={substring.s16}
      />
      <NomalSlid
        isLogin={isLogin}
        title="Here's new"
        genre="hiphop"
        width="160px"
        substring={substring.s16}
      />
      <WideListSlid
        isLogin={isLogin}
        genre="hiphop"
        title="See more"
        substring={substring.s40}
      />
    </SectionLayout>
  );
};

export default IntroPage;
