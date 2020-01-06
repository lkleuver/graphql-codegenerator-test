
      export interface IntrospectionResultData {
        __schema: {
          types: {
            kind: string;
            name: string;
            possibleTypes: {
              name: string;
            }[];
          }[];
        };
      }
      const result: IntrospectionResultData = {
  "__schema": {
    "types": [
      {
        "kind": "INTERFACE",
        "name": "Service",
        "possibleTypes": [
          {
            "name": "AService"
          },
          {
            "name": "BService"
          }
        ]
      }
    ]
  }
};
      export default result;
    