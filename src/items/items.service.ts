import { Injectable, NotFoundException } from '@nestjs/common';
import { Item } from './item.model';
import { ItemStatus } from './item-status.enum';
import { CreateItemDto } from './dto/create-item.dto';
import { v4 as uuid } from 'uuid';

@Injectable()
export class ItemsService {
  private items: Item[] = [];

  /**
   *商品情報一覧を取得
   *
   * @returns Item[]
   */
  findAll(): Item[] {
    return this.items;
  }

  /**
   *idに一致する商品情報を取得
   *
   * @param id string
   * @returns Item
   */
  findById(id: string): Item {
    const found: Item = this.items.find((item) => item.id === id);
    if (!found) throw new NotFoundException();
    return found;
  }

  /**
   *商品情報を追加
   *
   * @param createItemDto CreateItemDto
   * @returns Item
   */
  create(createItemDto: CreateItemDto): Item {
    const item: Item = {
      id: uuid(),
      ...createItemDto,
      status: ItemStatus.ON_SALE,
    };
    this.items.push(item);
    return item;
  }

  /**
   *商品情報を販売中から売り切れに変更
   *
   * @param id string
   * @returns
   */
  updateStatus(id: string): Item {
    const item: Item = this.findById(id);
    item.status = ItemStatus.SOLD_OUT;
    return item;
  }

  /**
   *idに一致する商品情報の削除
   *
   * @param id string
   * @returns void
   */
  delete(id: string): void {
    this.items = this.items.filter((item) => item.id !== id);
  }
}
