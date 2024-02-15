"use client";
import{ useRouter} from "next/navigation";
import "./styles.css"; // tailwindcssのスタイルシートをインポートして有効化します。

export default function OrderProduct()
{
  const router = useRouter();
  const handleClick = () => {
    console.log("placing your order");
    router.replace("/");//他にraouter.back()やforward()もある
  };
  return (
    <>
      <h1 className="text-2xl pl-5">Order product</h1>
      <button 
      onClick={handleClick}
      className="bg-green-800 hover:bg-green-700 text-white rounded px-8 py-2 ml-8 my-4"
      >Place order</button>
    </>
  );
}