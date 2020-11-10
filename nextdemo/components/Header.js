import Head from "next/head";
import Link from "next/link";
import styles from "./Header.module.css";

import Register from "../pages/register";
import Login from "../pages/login";
import Cart from "../pages/cart";

import Bracelet from "../pages/Bracelet/index";
import Earrings from "../pages/Earrings/index";
import Necklace from "../pages/Necklace/index";
import Watch from "../pages/Watch/index";
import Ring from "../pages/Ring/index";

export default function Header() {
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

      <nav className="navbar navbar-expand-lg navbar-light" id={styles.nav}>
        <Link className="navbar-brand" href="/">
          <a className={styles.home}>Jewelry</a>
        </Link>

        <div className="collapse navbar-collapse">
          <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="text"
              placeholder="search"
              id={styles.searchbar}
            />
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
              id={styles.btsearch}
            >
              Search
            </button>
          </form>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link href="/register" className="nav-link">
                <a className={styles.reg}>Đăng ký</a>
              </Link>
            </li>
            <li>
              <Link href="/login" className="nav-link">
                <a className={styles.log}>Đăng nhập</a>
              </Link>
            </li>
            <li>
              <Link href="/cart" className="nav-link">
                <a className={styles.cart}>Giỏ hàng</a>
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      <nav className="navbar navbar-expand-lg navbar-light" id={styles.nav2}>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li>
              <Link href="/Ring" className="nav-link">
                <a className={styles.jewel}>Nhẫn</a>
              </Link>
            </li>
            <li>
              <Link href="/Necklace" className="nav-link">
                <a className={styles.jewel}>Dây chuyền</a>
              </Link>
            </li>
            <li>
              <Link href="/Bracelet" className="nav-link">
                <a className={styles.jewel}>Vòng tay</a>
              </Link>
            </li>
            <li>
              <Link href="/Earrings" className="nav-link">
                <a className={styles.jewel}>Bông tai</a>
              </Link>
            </li>
            <li>
              <Link href="/WeddingRing" className="nav-link">
                <a className={styles.jewel}>Nhẫn cưới</a>
              </Link>
            </li>
            <li>
              <Link href="/Watch" className="nav-link">
                <a className={styles.jewel}>Đồng hồ</a>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
