// mail.controller.ts
import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { MailService } from './mail.service';
import { CreateMailDto } from './dto/create-mail.dto';
import { Mail } from 'src/schemas/mail.schema';

@Controller('mails')
export class MailController {
  constructor(private readonly mailService: MailService) {}

  @Post()
  async create(@Body() createMailDto: CreateMailDto): Promise<Mail> {
    return this.mailService.create(createMailDto);
  }

  @Get()
  async findAll(): Promise<Mail[]> {
    return this.mailService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Mail> {
    return this.mailService.findOne(id);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateMailDto: CreateMailDto,
  ): Promise<Mail> {
    return this.mailService.update(id, updateMailDto);
  }
}
