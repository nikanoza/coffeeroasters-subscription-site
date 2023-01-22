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

export type Subscribe = {
  preferences: "capsule" | "filter" | "espresso" | null;
  type: "single origin" | "decaf" | "blended" | null;
  quantity: "250g" | "500g" | "1000g" | null;
  grind: "wholebean" | "filter" | "cafetiére" | null;
  deliveries: "every week" | "every 2 weeks" | "every month" | null;
};

export type Key = keyof Subscribe;
