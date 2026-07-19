import { BadRequestException, Injectable } from '@nestjs/common';
import {
  formatSolarResult,
  validateSolarInput,
  type SolarFormattedResult,
  type SolarInput,
  type SolarRawResult,
} from '@examen-monorepo/shared';

@Injectable()
export class SolarService {
  calculateRaw(input: SolarInput): SolarRawResult {
    const validation = validateSolarInput(input);

    if (!validation.isValid) {
      throw new BadRequestException({
        message: 'Los datos ingresados no son válidos.',
        errors: validation.errors,
      });
    }

    // Se considera una irradiancia estándar de 1 kW por metro cuadrado.
    const installedPowerKw =
      input.areaM2 * (input.efficiencyPercent / 100);

    const dailyEnergyKwh = installedPowerKw * input.peakSunHours;
    const monthlyEnergyKwh = dailyEnergyKwh * 30;
    const annualEnergyKwh = dailyEnergyKwh * 365;

    return {
      installedPowerKw: this.round(installedPowerKw),
      dailyEnergyKwh: this.round(dailyEnergyKwh),
      monthlyEnergyKwh: this.round(monthlyEnergyKwh),
      annualEnergyKwh: this.round(annualEnergyKwh),
    };
  }

  calculateFormatted(input: SolarInput): SolarFormattedResult {
    const rawResult = this.calculateRaw(input);
    return formatSolarResult(rawResult);
  }

  private round(value: number): number {
    return Number(value.toFixed(4));
  }
}