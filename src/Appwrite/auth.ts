import { Client, Account, ID } from "appwrite";
import config from "../Config/envConfig";
export class AuthService {
  private client: Client;
  public account: Account;
  constructor() {
    this.client = new Client();
    this.client
      .setEndpoint(config.appwriteEndpointUrl)
      .setProject(config.appwriteProjectId);
    this.account = new Account(this.client);
  }

  async login(email: string, password: string) {
    try {
      const session = await this.account.createEmailSession(email, password);
      if (session) {
        return session;
      }
    } catch (error) {
      throw error;
    }
  }
    async logout() {
        try {
        await this.account.deleteSessions();
        } catch (error) {
        throw error;
        }
    }
  async getCurrentUser() {
    try {
      const user = await this.account.get();
      if (user) {
        return user;
      }
    } catch (error) {
      throw error;
    }
    return null;
  }
  async createAccount({
    email,
    password,
    name,
  }: {
    email: string;
    password: string;
    name: string;
  }) {
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );
      if (userAccount) {
      } else {
        return this.login(email, password);
      }
    } catch (error) {
      throw error;
    }
  }
}

const authService = new AuthService();
export default authService;
