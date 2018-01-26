import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Carousel } from 'antd';
import { Card } from 'antd';
//import './less/carousel.less';
const { Meta } = Card;

class CarouselBanner extends Component {
  render() {
    return (
		<Carousel autoplay effect="fade">
		    <div>
		    	<Card
			    hoverable
			    style={{height:'auto'}}
			    cover={<img alt="example" src="http://img06.yiguoimg.com/d/others/180122/9288718349083702.jpg" />}
			  	>
			  	</Card>
		    </div>
		    <div>
		    	<Card
			    hoverable
			    style={{height:'auto'}}
			    cover={<img alt="example" src="http://img05.yiguoimg.com/d/others/180123/9288718425039927.jpg" />}
			  	>
			  	</Card>
		    </div>
		    <div>
		    	<Card
			    hoverable
			    style={{height:'auto'}}
			    cover={<img alt="example" src="http://img05.yiguoimg.com/d/others/180119/9288718263723059.jpg" />}
			  	>
			  	</Card>
		    </div>
		</Carousel>
    )
  }
}
export default CarouselBanner;