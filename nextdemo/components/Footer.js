import Head from "next/head";
import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <div>
      <head>
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
          integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
          crossorigin="anonymous"
        ></link>
      </head>

      <footer className="footer mt-auto py-3" id={styles.foot}>
        <div className="container-fluid">
          <span className="text-muted" id={styles.text}>
            FOOTER
          </span>
        </div>
      </footer>
    </div>
  );
}
