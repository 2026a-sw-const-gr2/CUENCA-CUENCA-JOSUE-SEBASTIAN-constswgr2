export interface SolarInput {
  areaM2: number;
  efficiencyPercent: number;
  peakSunHours: number;
}

export interface SolarRawResult {
  installedPowerKw: number;
  dailyEnergyKwh: number;
  monthlyEnergyKwh: number;
  annualEnergyKwh: number;
}

export interface SolarFormattedResult {
  installedPower: string;
  dailyEnergy: string;
  monthlyEnergy: string;
  annualEnergy: string;
}

export interface SolarV1Response {
  version: 'v1';
  data: SolarRawResult;
}

export interface SolarV2Response {
  version: 'v2';
  data: SolarFormattedResult;
}

export interface SolarValidationResult {
  isValid: boolean;
  errors: string[];
}

function isFiniteNumber(value: unknown): value is number {
  return typeof value === 'number' && Number.isFinite(value);
}

export function validateSolarInput(
  input: Partial<SolarInput> | null | undefined
): SolarValidationResult {
  const errors: string[] = [];

  if (!input) {
    return {
      isValid: false,
      errors: ['Debe proporcionar los datos para realizar el cálculo.'],
    };
  }

  if (
    !isFiniteNumber(input.areaM2) ||
    input.areaM2 <= 0 ||
    input.areaM2 > 10000
  ) {
    errors.push('El área debe ser mayor que 0 y menor o igual a 10000 m².');
  }

  if (
    !isFiniteNumber(input.efficiencyPercent) ||
    input.efficiencyPercent <= 0 ||
    input.efficiencyPercent > 100
  ) {
    errors.push('La eficiencia debe estar entre 0 y 100%.');
  }

  if (
    !isFiniteNumber(input.peakSunHours) ||
    input.peakSunHours <= 0 ||
    input.peakSunHours > 24
  ) {
    errors.push('Las horas de sol pico deben estar entre 0 y 24.');
  }

  return {
    isValid: errors.length === 0,
    errors,
  };
}

export function formatSolarResult(
  result: SolarRawResult
): SolarFormattedResult {
  return {
    installedPower: `${result.installedPowerKw.toFixed(2)} kW`,
    dailyEnergy: `${result.dailyEnergyKwh.toFixed(2)} kWh/día`,
    monthlyEnergy: `${result.monthlyEnergyKwh.toFixed(2)} kWh/mes`,
    annualEnergy: `${result.annualEnergyKwh.toFixed(2)} kWh/año`,
  };
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null;
}

export function isSolarV2Response(value: unknown): value is SolarV2Response {
  if (!isRecord(value) || value['version'] !== 'v2') {
    return false;
  }

  const data = value['data'];

  return (
    isRecord(data) &&
    typeof data['installedPower'] === 'string' &&
    typeof data['dailyEnergy'] === 'string' &&
    typeof data['monthlyEnergy'] === 'string' &&
    typeof data['annualEnergy'] === 'string'
  );
}