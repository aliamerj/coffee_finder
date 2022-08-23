import { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";

const CoffeeStore: NextPage = () => {
  const { query } = useRouter();

  return (
    <div>
      <h1>coffee-store {query.id}</h1>
      <Link href="/">
        <a>back </a>
      </Link>
    </div>
  );
};

export default CoffeeStore;
