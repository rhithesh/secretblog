import { cn } from "@/lib/utils";
import Marquee from "@/components/magicui/marquee";
import Link from "next/link";

const reviews = [
  {
    name: "Ananonymous",
    username: "@Ananonymous",
    body: "Sometimes reading this makes me laugh my ass of whole life is easily made happy.",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "Ananonymous",
    username: "@Ananonymous",
    body: "There are many  times you need a honest review friends ",
    img: "https://avatar.vercel.sh/jill",
  },
  {
    name: "Ananonymous",
    username: "@Ananonymous",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/john",
  },
  {
    name: "Ananonymous",
    username: "@Ananonymous",
    body: "I really want to know what is happening in clg.",
    img: "https://avatar.vercel.sh/quack",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);
const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-black dark:hover:bg-gray-50/[.15]",
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};
export default function LandingPage() {
  return (
    <>
      <div className=" w-[500px] mt-5 mx-auto flex gap-3">
        <Link href="/sign-in">
          <pre className=" hover:text-yellow-100 cursor-pointer"> create</pre>
        </Link>
        <Link href="/blog">
          <pre className=" hover:text-yellow-100 cursor-pointer"> feed</pre>
        </Link>
      </div>
      <div className="  w-[500px] mx-auto mt-2 flex items-center flex-col">
        <div className=" text-5xl">
          BMSCE
          <p className=" text-2xl text-center text-white">GossipGirl</p>
        </div>
        <div className=" my-2">
          <pre className=" mx-2 mt-2 text-sm text-wrap">
            Hi this is Me the creater of this website please feel free to share
            issues on things we can improve on !!
          </pre>
        </div>
        <div className="       w-[500px] flex h-[500px] flex-col  justify-center overflow-hidden items-center ">
          <Marquee pauseOnHover className="[--duration:20s]">
            {firstRow.map((review) => (
              <ReviewCard key={review.username} {...review} />
            ))}
          </Marquee>
          <Marquee reverse pauseOnHover className="[--duration:20s]">
            {secondRow.map((review) => (
              <ReviewCard key={review.username} {...review} />
            ))}
          </Marquee>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
        </div>
        <div className="  underline-offset-1 underline text-blue-600 font-semibold w-full">
          mail:test1924@gmail.com
        </div>
      </div>
    </>
  );
}
