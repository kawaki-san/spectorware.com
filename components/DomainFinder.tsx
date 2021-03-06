import { useState } from "react";
import Link from "next/link";
import SectionTitle from "./SectionTitle";
function DomainFinder() {
  const [userQuery, setUserQuery] = useState("");
  const searchUserQuery = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    window.open(
      `https://spectorware.com/whmcs/cart.php?a=add&domain=register&query=${userQuery}`
    );
  };
  return (
    <section className=" w-screen h-1/2">
      <div className="container text-center px-5">
        <SectionTitle
          comment="Ready to dive in?"
          title="Lets start with a domain name"
        />
        <p>Don't have one yet? No problem. We'll find one for you.</p>
        <div className="p-4">
          <div className="flex w-full justify-center items-end">
            <div className="relative lg:w-3/4 xl:w-1/2 w-3/4">
              <form onSubmit={searchUserQuery}>
                <input
                  type="text"
                  id="hero-field"
                  name="hero-field"
                  placeholder="mynewdomain"
                  value={userQuery}
                  onChange={(e) => setUserQuery(e.target.value)}
                  className="w-full rounded font-medium text-gray-900 py-1 px-3 leading-8 duration-200 ease-in-out focus:border-pink-50 focus:ring focus:outline-none border-2 border-pink-50 ring-pink-100 shadow-2xl"
                />
                <button
                  type="submit"
                  className="absolute right-0 top-0 mt-3 mr-4"
                >
                  <svg
                    className="text-gray-600 h-4 w-4 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    id="Capa_1"
                    x="0px"
                    y="0px"
                    viewBox="0 0 56.966 56.966"
                    width="512px"
                    height="512px"
                  >
                    <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
                  </svg>
                </button>
              </form>
            </div>
          </div>
        </div>
        <p className="pb-4">
          Got one? You might be looking to{" "}
          <span className="text-accent font-medium underline">
            <Link href="https://spectorware.com/whmcs/cart.php?a=add&domain=transfer&query=">
              transfer
            </Link>
          </span>{" "}
          to us.
        </p>
      </div>
    </section>
  );
}

export default DomainFinder;
