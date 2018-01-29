import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Carousel } from 'antd';
import { Card } from 'antd';
//import './less/carousel.less';
const { Meta } = Card;

class CarouselBanner extends Component {
  render() {
    return (
		<Carousel autoplay={true} effect="fade">
		    <div>
		    	<Card
			    hoverable
			    style={{height:'auto'}}
			    cover={<img alt="example" src="/Img/ZNKZ_banner.png" />}
			  	>
			  	</Card>
		    </div>
		    <div>
		    	<Card
			    hoverable
			    style={{height:'auto'}}
			    cover={<img alt="example" src="/Img/BYG_banner.png" />}
			  	>
			  	</Card>
		    </div>
		    <div>
		    	<Card
			    hoverable
			    style={{height:'auto'}}
			    cover={<img alt="example" src="http://sbyun.com/skins2/images/BANNER-4.jpg" />}
			  	>
			  	</Card>
		    </div>
		</Carousel>
    )
  }
}
export default CarouselBanner;