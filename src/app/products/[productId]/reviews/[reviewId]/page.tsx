import { notFound } from "next/navigation";

function getRamdomInt(count: number) {
  return Math.floor(Math.random() * count);
}

export default function ReviewDetails({
   params,
   }: {
     params: { 
      productId: string;
      reviewId: string ;
    };
    }) {
      const random = getRamdomInt(2);

      if (random === 1) {// Simulate an error
        throw new Error("Error loading review");// This will be caught by the error boundary
      }

      if (parseInt(params.reviewId) > 1000) {
        notFound();
      }
      return( 
      <h1>
          Review  {params.reviewId} for product {params.productId}
      </h1>);
    
  }
