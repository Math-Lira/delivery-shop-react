import { api } from '@/lib/axios'

export interface ApproveOrderParams {
  orderId: string | null
}

export async function approveOrder({ orderId }: ApproveOrderParams) {
  await api.patch(`/orders/${orderId}/approve`)
}
