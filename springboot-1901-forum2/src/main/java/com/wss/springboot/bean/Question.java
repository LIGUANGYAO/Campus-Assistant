package com.wss.springboot.bean;

import java.util.List;

public class Question {

    private Integer id;
    private String author;
    private String topic;
    private String content;
    private String answer;
    private List<Answer> answers;
    private String factor1;   //即openid
    private String factor2;   //即avatarUrl
    private String factor3;   //即course
    private String factor4;   //即nickName
    private String factor5;

    public Question(){

    }

    public Question(Integer id, String author, String topic, String content, String factor1, String answer,
                    List<Answer> answers,String factor2,String factor3,String factor4,String factor5) {
        this.id = id;
        this.author = author;
        this.topic = topic;
        this.content = content;
        this.factor1 = factor1;
        this.answer = answer;
        this.answers = answers;
        this.factor2 = factor2;
        this.factor3 = factor3;
        this.factor4 = factor4;
        this.factor5 = factor5;
    }

    @Override
    public String toString() {
        return "Question{" +
                "id=" + id +
                ", author='" + author + '\'' +
                ", topic='" + topic + '\'' +
                ", content='" + content + '\'' +
                ",factor1='" + factor1 + '\'' +
                ", answer='" + answer + '\'' +
                ", answers='" + answers + '\'' +
                ", factor2='" + factor2 + '\'' +
                ", factor3='" + factor3 + '\'' +
                ", factor4='" + factor4 + '\'' +
                ", factor5='" + factor5 + '\'' +
                '}';
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public String getTopic() {
        return topic;
    }

    public void setTopic(String topic) {
        this.topic = topic;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public String getFactor1() {
        return factor1;
    }

    public void setFactor1(String factor1) {
        this.factor1 = factor1;
    }

    public String getAnswer() {
        return answer;
    }

    public void setAnswer(String answer) {
        this.answer = answer;
    }

//    public List<Answer> getAnswers() {
//        Map<String,Object> listAnswer = new HashMap<String,Object>();
//        List<Answer> answer = answerService.getAnswersByQuestionId(id.toString());
//        listAnswer.put("answers",answer);
//        return answers;
//    }

    public List<Answer> getAnswers() {
        return answers;
    }

    public void setAnswers(List<Answer> answers) {
        this.answers = answers;
    }

    public String getFactor2() {
        return factor2;
    }

    public void setFactor2(String factor2) {
        this.factor2 = factor2;
    }

    public String getFactor3() {
        return factor3;
    }

    public void setFactor3(String factor3) {
        this.factor3 = factor3;
    }

    public String getFactor4() {
        return factor4;
    }

    public void setFactor4(String factor4) {
        this.factor4 = factor4;
    }

    public String getFactor5() {
        return factor5;
    }

    public void setFactor5(String factor5) {
        this.factor5 = factor5;
    }
}
