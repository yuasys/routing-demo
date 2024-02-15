function getRamdomInt(count: number) {
  return Math.floor(Math.random() * count);

}
export default function ProductDetailsLayout({
  children,
}: {
  children: React.ReactNode;
  }) {
    const random = getRamdomInt(2);
    
    if (random === 1) {
      throw new Error("Error loading product");// This will be caught by the error boundary
    }
  return (
    <>
      {children}
      <h2>Features products</h2>   
    </>
  );
}