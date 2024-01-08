import { footer } from "./componentes/footer";

export const Home = (): void => {
const homeView: HTMLDivElement = document.createElement('div');
homeView.setAttribute('id', 'home-view');
homeView.innerHTML= `
<section class=header-er></section>
<main>
<div id="menu"></div>
<div id="pelis"></div>
</main>
<section class=footer-er></section>
`
//div id=menu es para los filtros
//div id=pelis es para las tarjetas

const fComp: Element = homeView.querySelector('.footer-er');

const footerComponent = footer();
fComp.appendChild(footerComponent);

}