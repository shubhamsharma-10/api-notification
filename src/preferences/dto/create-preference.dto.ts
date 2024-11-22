import { IsEmail, IsString, IsObject, IsBoolean, IsEnum, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

class ChannelsDto {
  @IsBoolean()
  email: boolean;

  @IsBoolean()
  sms: boolean;

  @IsBoolean()
  push: boolean;
}

class PreferencesDto {
  @IsBoolean()
  marketing: boolean;

  @IsBoolean()
  newsletter: boolean;

  @IsBoolean()
  updates: boolean;

  @IsEnum(['daily', 'weekly', 'monthly', 'never'])
  frequency: string;

  @IsObject()
  @ValidateNested()
  @Type(() => ChannelsDto)
  channels: ChannelsDto;
}

export class CreatePreferenceDto {
  @IsString()
  userId: string;

  @IsEmail()
  email: string;

  @IsObject()
  @ValidateNested()
  @Type(() => PreferencesDto)
  preferences: PreferencesDto;

  @IsString()
  timezone: string;
}