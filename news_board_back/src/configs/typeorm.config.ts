import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { NewsCollection } from "src/article/article.entity";

export const typeORMConfig : TypeOrmModuleOptions = {
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "tiger",
    database: "NewsAppDB",
    entities: [NewsCollection],
    synchronize: true
}