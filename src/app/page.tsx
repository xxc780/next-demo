import homeSrc from "../../public/0.jpg";
import Hero from "@/components/hero";
import type {Metadata} from "next";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function Page() {
  return (
      <Hero imgUrl={homeSrc} altTxt='Home Image' content='Professional Cloud Running'/>
  );
}