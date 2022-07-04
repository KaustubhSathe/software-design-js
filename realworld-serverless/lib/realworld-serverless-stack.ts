import { Duration, Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { RealWorldConstruct } from '../constructs/RealWorldConstruct';

export class RealworldServerlessStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);
    
    new RealWorldConstruct(scope, id);
  }
}