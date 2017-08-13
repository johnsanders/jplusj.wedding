import React from "react";
import Slick from "react-slick";
import empire from "../img/empire.jpg";
import river from "../img/river.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
	dots:true,
	infinite:true,
	speed:1500,
	fade:true,
	slidesToShow:1,
	draggable:false,
	autoplay:true,
	autoplaySpeed:5000
};

const Slides = () => (
	<Slick {...settings}>
		<div>
			<img src={empire} width="100%"/>
		</div>
		<div>
			<img src={river} width="100%"/>
		</div>
	</Slick>
);

export default Slides;
