import React from "react";
import {useForm} from 'react-hook-form';
import { useHistory } from "react-router-dom"; 
import '../Public/CSS/checkout.css';

export default function Checout(){
  const { register, handleSubmit, errors } = useForm();
  let history = useHistory();
  const onSubmit = data => {
    // alert(JSON.stringify(data));
    alert("Order Success")
    console.log(data);
  };
  console.log(errors);

  return(
    <div className="wrapper">
      <div className="form-wrapper">
      <h1 className="title">Checkout</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="namep">
            <label htmlFor="name">Name</label>
            <input type='text' name="name" ref={register({required:" Input name"})} />
          </div>
          {errors.name ? <p className="error">{errors.name.message}</p> : null}

          <div div className="phone">
            <label htmlFor="phone">Phone number</label>
            <input type='number' name="phone" ref={register({required: "Input phone number", 
                                                        minLength:{value:10, message:"Phone number not right"},
                                                        maxLength:{value:10, message:"Phone number not right"},
                                                        pattern:[0-9], message:"Phone number contain number only"})} />
          </div>
          {errors.phone ? <p className="error">{errors.phone.message}</p> : null}

          <div div className="email">
            <label htmlFor="email">Email</label>
            <input type='text' name="email" ref={register({required: "Input email", pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                    message: "Invalid email address"
            }})} />
          </div>
          {errors.email ? <p className="error">{errors.email.message}</p> : null}

          <div className="address">
            <label htmlFor="address">Address</label>
            <input type='text' name="address" ref={register({required:" Input address"})} />
          </div>
          {errors.address ? <p className="error">{errors.address.message}</p> : null}

          <div className="checkout">
            <button type="submit">Confirm</button>
          </div>
        </form>
     </div>
    </div>
  )
}