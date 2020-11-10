import Link from 'next/link';
import styles from '../../components/Jewel_index.module.css';
import WR001 from './wedding-ring-001';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function WR(){
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
                        <Link href ='/WeddingRing/wedding-ring-001'>
                            <a>
                                <img className={styles.jewel} src='https://images-na.ssl-images-amazon.com/images/I/71au4m8IsRL._AC_UL1500_.jpg' />
                            </a>
                        </Link>
                        <div className='card-body'>
                            <Link href='/WeddingRing/wedding-ring-001'>
                                <a><h4 className={styles.name}>Nhẫn cưới 001</h4></a>
                            </Link>
                            <div className={styles.price}>
                                10.000.000 đ
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