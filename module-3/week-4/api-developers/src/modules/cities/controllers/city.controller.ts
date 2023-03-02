import {
  Controller,
  Post,
  Get,
  Param,
  Patch,
  Body,
  BadRequestException,
  Delete,
} from '@nestjs/common';
import { StateService } from '../../states/services/state.service';
import { CityService } from '../services/city.service';
import axios from 'axios';
import { City } from '../interfaces';
import { ApiTags } from '@nestjs/swagger';
import { CityEntity } from '../entities/city.entity';
import { isNumber } from 'class-validator';
import { CreateCityDto } from '../dto/create-city.dto';

@ApiTags('cities')
@Controller('city')
export class CityController {
  constructor(
    private cityService: CityService,
    private stateService: StateService,
  ) {}

  @Get(':id')
  async getById(@Param('id') id: number): Promise<CityEntity> {
    return await this.cityService.findById(id);
  }

  @Post('createAllCities')
  async createAllCities(): Promise<string> {
    try {
      const { data } = await axios.get(
        'http://servicodados.ibge.gov.br/api/v1/localidades/municipios',
      );
      const states = await this.stateService.getByAll();

      data.forEach((city: City) => {
        const state = states.find(
          ({ initials }) => city.microrregiao.mesorregiao.UF.sigla === initials,
        );

        const newCity = {
          name: city.nome,
          state_id: state.id,
        };

        this.cityService.createCity(newCity);
      });
      return 'Cidades salvas com sucesso';
    } catch (error) {
      console.log(error);
    }
  }

  @Patch(':id')
  async updateById(
    @Param('id') id: number,
    @Body() body: CreateCityDto,
  ): Promise<string> {
    if (!isNumber(id)) {
      throw new BadRequestException('FieldMustBeNumber');
    }
    try {
      const response = await this.cityService.updateCity(id, body);
      return response;
    } catch (error) {
      throw error;
    }
  }

  @Delete(':id')
  async deleteById(@Param('id') id: number): Promise<object> {
    if (!isNumber(id)) {
      throw new BadRequestException('FieldMustBeNumber');
    }
    try {
      const response = await this.cityService.deleteCity(id);
      return response;
    } catch (error) {
      throw error;
    }
  }

  @Post()
  async create(@Body() body: CreateCityDto): Promise<string> {
    try {
      await this.cityService.createNewCity(body);
      return 'New city created';
    } catch (error) {
      throw error;
    }
  }
}
