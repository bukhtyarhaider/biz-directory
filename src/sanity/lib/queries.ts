import { defineQuery } from "next-sanity";

export const STARTUP_QUERY =
  defineQuery(`*[_type=="startup" && defined(slug.current)]{
        _id,
        views,
        author->{_id, name },
        description,
        image,
        category,
        title,
    }`);
