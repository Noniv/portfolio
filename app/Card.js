import Image from "next/image";
import Link from "next/link";

export default function Home({ src, title, description, children, href }) {
  return (
    <Link
      href={href}
      className="lg:basis-5/12 hover:scale-[105%] hover:rotate-1 transition-transform"
    >
      <div className="group text-center shadow-lg pb-10 rounded-xl overflow-hidden dark:bg-slate-900 h-full mb-10">
        <Image
          src={src}
          height={950}
          width={1900}
          className="w-full"
          alt="Website photo"
        />
        <h4 className="text-lg font-medium pt-8 pb-2 text-teal-600">{title}</h4>
        <div className="px-10">{description}</div>
        <div className="flex gap-6 justify-center text-2xl pt-6">
          {children}
        </div>
      </div>
    </Link>
  );
}
