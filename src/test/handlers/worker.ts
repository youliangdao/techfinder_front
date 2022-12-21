import { endpoint } from 'config';
import { rest, setupWorker } from 'msw';

const handlers = [
  rest.get(`${endpoint}/`, (req, res, ctx) =>
    res(ctx.status(200), ctx.json({ message: 'hello, world!' }))
  ),
];

export const worker = setupWorker(...handlers);
