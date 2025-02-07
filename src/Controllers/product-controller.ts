/* eslint-disable @typescript-eslint/no-unused-vars */
import { Request, Response } from 'express';
import createDebug from 'debug';
import { renderIndexHtml } from '../views/index-html.js';
import { renderProductHtml } from '../views/product-html.js';
import { renderDetailProductHtml } from '../views/detail-product-html.js';

const debug = createDebug('app:product-controller');

export class ProductController {
    readAll = (req: Request, res: Response) => {
        debug('app:Product Controller');
        res.send(renderProductHtml());
    };
    read = (req: Request, res: Response) => {
        debug('app:Product Controller #' + req.params.id);
        const idnum = req.params.id as unknown as number;
        res.send(renderDetailProductHtml(idnum - 1));
    };
}

export class GetController {
    index = (req: Request, res: Response) => {
        debug('app: GetController-index');
        res.setHeader('Content-Type', 'text/html; charset=utf-8');
        res.send(renderIndexHtml());
    };
}
