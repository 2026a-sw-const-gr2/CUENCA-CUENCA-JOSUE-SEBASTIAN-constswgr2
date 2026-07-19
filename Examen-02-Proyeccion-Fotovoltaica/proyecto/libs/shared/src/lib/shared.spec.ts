import {
  formatSolarResult,
  isSolarV2Response,
  validateSolarInput,
} from './shared.js';

describe('utilidades compartidas de energía solar', () => {
  it('acepta datos válidos', () => {
    const validation = validateSolarInput({
      areaM2: 20,
      efficiencyPercent: 20,
      peakSunHours: 5,
    });

    expect(validation).toEqual({
      isValid: true,
      errors: [],
    });
  });

  it('rechaza datos fuera de los rangos permitidos', () => {
    const validation = validateSolarInput({
      areaM2: 0,
      efficiencyPercent: 120,
      peakSunHours: 25,
    });

    expect(validation.isValid).toBe(false);
    expect(validation.errors).toHaveLength(3);
  });

  it('formatea los resultados con sus unidades', () => {
    const formatted = formatSolarResult({
      installedPowerKw: 4,
      dailyEnergyKwh: 20,
      monthlyEnergyKwh: 600,
      annualEnergyKwh: 7300,
    });

    expect(formatted).toEqual({
      installedPower: '4.00 kW',
      dailyEnergy: '20.00 kWh/día',
      monthlyEnergy: '600.00 kWh/mes',
      annualEnergy: '7300.00 kWh/año',
    });
  });

  it('valida la estructura de una respuesta v2', () => {
    expect(
      isSolarV2Response({
        version: 'v2',
        data: {
          installedPower: '4.00 kW',
          dailyEnergy: '20.00 kWh/día',
          monthlyEnergy: '600.00 kWh/mes',
          annualEnergy: '7300.00 kWh/año',
        },
      })
    ).toBe(true);
  });
});