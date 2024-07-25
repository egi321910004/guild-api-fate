// mail.controller.ts
import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { MailService } from './mail.service';
import { CreateMailDto } from './dto/create-mail.dto';

import { ApiTags, ApiBody } from '@nestjs/swagger';
import { Mail } from 'src/schemas/mail.schema';

@Controller('mails')
@ApiTags('mails')
export class MailController {
  constructor(private readonly mailService: MailService) {}

  @Post()
  @ApiBody({ type: CreateMailDto })
  async create(@Body() createMailDto: CreateMailDto): Promise<any> {
    try {
      const mail = await this.mailService.create(createMailDto);
      return {
        resultCode: '200',
        resultMessage: 'Success',
        data: mail,
      };
    } catch (error) {
      throw new HttpException(
        {
          resultCode: '500',
          resultMessage: 'Internal Server Error',
        },
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
  @Get()
  async findAll(): Promise<any> {
    try {
      const mails = await this.mailService.findAll();
      return {
        resultCode: '200',
        resultMessage: 'Success',
        data: mails,
      };
    } catch (error) {
      throw new HttpException(
        {
          resultCode: '500',
          resultMessage: 'Internal Server Error',
        },
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Mail> {
    return this.mailService.findOne(id);
  }

  @Put(':id')
  @ApiBody({ type: CreateMailDto })
  async update(
    @Param('id') id: string,
    @Body() updateMailDto: CreateMailDto,
  ): Promise<Mail> {
    return this.mailService.update(id, updateMailDto);
  }
}
