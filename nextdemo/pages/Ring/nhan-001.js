import Link from 'next/link';
import styles from './detail.module.css';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function Nhan001() {
    return <div>
        <head>
            <link rel="stylesheet" 
                href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" 
                integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
            </link>
        </head>

        <Header />

        <div className='container'>
            <div className='row'>
                <div className='col-md-8'>
                    <img className='img-fluid' id={styles.imgfluid} src='https://cfcdn19.candere.com/media/catalog/product/cache/1/image/1020x1020/9df78eab33525d08d6e5fb8d27136e95/g/r/gr00103_1.jpg?v=1520508120' />
                </div>

                <div className='col-md-4' id={styles.detail}>
                    <h1>Nhẫn 001</h1>
                    <p className={styles.ma}>Mã: R001</p>
                    <h3>4.000.000 đ</h3>                    
                    <button type='submit' className='btn btn-primary' id={styles.buy}>Mua ngay</button>
                    <button type='submit' className='btn btn-secondary' id={styles.gocart}>Thêm vào giỏ hàng</button>
                </div>
            </div>
        </div>

        <Footer />
    </div>
}