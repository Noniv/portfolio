import Image from "next/image";
import Link from "next/link";

export default function Card({ src, title, description, children, href }) {
  return (
    <Link
      href={href}
      className="hover:scale-[105%] hover:rotate-1 transition-transform"
      target="_blank"
    >
      <div className="text-center shadow-lg pb-10 rounded-xl overflow-hidden dark:bg-slate-800 h-full mb-10">
        <div className="md:h-48 overflow-hidden">
        <Image
          src={src}
          height={953}
          width={1920}
          className="md:min-h-full"
          alt="Website photo"
        />
        </div>
        <h4 className="text-lg font-medium pt-8 pb-2 text-teal-600">{title}</h4>
        <div className="px-10">{description}</div>
        <div className="flex gap-6 justify-center text-2xl pt-6">
          {children}
        </div>
      </div>
    </Link>
  );
}
