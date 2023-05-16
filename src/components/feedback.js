import React from 'react';

const comentarios = [
		{
    id: '001',
    titulo: 'Ótimo trabalho de gerenciamento de mídias sociais!',
    descr: 'Contratei a empresa para gerenciar minha presença nas redes sociais e fiquei extremamente satisfeito com o resultado. As postagens são criativas e engajadoras, e meu número de seguidores cresceu significativamente.',
    autor: {
	    nome: 'Fernanda Oliveira',
	    cargo: 'Empresária',
	    imageSrc: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
	    }
    },

    {
    id: '002',
    titulo: 'Excelente serviço de marketing digital',
    descr: 'Contratei a empresa para promover minha marca nas redes sociais e estou muito satisfeito com o resultado. As campanhas são bem direcionadas e têm gerado um bom retorno para o meu negócio.',
    autor: {
	    nome: 'Rafael Santos',
	    cargo: 'Empreendedor',
	    imageSrc: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
	    }
    },

    {
    id: '003',
    titulo: 'Serviço de gerenciamento de mídias sociais de primeira linha',
    descr: 'Contratei a empresa para gerenciar minhas redes sociais e estou impressionado com a qualidade do trabalho realizado. As postagens são criativas e profissionais, e o engajamento tem sido excelente. Recomendo!',
    autor: {
	    nome: 'Juliana Almeida',
	    cargo: 'Profissional de Marketing',
	    imageSrc: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
	    }
    }
	]

export default function Feedback() {
  return (
    <div className="container bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mx-auto lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-purple-950 sm:text-4xl">Feedbacks</h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Veja o que os nossos clientes estão falando.
          </p>
        </div>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16  pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {comentarios.map((coment) => (
            <article key={coment.id} className="flex max-w-xl flex-col items-center justify-between p-2.5 rounded-lg border border-purple-950 border-2">
              <div className="relative mt-4 grid grid-cols-1 gap-x-4">
                <img src={coment.autor.imageSrc} alt="" className="h-20 w-20 -mt-20 rounded-full border border-purple-950 border-2 mx-auto bg-gray-50" />
                <div className="text-sm text-center leading-6">
                  <p className="font-semibold text-gray-900">
                    <span className="absolute inset-0" />
                     {coment.autor.nome}
                  </p>
                  <p className="text-gray-600">{coment.autor.cargo}</p>
                </div>
              </div>
              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                  <span className="absolute inset-0" />
                  {coment.titulo}
                </h3>
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{coment.descr}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}