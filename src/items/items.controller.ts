import { Body, Controller } from '@nestjs/common';
import { ItemsService } from './items.service';
import { Item } from './item.model';
import { CreateItemDto } from './dto/create-item.dto';

@Controller('items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}

  findAll(): Item[] {
    return this.itemsService.findAll();
  }

  findById(@Body(':id') id: string): Item {
    return this.itemsService.findById(id);
  }

  create(@Body() createItemDto: CreateItemDto): Item {
    return this.itemsService.create(createItemDto);
  }
}
