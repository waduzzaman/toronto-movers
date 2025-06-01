// app/components/GetQuoteButton.jsx
import Link from 'next/link';

export default function GetQuoteButton({
  text = "Get a Free Quote",
  href = "/quote",
  className = "", // Allow custom classes to be passed
  size = "normal" // 'normal', 'large', 'small'
}) {
  let sizeClasses = "px-6 py-3 text-base font-semibold"; // Default: normal
  if (size === "large") {
    sizeClasses = "px-8 py-4 text-lg font-semibold";
  } else if (size === "small") {
    sizeClasses = "px-4 py-2 text-sm font-medium";
  }

  return (
    <Link
      href={href}
      className={`inline-block bg-primary text-white rounded-md hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary-dark focus:ring-offset-2 transition-colors duration-200 shadow-md hover:shadow-lg ${sizeClasses} ${className}`}
    >
      {text}
    </Link>
  );
}