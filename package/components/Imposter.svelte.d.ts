/** @typedef {typeof __propDef.props}  ImposterProps */
/** @typedef {typeof __propDef.events}  ImposterEvents */
/** @typedef {typeof __propDef.slots}  ImposterSlots */
/** Needs to be wrapped in a `position: relative` parent */
export default class Imposter extends SvelteComponentTyped<{
    imposterWrapperDiv: HTMLElement;
    wrapperClass?: string | null | undefined;
    contain?: boolean | undefined;
    fixed?: boolean | undefined;
    margin?: string | undefined;
}, {
    [evt: string]: CustomEvent<any>;
}, {
    default: {};
}> {
}
export type ImposterProps = typeof __propDef.props;
export type ImposterEvents = typeof __propDef.events;
export type ImposterSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        imposterWrapperDiv: HTMLElement;
        wrapperClass?: string | null | undefined;
        contain?: boolean | undefined;
        fixed?: boolean | undefined;
        margin?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export {};
