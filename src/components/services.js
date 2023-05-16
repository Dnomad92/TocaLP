import React from 'react';
import visual from '../images/IdVisual.png';
import social from '../images/RedeSociais.png';
import digital from '../images/LandingPage.png';

const servicos = [
	{img: visual, nome:'Identidade Visual', descr:'Pacote de criação de Identidade Visual', CTA:'Quero!'},
	{img: social, nome:'Redes Sociais', descr:'Um combo completo perfeito para empreendedores que se importam com suas midias sociais', CTA:'Preciso!'},
	{img: digital, nome:'Landing Pages', descr:'Tenha uma Landing Page que atende suas necessidades', CTA:'Vamos Lá!'}
]

export default function Services() {
	return (
		<div id="services" className=" bg-white py-24 sm:py-32">
			<div className="mx-auto max-w-7x1 px-6 lg:px-8">
				<dl className="pb-2.5 grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
		          {servicos.map((service) => (
		            <div key={service.nome} className="mx-auto flex max-w-xs pb-2.5 flex-col gap-y-4">
		            	<dt className="text-3xl text-gray-900 font-semibold leading-7">
		            		<div className="flex flex-col">
			            		<img
					                className=""
					                src={service.img}
					                alt=""
					              />
			              		<h1 className="mt-10 text-purple-950">{service.nome}</h1>
		              		</div>
		          		</dt>
		          			<div className="pb-2.5">
			              	<dd className="pb-2.5 xs:tracking-tight text-slate-900 sm:text-lg">
			               		<p>{service.descr}</p>
			              	</dd>
			              	<dd>
			              		<div className="mt-10 flex items-center justify-center gap-x-6">
							            <a href="https://example.com"
							                className="rounded-3xl bg-purple-950 px-3.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-purple-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600"
							              >
							                {service.CTA}
							            </a>
						        		</div>
			              	</dd>	
			              </div>
		            </div>
		          ))}
		        </dl>
			</div>
		</div>
	);
}