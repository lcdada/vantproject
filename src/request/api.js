/**
 * api接口统一管理
 */
import { get, post } from './http'
import Vue from 'vue'

/*
 * testGet 接口
 * @param {Object} p 请求参数
 */
export const testGet = p => get(Vue.prototype.api + 'TestGet', p)

/*
 * testPost 接口
 * @param {Object} p 请求参数
 */
export const testPost = p => post(Vue.prototype.api + 'TestPost  ', p)

//接口调用
import {
    testGet,
    testPost,
} from './../../../../request/api';