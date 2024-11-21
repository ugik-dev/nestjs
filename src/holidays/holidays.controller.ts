import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';

@Controller('holidays')
export class HolidaysController {
  @Get()
  get() {
    return 'this page is under construction';
  }

  @Get(':id')
  find(@Param('id') id: string) {
    return 'searching for holiday with id: ' + id;
  }

  @Post()
  create(@Body() body: any) {
    return body;
  }

  @Put()
  update() {
    return 'this page is under construction';
  }

  @Delete()
  delete() {
    return 'this page is under construction';
  }
}
