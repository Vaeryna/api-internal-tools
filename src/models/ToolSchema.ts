import {Type} from '@sinclair/typebox'

export const ToolSchema = Type.Object({
    id: Type.Number(),
    name: Type.String(),
    description: Type.String(),
    vendor: Type.String(),
    website_url: Type.String(),
    category_id: Type.Number(),
    monthly_cost: Type.Number(),
    active_users_count: Type.Number(),
    owner_department: Type.Number(),
    status: Type.Union([
        Type.Literal('active'),
        Type.Literal('deprecated'),
        Type.Literal('trial'),
    ]),
    created_at: Type.String(),
    updated_at: Type.String(),
})

