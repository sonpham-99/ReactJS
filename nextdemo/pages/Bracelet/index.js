import Link from "next/link";
import styles from "../../components/Jewel_index.module.css";
import Nhan001 from "./bracelet-001";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function Bracelet() {
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
      <Header />

      <div className="container" id={styles.container}>
        <div className="row">
          <div className="display" id={styles.display}>
            <div className="card" id={styles.card}>
              <Link href="/Bracelet/bracelet-001">
                <a>
                  <img
                    className={styles.jewel}
                    src="https://d2074lugj8w6nr.cloudfront.net/lh-web-db/product/B516/B516_Kaye_Medical_ID_Bracelet_with_Rose_Gold_Gardenia_Medical_ID_Tag_Overhead_updated_AKR.jpg"
                  />
                </a>
              </Link>
              <div className="card-body">
                <Link href="/Bracelet/bracelet-001">
                  <a>
                    <h4 className={styles.name}>Vòng tay 001</h4>
                  </a>
                </Link>
                <div className={styles.price}>1.000.000 đ</div>
                <center>
                  <button
                    className="add-to-cart btn btn-default"
                    id={styles.addcart}
                    type="button"
                  >
                    Thêm vào giỏ
                  </button>
                </center>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
