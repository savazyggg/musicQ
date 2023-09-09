import { onRecommand } from "../api/onRecommand";
import { substring } from "../common/core";
import SectionLayout from "../ui/molecules/SectionLayout";
import NewRelease from "../ui/organisms/NewRelease";
import NomalSlid from "../ui/organisms/NomalSlid";
import WideListSlid from "../ui/organisms/WideListSlid";

const URL =
  "https://api.spotify.com/v1/browse/new-releases?country=KR&limit=10&offset=5";

const RightNowPage = ({ isLogin, onHeaderActive }) => {
  console.log(isLogin);
  return (
    <SectionLayout
      title="What's on right now 🤡"
      onHeaderActive={onHeaderActive}
    >
      <NewRelease
        isLogin={isLogin}
        title="New Releases"
        width="280px"
        height="350px"
        genre={URL}
      />
      <NomalSlid
        isLogin={isLogin}
        title="what's on fire🔥"
        genre="country%2Chiphop%2Cpop"
        width="160px"
        substring={substring.s16}
        func={onRecommand}
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

export default RightNowPage;
