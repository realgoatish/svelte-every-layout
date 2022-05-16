/** @typedef {typeof __propDef.props}  BoxProps */
/** @typedef {typeof __propDef.events}  BoxEvents */
/** @typedef {typeof __propDef.slots}  BoxSlots */
/** Create basic, two-tone boxes */
export default class Box extends SvelteComponentTyped<{
    wrapperClass?: string | null | undefined;
    colorLight?: string | null | undefined;
    colorDark?: string | null | undefined;
    padding?: string | null | undefined;
    borderWidth?: string | number | null | undefined;
    invert?: boolean | undefined;
}, {
    [evt: string]: CustomEvent<any>;
}, {
    default: {};
}> {
}
export type BoxProps = typeof __propDef.props;
export type BoxEvents = typeof __propDef.events;
export type BoxSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        wrapperClass?: string | null | undefined;
        colorLight?: string | null | undefined;
        colorDark?: string | null | undefined;
        padding?: string | null | undefined;
        borderWidth?: string | number | null | undefined;
        invert?: boolean | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export {};
