import personimg from "@/assets/product-banner/subscribe-shape-4.png";
import Container from "@/components/Container";
import Button from "@/components/ui/Button";
import Image from "next/image";

const LastBanner = () => {
  return (
    <Container className="mt-20">
      <div className="bg-themeColor/80 h-[240px] rounded-md px-4 ">
        <div className="flex items-center justify-between px-5 ">
          <div className="mt-7">
            <p className="uppercase  text-white">Sale 20% off all store</p>
            <h3 className="text-4xl font-bold  text-white">Subscribe our Newsletter</h3>
          </div>
          <div className="mt-5 relative">
            <Image src={personimg} alt="peroson image " />
            <input
              type="email"
              placeholder="Enter your email"
              className=" outline-none py-5 w rounded-l-md px-3 absolute top-20 -left-72 text-black"
            />
            <Button className="bg-black py-5 px-9 hover:bg-black text-white rounded-r-md absolute top-20 -left-14">
              Subscribe
            </Button>
          </div>
        </div>
      </div>
      <div className="mt-20 ml-20"></div>
    </Container>
  );
};

export default LastBanner;
