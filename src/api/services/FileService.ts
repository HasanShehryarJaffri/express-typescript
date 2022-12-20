import * as localAppConfig from './assets/appConfig.json';

interface IFileService {
  readLocalConfigFile(): any
}
    
class FileService implements IFileService {
  public readLocalConfigFile(): any {
    try {
      return localAppConfig;
    } catch {
      throw new Error("Unable to read local file");
    }
  }
}
    
export default new FileService();