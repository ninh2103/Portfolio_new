import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

const socialLinks = [
  { icon: Facebook, href: "#" },
  { icon: Twitter, href: "#" },
  { icon: Instagram, href: "#" },
  { icon: Linkedin, href: "#" },
];

export default function Footer() {
  return (
    <footer className="dark:bg-gray-900 py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="mx-auto">
            <h4 className="font-semibold mb-4 dark:text-white">Về tôi</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="dark:text-gray-400 dark:hover:text-green-400"
                >
                  Chính sách bảo mật
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="dark:text-gray-400 dark:hover:text-green-400"
                >
                  Điều khoản dịch vụ
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="dark:text-gray-400 dark:hover:text-green-400"
                >
                  Hệ sinh thái
                </Link>
              </li>
            </ul>
          </div>
          <div className="mx-auto">
            <h4 className="font-semibold mb-4 dark:text-white">Tài nguyên</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="dark:text-gray-400 dark:hover:text-green-400"
                >
                  Giới thiệu
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="dark:text-gray-400 dark:hover:text-green-400"
                >
                  Tài nguyên
                </Link>
              </li>
            </ul>
          </div>
          <div className="mx-auto">
            <h4 className="font-semibold mb-4 dark:text-white">Pháp luật</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="dark:text-gray-400 dark:hover:text-green-400"
                >
                  Chính sách bảo mật
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="dark:text-gray-400 dark:hover:text-green-400"
                >
                  Điều khoản dịch vụ
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="dark:text-gray-400 dark:hover:text-green-400"
                >
                  Chính sách bảo mật
                </Link>
              </li>
            </ul>
          </div>
          <div className="mx-auto">
            <h4 className="font-semibold mb-4 dark:text-white">Liên hệ</h4>
            <p className="dark:text-gray-400 mb-2">Đà Nẵng</p>
            <p className="dark:text-gray-400 mb-2">+84 799830773</p>
            <p className="dark:text-gray-400">nguyenducninh210303@gmail.com</p>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 mt-8 text-center">
          <div className="flex justify-center space-x-6 mb-6">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="dark:text-gray-400 dark:hover:text-green-400 transition-colors"
              >
                <link.icon className="h-6 w-6" />
              </a>
            ))}
          </div>
          <p className="dark:text-gray-400">
            &copy; cảm ơn Nextjs, ShadcnUI, Magic UI, Aceternity UI đã giúp mình
            build trang cá nhân này.
          </p>
        </div>
      </div>
    </footer>
  );
}
