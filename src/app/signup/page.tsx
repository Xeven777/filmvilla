import { Button } from "@/components/ui/button";
import { Clapperboard } from "lucide-react";
import Image from "next/image";
import bg from "@/assets/collage.jpg";
import { Input } from "@/components/ui/input";
import Link from "next/link";

const page = () => {
  return (
    <section className="w-full min-h-svh text-white flex flex-col items-center justify-center">
      <Image
        src={bg}
        alt="bg"
        width={1200}
        height={800}
        className="absolute w-screen h-screen -z-20 inset-0 filter brightness-75"
      />
      <div className="absolute w-full h-screen inset-0 -z-10 bg-gradient-to-b from-transparent to-black"></div>
      <form className="w-full max-w-md shadow-2xl py-12 px-2 md:px-6 mx-2 rounded-xl bg-white/10 backdrop-blur-md flex flex-col items-center text-center">
        <Clapperboard className="mb-6" size={40} />
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8">
          Sign up / Login
        </h1>
        <Input
          required
          className="bg-white/15 backdrop-blur-md max-w-sm border-none mb-4 placeholder:text-white/50"
          placeholder="enter email"
          type="email"
        />
        <Input
          required
          className="bg-white/15 backdrop-blur-md max-w-sm border-none mb-4 placeholder:text-white/50"
          placeholder="enter password"
          type="password"
        />
        <Link href={"/dashboard"}>
          <Button size={"lg"} className="text-lg" type="button">
            Sign Up Now
          </Button>
        </Link>
      </form>
    </section>
  );
};

export default page;
