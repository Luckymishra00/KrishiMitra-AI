import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function FeatureCard({
  icon,
  title,
  description,
  href = "#",
}) {
  return (
    <div className="group bg-white dark:bg-slate-800 rounded-2xl border border-green-100 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 p-6 text-center">

      {/* Icon */}
      <div className="w-20 h-20 mx-auto rounded-full bg-green-100 flex items-center justify-center text-green-700 group-hover:bg-green-700 group-hover:text-white transition-all duration-300">
        {icon}
      </div>

      {/* Title */}
      <h3 className="mt-5 text-xl font-bold text-slate-800 dark:text-white">
        {title}
      </h3>

      {/* Divider */}
      <div className="w-12 h-1 bg-green-600 rounded-full mx-auto my-4"></div>

      {/* Description */}
      <p className="text-gray-600 dark:text-gray-300 text-[15px] leading-7 min-h-[72px]">
        {description}
      </p>

      {/* Button */}
      <Link
        href={href}
        className="mt-6 inline-flex items-center justify-center w-11 h-11 rounded-full bg-green-100 text-green-700 hover:bg-green-700 hover:text-white transition-all duration-300"
      >
        <ArrowRight
          size={20}
          className="transition-transform duration-300 group-hover:translate-x-1"
        />
      </Link>

    </div>
  );
}