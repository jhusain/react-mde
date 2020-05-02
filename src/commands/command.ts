import * as React from "react";
import { TextApi, TextState } from "..";
import { HandleKeyCommand } from "../types";

export type GetIcon = (iconName: string) => React.ReactNode;

export interface ExecuteOptions {
  initialState: TextState;
  textApi: TextApi;
}

export interface Command {
  name: string;
  buttonComponentClass?: React.ComponentClass | string;
  icon?: (getIconFromProvider: GetIcon) => React.ReactNode;
  buttonProps?: any;
  execute?: (options: ExecuteOptions) => void | Promise<void>;
  /**
   * On every key-down, "handleKeyCommand", if defined, will be executed for every command.
   * The first "HandleKeyCommand" that returns true will cause the command to be executed.
   * "HandleKeyCommand" for subsequent commands will not be executed after the first one returns true.
   */
  handleKeyCommand?: HandleKeyCommand;
}

export type ToolbarCommands = string[][];
export type CommandMap = Record<string, Command>;