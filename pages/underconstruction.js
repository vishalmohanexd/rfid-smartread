import Image from "next/image";
import Layout from "../hoc/Layout";
export default function Underconstruction() {
  return (
    <Layout>
      <div className="flex justify-center items-center mt-[50px] ">
        <Image
          src="/images/under-construction.gif"
          height={100}
          width={100}
          alt="under construction"
        />
        
      </div>
      <h1 className="flex justify-center items-center font-bold text-[30px] mt-2 mb-3">Under Construction</h1>
      <p className="text-center md:mt-0 md:text-center">
        Developer Docs is currently under construction.
      </p>
        <p className="flex justify-center items-center mb-[50px]" >
        Please come back later
        </p>
    </Layout>
  );
}
