import { Component, OnInit } from '@angular/core';
import { Query } from '../shared/query.model';
import { OpentdbService } from '../shared/opentdb.service';
import { NgForm } from '@angular/forms';
import { Question } from '../shared/question.model';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {
  query: Query = new Query();
  questions: Question[];

  constructor(private opentdbService: OpentdbService) {
    this.query.numberOfQuests = '5';
    this.query.category = 'any';
    this.query.difficulty = 'any';
    this.query.type = 'any';
  }

  ngOnInit() { }


  fetchQuestions(f: NgForm) {
    if (f.value.category === 'any') {
      f.value.category = '';
    }
    if (f.value.difficulty === 'any') {
      f.value.difficulty = '';
    }
    if (f.value.type === 'any') {
      f.value.type = '';
    }
    this.opentdbService.getQuestions(f.value).subscribe(q => {
      this.questions = q['results'];
      this.parseText(this.questions);
      this.joinArrays(this.questions);
    });
  }


  joinArrays(q: Array<Question>) {
    const tempArr = JSON.parse(JSON.stringify(q));
    const joined = [];
    for (let i = 0; i < tempArr.length; i++) {
      joined[i] = tempArr[i].incorrect_answers;
      joined[i].push(tempArr[i].correct_answer);
    }

    for (let j = 0; j < joined.length; j++) {
      this.questions[j].pick_one = this.shuffle(joined[j]);
    }
  }


  shuffle(arr) {
    return arr.map((a) => ({ sort: Math.random(), value: a }))
      .sort((a, b) => a.sort - b.sort)
      .map((a) => a.value);
  }


  checkAnswer($event, correctAnswer) {
    const clickedButton = document.getElementById($event.target.id);
    const clickedButtonValue = $event.target.value;

    if (clickedButtonValue === correctAnswer) {
      clickedButton.classList.remove('uk-button-default');
      clickedButton.classList.add('uk-button-primary');
    } else {
      clickedButton.classList.remove('uk-button-default');
      clickedButton.classList.add('uk-button-danger');
    }
  }


  setId(i, j) {
    return i.toString() + '-' + j.toString();
  }


  parseText(arr) {
    for (let i = 0; i < arr.length; i++) {
      arr[i].question = this.decodeHtml(arr[i].question);
      arr[i].correct_answer = this.decodeHtml(arr[i].correct_answer);

      for (let j = 0; j < arr[i].incorrect_answers.length; j++) {
        arr[i].incorrect_answers[j] = this.decodeHtml(arr[i].incorrect_answers[j]);
      }
    }
  }


  decodeHtml(html) {
    const txt = document.createElement('textarea');
    txt.innerHTML = html;
    return txt.value;
  }
}
