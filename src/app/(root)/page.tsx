import StartupCard from "@/components/StartupCard";
import SearchForm from "../../components/SearchForm";
import { client } from "@/sanity/lib/client";
import { STARTUP_QUERY } from "@/sanity/lib/queries";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query: string }>;
}) {
  const query = (await searchParams).query;

  const posts = await client.fetch(STARTUP_QUERY);

  return (
    <>
      <section className="lg:px-40 lg:py-20 sm:px-5 sm:py-5 xs:px-2 xs:py-1 ">
        <div className="pink-container rounded-3xl">
          <p className="sub-heading !max-w-3xl bg-[#5751E1] px-4 rounded-2xl">
            Pitch, Vote And Grow
          </p>
          <h1 className="heading">
            Pitch Your <span className="text-black">Startup</span>, <br />
            Connect With <span className="text-[#E94243]">Entrepreneuers</span>
          </h1>
          <p className="sub-heading !text-black !max-w-3xl">
            Submit Ideas, Vote on Pitches, and Get Noticed in Virtual
            Competitions.
          </p>
        </div>
        <h1 className="sub-heading !text-black-200 !text-left !my-8">
          Recommended Startups
        </h1>
        <SearchForm query={query} />
      </section>
      <section className="section_container">
        <ul className="mt-7 card_grid">
          {posts?.length > 0 ? (
            posts?.map((post) => (
              <div key={post._id}>
                <StartupCard post={post} />
              </div>
            ))
          ) : (
            <p>No Startup Found</p>
          )}
        </ul>
      </section>
    </>
  );
}
