import { createHeader } from './components/header.js';
import { createHead } from './components/head.js';
import { createFooter } from './components/footer.js';
import { data } from './product-html.js';

export const renderDetailProductHtml = (id: number) => {
    const title = 'Detalle de producto | Cliente de Express';
    const pageTitle = 'Producto ' + (id + 1);
    return /*html*/ `
        <!DOCTYPE html>
        <html lang="es">
            ${createHead(title)}
            <body>
                ${createHeader(pageTitle)}
                <main>
                    <section>
                    <p>Id: ${data[id].id}</p>
                    <p>Titulo:${data[id].title}</p>
                    <p>Price:${data[id].price}</p>
                    <p>Descripción: ${data[id].description}</p>
                    <img src="${data[id].images[0]}" alt="${data[id].title}" width="300">
                    </section>
                </main>
                ${createFooter()}
            </body>
        </html>
    `;
};
