import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';

@Injectable()
export class ApiKeyGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest<{
      headers: Record<string, string | string[] | undefined>;
    }>();

    const receivedApiKey = request.headers['x-api-key'];
    const expectedApiKey =
      process.env['SOLAR_API_KEY'] ?? 'epn-solar-2026';

    if (receivedApiKey !== expectedApiKey) {
      throw new UnauthorizedException(
        'API Key inválida o ausente. Utilice el encabezado x-api-key.'
      );
    }

    return true;
  }
}