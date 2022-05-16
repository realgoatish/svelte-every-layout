/** @typedef {typeof __propDef.props}  IconProps */
/** @typedef {typeof __propDef.events}  IconEvents */
/** @typedef {typeof __propDef.slots}  IconSlots */
/** SVG icons with a text label or an aria-label */
export default class Icon extends SvelteComponentTyped<{
    iconId: string;
    wrapperClass?: string | null | undefined;
    space?: boolean | undefined;
    ariaLabel?: string | null | undefined;
    ariaHidden?: boolean | undefined;
}, {
    [evt: string]: CustomEvent<any>;
}, {
    default: {};
}> {
}
export type IconProps = typeof __propDef.props;
export type IconEvents = typeof __propDef.events;
export type IconSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        iconId: string;
        wrapperClass?: string | null | undefined;
        space?: boolean | undefined;
        ariaLabel?: string | null | undefined;
        ariaHidden?: boolean | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export {};
