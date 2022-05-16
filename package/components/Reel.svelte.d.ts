/** @typedef {typeof __propDef.props}  ReelProps */
/** @typedef {typeof __propDef.events}  ReelEvents */
/** @typedef {typeof __propDef.slots}  ReelSlots */
/** A section of horizontally-scrollable content */
export default class Reel extends SvelteComponentTyped<{
    wrapperClass?: string | null | undefined;
    space?: string | null | undefined;
    visualInstructions?: boolean | undefined;
    itemWidth?: string | undefined;
    height?: string | undefined;
    thumbColor?: string | null | undefined;
    trackColor?: string | null | undefined;
}, {
    [evt: string]: CustomEvent<any>;
}, {
    default: {};
}> {
}
export type ReelProps = typeof __propDef.props;
export type ReelEvents = typeof __propDef.events;
export type ReelSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        wrapperClass?: string | null | undefined;
        space?: string | null | undefined;
        visualInstructions?: boolean | undefined;
        itemWidth?: string | undefined;
        height?: string | undefined;
        thumbColor?: string | null | undefined;
        trackColor?: string | null | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export {};
