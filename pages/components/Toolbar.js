import { useRouter } from "next/router";

const Toolbar = () => {
  const router = useRouter();

  return (
    <div className="flex justify-center gap-5">
      <div
        className="hover:underline cursor-pointer"
        onClick={() => router.push("/")}
      >
        News
      </div>
      <div
        className="hover:underline cursor-pointer"
        onClick={() => router.push("/about")}
      >
        About
      </div>
    </div>
  );
};

export default Toolbar;
