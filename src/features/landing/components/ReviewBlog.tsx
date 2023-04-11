import React from "react";
type StarProps = {
    numVote: number;
};
const Star = ({ numVote = 0 }: StarProps) => (
    <React.Fragment>
        {new Array(5).fill(0).map((_, index: number) => (
            <svg
                key={index}
                xmlns="http://www.w3.org/2000/svg"
                className={`h-5 w-5 
                    ${index < numVote ? "text-yellow-400" : "text-gray-200"}`}
                viewBox="0 0 20 20"
                fill="currentColor"
            >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
        ))}
    </React.Fragment>
);

type ReviewItemProps = StarProps & {
    content: string;
    author: string;
    dateTime: string;
    title: string;
};
const ReviewItem = ({
    numVote,
    title,
    author,
    content,
    dateTime,
}: ReviewItemProps) => {
    return (
        <blockquote>
            <header className="sm:flex sm:items-center sm:gap-4">
                <div className="flex">
                    <Star numVote={numVote} />
                </div>
                <p className="mt-2 font-medium sm:mt-0">{title}</p>
            </header>
            <p className="mt-2 text-gray-700">{content}</p>
            <footer className="mt-4">
                <p className="text-xs text-gray-500">
                    {`${author} - ${dateTime}`}
                </p>
            </footer>
        </blockquote>
    );
};
type ReviewBlogProps = {
    blogs: ReviewItemProps[];
    voteAvg: number;
    totalView: number;
};

const ReviewBlog = React.memo(function ReviewBlog({
    blogs,
    voteAvg,
    totalView,
}: ReviewBlogProps) {
    return (
        <section>
            <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
                <h2 className="text-xl font-bold sm:text-2xl">
                    Customer Reviews
                </h2>
                <div className="mt-4 flex items-center gap-4">
                    <p className="text-3xl font-medium">
                        {voteAvg}
                        <span className="sr-only"> Average review score </span>
                    </p>
                    <div>
                        <div className="flex">
                            <Star numVote={Math.floor(voteAvg)} />
                        </div>
                        <p className="mt-0.5 text-xs text-gray-500">
                            Based on {totalView} reviews
                        </p>
                    </div>
                </div>
                <div className="mt-8 grid grid-cols-1 gap-x-16 gap-y-12 lg:grid-cols-2">
                    {blogs?.length &&
                        blogs.map((blog, index) => (
                            <ReviewItem key={index} {...blog} />
                        ))}
                </div>
            </div>
        </section>
    );
});

export default ReviewBlog;
