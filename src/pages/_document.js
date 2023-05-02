import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {

  return (
    <Html lang="en">
      <Head />
      <body className="bg-terang font-rubik overflow-x-hidden  selection:bg-slate-500" style={{scrollBehavior: "smooth"}}>  
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
