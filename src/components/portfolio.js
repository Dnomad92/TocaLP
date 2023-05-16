import React from 'react';
import img1 from '../images/img1.jpg';
import img2 from '../images/img2.jpg';
import img3 from '../images/img3.jpg';
import img4 from '../images/img4.jpg';
import img5 from '../images/img5.jpg';
import img6 from '../images/img6.jpg';
// import { StaticImage } from 'gatsby-plugin-image'

const posts = [
	{img:img1,cod: '01'},
	{img:img2,cod: '02'},
	{img:img3,cod: '03'},
	{img:img4,cod: '04'},
	{img:img5,cod: '05'},
	{img:img6,cod: '06'},
]

export default function Portfolio () {
	return (
		<div id="portfolio" className=" container bg-white py-3.5 max-w-sm md:w-full md:max-w-4xl lg:px-9 lg:py-4 lg:max-w-7xl" >
			<div className="text-center mx-auto">
				<h2 className="text-3xl font-bold my-8  tracking-tight text-purple-950 sm:text-4xl">Portfólio</h2>
			</div>
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
				{posts.map((post) =>(
					<div key={post.cod} className="">
						<img  
						src={post.img} 
						alt={post.cod} 
						className=""
						/>
					</div>
				))}
			</div>
		</div>
	)
}