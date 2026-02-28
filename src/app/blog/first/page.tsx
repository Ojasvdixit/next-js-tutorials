import Image from "next/image";

export default function FirstBlog() {
  return (
    <div className="flex ">
      <h1>My First Blog Page</h1>

      <Image
        src="/globe.svg"
        className="hidden md:block"
        width={100}
        height={100}

        alt="Screenshots of the dashboard project showing desktop version"
      />
    </div>
  );
}