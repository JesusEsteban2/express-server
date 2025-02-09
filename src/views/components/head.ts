export const createHead = (title: string) => {
    return `
        <head>
            <meta charset="UTF-8" />
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1.0"
            />
            <title>${title}</title>
            <link rel="shortcut icon" href="/static/favicon.svg" type="image/svg+xml" />
            <link rel="stylesheet" href="/static/main.css" />
            <script src="/static/index.js" type="module" defer></script>
        </head>
    `;
};
