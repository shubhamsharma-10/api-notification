import { ApiProperty } from '@nestjs/swagger';

export class CreatePreferenceDto {
  @ApiProperty({ example: '123', description: 'User ID' })
  userId: string;

  @ApiProperty({ example: 'user@example.com', description: 'User email' })
  email: string;

  @ApiProperty({
    example: {
      marketing: true,
      newsletter: true,
      updates: true,
      frequency: 'daily',
      channels: {
        email: true,
        sms: false,
        push: true
      }
    },
    description: 'User preferences configuration'
  })
  preferences: {
    marketing: boolean;
    newsletter: boolean;
    updates: boolean;
    frequency: string;
    channels: {
      email: boolean;
      sms: boolean;
      push: boolean;
    };
  };
}