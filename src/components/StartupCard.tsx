import { formatDate } from "@/lib/utils";
import { EyeIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";

const StartupCard = ({ post }: any) => {
  const {
    views,
    author: { _id: authorId, name },
    _id,
    description,
    image,
    category,
    title,
  } = post;

  return (
    <li className="startup-card group">
      <Link href={`/startup/${_id}`}>
        <img src={image} alt="placeholder" className="startup-card_img" />
      </Link>
      <div className="flex-between gap-4 mt-4">
        <div className="flex-1">
          <Link
            href={`/startup/${_id}`}
            className="text-26-semibold line-clamp-1"
          >
            {title}
          </Link>
          <p className="startup-card_desc">{description}</p>
        </div>
      </div>
      <div className="flex-between gap-3 my-1">
        <div className="flex justify-center items-center gap-2">
          <Link href={`/user/${authorId}`}>
            <Image
              src="https://placehold.co/48x48"
              alt="placeholder_image"
              width={32}
              height={32}
              className="rounded-full"
            />
          </Link>
          <Link href={`/user/${authorId}`}>
            <p className="text-[15px] text-neutral-g3 line-clamp-1">{name}</p>
          </Link>
        </div>
        <Link href={`/?query=${category.toLowerCase()}`}>
          <p className="text-[13px] bg-neutral-w3 px-3 py-1 rounded-full group-hover:bg-primary-blue group-hover:text-neutral-w2">
            {category}
          </p>
        </Link>
      </div>

      <div className="flex row-auto justify-between items-center border-t-2 mt-2 border-neutral-g1">
        <div className="flex gap-1.5">
          <EyeIcon className="text-primary-pink" />
          <p className="text-16-medium">{views}</p>
        </div>
        <div className="pt-2">
          <Link
            href={`/start/${_id}`}
            className="text-primary-blue underline decoration-primary-blue"
          >
            View Details
          </Link>
        </div>
      </div>
    </li>
  );
};

export default StartupCard;
