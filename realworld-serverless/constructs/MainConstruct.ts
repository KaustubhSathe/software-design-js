import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as apigateway from 'aws-cdk-lib/aws-apigateway';
import * as lambda from 'aws-cdk-lib/aws-lambda-nodejs';
import * as dynamodb from 'aws-cdk-lib/aws-dynamodb';
import * as s3 from 'aws-cdk-lib/aws-s3';
import { RemovalPolicy } from 'aws-cdk-lib';
import { join } from 'path';
import { Runtime } from 'aws-cdk-lib/aws-lambda';


export class MainConstruct extends Construct {
    constructor(scope: Construct, id: string) {
        super(scope, id);

        // This is the main table of our application, it will contain all relationships and data.
        const mainTable = new dynamodb.Table(this, 'MainTable', {
            partitionKey: {
                name: 'PartitionKey',
                type: dynamodb.AttributeType.STRING
            },
            sortKey: {
                name: 'SortKey',
                type: dynamodb.AttributeType.STRING
            },
            removalPolicy: RemovalPolicy.DESTROY,
            tableName: 'MainTable'
        });

        const getOneLambda = new lambda.NodejsFunction(this, 'getOneLambda', {
            entry: join(__dirname, 'lambdas', 'get-one.ts'),
            runtime: Runtime.NODEJS_16_X
        });

        

    }
}