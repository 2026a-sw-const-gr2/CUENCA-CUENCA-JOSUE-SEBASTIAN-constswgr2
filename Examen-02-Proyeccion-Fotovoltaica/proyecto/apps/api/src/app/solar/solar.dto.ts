import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, Max, Min } from 'class-validator';
import type { SolarInput } from '@examen-monorepo/shared';

export class SolarCalculationDto implements SolarInput {
  @ApiProperty({
    description: 'Área total ocupada por los paneles solares en metros cuadrados',
    example: 20,
    minimum: 0.01,
    maximum: 10000,
  })
  @IsNumber()
  @Min(0.01)
  @Max(10000)
  areaM2!: number;

  @ApiProperty({
    description: 'Porcentaje de eficiencia de los paneles solares',
    example: 20,
    minimum: 0.01,
    maximum: 100,
  })
  @IsNumber()
  @Min(0.01)
  @Max(100)
  efficiencyPercent!: number;

  @ApiProperty({
    description: 'Horas de sol pico disponibles diariamente',
    example: 5,
    minimum: 0.01,
    maximum: 24,
  })
  @IsNumber()
  @Min(0.01)
  @Max(24)
  peakSunHours!: number;
}