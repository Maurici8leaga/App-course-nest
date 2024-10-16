import { NestFactory } from '@nestjs/core';
import { ValidationPipe, VersioningType } from '@nestjs/common';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

// Bootstrap es llamado a las funciones de arranque de application
async function bootstrap() {
  const app = await NestFactory.create(AppModule); // AppModule es el modulo root
  // NestFactory permite crear una instancia de application, el cual recibe como parametro el modulo root

  // Activar el versionado de rutas en la API
  app.enableVersioning({
    // aqui se Indica que las versiones se adecuen a las URI de la API
    type: VersioningType.URI,
    defaultVersion: '1', // por default viene 1.0 .... a las rutas se le va añadir este prefijo -> /v1/courses
  });

  // Configurar la instancia de Swagger: DocumentBuilder (paso para config swagger)
  const config = new DocumentBuilder()
    .setTitle('Course Nest.js Advanced') // para agregar titulo sobre de que es la documentacion
    .setDescription('API creada para el curso de Nest.js') // para agregar una descrpcion de la documentacion
    .setVersion('1.0'); // opcional para definir la version de la documentacion, pero si se define este agregara a todos los
  // servicios un 'v1' en la ruta

  const documentBuild = config.build(); // materializa la instancia con las configs bases
  const document = SwaggerModule.createDocument(app, documentBuild, {
    // indexacion de factoria
    operationIdFactory: (controllerKey: string, methodKey: string) => methodKey,
    // app es de nest
    // documentBuild es las config bases que necesita de swagger
    // {} config opcionales
  });

  // Para configurar como será el ingreso a la docs de swagger
  SwaggerModule.setup('api', app, document, {
    // el 'api' se le agregara a la ruta de la URL de la app "localhost:3000/api"
    // 'app" es nest como tal, "document" viene siendo la ui de swagger
    swaggerOptions: {
      tagsSorter: 'alpha', // para que sea true se debe colocar 'alpha'
      operationsSorter: 'alpha', // para que ordene los titulos y los metodos
    },
  });

  // Esto es obligatorio para podre crear las validaciones de los class , info https://docs.nestjs.com/techniques/validation
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // permite validar todos los dtos que tengan validadores que sean reconocidos
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );
  // <<-----
  await app.listen(3000);
}
bootstrap();
