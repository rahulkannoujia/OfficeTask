export interface Environment {
    dbUrl: string;
    jwtSecret?: string;
    jwtExpiresIn?: string;
    awsAccessKey?: string;
    awsSecretKey?: string;
    s3Bucket?: string;
    s3AssetUrl?: string;
    awsRegion?: string;
    slackToken?: string;
    sendGridApiKey?: string;
}
export declare function env(): Environment;
