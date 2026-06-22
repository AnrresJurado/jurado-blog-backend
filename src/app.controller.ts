import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiTags, ApiOperation } from '@nestjs/swagger'; // <-- Importa esto

@ApiTags('Principal') // <-- Ponle una etiqueta a tu controlador base
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @ApiOperation({ summary: 'Endpoint de bienvenida por defecto' }) // <-- Describe la ruta
  getHello(): string {
    return this.appService.getHello();
  }
}