// mail.service.ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { CreateMailDto } from './dto/create-mail.dto';
import { Mail, MailDocument } from 'src/schemas/mail.schema';

@Injectable()
export class MailService {
  constructor(
    @InjectModel(Mail.name) private readonly mailModel: Model<MailDocument>,
  ) {}

  async create(createMailDto: CreateMailDto): Promise<Mail> {
    const createdMail = new this.mailModel(createMailDto);
    return createdMail.save();
  }

  async findAll(): Promise<Mail[]> {
    return this.mailModel.find().exec();
  }

  async findOne(id: string): Promise<Mail> {
    return this.mailModel.findById(id).exec();
  }

  async update(id: string, updateMailDto: CreateMailDto): Promise<Mail> {
    return this.mailModel
      .findByIdAndUpdate(id, updateMailDto, { new: true })
      .exec();
  }
}
