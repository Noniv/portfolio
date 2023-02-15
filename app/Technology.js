export default function Technology({ title, children }) {
  return (
    <div className="flex justify-center flex-col items-center text-5xl gap-2 py-6 lg:py-0">
      <h4 className="text-2xl">{title}</h4>
      {children}
    </div>
  );
}
