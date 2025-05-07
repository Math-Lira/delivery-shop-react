import { api } from '@/lib/axios'

export interface DispatchOrderParams {
  orderId: string | null
}

export async function dispatchOrder({ orderId }: DispatchOrderParams) {
  await api.patch(`/orders/${orderId}/dispatch`)
}
