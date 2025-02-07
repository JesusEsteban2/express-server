import express from 'express';
import type { Request, Response, NextFunction } from 'express';
import createDebug from 'debug';
import { resolve } from 'node:path';
import fs from 'node:fs/promises';
import { GetController } from './Controllers/product-controller.js';
import { productRouter } from './routes/product.routers.js';

export const app = express();

const debug = createDebug('app:app');
const publicPath = resolve(resolve(), 'public');

app.disable('x-powered-by');

app.use(express.json());

app.use((req: Request, res: Response, next: NextFunction) => {
    debug('Method: ', req.method, 'URL: ', req.url);
    next();
});

app.use(express.static(publicPath));

app.use(async (req: Request, res: Response, next: NextFunction) => {
    if (req.url === '/favicon.ico') {
        const filePath = resolve(publicPath, 'favicon.ico');
        const buffer = await fs.readFile(filePath);
        res.setHeader('Content-Type', 'image/svg+xml');
        res.send(buffer);
    } else {
        next();
    }
});

const getController = new GetController();

app.get('/', getController.index);
app.use('/product', productRouter);

app.use('*', (req, res) => {
    res.status(404).send('Error 404 Not found');
});
