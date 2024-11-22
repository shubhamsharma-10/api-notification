import { Controller, Get, Post, Patch, Delete, Body, Param, HttpStatus, HttpCode } from '@nestjs/common';
import { PreferencesService } from './preferences.service';
import { CreatePreferenceDto } from './dto/create-preference.dto';
import { ApiTags, ApiResponse, ApiOperation } from '@nestjs/swagger';

@ApiTags('preferences')
@Controller('api/preferences')
export class PreferencesController {
  constructor(private readonly preferencesService: PreferencesService) {}

  @Post()
  @ApiOperation({ summary: 'Create user preferences' })
  @ApiResponse({ status: HttpStatus.CREATED, description: 'Preferences created successfully' })
  create(@Body() createPreferenceDto: CreatePreferenceDto) {
    return this.preferencesService.create(createPreferenceDto);
  }

  @Get(':userId')
  @ApiOperation({ summary: 'Get user preferences' })
  @ApiResponse({ status: HttpStatus.OK, description: 'Preferences retrieved successfully' })
  findOne(@Param('userId') userId: string) {
    return this.preferencesService.findOne(userId);
  }

  @Patch(':userId')
  @ApiOperation({ summary: 'Update user preferences' })
  @ApiResponse({ status: HttpStatus.OK, description: 'Preferences updated successfully' })
  update(@Param('userId') userId: string, @Body() updateData: Partial<CreatePreferenceDto>) {
    return this.preferencesService.update(userId, updateData);
  }

  @Delete(':userId')
  @HttpCode(HttpStatus.NO_CONTENT) // Add this line
  @ApiOperation({ summary: 'Delete user preferences' })
  @ApiResponse({ status: HttpStatus.NO_CONTENT, description: 'Preferences deleted successfully' })
  remove(@Param('userId') userId: string) {
    return this.preferencesService.remove(userId);
  }
}