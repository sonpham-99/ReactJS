import React from 'react';
import '../Public/CSS/detail.css';

function Waterlily(){
        return(
            <div className="container-fluid"> 
                <div className="card">
                    <div className="container-fluid hi">
                        <img src="https://www.thespruce.com/thmb/8B3EZ9IjoEkh2rUBDv46pb3fJUA=/4478x2989/filters:fill(auto,1)/the-incomparable-waterlily-and-lotus-1403525-22-dc91986882b6494e96c142144817fff5.jpg" alt=" " className="img" />
                    <div className="details col-md-6">
                        <h3 className="product-title">Water Lily</h3>
                        <h4 class="price">Price: 3 USD </h4>
                        <p className="language">Flower Language: Water lily mean the purity of heart</p>
                        <p className="description">Water lilies are one of the most beautiful flower in the world, not only because of their appearance but because of what they represent.<br />
                        This is why many countries have chosen this flower as a national flower, and why many religions often consider water lilies as a symbolic representation of their beliefs.<br />
                        In addition, water lilies are so different from one another. 
                        There are water lilies that only bloom at night, while many others only bloom during the day, there are types of water lilies that can only be found in certain areas, and many others are an endangered species in some places and this is truly magical!</p>
                        <div class="action"> <a href="#">            
                            <button class="add-to-cart btn btn-default" type="button">
                                Add to cart
                            </button></a>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        );
}
export default Waterlily