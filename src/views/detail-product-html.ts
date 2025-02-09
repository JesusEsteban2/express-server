import { createHeader } from './components/header.js';
import { createHead } from './components/head.js';
import { createFooter } from './components/footer.js';
import { data } from './product-html.js';

export const renderDetailProductHtml = (idP: string) => {
    const found = data.find((item) => item.id === Number(idP));
    const title = 'Detalle de producto | Cliente de Express';
    if (!found) return;
    const pageTitle = 'Producto ' + found.id;
    return /*html*/ `
        <!DOCTYPE html>
        <html lang="es">
            ${createHead(title)}
            <body>
                ${createHeader(pageTitle)}
                <main>
                    <section>
                    <p>Id: ${found.id}</p>
                    <p>Titulo:${found.title}</p>
                    <p>Price:${found.price}</p>
                    <p>Descripción: ${found.description}</p>
                    <img src="${found.images[0]}" alt="${found.title}" width="300">
                    </section>
                </main>
                ${createFooter()}
            </body>
        </html>
    `;
};
