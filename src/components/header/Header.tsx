import BottomHeader from "./BottomHeader";
import MiddleHeader from "./MiddleHeader";
import TopHeader from "./TopHeader";

const Header = () => {
  return (
    <header>
      {/* TopHeader */}
      <TopHeader />
      <div>
        {/* Middle Header */}
        <MiddleHeader />
        {/* BottomHeader */}
        <BottomHeader />
      </div>
    </header>
  );
};

export default Header;
