import { EntityRepository, Repository } from "typeorm";
import { User } from "../entities/User";
 
@EntityRepository(User)
class UserRepositories extends<User> {}


export { UserRepositories };