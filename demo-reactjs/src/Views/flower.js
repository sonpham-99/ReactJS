import React from 'react';
import '../Public/CSS/flower.css';
import Waterlily from './waterlily';

function Flower(){
        return(
            <div className="container"> 
                <div className="container">
                    <h1>Product</h1>
                </div>
                <div className="container">
                <div className="row">
                    <div className="display">
                            <div className="img">
                                <a href="/waterlily"><img src="https://www.thespruce.com/thmb/8B3EZ9IjoEkh2rUBDv46pb3fJUA=/4478x2989/filters:fill(auto,1)/the-incomparable-waterlily-and-lotus-1403525-22-dc91986882b6494e96c142144817fff5.jpg" /></a>
                            </div>
                            <div className="container sub">
                                <div className="name">
                                    <a href="/waterlily">Water Lily</a>
                                </div>
                                <div className="price">0.84 USD</div>
                            </div>
                    </div>
                    <div className="display">
                            <div className="img">
                                <a href="#"><img src="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F24%2F2010%2F03%2Fgettyimages-91779779-2000.jpg" /></a>
                            </div>
                            <div className="container sub">
                                <div className="name">
                                    <a href="#">Magnolia</a>
                                </div>
                                <div className="price">0.55 USD</div>
                            </div>
                    </div>
                    <div className="display">
                            <div className="img">
                                <a href="#"><img src="https://www.schemecolor.com/wp-content/uploads/pear-blossoms.jpg" /></a>
                            </div>
                            <div className="container sub">
                                <div className="name">
                                    <a href="#">Pear Blossom</a>
                                </div>
                                <div className="price">0.50 USD</div>
                            </div>
                    </div>
                    <div className="display">
                            <div className="img">
                                <a href="#"><img src="https://previews.123rf.com/images/marimarkina/marimarkina1606/marimarkina160600017/59993449-white-flower-of-the-snowball-viburnum-buldenezh-in-bloom-.jpg"  /></a>
                            </div>
                            <div className="container sub">
                                <div className="name">
                                    <a href="#">Snowball</a>
                                </div>
                                <div className="price">0.70 USD</div>
                            </div>
                    </div>
                    <div className="display">
                            <div className="img">
                                <a href="#"><img src="https://cdn.shopify.com/s/files/1/1904/8475/products/Japanese_Wisteria_large.jpg?v=1567363235" /></a>
                            </div>
                            <div className="container sub">
                                <div class="name">
                                    <a href="#">Wisteria</a>
                                </div>
                                <div class="price">0.77 USD</div>
                            </div>
                    </div>
                
            </div>
                </div>
            </div>
        );
}
export default Flower