export default function AuthLayoutPage(
  { children, 
  }: {
    children: { children: React.ReactNode }
  }) {
  return(
    <>
      <h2>Inner Layout</h2>
      {children}
    </>
  ) 
}
