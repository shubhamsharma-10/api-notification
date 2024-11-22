import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserPreference } from './schemas/user-preference.schema';
import { CreatePreferenceDto } from './dto/create-preference.dto';

@Injectable()
export class PreferencesService {
  constructor(
    @InjectModel(UserPreference.name) private userPreferenceModel: Model<UserPreference>,
  ) {}

  async create(createPreferenceDto: CreatePreferenceDto): Promise<UserPreference> {
    const createdPreference = new this.userPreferenceModel(createPreferenceDto);
    return createdPreference.save();
  }

  async findOne(userId: string): Promise<UserPreference> {
    const preference = await this.userPreferenceModel.findOne({ userId }).exec();
    if (!preference) {
      throw new NotFoundException(`User preferences not found for userId ${userId}`);
    }
    return preference;
  }

  async update(userId: string, updateData: Partial<CreatePreferenceDto>): Promise<UserPreference> {
    const preference = await this.userPreferenceModel
      .findOneAndUpdate({ userId }, { ...updateData, lastUpdated: new Date() }, { new: true })
      .exec();
    
    if (!preference) {
      throw new NotFoundException(`User preferences not found for userId ${userId}`);
    }
    return preference;
  }

  async remove(userId: string): Promise<void> {
    const result = await this.userPreferenceModel.deleteOne({ userId }).exec();
    if (result.deletedCount === 0) {
      throw new NotFoundException(`User preferences not found for userId ${userId}`);
    }
  }
}