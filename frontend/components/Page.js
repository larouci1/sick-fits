import Header from "./Header";

export default function Page({ children }) {
  return (
    <div>
      <Header />
      <h2>I'm the Page Component</h2>
      {children}
    </div>
  );
}
