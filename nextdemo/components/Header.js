import Head from 'next/head';
import Link from 'next/link';
import styles from './Header.module.css';

import Ring from '../pages/Ring/index';
import Register from '../pages/dangky';
import Login from '../pages/dangnhap';

export default function Header() {
    return<div>
            <head>
                <link rel="stylesheet" 
                    href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" 
                    integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
                </link>
            </head>

            <nav className='navbar navbar-expand-lg navbar-light' id={styles.nav}>
                <Link className='navbar-brand' href='/'>
                    <a className={styles.home}>Jewelry</a>
                </Link>

                <div className='collapse navbar-collapse'>
                    <form className='form-inline my-2 my-lg-0'>
                        <input className='form-control mr-sm-2' type='text' placeholder='search' id={styles.searchbar} />
                        <button className='btn btn-outline-success my-2 my-sm-0' type='submit' id={styles.btsearch}>Search</button>
                    </form>
                    <ul className='navbar-nav mr-auto'>
                        <li className='nav-item'>
                            <Link href='/dangky' className='nav-link'>
                                <a className={styles.reg}>Đăng ký</a>
                            </Link>
                        </li>
                        <li>
                            <Link href='/dangnhap' className='nav-link'>
                                <a className={styles.log}>Đăng nhập</a>
                            </Link>
                        </li>
                        <li>
                            <Link href='/' className='nav-link'>
                                <a className={styles.cart}>Giỏ hàng</a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>

            <nav className='navbar navbar-expand-lg navbar-light' id={styles.nav2}>
                <div className='collapse navbar-collapse'>
                    <ul className='navbar-nav mr-auto'>
                        <li>
                            <Link href='/Ring' className='nav-link'>
                                <a className={styles.jewel}>Nhẫn</a>
                            </Link>
                        </li>
                        <li>
                            <Link href='/' className='nav-link'>
                                <a className={styles.jewel}>Dây chuyền</a>
                            </Link>
                        </li>
                        <li>
                            <Link href='/' className='nav-link'>
                                <a className={styles.jewel}>Vòng tay</a>
                            </Link>
                        </li>
                        <li>
                            <Link href='/' className='nav-link'>
                                <a className={styles.jewel}>Bông tai</a>
                            </Link>
                        </li>
                        <li>
                            <Link href='/' className='nav-link'>
                                <a  className={styles.jewel}>Nhẫn cưới</a>
                            </Link>
                        </li>
                        <li>
                            <Link href='/' className='nav-link'>
                                <a className={styles.jewel}>Đồng hồ</a>
                            </Link>
                        </li>
                    </ul>
                </div>

            </nav>
    </div>
}