import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Event extends Document {
  @Prop({ required: true })
  team_name: string;

  @Prop({ required: true })
  nest: string;

  @Prop({ required: true })
  finish_time: string;

  @Prop({ required: true })
  datetime: string;

  @Prop({ required: true })
  status: string;

  @Prop({
    required: true,
    type: [{ name: String, job: String, level: String }],
  })
  party_list: { name: string; job: string; level: string }[];

  @Prop()
  images: string;
}
export type EventDocument = Event & Document;
export const EventSchema = SchemaFactory.createForClass(Event);
