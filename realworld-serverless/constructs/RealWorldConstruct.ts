import { Construct } from "constructs";
import * as dynamodb from "aws-cdk-lib/aws-dynamodb";
import { RemovalPolicy } from "aws-cdk-lib";
import * as lambda from "aws-cdk-lib/aws-lambda-nodejs";
import * as apigateway from "aws-cdk-lib/aws-apigateway";

export class RealWorldConstruct extends Construct {
  constructor(scope: Construct, id: string) {
    super(scope, id);

    // This is the main table of our application, it will contain all relationships and data.
    const realWorldTable = new dynamodb.Table(this, "RealWorldTable", {
      partitionKey: {
        name: "PK",
        type: dynamodb.AttributeType.STRING,
      },
      sortKey: {
        name: "SK",
        type: dynamodb.AttributeType.STRING,
      },
      removalPolicy: RemovalPolicy.DESTROY,
      tableName: "RealWorldTable"
    });

    // all the lambdas are defined here
    const registrationLambda = new lambda.NodejsFunction(this, 'RegistrationLambda', {
      entry: '../lambdas/users/registration.ts',
      bundling: {
        externalModules: [
          'aws-sdk'
        ],
        minify: true,
        environment: {
          
        },

      }
    });

    // API Gateway and Lambda integration is defined here
    const registrationAPI = new apigateway.RestApi(this, 'registrationAPI', {
      restApiName: "Registration API"
    });
    registrationAPI.root.addResource('api/users/registration')
    .addMethod('POST');

  }
}
