import Link from 'next/link';
import styles from '../../components/Jewel_index.module.css';
import Necklace001 from './necklace-001';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function Necklace(){
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
                        <Link href ='/Necklace/necklace-001'>
                            <a>
                                <img className={styles.jewel} src='https://asset.swarovski.com/images/$size_1450/t_swa103/b_rgb:fafafa,c_scale,dpr_3.0,f_auto,w_500/5518868_png/swarovski-infinity-double-heart-necklace--white--mixed-metal-finish-swarovski-5518868.png' />
                            </a>
                        </Link>
                        <div className='card-body'>
                            <Link href='/Necklace/necklace-001'>
                                <a><h4 className={styles.name}>Dây chuyền 001</h4></a>
                            </Link>
                            <div className={styles.price}>
                                3.200.000 đ
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