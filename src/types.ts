import { Action } from 'redux';

/**
 * There are 3 ways of usage.
 * Please see code snippet below:
 *
 * ```
 * // reducer action
 * const EXAMPLE_ACTION = 'EXAMPLE_ACTION';
 *
 * // types
 * type PureActionType = StandardAction<typeof EXAMPLE_ACTION>
 * type BaseActionType = StandardAction<typeof EXAMPLE_ACTION, string>
 * type AdvancedActionType = StandardAction<typeof EXAMPLE_ACTION, string, number>
 *
 * // actions
 * const pureAction: StandardAction<typeof EXAMPLE_ACTION> = {
 *     type: EXAMPLE_ACTION,
 * };
 *
 * const baseAction: StandardAction<typeof EXAMPLE_ACTION, string> = {
 *     type: EXAMPLE_ACTION,
 *     payload: 'example',
 * };
 *
 * const advancedAction: StandardAction<typeof EXAMPLE_ACTION, string, number> = {
 *     type: EXAMPLE_ACTION,
 *     payload: 'example',
 *     meta: 6,
 * };
 * ```
 */
export type StandardAction<Type, Payload = null, Meta = null> = Action<Type> &
(Payload extends null ? {} : {
    payload: Payload;
}) & (Meta extends null ? {} : {
    meta: Meta;
});