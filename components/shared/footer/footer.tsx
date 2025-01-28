import { APP_NAME } from "@/lib/constants";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="border-t bg-gray-100 dark:bg-[hsl(217.2_32.6%_17.5%)] text-black dark:text-white">
      <div className="max-w-screen-xl mx-auto px-2 py-6 flex flex-col lg:flex-row justify-center lg:justify-between items-center lg:items-start lg:space-x-4 space-y-4 lg:space-y-0">
        {/* Left Section: Company */}
        <div className="flex flex-col space-y-1 text-center lg:text-left">
          <h3 className="font-bold text-lg">Company</h3>
          <Link href="/about" className="text-gray-700 hover:text-black dark:text-gray-300 dark:hover:text-white">
            About Us
          </Link>
          <Link href="/careers" className="text-gray-700 hover:text-black dark:text-gray-300 dark:hover:text-white">
            Careers
          </Link>
          <Link href="/faq" className="text-gray-700 hover:text-black dark:text-gray-300 dark:hover:text-white">
            FAQ
          </Link>
          <Link href="/contact" className="text-gray-700 hover:text-black dark:text-gray-300 dark:hover:text-white">
            Contact Us
          </Link>
        </div>

        {/* Middle Section: Customer */}
        <div className="flex flex-col space-y-1 text-center lg:text-left">
          <h3 className="font-bold text-lg">Customer</h3>
          <Link href="/blog" className="text-gray-700 hover:text-black dark:text-gray-300 dark:hover:text-white">
            Blog
          </Link>
          <Link href="/privacy-policy" className="text-gray-700 hover:text-black dark:text-gray-300 dark:hover:text-white">
            Privacy Policy
          </Link>
          <Link href="/terms-of-service" className="text-gray-700 hover:text-black dark:text-gray-300 dark:hover:text-white">
            Terms of Service
          </Link>
        </div>

        {/* Right Section: Bookstore Specific */}
        <div className="flex flex-col space-y-1 text-center lg:text-left">
          <h3 className="font-bold text-lg">Bookstore</h3>
          <Link href="/books" className="text-gray-700 hover:text-black dark:text-gray-300 dark:hover:text-white">
            Books
          </Link>
          <Link href="/best-sellers" className="text-gray-700 hover:text-black dark:text-gray-300 dark:hover:text-white">
            Best Sellers
          </Link>
          <Link href="/new-arrivals" className="text-gray-700 hover:text-black dark:text-gray-300 dark:hover:text-white">
            New Arrivals
          </Link>
          <Link href="/offers" className="text-gray-700 hover:text-black dark:text-gray-300 dark:hover:text-white">
            Special Offers
          </Link>
        </div>
      </div>

      {/* Copyright */}
      <div className="p-4 text-center text-sm bg-gray-100 dark:bg-gray-800">
        ©{currentYear} {APP_NAME}. All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
