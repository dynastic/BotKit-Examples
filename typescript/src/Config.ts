import { ConnectionOptions } from "typeorm";

export namespace Configuration {
    export const Bot = {
        token: "NTI4MzU4MDQ1MjczNTU0OTc0.DwhHdQ.FyiQDiDWKt5plmi0UswkWS4lASo",
        prefix: ">",
        superusers: ["163024083364216832"] as string[]
    };

    export const Database: ConnectionOptions = {
        type: "postgres",
        host: "localhost",
        port: 5432,
        database: "JailbreakBot",
        synchronize: true
    };
}