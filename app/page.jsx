import { Fragment } from "react";
import Link from "next/link";
import Heading from "@/components/Heading";
import { getFeatureReview } from "@/lib/reviews";



export default async function HomePage() {
    const review = await getFeatureReview();
    return (
    <Fragment>
        <Heading></Heading>
        <p className="pb-3">
            Only the best indie games, reviewed for you.
        </p>
        <div className="bg-white border rounded shadow w-80 hover:shadow-xl sm:w-full">
          <Link href={`/reviews/${review.slug}`}
          className="flex flex-col sm:flex-row">
            <img
              src={review.image}
              alt=""
              width="320"
              height="180"
              className="rounded-t sm:rounded-l sm:rounded-r-none"
            />
            <h2 className="font-semibold font-orbitron py-1 text-center sm:px-2">
            {review.title}
            </h2>
          </Link>
        </div>
    </Fragment>
    )
}