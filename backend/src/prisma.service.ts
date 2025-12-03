import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
    constructor() {
        const url = process.env.DATABASE_URL;

        if (!url) {
            console.error('No se pudo cargar la variable de entorno URL');
        } else {
            console.log('Se cargo correctamente la URL');
        }

        super({
            datasources: {
                db: {
                    url: url || '',
                },
            },
        });
    }

    async onModuleInit() {
        await this.$connect();
    }
}