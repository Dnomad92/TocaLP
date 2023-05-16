import React from 'react';
import backgroundImage from '../images/fundo_3.png';


export default function About() {
	return (
		<div id="About" className=" h-screen bg-cover bg-center" style={{backgroundImage: `url(${backgroundImage})`}}>
			<div className="text-center float-left py-8 px-2 sm:max-w-lg sm:py-auto lg:max-w-xl lg:ml-9 xl:max-w-xl xl:ml-9">
	      <h1 className="text-4xl my-12 font-bold tracking-tight text-white sm:text-6xl">
	        Quem Somos?
	      </h1>
	     	<p className="text-2xl text-white text-left leading-loose">	     	
					Somos a Toca da Designer, uma agência que surgiu em 2020. 
					Acreditamos no poder das mídias sociais e do mundo digital, sobretudo como ferramenta de transformação para pequenos ou grandes negócios. 
					Queremos te ajudar a construir sua audiência, engajamento e autoridade no mundo digital. 
				</p>
				<p className="mt-8 text-2xl text-white text-left">
					Vamos fazer isso juntos?
	     	</p>
	    </div>
	  </div>


	);
}
