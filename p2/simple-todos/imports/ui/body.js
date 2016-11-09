import { Template } from 'meteor/templating';
 
import './body.html';
 
Template.body.helpers({
  tasks: [
    { text: 'Задача 1' },
    { text: 'Задача 2' },
    { text: 'Задача 3' },
  ],
});