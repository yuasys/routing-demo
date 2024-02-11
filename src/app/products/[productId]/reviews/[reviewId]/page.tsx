import { notFound } from "next/navigation";
import { parse } from "path";

export default function ReviewDetails({
   params,
   }: {
     params: { 
      productId: string;
      reviewId: string ;
    };
    }) {
      if (parseInt(params.reviewId) > 1000) {
        notFound();
      }
      return( 
      <h1>
          Review  {params.reviewId} for product {params.productId}
      </h1>);
    
  }
