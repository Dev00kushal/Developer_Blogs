interface Config {
    appwriteEndpointUrl: string;
    appwriteProjectId: string;
    appwriteCollectionId: string;
    appwriteBucketId: string;
    appwriteDatabaseId: string;
}

const config: Config = {
    appwriteEndpointUrl: import.meta.env.VITE_APP_APPWRITE_ENDPOINT_URL as string,
    appwriteProjectId: import.meta.env.VITE_APP_APPWRITE_PROJECT_ID as string,
    appwriteCollectionId: import.meta.env.VITE_APP_APPWRITE_COLLECTION_ID as string,
    appwriteBucketId: import.meta.env.VITE_APP_APPWRITE_BUCKET_ID as string,
    appwriteDatabaseId: import.meta.env.VITE_APP_APPWRITE_DATABASE_ID as string,
};

export default config;
