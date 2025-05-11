import { Button } from "@/components/ui/button";

export default function NewHero() {
  return (
    <div
      id="hero"
      className="flex flex-col items-center justify-center h-dvh  bg-background text-text-black"
    >
      <div
        id="section"
        className="w-full md:w-1/2 lg:w-[45%]  h-1/2 p-2 flex flex-col gap-5 items-center text-center lg:text-left lg:items-start "
      >
        <div
          id="avatar"
          className="w-[10rem] aspect-square bg-secondary rounded-full p-1 border border-gray-300"
        >
          <div className="h-full w-full bg-gray rounded-full"></div>
        </div>
        <div
          id="title"
          className="text-4xl text-text-black flex flex-col gap-3 font-bold "
        >
          <h1> Nayan Aher</h1>
          <h1>Architech & Designer </h1>
        </div>
        <div id="about" className="">
          <p className="font-semibold text-text-gray">
            I am an architect and designer with a passion for creating beautiful
            and functional spaces.
          </p>
          <p className="font-semibold text-text-gray">
            I specialize in creating functional and beautiful spaces that are
            tailored to the needs of the client.
          </p>
        </div>
        <div
          id="get-in-touch"
          className="lg:w-1/2 items-center justify-center lg:items-start lg:justify-start flex gap-4 "
        >
          <Button className=" bg-secondary rounded-xl w-36 hover:bg-secondary-hover ">
            {`Get in touch`}
          </Button>
        </div>
      </div>
    </div>
  );
}
