import { ItemStatus } from './item-status.enum';

export class Item {
  id: string;
  name: string;
  price: number;
  description: string;
  status: ItemStatus;
}
