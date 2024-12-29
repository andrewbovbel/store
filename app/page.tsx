import type { Metadata } from "next";
import { Counter } from "./components/counter/Counter";

export default function IndexPage() {
  return (
    <>
      <h1>Rebecca Bovbel</h1>
      <p>
        Welcome to my website
      </p>
    </>)
}

export const metadata: Metadata = {
  title: "Andrew@Bovbel.com",
};
