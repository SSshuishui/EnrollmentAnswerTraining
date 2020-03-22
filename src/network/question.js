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

export class Question {
  constructor(quesStem, quesItems) {
    this.quesStem = quesStem
  }
}

// 异步删除题目
export async function deleteQues(id) {

}