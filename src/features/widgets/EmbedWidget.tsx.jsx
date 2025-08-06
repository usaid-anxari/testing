import React, { useContext } from "react";
import { UserContext } from "../../context/UserContex";
import VideoReviewCard from "../../components/VideoReviewCard";
import AudioReviewCard from "../../components/AudioReviewCard";

// export type ReviewType = "video" | "audio" | "written";

// interface Review {
//   id: string;
//   url: File | null;
//   // url: string,
//   content?: string;
//   author: string;
//   rating: Number;
//   createdAt: string;
//   approved: boolean;
//   // type: ReviewType, // Add this line
// }

// export interface EmbedWidgetProps {
//   reviews: Review[];
//   style?: "light" | "dark"; // optional style variants
// }
// const { reviews } = useContext(UserContext);

const EmbedWidget = ({
  reviews,
  style = "light",
}) => {
  const bgClass =
    style === "dark" ? "bg-gray-900 text-white" : "bg-white text-gray-900";
  //   const sortedReviews = reviews
  //     .filter((r) => r.approved)
  //     .sort((a, b) => {
  //       const typePriority = { video: 0, audio: 1, written: 2 };
  //       return typePriority[a.type] - typePriority[b.type];
  //     });
  // console.log(sortedReviews);
  console.log(reviews);

  return (
    <div className={`w-full max-w-4xl mx-auto p-4 rounded shadow ${bgClass}`}>
      <h2 className="text-xl font-semibold mb-4">Customer Testimonials</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {reviews
          .filter((r) => r.approved === true)
          .map((review) => (
            <div
              key={review.id}
              className="border rounded p-3 bg-opacity-10 backdrop-blur"
            >
              <p className="text-sm text-gray-500">{review.createdAt}</p>
              <h4 className="font-bold mb-2">{review.author}</h4>

              {review.url?.type === "video" && (
                <VideoReviewCard
                  type={review.url?.type || "video/mp4"}
                  key={review.id}
                  {...review}
                  url={review.url?.name || ""}
                  rating={Number(review.rating)}
                />
              )}

              {review.url?.type === "audio" && (
                <AudioReviewCard
                  type={review.url?.type || "audio/mp3"}
                  key={review.id}
                  {...review}
                  url={review.url?.name || ""}
                  rating={Number(review.rating)}
                />
              )}

              {review.content === "written" && (
                <p className="text-sm italic text-gray-700 dark:text-gray-300">
                  "{review.content}"
                </p>
              )}
            </div>
          ))}
      </div>
    </div>
  );
};

export default EmbedWidget;
