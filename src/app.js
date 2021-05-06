/** Imports **/
import Utils from '../src/service/Utils';

/** Pages **/
import { error404, home } from './views/pages/index';

/** Routes **/
let routes = {
    '/': home,
}

const router = async () => {
    const root = document.getElementById('root');

    let request = Utils.parseRequestURL();

    let parseURL = (request.resource ? '/' + request.resource : '/') + (request.id ? '/:id' + request.id : '') + (request.verb ? '/' + request.verb : '');
    let page = routes[parseURL] ? routes[parseURL] : error404;

    root.innerHTML = await page.render();
    await page.after_render();
}

/**observa mudanças na hash*/
window.addEventListener('hashchange', router);

/**oberva carregamento da pagina */
window.addEventListener('load', router);
