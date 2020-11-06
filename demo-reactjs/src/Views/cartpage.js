import React from 'react';
import '../Public/CSS/cartpage.css';

export default function Cartpage(){
    return(
        <div className='container table'>
            <table className='table'>
                <tr>
                    <th className='pic'></th>
                    <th className='flowername'>Flower name</th>
                    <th className='flowerprice'>Price</th>
                    <th className='amount'>Amount</th>
                    <th className='total'>Total</th>
                    <th className='delete'></th>
                </tr>
                <tr>
                    <th className='pic'>
                        <img src="https://www.thespruce.com/thmb/8B3EZ9IjoEkh2rUBDv46pb3fJUA=/4478x2989/filters:fill(auto,1)/the-incomparable-waterlily-and-lotus-1403525-22-dc91986882b6494e96c142144817fff5.jpg" className="imgsc" />
                    </th>
                    <th className='flowername'>Water lily</th>
                    <th className="flowerprice">0.84 USD</th>
                    <th className='amount'>
                        <input class="form-control text-center" type="number"/>
                    </th>
                    <th className='total'>0.84 USD</th>
                    <th className='delete'>
                        <button className='btn btn-info btm-sm'>Delete</button>
                    </th>
                </tr>
                <tr>
                    <td>
                        <a href='/flower'><button className ='btn btn-primary'>Continue shopping</button></a>
                    </td>
                    <td colSpan='3'></td>
                    <td className='hidden-xs text-center'>
                        <strong>Total: 0.84 USD</strong>
                    </td>
                    <td>
                        <a href="/checkout"><button className='btn btn-success'>Checkout</button></a>
                    </td>
                </tr>
            </table>
        </div>
    )
}