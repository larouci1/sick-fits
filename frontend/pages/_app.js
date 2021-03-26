import Page from "../components/Page";

export default function MyApp({ Component, pageProp }) {
  return (
    <Page>
      <Component {...pageProp} />
    </Page>
  );
}
