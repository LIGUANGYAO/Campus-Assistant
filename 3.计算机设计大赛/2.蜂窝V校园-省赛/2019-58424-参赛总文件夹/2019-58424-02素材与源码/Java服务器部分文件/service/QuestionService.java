package com.wss.springboot.service;

import com.wss.springboot.bean.CoursePage;
import com.wss.springboot.bean.Question;
import com.wss.springboot.bean.QuestionPage;
import com.wss.springboot.dao.QuestionMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.LinkedList;
import java.util.List;

@Service
public class QuestionService {

    @Autowired
    QuestionMapper questionMapper;

    public Question getQuestionById(Integer id){
        Question emp = questionMapper.getQuestionById(id);
        return emp;
    }

    public Question insert(Question question){
        questionMapper.insertQuestion(question);
        return question;
    }

    public Question update(Question question){
        questionMapper.updateQuestion(question);
        return question;
    }

    public void deleteQuestion(Integer id){
        questionMapper.deleteQuestionById(id);
    }

    public Question getQuestionByAuthor(String author) {
        Question emp = questionMapper.getQuestionByAuthor(author);
        return emp;
    }

    public List<Question> getQuestionsByAuthor(String author){
        List<Question> queryQuestion = new LinkedList<Question>();
        queryQuestion = questionMapper.getQuestionsByAuthor(author);
        return queryQuestion;
    }

    public List<Question> getQuestionsByOpenid(QuestionPage questionPage){
        List<Question> queryQuestion = new LinkedList<Question>();
        queryQuestion = questionMapper.getQuestionsByOpenid(questionPage);
        return queryQuestion;
    }

    public List<Question> getQuestionsByCourse(CoursePage coursePage){
        List<Question> queryQuestion = questionMapper.getQuestionsByCourse(coursePage);
        return queryQuestion;
    }

    public Question getQuestionByTopic(String topic){
        Question emp = questionMapper.getQuestionByTopic(topic);
        return emp;
    }

    //查询最后一条语句用于返回数据库大小
    public Integer getLastQuestionId(){
        Question emp = questionMapper.getLastQuestion();
        Integer lastQuestionId = emp.getId();
        return lastQuestionId;
    }

    public List<Question> getSearch(String index){
        List<Question> allquestion = questionMapper.getSearch(index);
        return allquestion;
    }

    //随机获取10条数据数据
    public List<Question> getRandom(){
        List<Question> randomquestion = questionMapper.getRandom();
        return randomquestion;
    }

}
