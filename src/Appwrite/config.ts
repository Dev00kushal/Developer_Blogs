import config from "../Config/envConfig";
import { Client, Databases, ID, Storage, Query } from "appwrite";


export class DatabaseService {
  private client: Client;
  private databases: Databases;
  private bucket: Storage;

  constructor() {
    this.client = new Client();
    this.databases = new Databases(this.client);
    this.bucket = new Storage(this.client);

    this.client
      .setEndpoint(config.appwriteEndpointUrl)
      .setProject(config.appwriteProjectId);
  }

  getFilePreview(fileId: string) {
    return this.bucket.getFilePreview(config.appwriteBucketId, fileId);
  }
  async delteFile(fileId: string) {
    try {
      return await this.bucket.deleteFile(config.appwriteBucketId, fileId);
    } catch (error) {
      console.log(" Appwrite service :: deleteFile :: error", error);
      return false;
    }
  }

  async uploadFile(file: File) {
    try {
      return await this.bucket.createFile(
        config.appwriteBucketId,
        ID.unique(),
        file,
        ["*"],
        (progress) => {
          console.log("progress", progress);
        }
      );
    } catch (error) {
      console.log(" Appwrite service :: uploadFile :: error", error);
      return false;
    }
  }

  async getPosts(queries = [Query.equal("status", "active")]) {
    try {
      return await this.databases.listDocuments(
        config.appwriteDatabaseId,
        config.appwriteCollectionId,
        queries
      );
    } catch (error) {
      console.log(" Appwrite service :: getposts :: error", error);
    }
  }

  async updatePost(
    slug: string,
    {
      title,
      content,
      status,
      image,
    }: {
      title: string;
      content: string;
      image: File;
      status: string;
      slug: string;
    }
  ) {
    try {
      return await this.databases.updateDocument(
        config.appwriteDatabaseId,
        config.appwriteCollectionId,
        slug,
        { title, content, status, image }
      );
    } catch (error) {
      console.log(" Appwrite service :: updatepost :: error", error);
    }
  }

  async deletePost(slug: string) {
    try {
      return await this.databases.deleteDocument(
        config.appwriteDatabaseId,
        config.appwriteCollectionId,
        slug
      );
    } catch (error) {
      console.log(" Appwrite service :: deletepost :: error", error);
      return false;
    }
  }

  async getPost(slug: string) {
    try {
      return await this.databases.getDocument(
        config.appwriteDatabaseId,
        config.appwriteCollectionId,
        slug
      );
    } catch (error) {
      console.log(" Appwrite service :: getpost :: error", error);
    }
  }
  async createPost({
    title,
    content,
    status,
    userId,
    image,
    slug,
  }: {
    title: string;
    content: string;
    image: File;
    status: string;
    userId: ID;
    slug: string;
  }) {
    try {
      return await this.databases.createDocument(
        config.appwriteCollectionId,
        config.appwriteDatabaseId,
        slug,
        {
          title,
          content,
          status,
          userId,
          image,
        }
      );
    } catch (err) {
      console.log(" Appwrite service :: createpost :: error", err);
    }
  }
}
