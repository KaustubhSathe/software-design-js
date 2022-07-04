import { Duration, Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { MainConstruct } from '../constructs/MainConstruct';

export class RealworldServerlessStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);
    
    new MainConstruct(scope, id);
  }
}