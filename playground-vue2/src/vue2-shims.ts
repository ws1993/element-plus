import type { VNode } from 'vue'

export const warn = (msg: string) => console.warn(msg)
export const Comment = undefined
export const Fragment = undefined
export const Text = undefined
export const createBlock = undefined
export const createCommentVNode = undefined
export const openBlock = undefined
export const Teleport = undefined
export const createElementVNode = undefined
export const createElementBlock = undefined

export const isVNode = (val: unknown): val is VNode => true

export * from 'vue'
