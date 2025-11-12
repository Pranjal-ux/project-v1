import React from "react";

const Nav1 = () => {
  return (
    <div className="flex flex-row gap-15 py-3">
      <a href="https://legacy.skiper-ui.com/">
        <div className="flex items-center gap-3">
          <svg
            width="62"
            height="62"
            viewBox="0 0 62 62"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="size-6"
          >
            <ellipse
              cx="30.882"
              cy="30.803"
              rx="30.3097"
              ry="30.2769"
              fill="url(#paint0_radial_36_64)"
            ></ellipse>
            <defs>
              <radialGradient
                id="paint0_radial_36_64"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(0.572266 0.526062) rotate(44.969) scale(85.6825 85.6824)"
              >
                <stop offset="0.352001" stopColor="#090909"></stop>
                <stop offset="0.591494" stopColor="#2770EA"></stop>
                <stop offset="0.793825" stopColor="#FF7E97"></stop>
                <stop offset="0.972489" stopColor="#FF9203"></stop>
              </radialGradient>
            </defs>
          </svg>
          <h4 className="text-black text-xl font-bold">legacy.skiper/ui</h4>
          <span className="text-sm border border-orange-600 rounded-xl px-3 text-orange-600">
            Beta
          </span>
        </div>
      </a>
      <a
        className="text-gray-500 text-lg"
        href="https://legacy.skiper-ui.com/docs/components/theme-toggle-animations"
      >
        Component
      </a>
      <a
        className="text-gray-500 text-lg "
        href="https://legacy.skiper-ui.com/pricing"
      >
        Pricing
      </a>
      <a
        className="text-gray-500 text-lg"
        href="https://legacy.skiper-ui.com/newsletter"
      >
        NewsLetter
      </a>
    </div>
  );
};

export default Nav1;
