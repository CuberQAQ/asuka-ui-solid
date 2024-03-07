import { AsukaNode } from '@cuberqaq/asuka-ui';
export declare const render: (code: () => AsukaNode, node: AsukaNode) => () => void, effect: <T>(fn: (prev?: T | undefined) => T, init?: T | undefined) => void, memo: <T>(fn: () => T, equal: boolean) => () => T, createComponent: <T>(Comp: (props: T) => AsukaNode, props: T) => AsukaNode, createElement: (tag: string) => AsukaNode, createTextNode: (value: string) => AsukaNode, insertNode: (parent: AsukaNode, node: AsukaNode, anchor?: AsukaNode | undefined) => void, insert: <T>(parent: any, accessor: T | (() => T), marker?: any) => AsukaNode, spread: <T>(node: any, accessor: T | (() => T), skipChildren?: Boolean | undefined) => void, setProp: <T>(node: AsukaNode, name: string, value: T, prev?: T | undefined) => T, mergeProps: (...sources: unknown[]) => unknown;
export * from "@cuberqaq/asuka-ui";
export * from "solid-js";
//# sourceMappingURL=index.d.ts.map