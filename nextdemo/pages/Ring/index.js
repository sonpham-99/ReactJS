import Link from 'next/link';
import styles from '../../components/Jewel_index.module.css';
import Nhan001 from './nhan-001';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function Ring(){
    return <div>
        <head>
                <link rel="stylesheet" 
                    href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" 
                    integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
                </link>
        </head>
            <Header />

        <div className='container' id={styles.container}>

            <div className='row'>
                <div className='display' id={styles.display}>
                    <div className='card' id={styles.card}>
                        <Link href ='/Ring/nhan-001'>
                            <a>
                                <img className={styles.jewel} src='https://cfcdn19.candere.com/media/catalog/product/cache/1/image/1020x1020/9df78eab33525d08d6e5fb8d27136e95/g/r/gr00103_1.jpg?v=1520508120' />
                            </a>
                        </Link>
                        <div className='card-body'>
                            <Link href='/Ring/nhan-001'>
                                <a><h4 className={styles.name}>Nhẫn 001</h4></a>
                            </Link>
                            <div className={styles.price}>
                                4.000.000 đ
                            </div>
                            <center>
                                <button className="add-to-cart btn btn-default" id={styles.addcart} type="button">
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
}