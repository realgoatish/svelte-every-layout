/** @typedef {typeof __propDef.props}  SidebarProps */
/** @typedef {typeof __propDef.events}  SidebarEvents */
/** @typedef {typeof __propDef.slots}  SidebarSlots */
/** A sidebar & main content area, which stack on smaller screens */
export default class Sidebar extends SvelteComponentTyped<{
    wrapperClass?: string | null | undefined;
    space?: string | null | undefined;
    side?: string | undefined;
    sideWidth?: string | null | undefined;
    contentMin?: string | undefined;
}, {
    [evt: string]: CustomEvent<any>;
}, {
    'first-child': {};
    'last-child': {};
}> {
}
export type SidebarProps = typeof __propDef.props;
export type SidebarEvents = typeof __propDef.events;
export type SidebarSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        wrapperClass?: string | null | undefined;
        space?: string | null | undefined;
        side?: string | undefined;
        sideWidth?: string | null | undefined;
        contentMin?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        'first-child': {};
        'last-child': {};
    };
};
export {};
