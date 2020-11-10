import Link from 'next/link';
import styles from '../../components/Jewel_index.module.css';
import Earrings001 from './earrings-001';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function Earrings(){
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
                        <Link href ='/Earrings/earrings-001'>
                            <a>
                                <img className={styles.jewel} src='https://www.gregoryjewellers.com.au/wp-content/uploads/2020/04/EIGHTEEN-CARAT-WHITE-GOLD-BLUE-SAPPHIRE-AND-DIAMOND-DROP-EARRINGS-TE2343-0.jpg' />
                            </a>
                        </Link>
                        <div className='card-body'>
                            <Link href='/Earrings/earrings-001'>
                                <a><h4 className={styles.name}>Bông tai 001</h4></a>
                            </Link>
                            <div className={styles.price}>
                                7.000.000 đ
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