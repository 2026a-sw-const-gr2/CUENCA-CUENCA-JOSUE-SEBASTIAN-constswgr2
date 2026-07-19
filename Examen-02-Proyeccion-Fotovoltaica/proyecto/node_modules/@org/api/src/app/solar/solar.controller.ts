import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiBody,
  ApiCreatedResponse,
  ApiOperation,
  ApiSecurity,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import type {
  SolarV1Response,
  SolarV2Response,
} from '@examen-monorepo/shared';
import { ApiKeyGuard } from './api-key.guard.js';
import { SolarCalculationDto } from './solar.dto.js';
import { SolarService } from './solar.service.js';

@ApiTags('Proyección fotovoltaica')
@Controller()
export class SolarController {
  constructor(private readonly solarService: SolarService) {}

  @Post('v1/solar/calculate')
  @ApiOperation({
    summary: 'Calcular producción solar mediante la API pública v1',
    description:
      'Devuelve los resultados numéricos crudos para que el cliente los formatee.',
  })
  @ApiBody({
    type: SolarCalculationDto,
  })
  @ApiCreatedResponse({
    description: 'Cálculo realizado correctamente en formato crudo.',
    schema: {
      example: {
        version: 'v1',
        data: {
          installedPowerKw: 4,
          dailyEnergyKwh: 20,
          monthlyEnergyKwh: 600,
          annualEnergyKwh: 7300,
        },
      },
    },
  })
  @ApiBadRequestResponse({
    description: 'Los datos ingresados no cumplen los rangos permitidos.',
  })
  calculateV1(
    @Body() input: SolarCalculationDto
  ): SolarV1Response {
    return {
      version: 'v1',
      data: this.solarService.calculateRaw(input),
    };
  }

  @Post('v2/solar/calculate')
  @UseGuards(ApiKeyGuard)
  @ApiSecurity('x-api-key')
  @ApiOperation({
    summary: 'Calcular producción solar mediante la API segura v2',
    description:
      'Requiere el encabezado x-api-key y devuelve resultados formateados.',
  })
  @ApiBody({
    type: SolarCalculationDto,
  })
  @ApiCreatedResponse({
    description: 'Cálculo realizado y formateado por el backend.',
    schema: {
      example: {
        version: 'v2',
        data: {
          installedPower: '4.00 kW',
          dailyEnergy: '20.00 kWh/día',
          monthlyEnergy: '600.00 kWh/mes',
          annualEnergy: '7300.00 kWh/año',
        },
      },
    },
  })
  @ApiUnauthorizedResponse({
    description: 'API Key inválida o ausente.',
  })
  @ApiBadRequestResponse({
    description: 'Los datos ingresados no cumplen los rangos permitidos.',
  })
  calculateV2(
    @Body() input: SolarCalculationDto
  ): SolarV2Response {
    return {
      version: 'v2',
      data: this.solarService.calculateFormatted(input),
    };
  }
}