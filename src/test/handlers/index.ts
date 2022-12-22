import { articleHandlers } from './articles';
import { categoryHandlers } from './categories';

export const handlers = [...articleHandlers, ...categoryHandlers];
