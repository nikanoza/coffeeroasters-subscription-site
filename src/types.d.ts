import React, { FunctionComponent, ReactNode } from "react";

export type Coffee = {
  image: string;
  title: string;
  description: string;
};

export type CardType = {
  image: () => JSX.Element;
  title: string;
  description: string;
};

export type StepType = {
  step: string;
  title: string;
  description: string;
};
