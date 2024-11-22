import { IsString, IsEnum, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateNotificationDto {
  @ApiProperty()
  @IsString()
  userId: string;

  @ApiProperty({ enum: ['marketing', 'newsletter', 'updates'] })
  @IsEnum(['marketing', 'newsletter', 'updates'])
  type: string;

  @ApiProperty({ enum: ['email', 'sms', 'push'] })
  @IsEnum(['email', 'sms', 'push'])
  channel: string;

  @ApiProperty()
  @IsString()
  message: string;

  @ApiProperty({ required: false })
  @IsOptional()
  metadata?: Record<string, any>;
}