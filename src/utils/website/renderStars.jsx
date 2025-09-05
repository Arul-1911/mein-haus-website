import { Star, StarHalf } from "lucide-react";

export const renderStars = (ratingStr) => {
  const rating = parseFloat(ratingStr) || 1;
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.25 && rating % 1 < 0.75;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className="flex justify-center gap-1 mb-4">
      {Array.from({ length: fullStars }).map((_, i) => (
        <Star
          key={`full-${i}`}
          size={28}
          className="text-[#F88B36] fill-[#F88B36]"
        />
      ))}
      {hasHalfStar && (
        <StarHalf
          key="half"
          size={28}
          className="text-[#F88B36] fill-[#F88B36]"
        />
      )}
      {Array.from({ length: emptyStars }).map((_, i) => (
        <Star key={`empty-${i}`} size={28} className="text-gray-300" />
      ))}
    </div>
  );
};
