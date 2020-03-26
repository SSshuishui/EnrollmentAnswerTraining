import {request} from "./request";

// 获取所有题目的信息
export function getALLQuestions(type, page) {
  return request({
    url: '/question/data',
    params: {
      type,
      page
    }
  })
}

// 获取单个题目的信息
export function getQuestion(id) {
  return request({
    url: '/question/data',
    params: {
      id
    }
  })

}

// 导出题目类
export class Question {
  constructor(question) {
    this.id = question.id
    this.type = question.type
    this.scope = question.scope
    this.title = question.title
    this.answerA = question.answerA
    this.answerB = question.answerB
    this.answerC = question.answerC
    this.answerD = question.answerD
    this.answer = question.answer
    this.number = question.number
    this.numberA = question.numberA
    this.numberB = question.numberB
    this.numberC = question.numberC
    this.numberD = question.numberD

  }
}
