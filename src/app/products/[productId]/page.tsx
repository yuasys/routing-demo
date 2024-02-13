import { Metadata } from "next";

type Props = {
  params: {
    productId: string
  };
};

//setTimeout関数を使用して、100ミリ秒後にPromiseを解決するように設定しています。解決時には、Details about product ${params.productId}という文字列がPromiseの結果として返されます。
//この関数は、非同期関数であるため、asyncキーワードが関数の前に付けられています。また、Promiseを返すため、戻り値の型にはPromise<Metadata>が指定されています。
export const generateMetadata = async ({  //非同期関数を使ってメタデータを生成
  params,
}: Props): Promise<Metadata> => { //Promiseを返す非同期関数 <Metadata>を返す
  const title = await new Promise((resolve) => {  //Promiseを返す非同期関数
    setTimeout(() => {  
      resolve(`Details about product ${params.productId}`); //resolveでPromiseを完了
    },100); //100ミリ秒後にresolveを呼び出す
  });
  return {  //メタデータを返す
    title: `${title}`, //titleプロパティにtitleを設定
  };  //メタデータを返す
};  

//ProductDetailsコンポーネントは、paramsという名前のプロパティを受け取ります。このプロパティには、productIdという名前のプロパティが含まれています。
export default function ProductDetails({ params }: Props) {
  return(<h1>Details about product {params.productId}</h1>) 
}
