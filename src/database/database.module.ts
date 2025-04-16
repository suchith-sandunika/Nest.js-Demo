// import { Module } from '@nestjs/common';
// import { MongooseModule } from '@nestjs/mongoose';
// import { ConfigModule, ConfigService } from '@nestjs/config';
//
// @Module({
//   imports: [
//     ConfigModule.forRoot({ isGlobal: true }), // loads .env
//     MongooseModule.forRootAsync({
//       imports: [ConfigModule],
//       useFactory: async (configService: ConfigService) => ({
//         uri: configService.get<string>('MONGODB_URL'),
//       }),
//       inject: [ConfigService],
//     }),
//   ],
//   exports: [MongooseModule],
// })
// export class DatabaseModule {}