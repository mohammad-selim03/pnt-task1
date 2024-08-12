import Button from "@/components/ui/Button";
import img1 from "@/assets/product-banner/banner-slider-1.png";
import offerimg from "@/assets/product-banner/banner-slider-offer.png";
import Image from "next/image";
import Container from "@/components/Container";

const SecondMiddleBanner = () => {
  return (
    <Container className="mt-20 ">
      <div className="flex items-center justify-between bg-themeColor rounded-md px-4 py-5 text-white">
        <div className="px-10">
          <p className="text-md uppercase text-gray-200 font-semibold">
            tablet collections 2024
          </p>
          <h2 className="text-4xl font-bold">
            Samsung <br /> Galaxy Tab S6, <br />
            Wifi Tablet
          </h2>
          <del className="text-gray-200">$1240.00</del>
          <h2 className="text-3xl">$975.00</h2>
          <Button className="bg-black text-white px-10 py-3 hover:bg-white hover:text-black rounded-md mt-8 font-semibold transition-all duration-200 hover:shadow-md">
            Show now
          </Button>
        </div>
        <div className="relative">
          <Image src={img1} alt="banner image" className="hover:scale-110 hover:transition-all duration-200"/>
          <Image src={offerimg} alt="offer image" className="absolute top-0 left-20 w-24 hover:scale-110 hover:transition-all duration-200"/>
        </div>
      </div>
    </Container>
  );
};

export default SecondMiddleBanner;
