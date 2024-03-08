// import React from "react";

// export const Button = () => {
//   return (
//     <div>
//       <button type="submit" className="text-red-800 primary border-2 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 bg-black">Hello</button>
//     </div>
//   );
// };

// export default Button;

import React from "react";

export const Button = ({ variant, size, onClick, disabled }) => {
  const variantClasses = {
    primary:
      "bg-blue-600 px-4 py-2 m-3 rounded-lg text-white font-medium border-1 border-solid border-blue-600",
    secondary:
      "bg-gray-600 px-4 py-2 m-3 rounded-lg text-white font-medium border-1 border-solid border-blue-600",
    tertary:
      "bg-white-900 px-4 py-2 m-3 rounded-lg font-medium border-2 border-solid border-black",
  };
  const sizeclasses = {
    small: "text-sm",
    medium: "text-6xl",
  };
  const focusclass = "focus:outline-none focus:ring focus:ring-violet-900";
  const hoverclass = "hover:bg-violet-600";
  const classes = variantClasses[variant];
  const sizeclass = sizeclasses[size];
  const allclass = `${classes} ${sizeclass}`;
  const disableclass = disabled ? "opacity-50" : `${focusclass} ${hoverclass}`;

  return (
    <button
      className={`${allclass} ${disableclass}`}
      onClick={onClick}
      disabled={disabled}
    >
      Hello
    </button>
  );
};

export default Button;
