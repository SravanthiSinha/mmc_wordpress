import { BOOKING_URL, THERAPIST_URLS } from '../../constants';

// Reusable BookNow CTA component for consistency
const BookNowCTA = ({ className = "", size = "md", therapistId = null }) => {
  // Size variants
  const sizeClasses = {
    sm: "text-sm px-4 py-2",
    md: "text-base px-6 py-3",
    lg: "text-xl px-8 py-4"
  };

  // Determine the correct booking URL based on therapist ID if provided
  const bookingUrl = therapistId && THERAPIST_URLS[therapistId]
    ? THERAPIST_URLS[therapistId]
    : BOOKING_URL;

  // Open in new tab if therapistId exists (therapist-specific booking)
  const linkProps = therapistId ? {
    target: "_blank",
    rel: "noopener noreferrer"
  } : {};
  
  return (
    <a
      href={bookingUrl}
      {...linkProps}
      className={`inline-block bg-brand-coral text-white font-bold 
      ${sizeClasses[size]} rounded-full hover:bg-brand-coralLight transition-all duration-200
      hover:transform hover:scale-105 active:scale-95 ${className}`}
    >
      Book Now
    </a>
  );
};

export default BookNowCTA;