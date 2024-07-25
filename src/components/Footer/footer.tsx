"use client";
export function Footer() {
  return (
    <div className="flex flex-col h-full min-h-screen bg-palette-white">
      <nav className="flex sm:justify-center space-x-4">
        {[
          ["Home", "/"],
          ["Posts", "/posts"],
          ["Login", "/"],
          ["Contact", "/"],
          ["The monday group LLC", "/"],
        ].map(([title, url]) => (
          <a
            href={url}
            className="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900"
          >
            {title}
          </a>
        ))}
      </nav>
    </div>
  );
}
