import Button from "@/components/ui/Button";
import banner1 from "@/assets/product-banner/product-banner-1.jpg";
import banner2 from "@/assets/product-banner/product-banner-2.jpg";
import Image from "next/image";
import Container from "@/components/Container";
import { FaArrowRightLong } from "react-icons/fa6";

const MiddleBanner = () => {
  return (
    <Container className="  mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 ">
        <div className="flex items-center justify-between gap-5 mt-20 ">
          <div className="relative w-[1100px]">
            <Image
              src={banner1}
              alt="product banner one "
              className="h-[250px] w-[1000px] rounded-lg"
            />
          </div>
          <div className="absolute px-5 ml-7">
            <h4 className="text-sm">Sale 20% of all store</h4>
            <p className="text-2xl font-semibold hover:text-blue-500 cursor-pointer transition-all duration-200">
              Smartphone <br />
              BLU G91 Pro 2024
            </p>
            <Button className="bg-transparent hover:text-blue-500 hover:bg-transparent transition-all duration-200 mt-14 flex items-center gap-2 text-black -ml-5  font-semibold text-sm">
              Shop Now <FaArrowRightLong />
            </Button>
          </div>
        </div>
        <div>
          <div className="flex items-center justify-between mt-20 sm:max-w-lg md:max-w-2xl">
            <div className="relative">
              <Image
                src={banner2}
                alt="product banner one "
                className="h-[250px] w-[660px]  rounded-lg"
              />
            </div>
            <div className="absolute px-5 ml-7">
              <p className="text-lg font-semibold hover:text-blue-500 cursor-pointer transition-all duration-200">
                HyperX Cloud II <br /> Wireless
              </p>
              <h4 className="text-sm">Sale 20% off</h4>
              <Button className="bg-transparent hover:text-blue-500 hover:bg-transparent transition-all duration-200 mt-14 flex items-center gap-2 text-black -ml-5  font-semibold text-sm">
                Shop Now <FaArrowRightLong />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default MiddleBanner;
