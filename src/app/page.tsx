import BottomHeader from "@/components/header/BottomHeader";
import Banner from "@/components/pages/home/Banner";
import Categories from "@/components/categories/Categoreis"
import MiddleBanner from "@/components/pages/home/MiddleBanner";
import Category from "@/components/categories/Category";
import SecondMiddleBanner from "@/components/pages/home/SecondMiddleBanner";
import LastBanner from "@/components/pages/home/LastBanner";

export default function Home() {
  return (
    <main>
      <BottomHeader />
      <Banner />
      <Category />
      <MiddleBanner />
      <SecondMiddleBanner />
      <LastBanner />
    </main>
  );
}
