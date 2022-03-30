import { v4 } from "uuid";

export class IdGenerator {
    generated(): string {
        return v4()
    }
}