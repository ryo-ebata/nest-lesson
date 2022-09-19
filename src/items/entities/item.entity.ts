import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { ItemStatus } from 'src/items/item-status.enum';

@Entity()
export class Item {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  price: number;

  @Column()
  description: string;

  @Column()
  status: ItemStatus;

  @Column()
  created_at: string;

  @Column()
  updated_at: string;
}
