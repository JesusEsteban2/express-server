const items = [
    { label: 'Index', path: '/static/../' },
    { label: 'Product', path: './product' },
    { label: 'About', path: '/static/about.html' },
];

export const menuItems = items

    .map(
        (item) => /*html*/ `
            <li class="menu-tablet">
                <a href="${item.path}">${item.label}</a>
            </li>
        `,
    )
    .join('');

export function createHeader(title: string) {
    const img = '"/static/assets/logo-golden-bisque.svg"';
    const cssClass = 'main-header';
    const headerTemplate = `
        <header class="${cssClass}">
            <nav>
                <ul>
                    <li class="menu-header">
                        <a href="/static/../">
                            <img src=${img} width="50" alt="Logo" />
                            <h1 id="header1" data-id="1" class="h2">
                                ${title}
                            </h1>
                        </a>
                    </li>
                    <li class="menu-mobile">
                        <a href="#">
                            <span class="fa-solid fa-bars"></span>
                        </a>
                    </li>
                    ${menuItems}
                </ul>
            </nav>
        </header>
    `;
    return headerTemplate;
}
