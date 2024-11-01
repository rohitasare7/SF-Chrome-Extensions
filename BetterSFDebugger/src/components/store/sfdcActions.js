//Fix apiVersion
import { apiVersion, sfConn, formatDate } from "@/assets/helper";
const apiVersionStr = apiVersion;
const actionList = [
  /*
  * Generic APIs
  */
  {
    name: 'UserInfo',
    uri: 'oauth2/userinfo',
    method: 'GET',
    contentType: 'application/json',
    responeType: 'json',
  },
  {
    name: 'User_QueryByName',
    uri: `data/v${apiVersionStr}/query/?q=SELECT%20Id,%20Name%20FROM%20User%20WHERE%20IsActive%20=%20true%20AND%20Name%20LIKE%20'%25<RecordId>%25'`,
    method: 'GET',
    contentType: 'application/json',
    responeType: 'json',
  },
  {
    name: 'OrgLimits',
    uri: `data/v${apiVersionStr}/limits`,
    method: 'GET',
    contentType: 'application/json',
    responeType: 'json',
  },
  {
    name: 'apiVersionStrs',
    uri: 'data',
    method: 'GET',
    contentType: 'application/json',
    responeType: 'json',
  },
  {
    name: 'AvailableResources',
    uri: `data/v${apiVersionStr}`,
    method: 'GET',
    contentType: 'application/json',
    responeType: 'json',
  },
  /*
  * Debug Utility : Apex Logs
  */
  {
    name: 'Tooling_Query_ApexLog',
    uri: `data/v${apiVersionStr}/tooling/query/?q=SELECT+Id,LogUser.Name,LogLength,LastModifiedDate,Request,Operation,Status, DurationMilliseconds,SystemModstamp,StartTime,Location+FROM+apexlog+order+by+LastModifiedDate+desc`,
    method: 'GET',
    contentType: 'application/json',
    responeType: 'json',
  },
  {
    name: 'Tooling_Query_ApexLogBody',
    uri: `data/v${apiVersionStr}/tooling/sobjects/ApexLog/<RecordId>/Body`,
    method: 'GET',
    contentType: 'application/json',
    responeType: 'text',
  },
  {
    name: 'Tooling_Delete_ApexLog',
    uri: `data/v${apiVersionStr}/tooling/sobjects/ApexLog/<RecordId>`,
    method: 'DELETE',
    contentType: 'application/json',
    responeType: 'text',
  },
  /*
  * Debug Utility : Trace Flags
  */
  // Fetch Finest Debug Log
  {
    name: 'Tooling_Query_DebugLevel',
    uri: `data/v${apiVersionStr}/tooling/query?q=SELECT+Id,DeveloperName,ApexCode,ApexProfiling,Database+FROM+DebugLevel`,
    method: 'GET',
    contentType: 'application/json',
    responeType: 'json',
  },
  {
    name: 'Tooling_Create_FinestDebugLevel',
    uri: `data/v${apiVersionStr}/tooling/sobjects/DebugLevel`,
    method: 'POST',
    contentType: 'application/json',
    responeType: 'json',
  },
  //Handle Trace logs
  {
    name: 'Tooling_Query_TraceFlag',
    uri: `data/v${apiVersionStr}/tooling/query?q=SELECT+Id,TracedEntity.Name,StartDate,ExpirationDate,DebugLevel.DeveloperName+FROM+TraceFlag+Order+By+CreatedDate+desc`,
    method: 'GET',
    contentType: 'application/json',
    responeType: 'json',
  },
  {
    name: 'Tooling_Create_CreateTraceFlag',
    uri: `data/v${apiVersionStr}/tooling/sobjects/TraceFlag`,
    method: 'POST',
    contentType: 'application/json',
    responeType: 'json',
  },
  {
    name: 'Tooling_Patch_RenewTraceFlag',
    uri: `data/v${apiVersionStr}/tooling/sobjects/TraceFlag/<RecordId>`,
    method: 'PATCH',
    contentType: 'application/json',
    responeType: 'json',
  },
  {
    name: 'Tooling_Delete_TraceFlag',
    uri: `data/v${apiVersionStr}/tooling/sobjects/TraceFlag/<RecordId>`,
    method: 'DELETE',
    contentType: 'application/json',
    responeType: 'json',
  },
  {
    name: 'Tooling_DeleteAllTraceFlags',
    uri: `data/v${apiVersionStr}/tooling/query?q=SELECT+Id,TracedEntity.Name,StartDate,ExpirationDate,DebugLevel.DeveloperName+FROM+TraceFlag+Order+By+CreatedDate+desc`,
    method: 'GET',
    contentType: 'application/json',
    responeType: 'json',
  }
];

// function to get the action data by name
const getActionByName = (name) => {
  const action = actionList.find((action) => action.name == name);
  return action || null;
}

// Export the fucntions
export { getActionByName };