import {Hits} from './Hits';

export class Result {
  id?: number;
  q: string;
  hits: Hits[];
  count: number;
}
