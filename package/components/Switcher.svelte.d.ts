/** @typedef {typeof __propDef.props}  SwitcherProps */
/** @typedef {typeof __propDef.events}  SwitcherEvents */
/** @typedef {typeof __propDef.slots}  SwitcherSlots */
/** Switch between horizontal & vertical layout at a given, container-based breakpoint */
export default class Switcher extends SvelteComponentTyped<{
    wrapperElement: string;
    wrapperClass?: string | null | undefined;
    space?: string | null | undefined;
    threshold?: string | undefined;
    limit?: number | undefined;
}, {
    [evt: string]: CustomEvent<any>;
}, {
    default: {};
}> {
}
export type SwitcherProps = typeof __propDef.props;
export type SwitcherEvents = typeof __propDef.events;
export type SwitcherSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        wrapperElement: string;
        wrapperClass?: string | null | undefined;
        space?: string | null | undefined;
        threshold?: string | undefined;
        limit?: number | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export {};
