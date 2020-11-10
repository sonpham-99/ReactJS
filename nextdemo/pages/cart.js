import Link from "next/link";
import styles from "../components/cart.module.css";

import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Cart() {
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
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="mb-3">
              <div className="pt-4 wish-list">
                <h5 className="mb-4">
                  Giỏ hàng ( có <span>2</span> món hàng )
                </h5>

                <div className="row mb-4">
                  <div className="col-md-5 col-lg-3 col-xl-3">
                    <div className="view zoom overlay z-depth-1 rounded mb-3 mb-md-0">
                      <img
                        className="img-fluid w-100"
                        src="https://cfcdn19.candere.com/media/catalog/product/cache/1/image/1020x1020/9df78eab33525d08d6e5fb8d27136e95/g/r/gr00103_1.jpg?v=1520508120"
                      />
                    </div>
                  </div>

                  <div className='col-md-7 col-lg-9 col-xl-9"'>
                    <div>
                      <div className="d-flex justify-content-between">
                        <div>
                          <h5 className={styles.h5}>Nhẫn 001</h5>
                          <p
                            className="mb-3 text-muted text-uppercase small"
                            id={styles.code}
                          >
                            Mã: R001
                          </p>
                        </div>

                        <div>
                          <div className="def-number-input number-input safari_only mb-0 w-100">
                            <button className={styles.button}>-</button>
                            <input
                              className={styles.quantity}
                              min="1"
                              type="number"
                            ></input>
                            <button className={styles.button}>+</button>
                          </div>
                        </div>
                      </div>

                      <div className="d-flex justify-content-between align-items-center">
                        <div>
                          <button className="btn btn-danger" id={styles.delete}>
                            Xóa món hàng này
                          </button>
                        </div>
                        <p className="mb-0">
                          <span>
                            <strong className={styles.price}>
                              4.000.000 đ
                            </strong>
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <hr className="mb-4" />
                <div className="row mb-4">
                  <div className="col-md-5 col-lg-3 col-xl-3">
                    <div className="view zoom overlay z-depth-1 rounded mb-3 mb-md-0">
                      <img
                        className="img-fluid w-100"
                        src="https://d2074lugj8w6nr.cloudfront.net/lh-web-db/product/B516/B516_Kaye_Medical_ID_Bracelet_with_Rose_Gold_Gardenia_Medical_ID_Tag_Overhead_updated_AKR.jpg"
                      />
                    </div>
                  </div>

                  <div className='col-md-7 col-lg-9 col-xl-9"'>
                    <div>
                      <div className="d-flex justify-content-between">
                        <div>
                          <h5 className={styles.h5}>Vòng tay 001</h5>
                          <p
                            className="mb-3 text-muted text-uppercase small"
                            id={styles.code}
                          >
                            Mã: B001
                          </p>
                        </div>

                        <div>
                          <div className="def-number-input number-input safari_only mb-0 w-100">
                            <button className={styles.button}>-</button>
                            <input
                              className={styles.quantity}
                              min="1"
                              type="number"
                            ></input>
                            <button className={styles.button}>+</button>
                          </div>
                        </div>
                      </div>

                      <div className="d-flex justify-content-between align-items-center">
                        <div>
                          <button className="btn btn-danger" id={styles.delete}>
                            Xóa món hàng này
                          </button>
                        </div>
                        <p className="mb-0">
                          <span>
                            <strong className={styles.price}>
                              1.000.000 đ
                            </strong>
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="mb-3">
              <div className="pt-4">
                <h2 className="mb-3">Thành tiền</h2>

                <ul className="list-group list-group-flush">
                  <li
                    className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0"
                    id={styles.temp}
                  >
                    Tạm tính
                    <span>5.000.000 đ</span>
                  </li>
                  <li
                    className="list-group-item d-flex justify-content-between align-items-center px-0"
                    id={styles.temp}
                  >
                    Phí vận chuyển
                    <span>0 đ</span>
                  </li>
                  <li
                    className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3"
                    id={styles.total}
                  >
                    <div>
                      <strong>Tổng cộng</strong>
                    </div>
                    <span>
                      <strong>5.000.000 đ</strong>
                    </span>
                  </li>
                </ul>

                <button
                  type="button"
                  className="btn btn-primary"
                  id={styles.order}
                >
                  Đặt hàng
                </button>
              </div>
            </div>

            <div className="mb-3">
              <div className="pt-4">
                <input
                  className={styles.coupon}
                  type="text"
                  placeholder="Nhập mã giảm giá"
                ></input>
                <button className={styles.addcp}>Nhập</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
