import {useForm} from 'react-hook-form'
import styles from '../components/User.module.css';
import Link from 'next/link';

import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Register() {
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => {
        // alert(JSON.stringify(data));
        alert("Đăng ký thành công")
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
            <h1 className="title" id={styles.title}>Đăng ký</h1>
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

                <div div className="email" id={styles.email}>
                    <label htmlFor="email" className={styles.label}>Email</label>
                    <input className={styles.input} type='text' name="email" ref={register({required: "Input email", pattern: {
                                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                            message: "Email không hợp lệ"
                    }})} />
                </div>
                {errors.email ? <p className={styles.error}>{errors.email.message}</p> : null}

                <div className={styles.create}>
                    <button type="submit">Đăng ký</button>
                </div>
                <div className={styles.redi}>
                    Đã có tài khoản? 
                    <Link href="./login"><a><span className ={styles.relink}> Đăng nhập</span></a></Link>
                </div>
                </form>
            </div>
    </div>

        <Footer />
    </div>
    
}