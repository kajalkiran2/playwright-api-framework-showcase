import { TestConfig } from '../config/testConfig';

export enum LogLevel {
  INFO = 'INFO',
  WARN = 'WARN',
  ERROR = 'ERROR',
  DEBUG = 'DEBUG'
}

export class Logger {

  static log(level: LogLevel, message: string) {
    if (!TestConfig.enableLogging) return;

    const timestamp = new Date().toISOString();

    console.log(`[${timestamp}] [${level}] ${message}`);
  }

  static info(message: string) {
    this.log(LogLevel.INFO, message);
  }

  static warn(message: string) {
    this.log(LogLevel.WARN, message);
  }

  static error(message: string) {
    this.log(LogLevel.ERROR, message);
  }

  static debug(message: string) {
    this.log(LogLevel.DEBUG, message);
  }
}