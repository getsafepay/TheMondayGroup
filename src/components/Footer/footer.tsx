"use client";

export function Footer() {
  return (
    <div className="flex flex-col  bg-white border-t border-gray-200">
      <nav className="flex sm:justify-center space-x-4">
        {[
          ["Home", "/"],
          ["Posts", "/posts"],
          ["Login", "/"],
          ["Contact", "/"],
          ["The Monday Group LLC", "/"],
        ].map(([title, url], i) => (
          <a
            href={url}
            key={i}
            className="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900"
          >
            {title}
          </a>
        ))}
      </nav>
    </div>
  );
}
