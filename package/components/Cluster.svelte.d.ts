/** @typedef {typeof __propDef.props}  ClusterProps */
/** @typedef {typeof __propDef.events}  ClusterEvents */
/** @typedef {typeof __propDef.slots}  ClusterSlots */
/** A cluster of elements with equal spacing. Good for navigation links, social media icons, etc. */
export default class Cluster extends SvelteComponentTyped<{
    wrapperElement: string;
    wrapperClass?: string | null | undefined;
    justify?: string | undefined;
    align?: string | undefined;
    space?: string | null | undefined;
}, {
    [evt: string]: CustomEvent<any>;
}, {
    default: {};
}> {
}
export type ClusterProps = typeof __propDef.props;
export type ClusterEvents = typeof __propDef.events;
export type ClusterSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        wrapperElement: string;
        wrapperClass?: string | null | undefined;
        justify?: string | undefined;
        align?: string | undefined;
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
