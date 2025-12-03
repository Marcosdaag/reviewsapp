import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

// Clase injectable (se puede usar en cualquier lado) que extiende de PrismClient creado en shceme.prisma
// Carga la url de conexion a la db y nos avisa si pudo cargar la variable correctamente
@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
    constructor() {
        const url = process.env.DATABASE_URL;

        if (!url) {
            console.error('No se pudo cargar la variable de entorno URL ❌');
        } else {
            console.log('Se cargo correctamente la URL ✅');
        }

        // Sobreescribo el parametro url por el DATABASE_URL en mi .env
        super({
            datasources: {
                db: {
                    url: url || '',
                },
            },
        });
    }

    // Al inicial el modulo intento conectarme, es como un ngOnInit de Angular
    async onModuleInit() {
        await this.$connect();
    }
}