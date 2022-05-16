/**
 * If user is using a touch interface, add a 'touch' class to the body tag
 * @param {HTMLElement} node
 */
export function detectTouch(node: HTMLElement): void;
/**
 * @param {HTMLElement} node
 * @typedef {Object} IntersectionObserverOptions - Options to pass to the IntersectionObserver API
 * @property {HTMLElement} [root]
 * @property {string} [rootMargin]
 * @property {number} [threshold]
 * @param {{ once?: boolean, cooldown?: number, options?: IntersectionObserverOptions, delay?: number, update?: *} | null } [config]
 */
export function intersectionObserver(node: HTMLElement, config?: {
    once?: boolean | undefined;
    cooldown?: number | undefined;
    options?: IntersectionObserverOptions | undefined;
    delay?: number | undefined;
    update?: any;
} | null | undefined): {
    update: (update: any) => void;
    destroy: () => any;
} | undefined;
/**
 * - Options to pass to the IntersectionObserver API
 */
export type IntersectionObserverOptions = {
    root?: HTMLElement | undefined;
    rootMargin?: string | undefined;
    threshold?: number | undefined;
};
