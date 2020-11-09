import Link from 'next/link';
import styles from '../../components/Jewel_index.module.css';
import Ring from '../Ring/index';

export default function Jewel() {
    return <div>
        <head>
                <link rel="stylesheet" 
                    href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" 
                    integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
                </link>
        </head>
        
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

                <div className='display' id={styles.display}>
                    <div className='card' id={styles.card}>
                        <Link href ='/'>
                            <a>
                                <img className={styles.jewel} src='https://asset.swarovski.com/images/$size_1450/t_swa103/b_rgb:fafafa,c_scale,dpr_3.0,f_auto,w_500/5518868_png/swarovski-infinity-double-heart-necklace--white--mixed-metal-finish-swarovski-5518868.png' />
                            </a>
                        </Link>
                        <div className='card-body'>
                            <Link href='/'>
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

                <div className='display' id={styles.display}>
                    <div className='card' id={styles.card}>
                        <Link href ='/'>
                            <a>
                                <img className={styles.jewel} src='https://d2074lugj8w6nr.cloudfront.net/lh-web-db/product/B516/B516_Kaye_Medical_ID_Bracelet_with_Rose_Gold_Gardenia_Medical_ID_Tag_Overhead_updated_AKR.jpg' />
                            </a>
                        </Link>
                        <div className='card-body'>
                            <Link href='/'>
                                <a><h4 className={styles.name}>Vòng tay 001</h4></a>
                            </Link>
                            <div className={styles.price}>
                                1.000.000 đ
                            </div>
                            <center>
                                <button className="add-to-cart btn btn-default" id={styles.addcart} type="button">
                                    Thêm vào giỏ
                                </button>
                            </center>
                        </div>
                    </div>
                </div>

                <div className='display' id={styles.display}>
                    <div className='card' id={styles.card}>
                        <Link href ='/'>
                            <a>
                                <img className={styles.jewel} src='https://www.gregoryjewellers.com.au/wp-content/uploads/2020/04/EIGHTEEN-CARAT-WHITE-GOLD-BLUE-SAPPHIRE-AND-DIAMOND-DROP-EARRINGS-TE2343-0.jpg' />
                            </a>
                        </Link>
                        <div className='card-body'>
                            <Link href='/'>
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

                <div className='display' id={styles.display}>
                    <div className='card' id={styles.card}>
                        <Link href ='/'>
                            <a>
                                <img className={styles.jewel} src='https://images-na.ssl-images-amazon.com/images/I/71au4m8IsRL._AC_UL1500_.jpg' />
                            </a>
                        </Link>
                        <div className='card-body'>
                            <Link href='/'>
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
            
                <div className='display' id={styles.display}>
                    <div className='card' id={styles.card}>
                        <Link href ='/'>
                            <a>
                                <img className={styles.jewel} src='https://objects.chopard.com/media/new_collectionpages/HighJewellery/Mobile/Lotus2.jpg' />
                            </a>
                        </Link>
                        <div className='card-body'>
                            <Link href='/'>
                                <a><h4 className={styles.name}>Đồng hồ đá quý 001</h4></a>
                            </Link>
                            <div className={styles.price}>
                                5.000.000 đ
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
    </div>
}