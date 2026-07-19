import { useState } from 'react';
import {
  formatSolarResult,
  isSolarV2Response,
  validateSolarInput,
  type SolarFormattedResult,
  type SolarInput,
  type SolarV1Response,
} from '@examen-monorepo/shared';
import styles from './app.module.css';

type ApiVersion = 'v1' | 'v2';

interface FormValues {
  areaM2: string;
  efficiencyPercent: string;
  peakSunHours: string;
  apiKey: string;
}

export function App() {
  const [form, setForm] = useState<FormValues>({
    areaM2: '20',
    efficiencyPercent: '20',
    peakSunHours: '5',
    apiKey: '',
  });

  const [result, setResult] =
    useState<SolarFormattedResult | null>(null);
  const [errors, setErrors] = useState<string[]>([]);
  const [message, setMessage] = useState(
    'Completa los datos y selecciona una versión de la API.'
  );
  const [source, setSource] = useState('');
  const [loading, setLoading] = useState(false);

  const changeField = (
    field: keyof FormValues,
    value: string
  ) => {
    setForm((current) => ({
      ...current,
      [field]: value,
    }));
  };

  const calculate = async (version: ApiVersion) => {
    const input: SolarInput = {
      areaM2: Number(form.areaM2),
      efficiencyPercent: Number(form.efficiencyPercent),
      peakSunHours: Number(form.peakSunHours),
    };

    setErrors([]);
    setResult(null);
    setSource('');

    const validation = validateSolarInput(input);

    if (!validation.isValid) {
      setErrors(validation.errors);
      setMessage(
        'Petición bloqueada localmente: no se enviaron datos al servidor.'
      );
      return;
    }

    setLoading(true);
    setMessage(`Consultando la API ${version}...`);

    try {
      const headers: Record<string, string> = {
        'Content-Type': 'application/json',
      };

      if (version === 'v2' && form.apiKey.trim()) {
        headers['x-api-key'] = form.apiKey.trim();
      }

      const response = await fetch(
        `http://localhost:3000/api/${version}/solar/calculate`,
        {
          method: 'POST',
          headers,
          body: JSON.stringify(input),
        }
      );

      if (!response.ok) {
        const errorBody = (await response
          .json()
          .catch(() => null)) as { message?: string } | null;

        throw new Error(
          errorBody?.message ?? `Error HTTP ${response.status}`
        );
      }

      if (version === 'v1') {
        const responseBody =
          (await response.json()) as SolarV1Response;

        const formattedResult = formatSolarResult(
          responseBody.data
        );

        setResult(formattedResult);
        setSource(
          'API v1: el servidor entregó datos crudos y el frontend los formateó usando libs/shared.'
        );
      } else {
        const responseBody: unknown = await response.json();

        if (!isSolarV2Response(responseBody)) {
          throw new Error(
            'La estructura recibida desde la API v2 no es válida.'
          );
        }

        setResult(responseBody.data);
        setSource(
          'API v2: el backend entregó datos formateados y el frontend validó su estructura usando libs/shared.'
        );
      }

      setMessage(`Cálculo completado correctamente con ${version}.`);
    } catch (error) {
      const errorMessage =
        error instanceof Error
          ? error.message
          : 'Ocurrió un error inesperado.';

      setErrors([errorMessage]);
      setMessage(
        `La petición a ${version} fue rechazada o no pudo completarse.`
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <span className={styles.badge}>
            EPN · Construcción y Evolución de Software
          </span>

          <h1>Proyección fotovoltaica</h1>

          <p>
            Calcula la energía que puede producir una instalación de
            paneles solares mediante las versiones v1 y v2 de nuestra API.
          </p>
        </div>

        <div className={styles.sun} aria-hidden="true">
          ☀
        </div>
      </section>

      <section className={styles.content}>
        <form
          className={styles.card}
          onSubmit={(event) => {
            event.preventDefault();
            void calculate('v1');
          }}
        >
          <div className={styles.sectionTitle}>
            <div>
              <span className={styles.step}>01</span>
              <h2>Datos de la instalación</h2>
            </div>

            <span className={styles.status}>Sistema conectado</span>
          </div>

          <div className={styles.grid}>
            <label>
              Área de paneles
              <div className={styles.inputGroup}>
                <input
                  type="number"
                  min="0.01"
                  max="10000"
                  step="0.01"
                  value={form.areaM2}
                  onChange={(event) =>
                    changeField('areaM2', event.target.value)
                  }
                />
                <span>m²</span>
              </div>
            </label>

            <label>
              Eficiencia del panel
              <div className={styles.inputGroup}>
                <input
                  type="number"
                  min="0.01"
                  max="100"
                  step="0.01"
                  value={form.efficiencyPercent}
                  onChange={(event) =>
                    changeField(
                      'efficiencyPercent',
                      event.target.value
                    )
                  }
                />
                <span>%</span>
              </div>
            </label>

            <label>
              Horas de sol pico
              <div className={styles.inputGroup}>
                <input
                  type="number"
                  min="0.01"
                  max="24"
                  step="0.01"
                  value={form.peakSunHours}
                  onChange={(event) =>
                    changeField(
                      'peakSunHours',
                      event.target.value
                    )
                  }
                />
                <span>h/día</span>
              </div>
            </label>
          </div>

          <div className={styles.security}>
            <label>
              API Key para la versión segura v2
              <input
                type="text"
                placeholder="Escribe la API Key o déjala vacía para probar el error 401"
                value={form.apiKey}
                onChange={(event) =>
                  changeField('apiKey', event.target.value)
                }
              />
            </label>

            <small>
              Clave de demostración: <strong>epn-solar-2026</strong>
            </small>
          </div>

          <div className={styles.actions}>
            <button
              type="submit"
              className={styles.secondaryButton}
              disabled={loading}
            >
              Calcular con API v1
            </button>

            <button
              type="button"
              className={styles.primaryButton}
              disabled={loading}
              onClick={() => void calculate('v2')}
            >
              {loading ? 'Calculando...' : 'Calcular con API v2'}
            </button>
          </div>
        </form>

        <section className={styles.card}>
          <div className={styles.sectionTitle}>
            <div>
              <span className={styles.step}>02</span>
              <h2>Resultado energético</h2>
            </div>
          </div>

          <div className={styles.message}>{message}</div>

          {errors.length > 0 && (
            <div className={styles.errorBox}>
              <strong>Revisa lo siguiente:</strong>
              <ul>
                {errors.map((error) => (
                  <li key={error}>{error}</li>
                ))}
              </ul>
            </div>
          )}

          {result && (
            <>
              <div className={styles.results}>
                <article>
                  <span>Potencia instalada</span>
                  <strong>{result.installedPower}</strong>
                </article>

                <article>
                  <span>Energía diaria</span>
                  <strong>{result.dailyEnergy}</strong>
                </article>

                <article>
                  <span>Energía mensual</span>
                  <strong>{result.monthlyEnergy}</strong>
                </article>

                <article>
                  <span>Energía anual</span>
                  <strong>{result.annualEnergy}</strong>
                </article>
              </div>

              <div className={styles.source}>{source}</div>
            </>
          )}
        </section>
      </section>
    </main>
  );
}

export default App;