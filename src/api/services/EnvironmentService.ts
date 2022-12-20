
import * as dotenv from 'dotenv';
  
interface IEnvironmentService {
  getEnvironmentVariable(name: string): string;
}
  
class EnvironmentService implements IEnvironmentService {
  constructor() {
    dotenv.config();
  }
  
  public getEnvironmentVariable(name: string) : string {
    try {
      return process.env[name] ?? "";
    } catch (e) {
      throw e;
    }
  }
}
  
export default new EnvironmentService();