import {request} from "./request";

export function getQuestions(type, page) {
  return request({
    // url: '/appHome/data',
    params: {
      type,
      page
    }
  })
}

export function getQuesItem(type) {
  return request({
    params: {
      type
    }
  })
}