#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { RealworldServerlessStack } from '../lib/realworld-serverless-stack';

const app = new cdk.App();
new RealworldServerlessStack(app, 'RealworldServerlessStack');
