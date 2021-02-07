import {Component, TemplateRef} from '@angular/core';
import {ComponentType} from '@angular/cdk/overlay';

export interface OptionModel {
  label: string;
  description: string;
  icon: string;
  type: string;
  compRef: ComponentType<any>;
}
