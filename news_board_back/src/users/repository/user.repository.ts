import { EntityRepository, Repository } from "typeorm";
import { User } from "./user.entity";

@EntityRepository(User)
export class UsersRepository extends Repository<User>{
    async findUserByEmail(email) {
        let res = await this.findOne({email: email})
        return res
    }
}