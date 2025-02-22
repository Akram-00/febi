import { images } from "@/data/assets";
import Image from "next/image";

const Footer = () => {
  return (
    <footer>
      <div className="py-10 px-8">
        <div className="bg-primary rounded-[50px] py-10 px-8 text-black">
          <div className=" mx-auto flex flex-col md:flex-row justify-between items-start gap-8">
            {/* Left Section */}
            <div className="max-w-md">
              <Image src={images.pngs.logoDark} alt="logo-dark" width={197} height={84} />
              <p className="mt-4 text-base leading-relaxed">
                For Entrepreneurs by Enablers is your one-stop platform for entrepreneurial success—
                offering expert services, funding support, and a trusted community to help you scale
                from start to finish.
              </p>
            </div>

            {/* Middle Section */}
            <div>
              <h3 className="text-lg font-bold mb-3">Get Connected To</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:underline">Fundraising & Financial Planning</a></li>
                <li><a href="#" className="hover:underline">Legal & Compliance Management</a></li>
                <li><a href="#" className="hover:underline">Business Setup & Operations</a></li>
                <li><a href="#" className="hover:underline">Digital Presence & Marketing</a></li>
                <li><a href="#" className="hover:underline">Product Development & Sales</a></li>
                <li><a href="#" className="hover:underline">Business Growth & Consulting</a></li>
              </ul>
            </div>

            {/* Right Section */}
            <div>
              <h3 className="text-lg font-bold mb-3">Contact Us</h3>
              <div className="flex items-center space-x-2 mb-2">
                <span className="text-xl">📞</span>
                <a href="tel:+918438807386" className="hover:underline">+91 84388 07386</a>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-xl">📧</span>
                <a href="mailto:xyz@company.com" className="hover:underline">Xyz@Company.Com</a>
              </div>
            </div>


          </div>

          <div className="mt-6 text-center text-sm flex flex-row justify-between">
            <span>&copy; 2024</span>
            <div className="space-x-6">
              <a href="#" className="hover:underline">Terms And Condition</a>
              <span>●</span>
              <span>All Rights Reserved</span>
            </div>
          </div>
          {/* Footer Bottom */}

        </div>
      </div>
      <div className="p-5 w-full text-center bg-secondary">
        <h4 className="font-medium text-base">@Powered By PrimeSite Innovations</h4>
      </div>
    </footer>
  );
};

export default Footer;
