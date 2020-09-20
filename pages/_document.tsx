import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />

          <meta
            name="description"
            content="Flexibles Abo - Unsere Lieferanten - Zustell-Infos - Recycling - Häufige Fragen - Die Kochbox von Marley Spoon"
          ></meta>
          <meta
            name="keywords"
            content="Marley Spoon, marleyspoon, Kochbox, Kochboxen, essen box, kochbox bestellen, essenbox, essen bestellen"
          ></meta>
          <meta
            name="apple-itunes-app"
            content="app-id=1088840761, app-argument=https://app.adjust.com/ybxlef"
          ></meta>
          <link
            href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,200;1,300;1,400;1,600;1,700;1,900&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
