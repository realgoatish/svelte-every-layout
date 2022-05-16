/** @typedef {typeof __propDef.props}  StackProps */
/** @typedef {typeof __propDef.events}  StackEvents */
/** @typedef {typeof __propDef.slots}  StackSlots */
/** Evenly-spaced child elements stacked vertically */
export default class Stack extends SvelteComponentTyped<{
    wrapperClass?: string | null | undefined;
    space?: string | null | undefined;
}, {
    [evt: string]: CustomEvent<any>;
}, {
    default: {};
}> {
}
export type StackProps = typeof __propDef.props;
export type StackEvents = typeof __propDef.events;
export type StackSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        wrapperClass?: string | null | undefined;
        space?: string | null | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export {};
