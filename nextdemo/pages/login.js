import {useForm} from 'react-hook-form'
import styles from '../components/User.module.css';
import Link from 'next/link';

import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Login() {
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => {
        // alert(JSON.stringify(data));
        alert("Đăng nhập thành công")
        console.log(data);
      };
      console.log(errors);

    return<div>
        <head>
            <link rel="stylesheet" 
                href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" 
                integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
            </link>
        </head>

        <Header />

        <div className="wrapper" id={styles.wrapper}>
            <div className="form-wrapper" id={styles.formwrapper}>
            <h1 className="title" id={styles.title}>Đăng nhập</h1>
                <form onSubmit={handleSubmit(onSubmit)} className='form'>
                <div className="username" id={styles.username}>
                    <label htmlFor="username" className={styles.label}>Tên tài khoản</label>
                    <input className={styles.input} type='text' name="username" ref={register({required:" Input username", 
                                                            minLength:{value:8, message:"Tên tài khoản ít nhất phải có 8 ký tự"}})} />
                </div>
                {errors.username ? <p className={styles.error}>{errors.username.message}</p> : null}

                <div div className="password" id={styles.password}>
                    <label htmlFor="password" className={styles.label}>Mật khẩu</label>
                    <input className={styles.input} type='password' name="password" ref={register({required: "Input password", 
                                                                minLength:{
                                                                value:6, 
                                                                message:"Mật khẩu ít nhất phải có 6 ký tự",
                                                                }})} />
                </div>
                {errors.password ? <p className={styles.error}>{errors.password.message}</p> : null}

                {errors.email ? <p className={styles.error}>{errors.email.message}</p> : null}

                <div className={styles.create}>
                    <button type="submit">Đăng nhập</button>
                </div>
                <div className={styles.redi}>
                    Chưa có tài khoản? 
                    <Link href="./register"><a><span className ={styles.relink}> Đăng ký</span></a></Link>
                </div>
                </form>
            </div>
    </div>

        <Footer />
    </div>
    
}