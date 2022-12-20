import EnvironmentService from "./EnvironmentService"
  
interface IConfigService {
  fetchAppConfig() : any
}
  
class ConfigService implements IConfigService {
  private appConfigPort = "2772";

  constructor() {
    const port = EnvironmentService.getEnvironmentVariable('AWS_APPCONFIG_EXTENSION_HTTP_PORT');
    
    if (port) {
      this.appConfigPort = port;
    }
  }

  public async fetchAppConfig() : Promise<any> {  
    try {
      const url = `${EnvironmentService.getEnvironmentVariable('BASE_URL')}:${this.appConfigPort}`
              + `/applications/${EnvironmentService.getEnvironmentVariable('APPCONFIG_APPLICATION')}`
              + `/environments/${EnvironmentService.getEnvironmentVariable('APPCONFIG_ENVIRONMENT')}`
              + `/configurations/${EnvironmentService.getEnvironmentVariable('APPCONFIG_CONFIGURATION')}`;
      
      const response = await fetch(url);
      const json = await response.json();
      return json;
    } catch {
      console.log("CONFIG READ ERROR");
    } finally {
      return null;
    }
  }
}
  
export default new ConfigService();