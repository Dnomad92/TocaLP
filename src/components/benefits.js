import React from 'react';
import backgroundImage from '../images/fundo_2.png';

const benefits = ['Perfil Convidativo','+ Profissionalismo','+ Visibilidade', '+ Credibilidade', '+ Engajamento', 'Frequência de Postagens']

export default function Benefits() {
	return (
		<div id="benefits" className=" h-screen bg-cover bg-center" style={{backgroundImage: `url(${backgroundImage})`}}>
			<div className="text-center float-right py-24 px-2 sm:max-w-lg sm:py-auto lg:max-w-xl lg:mr-9 xl:max-w-xl xl:mr-9">
	      <h1 className="text-4xl my-12 font-bold tracking-tight text-white sm:text-6xl">
	        FAÇA SEU NEGÓCIO DECOLAR COM A TOCA!
	      </h1>
	      {benefits.map((item) => (
	      	 <span key={item} className="inline-flex items-center rounded-xl px-2 py-1 m-3 text-base font-medium text-white ring-1 ring-offset-1 ring-offset-purple-100/50 ring-purple-500">
			        {item}
			      </span>
	      	))}
	    </div>
	  </div>
	);
}
