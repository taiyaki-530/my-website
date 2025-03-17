export const runtime = 'edge';

export default function Home() {
  return (
    <>
      <div className="flex flex-col justify-center items-center mx-auto w-lg text-justify text-5xl mt-15 text-gray-700">
        <h1><span className="text-gray-100">I'm</span> <i className="bi bi-person-fill"></i> Taiga<br />
        <span className="text-gray-100">I have a passion for </span><i className="bi bi-hammer"></i> Web Development <span className="text-gray-100">and also create content as a </span><i className="bi bi-youtube"></i> YouTuber<span className="text-gray-100">.</span></h1>
      </div>
    </>
  );
}
