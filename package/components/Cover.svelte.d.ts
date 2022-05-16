/** @typedef {typeof __propDef.props}  CoverProps */
/** @typedef {typeof __propDef.events}  CoverEvents */
/** @typedef {typeof __propDef.slots}  CoverSlots */
/**
 * Cover can have 3 direct children:
 * 1. "header" i.e. content pinned to the top of Cover
 * 2. vertically-centered content
 * 3. "footer" i.e. content pinned to the bottom of Cover
 */
export default class Cover extends SvelteComponentTyped<{
    wrapperClass?: string | null | undefined;
    space?: string | null | undefined;
    minHeight?: string | undefined;
    noPad?: boolean | undefined;
}, {
    [evt: string]: CustomEvent<any>;
}, {
    header: {};
    featured: {};
    footer: {};
}> {
}
export type CoverProps = typeof __propDef.props;
export type CoverEvents = typeof __propDef.events;
export type CoverSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        wrapperClass?: string | null | undefined;
        space?: string | null | undefined;
        minHeight?: string | undefined;
        noPad?: boolean | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        header: {};
        featured: {};
        footer: {};
    };
};
export {};
