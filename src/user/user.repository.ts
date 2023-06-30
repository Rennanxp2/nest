import { Injectable } from "@nestjs/common";

@Injectable()
export class UserRepository {

    private users = [];

    async saveUser(user) {
        this.users.push(user);
    }
    async fetch() {
        return this.users;
    }
}