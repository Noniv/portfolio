import Image from "next/image";

export default function Job({
  src,
  title,
  jobTitle,
  timePeriod,
  children,
  active,
}) {
  return (
    <div
      className={
        "shadow-lg border-[1px] rounded-xl p-4 dark:bg-slate-800" +
        (active ? " border-teal-600" : "")
      }
    >
      <Image src={src} alt={title} className="w-16 h-16" />
      <h4 className="text-lg font-medium text-teal-600 mt-2">{title}</h4>
      <div className="font-medium">{jobTitle}</div>
      <div>{children}</div>
      <div className="text-gray-500">{timePeriod}</div>
    </div>
  );
}
