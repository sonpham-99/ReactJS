import Link from 'next/link';
import styles from './detail.module.css';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function Necklace001() {
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
                    <img className='img-fluid' id={styles.imgfluid} src='https://asset.swarovski.com/images/$size_1450/t_swa103/b_rgb:fafafa,c_scale,dpr_3.0,f_auto,w_500/5518868_png/swarovski-infinity-double-heart-necklace--white--mixed-metal-finish-swarovski-5518868.png' />
                </div>

                <div className='col-md-4' id={styles.detail}>
                    <h1>Dây chuyền 001</h1>
                    <p className={styles.ma}>Mã: N001</p>
                    <h3>3.200.000 đ</h3>                    
                    <button type='submit' className='btn btn-primary' id={styles.buy}>Mua ngay</button>
                    <button type='submit' className='btn btn-secondary' id={styles.gocart}>Thêm vào giỏ hàng</button>
                </div>
            </div>
        </div>

        <Footer />
    </div>
}