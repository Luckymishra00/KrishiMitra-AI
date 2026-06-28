import Image from "next/image";

export default function WeatherCard({
  image,
  icon,
  title,
  value,
  subtitle,
}) {
  return (
    <div className="group overflow-hidden rounded-t-[30px] bg-white/95 backdrop-blur-md dark:bg-slate-800 shadow-lg border border-green-100 hover:shadow-2xl hover:-translate-y-3 hover:scale-[1.02] transition-all duration-500">

      {/* Banner Image */}
      <div className="relative h-48 overflow-hidden">

        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-700"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent"></div>

      </div>

      {/* Floating Icon */}
      <div className="relative flex justify-center">

        <div className="-mt-10 w-20 h-20 rounded-full bg-gradient-to-br from-green-600 to-green-800 border-4 border-white shadow-[0_15px_40px_rgba(0,0,0,0.12)] flex items-center justify-center text-white transition-transform duration-300 group-hover:scale-110">

          {icon}

        </div>

      </div>

      {/* Card Content */}
      <div className="px-6 pb-8 pt-5 text-center">

        <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-200">
          {title}
        </h3>

        <div className="w-12 h-1 bg-green-600 rounded-full mx-auto mt-3 mb-4"></div>

        <h2 className="text-3xl font-bold text-green-700 dark:text-green-400">
          {value}
        </h2>

        <p className="mt-4 text-gray-500 dark:text-gray-400 leading-6">
          {subtitle}
        </p>

      </div>

    </div>
  );
}