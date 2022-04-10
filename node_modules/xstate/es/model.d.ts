import type { AssignAction, Assigner, PropertyAssigner, ExtractEvent, EventObject } from './types';
export interface ContextModel<TContext, TEvent extends EventObject> {
    initialContext: TContext;
    assign: <TEventType extends TEvent['type'] = TEvent['type']>(assigner: Assigner<TContext, ExtractEvent<TEvent, TEventType>> | PropertyAssigner<TContext, ExtractEvent<TEvent, TEventType>>, eventType?: TEventType) => AssignAction<TContext, ExtractEvent<TEvent, TEventType>>;
    reset: () => AssignAction<TContext, any>;
}
export declare function createModel<TContext, TEvent extends EventObject>(initialContext: TContext): ContextModel<TContext, TEvent>;
//# sourceMappingURL=model.d.ts.map