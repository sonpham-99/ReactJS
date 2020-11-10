import Link from 'next/link';
import styles from './detail.module.css';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function Earrings001() {
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
                    <img className='img-fluid' id={styles.imgfluid} src='https://www.gregoryjewellers.com.au/wp-content/uploads/2020/04/EIGHTEEN-CARAT-WHITE-GOLD-BLUE-SAPPHIRE-AND-DIAMOND-DROP-EARRINGS-TE2343-0.jpg' />
                </div>

                <div className='col-md-4' id={styles.detail}>
                    <h1>Bông tai 001</h1>
                    <p className={styles.ma}>Mã: E001</p>
                    <h3>7.000.000 đ</h3>                    
                    <button type='submit' className='btn btn-primary' id={styles.buy}>Mua ngay</button>
                    <button type='submit' className='btn btn-secondary' id={styles.gocart}>Thêm vào giỏ hàng</button>
                </div>
            </div>
        </div>

        <Footer />
    </div>
}