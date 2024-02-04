import type { supervisor } from "./supervisor";

export interface PlanPanel {
    plan_id?: number;
    expired_at: string;
    aim: string;
    supervisor: supervisor;
}