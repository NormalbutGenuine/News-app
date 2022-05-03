import { EntityRepository, Repository } from "typeorm";
import { UserRequestDto } from "../dtos/users.request.dto";
import { User } from "./user.entity";

@EntityRepository(User)
export class UsersRepository extends Repository<User>{

    async findUserByEmail(email) {
        let res = await User.findOne({email: email})
        return res
    }

    async findUserByIdWithoutPassword(
        userEmail: string,
      ): Promise<UserRequestDto | null> {
        const user = await User.findOne({email: userEmail})
        return user;
      }
}