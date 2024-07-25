import { ApiProperty } from '@nestjs/swagger';

export class CreateEventDto {
  @ApiProperty()
  readonly team_name: string;

  @ApiProperty()
  readonly nest: string;

  @ApiProperty()
  readonly finish_time: string;

  @ApiProperty()
  readonly datetime: string;

  @ApiProperty()
  readonly status: string;

  @ApiProperty()
  readonly party_list: { name: string; job: string; level: string }[];

  @ApiProperty()
  readonly images: string;
}
